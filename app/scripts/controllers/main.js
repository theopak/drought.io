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

    //$scope.data = [10, 20, 30, 40, 60, 80, 20, 50];
    // Settings for angularCharts
    $scope.chartType = 'line';
    $scope.config = {
      //title: 'Test', // chart title
      tooltips: true,
      labels: false, // labels on data points
      // legend config
      legend: {
        display: true,
        position: 'right',  // can be either 'left' or 'right'.
        htmlEnabled: true // you can have html in series name
      },
      colors: [],
      lineLegend: 'traditional', // parameter for 'line' charts
      lineCurveType: 'cardinal', // change this as per d3 guidelines to avoid smoothline
      isAnimate: true, // run animations while rendering chart
      yAxisTickFormat: 's' //refer tickFormats in d3 to edit this value
    };

    $scope.acData = {
      series: ['Sales', 'Income', 'Expense', 'Laptops', 'Keyboards'],
      data: [{
        x: 'Laptops',
        y: [100, 500, 0],
        tooltip: 'this is tooltip'
      }, {
        x: 'Desktops',
        y: [300, 100, 100]
      }, {
        x: 'Mobiles',
        y: [351]
      }, {
        x: 'Tablets',
        y: [54, 0, 879]
      }]
    };

    // helper for reformatting the NOAA API response into a form we can pass to D3
    var reformatNormalsResponse = function (data) {
      
      // debug
      //console.log(data);

      // Adapter
      var formattedData = [];
      angular.forEach(data.results, function(value, key) {
        formattedData.push(value);
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
        //$scope.data = reformatNormalsResponse(data);

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
