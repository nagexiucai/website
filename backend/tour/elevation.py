#!/usr/bin/env python
#coding=utf-8

import requests
import json
import sqlite3
import time

K = 2000 # URL长度
L = 0.1 # 防止过快拒绝
M = 50 # 一次请求的点数
N = 3 # 累计错误容忍量

db = sqlite3.connect("./data.db")
cursor = db.cursor()
cursor.execute("CREATE TABLE MOUNTHUA(latitude TEXT, longitude TEXT, elevation TEXT);")
db.commit()

url = "http://maps.googleapis.com/maps/api/elevation/json"
proxies = {"http": "127.0.0.1:8087"}

north = 34543466
south = 34438462
east = 110115926
west = 110023532
step = 1
scale = 1000000.0 # 防止还原时丢失小数部分

def fetch():
    def dotgen():
        for latitude in xrange(south, north, step):
            for longitude in xrange(west, east, step):
                yield latitude/scale, longitude/scale
    limit = M
    tries = N
    positions = []
    with open(".\data.js", "w") as log:
        print >> log, time.ctime()
        for position in dotgen():
            if not tries:
                break
            positions.append("%s,%s" % position)
            if len(positions) % limit == 0:
                locations = "|".join(positions)
                length = len(locations)
                assert length < K
                params = {"locations": locations}
                response = requests.get(url, params=params, proxies=proxies)
                time.sleep(L)
                data = response.json()
                print >> log, "//", response.url
                print >> log, "// var data =", json.dumps(data)
                status = data.get("status")
                results = data.get("results")
                if status == "OK" and results:
                    for result in results:
                        location = result.get("location")
                        cursor.execute("INSERT INTO MOUNTHUA VALUES('%s', '%s', '%s')" % (location.get("lat"), location.get("lng"), result.get("elevation")))
                    db.commit()
                else:
                    print >> log, status
                    tries = tries - 1
                positions[:] = []
        print >> log, time.ctime()

try:
    fetch()
finally:
    cursor.close()
    db.close()