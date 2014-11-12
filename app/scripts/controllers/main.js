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

    $scope.zip = '12180';

    $scope.chartOptions = {
       renderer: 'area',
       interpolation: 'step-after',
       stack: 'false'  // default true for stacking graph contexts
    };
    $scope.chartFeatures = {
      hover: {
        xFormatter: function(x) {
          var t = new Date(x);
          return t.toDateString();
        },
        yFormatter: function(y) {
          return y + ' in';
        }
      }
    };
    $scope.series = [{
      name: 'Series 1',
      color: 'steelblue',
      data: [
        {x: Date.parse('2012-01-01T00:00:00'), y:   0},
        {x: Date.parse('2012-01-02T00:00:00'), y:   0},
        {x: Date.parse('2012-01-03T00:00:00'), y:   0},
        {x: Date.parse('2012-01-04T00:00:00'), y:   0},
        {x: Date.parse('2012-01-05T00:00:00'), y:   0},
        {x: Date.parse('2012-01-06T00:00:00'), y:   0},
        {x: Date.parse('2012-01-07T00:00:00'), y:   0},
        {x: Date.parse('2012-01-08T00:00:00'), y:   0},
        {x: Date.parse('2012-01-09T00:00:00'), y:   0},
        {x: Date.parse('2012-01-10T00:00:00'), y:   0},
        {x: Date.parse('2012-01-11T00:00:00'), y:   0},
        {x: Date.parse('2012-01-12T00:00:00'), y:  86},
        {x: Date.parse('2012-01-13T00:00:00'), y: 137},
        {x: Date.parse('2012-01-14T00:00:00'), y: 142},
        {x: Date.parse('2012-01-15T00:00:00'), y: 142},
        {x: Date.parse('2012-01-16T00:00:00'), y: 142},
        {x: Date.parse('2012-01-17T00:00:00'), y: 157},
        {x: Date.parse('2012-01-18T00:00:00'), y: 198},
        {x: Date.parse('2012-01-19T00:00:00'), y: 198},
        {x: Date.parse('2012-01-22T00:00:00'), y: 198},
        {x: Date.parse('2012-01-20T00:00:00'), y: 198},
        {x: Date.parse('2012-01-21T00:00:00'), y: 198},
        {x: Date.parse('2012-01-23T00:00:00'), y: 198},
        {x: Date.parse('2012-01-24T00:00:00'), y: 234},
        {x: Date.parse('2012-01-25T00:00:00'), y: 234},
      ]
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
          x: Date.parse(value.date),
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
          // //   - some datasetid values are empty or have sparse coverage
          'http://www.ncdc.noaa.gov/cdo-web/api/v2/data'
          + '?datasetid=GHCND&datatypeid=PRCP'
          + '&startdate=2012-01-01&enddate=2012-12-30'
          + '&locationid=ZIP:' + $scope.zip,
      }).
      success(function (data) {
        // attach this data to the scope
        $scope.series.push({
          name: data.results[0].station,
          color: 'red',
          data: reformatNormalsResponse(data)
        });
        console.log($scope.series);

        // clear the error messages
        $scope.error = '';
      }).
      error(function (data, status) {
        $scope.error = 'Error: ' + status;
      });
    };

    // Get data for the first time
    //$scope.getNormalsData();

  });
