#!/usr/bin/env python

import requests
import json

url = "http://maps.googleapis.com/maps/api/elevation/json"
proxies = {"http": "127.0.0.1:8087"}

north = 34543466
south = 34438462
east = 110115926
west = 110023532
step = 1
scale = 1000000.0

def dotgen():
    for latitude in xrange(south, north, step):
        for longitude in xrange(west, east, step):
            yield latitude/scale, longitude/scale

positions = []
for position in dotgen():
    print position
    positions.append("%s,%s" % position)
    if len(positions) == 50:
        break;

locations = "|".join(positions)
length = len(locations)
print length
if length > 2000:
    print "too long"

params = {"locations": locations}

response = requests.get(url, params=params, proxies=proxies)
with open(".\url.txt", "w") as log:
    print >> log, response.url
print dir(response)
print response.json
