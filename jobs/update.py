#!/usr/bin/python2.7


from __future__ import print_function
import requests
import json
from time import sleep


def update(id, year):
    '''
    Query the NOAA NCDC Web Service for one year's precipitation data at a 
    given FIPS location and store the result in a dot-json file.
    '''

    url = 'http://www.ncdc.noaa.gov/cdo-web/api/v2/data'
    parameters = {
      'datasetid':  'GHCND',                        # GHCND is "Daily Summaries"
      'datatypeid': 'PRCP',                         # PRCP is "precipitation"
      'limit':      900,                            # arbitrary large number
      'startdate':  str(year) + '-01-01',           # must be format YYYY-MM-DD
      'enddate':    str(year) + '-12-01',           # must be format YYYY-MM-DD
      'locationid': 'FIPS:' + str(id).zfill(2),     # comma-separated list of FIPS, ZIP, etc.
    }
    headers = { 
      'Accept': 'application/json',
      'token': 'kjslmSNkMbvnPHEMUqxlAiKcBlpERRzr'   # pakt@rpi.edu API token
    }
    print("Updating FIPS:" + str(id).zfill(2) + " (" + str(year) + ")... ")
    try:
        resp = requests.get(url, params=parameters, headers=headers)
        # print(resp.text)
        with open('app/assets/prcp/' + str(year) + '-fips' + str(id).zfill(2) + '.json', 'w') as outfile:
            json.dump(resp.json(), outfile)
            print("saved")
    except ValueError:
        print("uh oh")
        print(ValueError)
    return


if __name__ == "__main__":
    fipsList = [53, 30, 16, 38, 27, 23, 26, 55, 41, 46, 33, 50, 36, 56, 19, 31, 25, 17, 42, 9, 44, 6, 49, 32, 39, 18, 34, 8, 54, 29, 20, 10, 24, 51, 21, 11, 4, 40, 35, 47, 37, 48, 5, 45, 1, 13, 28, 22, 12, 15, 2, 72, 78]
    fipsList.sort()
    for year in xrange(2011, 2014):
        for id in fipsList:
            update(id, year)
