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

    $scope.data = '';
    
    // Get annual/normals data from all stations via NOAA NCDC
    $scope.getNormalsData = function () {
      $http({
        method: 'GET',
        headers: { 'token': 'kjslmSNkMbvnPHEMUqxlAiKcBlpERRzr' },
        url: 'http://www.ncdc.noaa.gov/cdo-web/api/v2/datasets/ANNUAL',
      }).
      success(function (data) {
        // attach this data to the scope
        //$scope.data = reformatNoaaResponse(data);
        $scope.data = data;
        console.log($scope.data);

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
