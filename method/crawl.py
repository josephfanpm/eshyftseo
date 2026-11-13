import sys, json, time, hashlib, os, concurrent.futures as cf, urllib.request, urllib.error, ssl
base = sys.argv[1]
urls = [u.strip() for u in open(os.path.join(base,'urls.txt')) if u.strip()]
os.makedirs(os.path.join(base,'html'), exist_ok=True)
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36"
class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *a, **k): return None
opener = urllib.request.build_opener(NoRedirect)
def fetch(u):
    t=time.time()
    try:
        r = opener.open(urllib.request.Request(u, headers={"User-Agent":UA}), timeout=30)
        code, hdrs, body = r.status, dict(r.headers), r.read()
    except urllib.error.HTTPError as e:
        code, hdrs, body = e.code, dict(e.headers), e.read() if e.fp else b""
    except Exception as e:
        return {"url":u,"error":str(e)}
    ms = int((time.time()-t)*1000)
    h = hashlib.md5(u.encode()).hexdigest()
    open(os.path.join(base,'html',h+'.html'),'wb').write(body)
    time.sleep(0.3)
    return {"url":u,"status":code,"ms":ms,"bytes":len(body),"file":h+'.html',"location":hdrs.get("Location"),
            "x_robots":hdrs.get("X-Robots-Tag"),"link":hdrs.get("Link"),"cache":hdrs.get("Cache-Control"),"enc":hdrs.get("Content-Encoding")}
with cf.ThreadPoolExecutor(4) as ex: res = list(ex.map(fetch, urls))
json.dump(res, open(os.path.join(base,'crawl.json'),'w'), indent=1)
from collections import Counter
print(Counter(r.get("status","ERR") for r in res))
