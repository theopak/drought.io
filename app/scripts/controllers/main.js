'use strict';

/**
 * @ngdoc function
 * @name droughtioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the droughtioApp
 */
angular.module('droughtioApp')
  .controller('MainCtrl', function ($scope, $http) {

    $scope.chartOptions = {
       renderer: 'area'
    };
    $scope.chartFeatures = {
      hover: {
        xFormatter: function(x) {
          return 't=' + x;
        },
        yFormatter: function(y) {
          return '$' + y;
        }
      }
    };
    $scope.series = [{
       name: 'Series 1',
       color: 'steelblue',
       data: [{x: 0, y: 23}, {x: 1, y: 15}, {x: 2, y: 79}, {x: 3, y: 31}, {x: 4, y: 60}]
     }, {
       name: 'Series 2',
       color: 'lightblue',
       data: [{x: 0, y: 30}, {x: 1, y: 20}, {x: 2, y: 64}, {x: 3, y: 50}, {x: 4, y: 15}]
     }];

    // helper for reformatting the NOAA API response into a form we can pass to D3
    var reformatNormalsResponse = function (data) {
      
      // debug
      console.log(data);

      // Adapter
      var formattedData = [];
      var count = 0;
      angular.forEach(data.results, function(value, key) {
        console.log('data point:', key, value);
        formattedData.push({
          x: value.date,
          y: count += value.value
        });
      });
      console.log(formattedData);

      return formattedData;
    };
    
    // Get specified location's monthly normal precipitation data and attach it to the scope.
    $scope.getNormalsData = function () {
      $http({
        method: 'GET',
        headers: { 
          'Accept': 'application/json',
          'token': 'kjslmSNkMbvnPHEMUqxlAiKcBlpERRzr' 
        },
        url: 
          // The NOAA NCDC API has all kinds of hidden limitations, notably:
          //   - startdate to enddate can't span more than 1 year
          //   - some datasetid values are empty or have sparse coverage
          'http://www.ncdc.noaa.gov/cdo-web/api/v2/data'
          + '?datasetid=GHCND&datatypeid=PRCP'
          + '&startdate=2012-01-01&enddate=2012-12-30'
          + '&locationid=ZIP:12180',
      }).
      success(function (data) {
        // attach this data to the scope
        $scope.acData.series = data.results[0].station;
        $scope.acData.data = reformatNormalsResponse(data);

        // clear the error messages
        $scope.error = '';
      }).
      error(function (data, status) {
        $scope.error = 'Error: ' + status;
      });
    };

    // Get data for the first time
    $scope.getNormalsData();

  });
