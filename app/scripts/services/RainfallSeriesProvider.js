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
    return $resource('../assets/prcp/:year-fips:id.json', {},
    {
      get: {
        method: 'GET',
        isArray: true,
        transformResponse: function (data) {
          var accumulation = 0;
          var lastDay = 0;
          var handle = angular.fromJson(data).results;
          // console.log(handle);
          return _.map(handle, function (item) {
            if(lastDay === 0) {
              item.date = lastDay;
            } else if(lastDay == item.date) {
              console.log('skip ' + item.date);
              return;
            } else {
              lastDay = item.date;
            }
            return accumulation += item.value;
          });
          // return _.pluck(angular.fromJson(data).results, 'date');
        }
      }
    });
  }
]);
