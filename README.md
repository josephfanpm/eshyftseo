# SEO Case Study: eshyft.com

An independent audit of the public marketing site and blog of ESHYFT, a per diem nurse staffing app for long-term care. I crawled every URL in the sitemap (325), ran two open-source SEO engines against the crawl, then turned about 1,000 raw findings into a short, ranked plan.

**Date:** November 2026 · **Scope:** public pages only, no internal analytics or Search Console data · **Tools:** [Claude SEO](https://github.com/AgriciDaniel/claude-seo), [OpenSEO](https://github.com/every-app/open-seo), Lighthouse 12

---

## TL;DR

The site has good foundations: Yoast is set up correctly, every page has valid structured data, AI crawlers can read everything, and there is a large library of 166 articles. But Google mostly sends people who already know the name, and the site's problems are about upkeep, not the platform:

1. **Search brings in people who already know ESHYFT, not new nurses.** About 84% of the site's estimated 5,200 monthly Google visits come from searches for "eshyft" itself (the login, the phone number). Meanwhile, nurses search for jobs in huge numbers ("CNA jobs near me" alone gets 135,000 searches a month in the US), and ESHYFT isn't on Google's first page for any of these job searches. See [What people search for](#what-people-search-for-and-where-eshyft-shows-up).
2. **The money pages don't describe themselves.** The homepage `<title>` is "Home - ESHYFT", and the homepage, `/nurses/` and `/facilities/` all have no meta description. `/nurses/` has no H1. These pages carry both of the site's audiences.
3. **The index is full of pages that shouldn't be there.** 25 sitemap pages have no internal links pointing to them. They include test copies (`/nurses-2/`, `/facilities-v2/`, `/schedule-a-demo-test/`), post-conversion pages (`/thank-you-for-requesting-a-demo/`, `/already_applied/`) and utility forms (`/unsubscribe/`, `/missed-timecard-punch-form/`). There are also 100 thin tag archives.
4. **Mobile performance is the biggest technical gap.** Lighthouse mobile performance scores 43–49. Largest Contentful Paint (LCP) is 7.6–24.6 s, about 4 MB per page, and the LCP image is lazy-loaded on the homepage and on articles.
5. **The content engine has stalled, and some content is out of date.** 62 posts were published in 2024, 42 in 2025, and only 4 so far in 2026. One post still describes the federal nursing home staffing minimums as "coming soon", although CMS [repealed them](https://leadingage.org/cms-repeals-nursing-home-minimum-staffing-standards/) in December 2025.

Most of the highest-impact fixes are settings in Yoast or WordPress, not engineering projects. See the [roadmap](#prioritized-roadmap).

---

## Why this matters for this business

ESHYFT is a two-sided marketplace. Search has to bring in two very different audiences:

| Audience | What they search | Landing pages | Conversion |
|---|---|---|---|
| Nurses (CNA, LPN, RN) | "per diem CNA jobs near me", "LPN vs RN", "how to get a nursing license" | `/nurses/`, blog, state pages | App install / apply |
| Facility managers | "nursing home staffing agency", "fill open shifts", "staffing regulations" | `/facilities/`, `/schedule-a-demo/`, facility blog | Demo request |

The blog already targets both groups, with 166 articles under "For Nurses" and "For Facility Managers". But the search data below shows the two audiences are very different in size: nurses search Google in large numbers, while facility managers barely search at all.

---

## What people search for, and where ESHYFT shows up

*Data: DataForSEO estimates for the US, November 2026. "Monthly searches" is the average number of times a phrase is typed into Google each month. "Estimated visits" is DataForSEO's model of clicks, based on where a page ranks and how many people search. These are estimates, not ESHYFT's own analytics.*

### Where ESHYFT shows up today

eshyft.com appears in Google results for about **1,480 different searches**, bringing an estimated **5,200 visits a month**. It's in the top 3 results for 59 of those searches and on page 1 (top 10) for 113.

| Where the visits come from | Share of estimated visits |
|---|---|
| People searching for "eshyft" by name (login, phone number, address, "eshyft app") | **~84%** |
| People looking for a different company with a similar name (Fingercheck, ShiftMed, OnShift) | ~7% |
| General nursing topics | ~8% |

Most of the general-topic visits come from one post, "What does RN stand for?", which ranks in the top 3 for that question. The readers are mostly people curious about the abbreviation, not nurses looking for shifts. In short, **Google helps people who already know ESHYFT find the login page, but it isn't bringing in new nurses.**

### What nurses search for

| Search | Monthly searches (US) | ESHYFT on Google's first page? |
|---|---|---|
| CNA jobs near me | 135,000 | No |
| LPN jobs near me | 74,000 | No |
| PRN nursing jobs | 22,200 | No |
| How to become a CNA | 14,800 | No |
| Per diem RN jobs | 12,100 | No |
| Nursing license renewal | 12,100 | No (around position 70 for "RN license renewal") |
| Same day pay jobs | 9,900 | No |
| Per diem nursing jobs | 8,100 | No |
| PRN jobs near me | 8,100 | No |
| PRN CNA jobs | 5,400 | No |
| LVN vs RN | 4,400 | No (page 3, position 29) |
| Per diem CNA jobs | 2,900 | No |
| CNA vs LPN | 2,900 | No |
| Per diem LPN jobs | 880 | No |
| CNA shift app | 320 | No |

"PRN" and "per diem" both mean picking up shifts as needed, which is exactly what ESHYFT offers. Tens of thousands of nurses search for this work every month. ESHYFT isn't on the first page for any of these searches, and for the larger ones (about 2,900 searches a month and up) it isn't in the top 100 results at all.

### What facility managers search for

| Search | Monthly searches (US) |
|---|---|
| CNA staffing agency | 2,900 |
| Nurse staffing agency | 1,300 |
| Nurse to patient ratio | 1,000 |
| Nursing home staffing ratios | 90 |
| Nurse staffing app | 70 |
| Healthcare staffing app | 70 |
| Nursing home staffing agency | 50 |
| Per diem nurse staffing | 50 |

Facility searches are small. Administrators find staffing partners through sales, referrals and conferences more than through Google. **For ESHYFT, Google is mainly a channel for reaching nurses.** Facility content still matters as proof for buyers who are already talking to sales, but it shouldn't be where most SEO effort goes.

### How well-known ESHYFT is compared to competitors

Monthly US searches for each company's name:

| Company | Monthly name searches |
|---|---|
| ShiftKey | 49,500 |
| Clipboard Health | 14,800 |
| IntelyCare | 9,900 |
| Nursa | 9,900 |
| ShiftMed | 5,400 |
| **ESHYFT** | **3,600** |
| CareRev | 1,900 |
| connectRN | 1,600 |

ESHYFT is searched for less than most of its direct competitors. Part of that is brand awareness, which SEO alone won't fix. But because people searching by name are the site's main source of Google visits, better SEO on job searches would help both: nurses who find ESHYFT through "per diem CNA jobs" are the ones who later search for it by name.

### What this changes

The biggest opportunity is **pages that match how nurses search for work**: "per diem CNA jobs in [state or city]", "PRN LPN jobs in [city]". These searches are local ("near me", a state or city), so they reward pages built for each location. ESHYFT has a few state pages already (Illinois, Pennsylvania, Tennessee, Maryland), but none are built around these searches. That's why the state and city job pages move up to #5 in the [roadmap](#prioritized-roadmap).

Still to add: **whether AI assistants like ChatGPT and Perplexity mention ESHYFT** when someone asks for per diem nursing apps, and **which sites take the top spots** for the job searches above. Both need search-results data I couldn't pull this round.

Raw data: [`data/search-demand.csv`](data/search-demand.csv), [`data/google-rankings-eshyft.csv`](data/google-rankings-eshyft.csv).

---

## Method

```
sitemap_index.xml ──► 6 child sitemaps ──► 325 URLs ──► polite crawl (4 workers, raw HTML + headers + timing)
                                                         │
             ┌───────────────────────────────────────────┼───────────────────────────────────┐
             ▼                                           ▼                                   ▼
   OpenSEO audit engine                        Claude SEO scripts                       Lighthouse 12
   (analyzeHtml, page reporters,               page_checks (47 checks), parse_html,      mobile, 4 key templates
    duplicate + redirect checks,               agentic_check, transport_check,
    plus link graph for orphans/depth)         sitemap_discovery, content_quality
             └───────────────────────────────────────────┼───────────────────────────────────┘
                                                         ▼
                                  Triage by page type ► impact × effort ► roadmap
```

- **OpenSEO** is a self-hosted tool that runs its site audit as a Cloudflare Workflow. I took its pure-TypeScript audit engine (`src/server/lib/audit`) and ran it on my own crawl through a small harness ([`method/openseo-harness/run.ts`](method/openseo-harness/run.ts)). That way the issue rules are exactly OpenSEO's, without deploying the full app.
- **Claude SEO** is a Claude Code plugin. I ran its deterministic Python checkers on representative templates: homepage, nurse landing page, facility landing page, an article, a tag archive and a date archive. I also ran its site-level checkers for TLS, security headers, AI-crawler access and sitemap health, plus its content-quality scorer on a sample of 8 articles.
- **Lighthouse** gave lab performance scores. The PageSpeed Insights API was over quota, so I ran Lighthouse locally with mobile emulation.

- **DataForSEO** is the paid data service that OpenSEO and Claude SEO both use for search data. I used it for monthly search counts and for the searches eshyft.com currently ranks for. The whole pull cost under $0.10.

**Not in scope:** backlinks (other sites linking to ESHYFT), and ESHYFT's own Google Search Console data, which is internal. With Search Console access, the next step would be to rank the fixes below by real clicks.

All raw output is in [`data/`](data/).

---

## Scorecard

| Area | Grade | Summary |
|---|---|---|
| Crawlability and HTTPS | **A-** | One host, HTTPS, valid sitemaps, robots.txt allows all, server-rendered HTML. The `http://www` URL takes 2 hops to reach the final address. |
| Structured data | **B** | Valid Yoast JSON-LD on 325 of 325 pages. No `JobPosting`, `MobileApplication` or `FAQPage` markup. Organization `sameAs` lists only Facebook and Instagram. |
| On-page metadata | **D** | Weak homepage title. 157 of 325 pages have no meta description, including the 3 most important pages. 87 titles are over 60 characters. |
| Index hygiene | **D** | Test and duplicate pages, thank-you pages, utility forms, 100 tag archives and 6 menu-builder URLs are all in the sitemap. |
| Internal linking | **C** | 111 sitemap URLs have no internal links pointing to them. 6 article links return 404. Sitewide links point to author pages that redirect to the homepage. |
| Content and E-E-A-T | **C+** | A large, mostly solid library (quality scores 68–83 of 100), but output has collapsed in 2026, one post is out of date, and authors are first-name-only with no author pages. |
| Performance (mobile) | **D** | Performance 43–49, LCP 7.6–24.6 s, Total Blocking Time (TBT) 600–710 ms, 3.9–5.3 MB per page. CLS is fine. |
| AI search readiness | **B** | All AI crawlers are allowed and content is server-rendered. There is no `llms.txt`, and entity data is thin. |

---

## Findings

### 1. The highest-traffic pages have the weakest metadata

| Page | `<title>` | Meta description | H1 |
|---|---|---|---|
| `/` | Home - ESHYFT (13 chars) | none | 2 (the same text twice, from desktop and mobile layout variants) |
| `/nurses/` | Nurses - ESHYFT (15) | none | **none** |
| `/facilities/` | Facilities - ESHYFT (19) | none | 1 |

The homepage title spends its space on the word "Home" instead of the category. Without a meta description, Google writes its own snippet from on-page text, which is often a nav label or button text. The homepage `og:image` and the Organization logo also use `http://` URLs.

Pages with no H1 (OpenSEO): `/nurses/`, `/faq/`, `/contact/`, `/careers/`, `/blog/`, `/refer-a-facility/`, `/roi-calculator/` and 4 more. All are built in Elementor, where headings are often styled text instead of real heading elements.

On the blog, the post template adds a "Blog" H1 above the article title. As a result, **all 153 posts with a title H1 have two H1s.** 85 post titles are over 60 characters (median 61.5), because Yoast appends " - ESHYFT" to titles that are already long. 7 posts share the same meta description.

### 2. Index hygiene: pages Google shouldn't spend time on

Of the 325 URLs in the sitemap:

| Group | Count | Problem |
|---|---|---|
| Tag archives `/tag/*` | 100 | Indexable, no meta description, no unique content (lists of post excerpts), 85 with no internal links |
| Test and duplicate pages | 7 | `/nurses-2/`, `/nurses-demo/`, `/facilities-4/`, `/facilities-v2/`, `/schedule-a-demo-test/`, plus `/refer/` ≡ `/nurses-form/` (identical body content) |
| Post-conversion and utility pages | 7 | `/thank-you-for-requesting-a-demo/`, `/already_applied/`, `/out-of-geographic-area/`, `/unsubscribe/`, `/missed-timecard-punch-form/`, `/same-day-pay-request/`, `/license-request-form/` |
| Job postings `/careers/*` | 9 | No internal links pointing to them and no `JobPosting` schema, so they can't appear in Google's job search experience |
| Jet Menu items | 6 | Menu-builder posts that 302-redirect to the homepage |
| Testimonials | 8 | Thin custom-post-type pages with no meta description and no image |

Duplicate article pairs (OpenSEO duplicate-title check): `/temporary-nurses-in-staffing-shortages/` vs `/role-of-temporary-nurses-in-staffing-shortages/`, and `/how-long-can-a-travel-nurse-stay-in-one-place/` vs `…-2/`. Two other posts also end in `-2` slugs, which suggests the same thing happened when they were republished.

Already handled well: date archives are `noindex`, and author archives 301-redirect.

### 3. Internal linking

- **6 broken links** in articles, for example `/nurse-to-patient-ratios/` → `/nurse-staffing-policy` (404). The full list is in [`data/`](data/). Another 6 links leave off the trailing slash and go through a 301 redirect.
- **Every page** links to `/tos.html` and `/pp.html`. These are bare HTML files outside WordPress, not in the sitemap, and have no canonical tag. The Terms PDFs from 2019 are still linked from some pages.
- **124 posts** link to author archives, and all of those redirect to the homepage. That passes no topical signal and gives readers a dead end.
- OpenSEO's crawl-depth pass found that **125 of 325 sitemap URLs can't be reached from the homepage** by following links. For tag pages that's acceptable. For job postings and `/license-request-form/`, the page should either be linked or removed from the index.

### 4. Content: strong library, slowing output, one regulatory miss

| Year | Posts published |
|---|---|
| 2023 | 54 |
| 2024 | 62 |
| 2025 | 42 |
| 2026 (through Nov) | 4 |

- **Quality is solid.** Claude SEO's content scorer, which follows Google's Quality Rater Guidelines, rated a sample of 8 articles 68–83 of 100. Filler scores were low (0–12). The longer guides showed more repetition, the kind that comes from padding to a word count.
- **Accuracy problem:** [`/increased-staffing-levels-coming-soon-to-long-term-care-industry/`](https://eshyft.com/increased-staffing-levels-coming-soon-to-long-term-care-industry/) still presents the CMS minimums (3.48 total nurse staffing hours per resident day, 24/7 RN) as upcoming requirements. CMS rescinded them by interim final rule in December 2025. For a site that sells staffing to facility administrators, out-of-date regulatory guidance hurts trust, and Google's quality guidelines weight accuracy heavily on health-adjacent topics.
- **Thin E-E-A-T signals.** Articles are credited to 6 bylines, several first-name-only, and none has an author page, credentials or a reviewer. Nursing licensure, pay and scope-of-practice content would benefit from a named clinical reviewer (RN or LPN) and a "Reviewed by" line.
- **Untapped format:** there are already state pages (`/facilities-in-illinois/`, `/facilities-in-pennsylvania/`, `/facilities-in-tennessee/`, `/cna-gna-differences-maryland/`). A consistent template of state × role pages ("per diem CNA jobs in {state}") fits the "near me" intent nurses search with.

### 5. Mobile performance

Lighthouse 12, mobile emulation:

| Page | Perf | SEO | A11y | LCP | TBT | CLS | Weight |
|---|---|---|---|---|---|---|---|
| `/` | 45 | 92 | 91 | 24.6 s | 602 ms | 0.002 | 3.9 MB |
| `/nurses/` | 49 | 92 | 91 | 7.6 s | 617 ms | 0.028 | 4.3 MB |
| `/facilities/` | 46 | 92 | 92 | 22.1 s | 710 ms | 0.023 | 4.1 MB |
| article | 43 | 100 | 86 | 10.5 s | 704 ms | 0 | 5.3 MB |

These are lab numbers on simulated slow 4G, so they're worse than real-user field data. Even so, they point to clear causes:

- **The LCP image is lazy-loaded** on the homepage and on article featured images (`loading="lazy"` on the largest element above the fold). Removing lazy-load for the first image is the cheapest LCP fix available.
- **1.1–1.4 MB of unused JavaScript** per page. Third-party main-thread time comes from Google Tag Manager (~260–340 ms), HubSpot (~140 ms), Intercom (~100 ms), Facebook (~100 ms) and TikTok (~60–90 ms).
- **Images are PNG/JPG**, with 110–770 KB of potential savings per page from WebP/AVIF. 30 of 79 homepage images have no width/height attributes.
- **Server response is about 1 s** (crawl average 1,050 ms; Lighthouse "root document took 950 ms"). Full-page caching or a CDN in front of nginx would help every page.

### 6. Structured data and AI search

- Yoast outputs a valid `WebSite` + `Organization` + `WebPage`/`Article` + `BreadcrumbList` graph on every page, with zero parse errors.
- Gaps: no `MobileApplication` schema for the iOS and Android apps (the main product), no `JobPosting` on 9 open roles, and `Organization.sameAs` doesn't include LinkedIn or the app store listings. The `WebSite` description is a short legacy tagline ("flexible shifts for hard working nurses") that doesn't mention facilities.
- AI readiness (Claude SEO `agentic_check`): robots.txt allows GPTBot, ClaudeBot, PerplexityBot and others, and content is server-rendered (passes). There is no `/llms.txt`. Adding one is low effort but a weak signal. Clean entity data (the bullets above) matters more for being cited in AI answers.
- Security headers (`transport_check`): no HSTS, CSP or `X-Content-Type-Options`. These are not ranking factors, but they're easy to add at the nginx layer.

---

## Prioritized roadmap

Ranked by expected impact relative to effort. "Owner" is the type of skill needed, not a person.

| # | Fix | Impact | Effort | Owner |
|---|---|---|---|---|
| 1 | Rewrite title and meta description for `/`, `/nurses/`, `/facilities/`, `/schedule-a-demo/`. Add a real H1 to `/nurses/`. Change `og:image` and logo URLs to https. | High | XS | Marketing (Yoast) |
| 2 | Set tag archives, testimonials and Jet Menu to `noindex` and remove them from the sitemap (Yoast → Search Appearance). | High | XS | Marketing (Yoast) |
| 3 | `noindex` or delete the test, duplicate, thank-you and utility pages listed above. 301-redirect the duplicate posts to the stronger version. | High | S | Marketing |
| 4 | Remove `loading="lazy"` from the first and hero image on templates, and add `fetchpriority="high"`. | High | S | Web dev |
| 5 | **State and city job pages for nurses**, built around how nurses search ("per diem CNA jobs in [state]", "PRN LPN jobs in [city]"), with real local details: licensing rules, typical pay by role, cities served. Link them from `/nurses/`. | **Highest (long-term)** | M–L | Content + PM + Web dev |
| 6 | Update or redirect the out-of-date CMS staffing post. Add a "last reviewed" date and a clinical reviewer to regulatory and licensing posts. | High (trust) | S | Content |
| 7 | Fix the 6 broken links and the 6 links missing a trailing slash. Move `/tos.html` and `/pp.html` into WordPress or canonicalize them. | Medium | XS | Marketing |
| 8 | Remove the "Blog" H1 from the post template. Shorten 85 long titles by dropping the " - ESHYFT" suffix on posts. | Medium | XS | Web dev |
| 9 | Delay or consent-gate the tracking pixels (TikTok, Facebook, Clarity), load Intercom on interaction, convert images to WebP, and add page caching or a CDN. | High | M | Web dev |
| 10 | Add `MobileApplication` and `JobPosting` schema, extend `Organization.sameAs`, and link the careers pages from `/careers/`. | Medium | S | Web dev |
| 11 | Real author pages with credentials and a named RN reviewer. | High (long-term) | M | Content |
| 12 | Restart a steady publishing pace: about 4 posts a month, weighted toward nurses (where the search demand is), planned from Search Console query data. | High (long-term) | Ongoing | Content |

Items 1–3, 7 and 8 together are probably **under one day of work**, and they cover most of the on-page and index-hygiene findings. Item 5 is the biggest growth lever: it's the only fix aimed at the six-figure monthly searches nurses make for jobs.

---

## How I'd measure it

| Metric | Source | Why |
|---|---|---|
| Indexed pages vs. submitted (target: about 200 useful URLs instead of 325) | Search Console → Pages | Shows the cleanup worked |
| CTR on the homepage and landing pages for branded and category queries | Search Console → Performance | Effect of the new titles and descriptions |
| Field LCP and INP at the 75th percentile, mobile | CrUX / Search Console → Core Web Vitals | Real-user performance, not lab numbers |
| Organic sessions → app installs (nurses) and demo requests (facilities) | GA4 + attribution links | Ties SEO to the two-sided funnel |
| Non-branded clicks to blog and state pages | Search Console, filtered by page group | Shows whether the content engine works |

---

## Reproduce it

```bash
# 1. Crawl the sitemap (writes crawl.json + html/)
python method/crawl.py <workdir>            # urls.txt in <workdir>

# 2. Run OpenSEO's audit engine on the crawl
git clone https://github.com/every-app/open-seo
cp -r open-seo/src/server/lib/audit method/openseo-harness/src/server/lib/
cp -r open-seo/src/shared          method/openseo-harness/src/
cd method/openseo-harness && npm i htmlparser2@10 tsx@4
npx tsx --tsconfig tsconfig.json run.ts <workdir>

# 3. Claude SEO checks
git clone https://github.com/AgriciDaniel/claude-seo
python claude-seo/scripts/page_checks.py --url https://eshyft.com/
python claude-seo/scripts/agentic_check.py https://eshyft.com --json
python claude-seo/scripts/transport_check.py https://eshyft.com

# 4. Search demand and rankings (DataForSEO, pay as you go)
#    POST /v3/dataforseo_labs/google/ranked_keywords/live   {"target":"eshyft.com","location_code":2840}
#    POST /v3/dataforseo_labs/google/keyword_overview/live  {"keywords":[...],"location_code":2840}

# 5. Lighthouse
npx lighthouse https://eshyft.com/ --form-factor=mobile --output=json
```

---

*Independent analysis of publicly available pages only. No internal data, analytics or confidential information was used. Findings reflect the site as crawled on November 12, 2026.*
