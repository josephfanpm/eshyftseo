import sys, json, urllib.request, urllib.error, time, concurrent.futures as cf
UA="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/130.0 Safari/537.36"
class NR(urllib.request.HTTPRedirectHandler):
    def redirect_request(self,*a,**k): return None
op=urllib.request.build_opener(NR)
def st(u):
    try: r=op.open(urllib.request.Request(u,headers={"User-Agent":UA},method="GET"),timeout=30); c,l=r.status,None; r.read(2000)
    except urllib.error.HTTPError as e: c,l=e.code,e.headers.get("Location")
    except Exception as e: c,l="ERR",str(e)
    time.sleep(0.3); return (c,u,l)
urls=[l.strip() for l in open(sys.argv[1],encoding='utf-8') if l.strip()]
with cf.ThreadPoolExecutor(4) as ex: res=list(ex.map(st,urls))
json.dump(res,open(sys.argv[2],'w'),indent=0)
for c,u,l in res:
    if c!=200: print(c,u,'->',l)
