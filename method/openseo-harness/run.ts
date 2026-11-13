import { readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { analyzeHtml } from "@/server/lib/audit/page-analyzer";
import { normalizeUrl } from "@/server/lib/audit/url-utils";
import { runPageReporters } from "@/server/lib/audit/issues/page-reporters";
import { findDuplicates, findRedirectChainsAndLoops } from "@/server/lib/audit/issues/multipage-checks";

const dir = process.argv[2];
const crawl = JSON.parse(readFileSync(`${dir}/crawl.json`, "utf8"));
const pages: any[] = [];
for (const c of crawl) {
  if (c.error) continue;
  const html = readFileSync(`${dir}/html/${c.file}`, "utf8");
  const isRedirect = c.status >= 300 && c.status < 400;
  const a = analyzeHtml(isRedirect ? "" : html, c.url, c.status, c.ms, c.location ?? null);
  const xr = c.x_robots ?? null;
  const robots = [a.robotsMeta, xr].filter(Boolean).join(",").toLowerCase();
  const hc = (l: number) => a.headingOrder.filter((h) => h === l).length;
  pages.push({
    id: c.url, url: c.url, statusCode: c.status, fetchClass: "ok",
    redirectUrl: isRedirect ? normalizeUrl(c.location, c.url) ?? c.location : null,
    title: a.title, metaDescription: a.metaDescription,
    canonicalUrl: a.canonical ? normalizeUrl(a.canonical, c.url, { keepTrackingParams: true }) ?? a.canonical : null,
    robotsMeta: a.robotsMeta, xRobotsTag: xr, headerCanonicalUrl: null,
    ogTitle: a.ogTitle, ogDescription: a.ogDescription, ogImage: a.ogImage,
    h1Count: a.h1s.filter((h) => h.length > 0).length, h1s: a.h1s,
    h2Count: hc(2), h3Count: hc(3), h4Count: hc(4), h5Count: hc(5), h6Count: hc(6),
    headingOrder: a.headingOrder, wordCount: a.wordCount,
    contentHash: a.bodyText && !a.javascriptShell ? createHash("sha256").update(a.bodyText).digest("hex") : null,
    isHtml: !isRedirect, javascriptShell: a.javascriptShell, htmlBytes: c.bytes, rateLimited: false,
    imagesTotal: a.images.length, imagesMissingAlt: a.images.filter((i) => i.alt === null).length,
    images: a.images, links: a.links, hasStructuredData: a.hasStructuredData, hreflangTags: a.hreflangTags,
    isIndexable: !robots.includes("noindex"), responseTimeMs: c.ms, crawlDepth: null, inSitemap: true,
  });
}
// crawl depth via BFS from homepage over internal links (approximates OpenSEO's link-following crawl)
const byUrl = new Map(pages.map((p) => [p.url, p]));
const home = pages.find((p) => p.url === "https://eshyft.com/" );
const q: [string, number][] = [[home.url, 0]]; const seen = new Set([home.url]);
const inlinks = new Map<string, number>();
const internalTargets = new Map<string, string[]>();
for (const p of pages) for (const l of p.links) if (l.isInternal) {
  inlinks.set(l.targetUrl, (inlinks.get(l.targetUrl) ?? 0) + (l.targetUrl === p.url ? 0 : 1));
  if (!internalTargets.has(l.targetUrl)) internalTargets.set(l.targetUrl, []);
  internalTargets.get(l.targetUrl)!.push(p.url);
}
while (q.length) { const [u, d] = q.shift()!; const p = byUrl.get(u); if (p) p.crawlDepth = d; if (!p) continue;
  for (const l of p.links) if (l.isInternal && !seen.has(l.targetUrl)) { seen.add(l.targetUrl); q.push([l.targetUrl, d + 1]); } }
const issues = pages.flatMap((p) => runPageReporters(p));
issues.push(...findDuplicates(pages), ...findRedirectChainsAndLoops(pages));
for (const p of pages) if (p.statusCode === 200 && p.url !== home.url && !(inlinks.get(p.url) > 0))
  issues.push({ issueType: "orphan-page" as any, pageId: p.url, pageUrl: p.url });
const notInSitemap = [...internalTargets.keys()].filter((u) => !byUrl.has(u));
writeFileSync(`${dir}/openseo-pages.json`, JSON.stringify(pages.map(({ links, images, ...r }) => ({ ...r, internalLinks: links.filter((l: any) => l.isInternal).length, externalLinks: links.filter((l: any) => !l.isInternal).length, inlinks: inlinks.get(r.url) ?? 0 })), null, 1));
writeFileSync(`${dir}/openseo-issues.json`, JSON.stringify(issues, null, 1));
writeFileSync(`${dir}/linked-not-in-sitemap.json`, JSON.stringify(notInSitemap.map((u) => ({ url: u, linkedFrom: internalTargets.get(u)!.length, sample: internalTargets.get(u)!.slice(0, 2) })), null, 1));
const counts: Record<string, number> = {}; for (const i of issues) counts[i.issueType] = (counts[i.issueType] ?? 0) + 1;
console.log(Object.entries(counts).sort((a, b) => b[1] - a[1]));
console.log("pages", pages.length, "linked-not-in-sitemap", notInSitemap.length, "unreached from home", pages.filter(p=>p.crawlDepth===null).length);
