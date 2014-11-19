'use strict';


// helper for reformatting the NOAA API response into a form we can pass to D3
var reformatNormalsResponse = function (data, headers) {
  
  // debug
  console.log(data);

  // Adapter
  var formattedData = [];
  var count = 0;
  angular.forEach(data, function(value, key) {
    console.log('data point:', key, value);
    formattedData.push({
      x: Date.parse(value.date),
      y: count += value.value
    });
  });
  console.log(formattedData);

  return formattedData;
};


/**
 * The NOAA NCDC API has all kinds of hidden limitations, notably:
 *   - startdate to enddate can't span more than 1 year
 *   - some datasetid values are empty or have sparse coverage
 */
app.factory('RainfallSeriesProvider', ['$resource', 
  function($resource) {

    // Important part
    return $resource('http://www.ncdc.noaa.gov/cdo-web/api/v2/data', {},
    {
      get: {
        method: 'GET',
        isArray: true,
        headers: { 
          'Accept': 'application/json',
          'token': 'kjslmSNkMbvnPHEMUqxlAiKcBlpERRzr'
        },
        // transformResponse: reformatNormalsResponse,
        transformResponse: function (data) {
          var accumulation = 0;
          var handle = angular.fromJson(data).results;
          console.log(handle);
          return _.map(handle, function (item) {
            return {'x': Date.parse(item.date), 'y': accumulation += item.value};
          });
          // return _.pluck(angular.fromJson(data).results, 'date');
        },
        params: {
          // Options for the NOAA NCDC API
          'datasetid':  'GHCND',            // GHCND is "Daily Summaries"
          'datatypeid': 'PRCP',             // PRCP is "precipitation"
          'limit':      800                 // arbitrary large number
          // 'startdate':  '2014-01-01',  // must be format YYYY-MM-DD
          // 'enddate':    '2014-12-01',  // must be format YYYY-MM-DD
          // 'locationid': 'ZIP:12180'    ,   // select by ZIP, station id, etc
        }
      }
    });
  }
]);
