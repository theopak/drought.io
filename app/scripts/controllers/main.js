'use strict';


/**
 * @ngdoc function
 * @name droughtioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the droughtioApp
 */
app.controller('MainCtrl', ['$scope', '$http', 'globalService', 'RainfallSeriesProvider',
  function ($scope, $http, globalService, RainfallSeriesProvider) {

    // Initializations
    $scope.selectionQueue = [];
    $scope.year = 2012;
    $scope.rainfallSeriesCollection = [];
    var seedData = {
      name: 'Troy, NY',
      color: 'orange',
      data: [
        {x: $scope.year.toString() + '-01-01', y: 0},
        {x: $scope.year.toString() + '-01-02', y: 0},
        {x: $scope.year.toString() + '-01-03', y: 0},
        {x: $scope.year.toString() + '-01-04', y: 0},
        {x: $scope.year.toString() + '-01-05', y: 0},
        {x: $scope.year.toString() + '-01-06', y: 0},
        {x: $scope.year.toString() + '-01-07', y: 0},
        {x: $scope.year.toString() + '-01-08', y: 0},
        {x: $scope.year.toString() + '-01-09', y: 0},
        {x: $scope.year.toString() + '-01-10', y: 0},
        {x: $scope.year.toString() + '-01-11', y: 0},
        {x: $scope.year.toString() + '-01-12', y: 0},
        {x: $scope.year.toString() + '-01-13', y: 0},
        {x: $scope.year.toString() + '-01-14', y: 0},
        {x: $scope.year.toString() + '-01-15', y: 0},
        {x: $scope.year.toString() + '-01-16', y: 0},
        {x: $scope.year.toString() + '-01-17', y: 0},
        {x: $scope.year.toString() + '-01-18', y: 0},
        {x: $scope.year.toString() + '-01-19', y: 0},
        {x: $scope.year.toString() + '-01-20', y: 0},
        {x: $scope.year.toString() + '-01-21', y: 0},
        {x: $scope.year.toString() + '-01-22', y: 0},
        {x: $scope.year.toString() + '-01-23', y: 0},
        {x: $scope.year.toString() + '-01-24', y: 0},
        {x: $scope.year.toString() + '-01-25', y: 0},
        {x: $scope.year.toString() + '-01-26', y: 0},
        {x: $scope.year.toString() + '-01-27', y: 0},
        {x: $scope.year.toString() + '-01-28', y: 0},
        {x: $scope.year.toString() + '-01-29', y: 0},
        {x: $scope.year.toString() + '-01-30', y: 0},
        {x: $scope.year.toString() + '-01-31', y: 0},
        {x: $scope.year.toString() + '-02-01', y: 0},
        {x: $scope.year.toString() + '-02-02', y: 0},
        {x: $scope.year.toString() + '-02-03', y: 0},
        {x: $scope.year.toString() + '-02-04', y: 0},
        {x: $scope.year.toString() + '-02-05', y: 0},
        {x: $scope.year.toString() + '-02-06', y: 0},
        {x: $scope.year.toString() + '-02-07', y: 0},
        {x: $scope.year.toString() + '-02-08', y: 0},
        {x: $scope.year.toString() + '-02-09', y: 0},
        {x: $scope.year.toString() + '-02-10', y: 0},
        {x: $scope.year.toString() + '-02-11', y: 0},
        {x: $scope.year.toString() + '-02-12', y: 0},
        {x: $scope.year.toString() + '-02-13', y: 0},
        {x: $scope.year.toString() + '-02-14', y: 0},
        {x: $scope.year.toString() + '-02-15', y: 0},
        {x: $scope.year.toString() + '-02-16', y: 0},
        {x: $scope.year.toString() + '-02-17', y: 0},
        {x: $scope.year.toString() + '-02-18', y: 0},
        {x: $scope.year.toString() + '-02-19', y: 0},
        {x: $scope.year.toString() + '-02-20', y: 0},
        {x: $scope.year.toString() + '-02-21', y: 0},
        {x: $scope.year.toString() + '-02-22', y: 0},
        {x: $scope.year.toString() + '-02-23', y: 0},
        {x: $scope.year.toString() + '-02-24', y: 0},
        {x: $scope.year.toString() + '-02-25', y: 0},
        {x: $scope.year.toString() + '-02-26', y: 0},
        {x: $scope.year.toString() + '-02-27', y: 0},
        {x: $scope.year.toString() + '-02-28', y: 0},
        {x: $scope.year.toString() + '-02-29', y: 0},
        {x: $scope.year.toString() + '-03-01', y: 0},
        {x: $scope.year.toString() + '-03-02', y: 0},
        {x: $scope.year.toString() + '-03-03', y: 0},
        {x: $scope.year.toString() + '-03-04', y: 0},
        {x: $scope.year.toString() + '-03-05', y: 0},
        {x: $scope.year.toString() + '-03-06', y: 0},
        {x: $scope.year.toString() + '-03-07', y: 0},
        {x: $scope.year.toString() + '-03-08', y: 0},
        {x: $scope.year.toString() + '-03-09', y: 0},
        {x: $scope.year.toString() + '-03-10', y: 0},
        {x: $scope.year.toString() + '-03-11', y: 0},
        {x: $scope.year.toString() + '-03-12', y: 0},
        {x: $scope.year.toString() + '-03-13', y: 0},
        {x: $scope.year.toString() + '-03-14', y: 0},
        {x: $scope.year.toString() + '-03-15', y: 0},
        {x: $scope.year.toString() + '-03-16', y: 0},
        {x: $scope.year.toString() + '-03-17', y: 0},
        {x: $scope.year.toString() + '-03-18', y: 0},
        {x: $scope.year.toString() + '-03-19', y: 0},
        {x: $scope.year.toString() + '-03-20', y: 0},
        {x: $scope.year.toString() + '-03-21', y: 0},
        {x: $scope.year.toString() + '-03-22', y: 0},
        {x: $scope.year.toString() + '-03-23', y: 0},
        {x: $scope.year.toString() + '-03-24', y: 0},
        {x: $scope.year.toString() + '-03-25', y: 0},
        {x: $scope.year.toString() + '-03-26', y: 0},
        {x: $scope.year.toString() + '-03-27', y: 0},
        {x: $scope.year.toString() + '-03-28', y: 0},
        {x: $scope.year.toString() + '-03-29', y: 0},
        {x: $scope.year.toString() + '-03-30', y: 0},
        {x: $scope.year.toString() + '-03-31', y: 0},
        {x: $scope.year.toString() + '-04-01', y: 0},
        {x: $scope.year.toString() + '-04-02', y: 0},
        {x: $scope.year.toString() + '-04-03', y: 0},
        {x: $scope.year.toString() + '-04-04', y: 0},
        {x: $scope.year.toString() + '-04-05', y: 0},
        {x: $scope.year.toString() + '-04-06', y: 0},
        {x: $scope.year.toString() + '-04-07', y: 0},
        {x: $scope.year.toString() + '-04-08', y: 0},
        {x: $scope.year.toString() + '-04-09', y: 0},
        {x: $scope.year.toString() + '-04-10', y: 0},
        {x: $scope.year.toString() + '-04-11', y: 0},
        {x: $scope.year.toString() + '-04-12', y: 0},
        {x: $scope.year.toString() + '-04-13', y: 0},
        {x: $scope.year.toString() + '-04-14', y: 0},
        {x: $scope.year.toString() + '-04-15', y: 0},
        {x: $scope.year.toString() + '-04-16', y: 0},
        {x: $scope.year.toString() + '-04-17', y: 0},
        {x: $scope.year.toString() + '-04-18', y: 0},
        {x: $scope.year.toString() + '-04-19', y: 0},
        {x: $scope.year.toString() + '-04-20', y: 0},
        {x: $scope.year.toString() + '-04-21', y: 0},
        {x: $scope.year.toString() + '-04-22', y: 0},
        {x: $scope.year.toString() + '-04-22', y: 0},
        {x: $scope.year.toString() + '-04-23', y: 0},
        {x: $scope.year.toString() + '-04-23', y: 0},
        {x: $scope.year.toString() + '-04-24', y: 0},
        {x: $scope.year.toString() + '-04-24', y: 0},
        {x: $scope.year.toString() + '-04-25', y: 0},
        {x: $scope.year.toString() + '-04-25', y: 0},
        {x: $scope.year.toString() + '-04-26', y: 0},
        {x: $scope.year.toString() + '-04-26', y: 0},
        {x: $scope.year.toString() + '-04-27', y: 0},
        {x: $scope.year.toString() + '-04-27', y: 0},
        {x: $scope.year.toString() + '-04-28', y: 0},
        {x: $scope.year.toString() + '-04-29', y: 0},
        {x: $scope.year.toString() + '-04-29', y: 0},
        {x: $scope.year.toString() + '-04-30', y: 0},
        {x: $scope.year.toString() + '-04-30', y: 0},
        {x: $scope.year.toString() + '-05-01', y: 0},
        {x: $scope.year.toString() + '-05-01', y: 0},
        {x: $scope.year.toString() + '-05-02', y: 0},
        {x: $scope.year.toString() + '-05-02', y: 0},
        {x: $scope.year.toString() + '-05-03', y: 0},
        {x: $scope.year.toString() + '-05-03', y: 0},
        {x: $scope.year.toString() + '-05-04', y: 0},
        {x: $scope.year.toString() + '-05-04', y: 0},
        {x: $scope.year.toString() + '-05-05', y: 0},
        {x: $scope.year.toString() + '-05-06', y: 0},
        {x: $scope.year.toString() + '-05-07', y: 0},
        {x: $scope.year.toString() + '-05-07', y: 0},
        {x: $scope.year.toString() + '-05-08', y: 0},
        {x: $scope.year.toString() + '-05-08', y: 0},
        {x: $scope.year.toString() + '-05-09', y: 0},
        {x: $scope.year.toString() + '-05-09', y: 0},
        {x: $scope.year.toString() + '-05-10', y: 0},
        {x: $scope.year.toString() + '-05-10', y: 0},
        {x: $scope.year.toString() + '-05-11', y: 0},
        {x: $scope.year.toString() + '-05-11', y: 0},
        {x: $scope.year.toString() + '-05-12', y: 0},
        {x: $scope.year.toString() + '-05-13', y: 0},
        {x: $scope.year.toString() + '-05-14', y: 0},
        {x: $scope.year.toString() + '-05-14', y: 0},
        {x: $scope.year.toString() + '-05-15', y: 0},
        {x: $scope.year.toString() + '-05-15', y: 0},
        {x: $scope.year.toString() + '-05-16', y: 0},
        {x: $scope.year.toString() + '-05-16', y: 0},
        {x: $scope.year.toString() + '-05-17', y: 0},
        {x: $scope.year.toString() + '-05-17', y: 0},
        {x: $scope.year.toString() + '-05-18', y: 0},
        {x: $scope.year.toString() + '-05-19', y: 0},
        {x: $scope.year.toString() + '-05-20', y: 0},
        {x: $scope.year.toString() + '-05-21', y: 0},
        {x: $scope.year.toString() + '-05-21', y: 0},
        {x: $scope.year.toString() + '-05-22', y: 0},
        {x: $scope.year.toString() + '-05-22', y: 0},
        {x: $scope.year.toString() + '-05-23', y: 0},
        {x: $scope.year.toString() + '-05-23', y: 0},
        {x: $scope.year.toString() + '-05-24', y: 0},
        {x: $scope.year.toString() + '-05-24', y: 0},
        {x: $scope.year.toString() + '-05-25', y: 0},
        {x: $scope.year.toString() + '-05-25', y: 0},
        {x: $scope.year.toString() + '-05-26', y: 0},
        {x: $scope.year.toString() + '-05-27', y: 0},
        {x: $scope.year.toString() + '-05-28', y: 0},
        {x: $scope.year.toString() + '-05-29', y: 0},
        {x: $scope.year.toString() + '-05-29', y: 0},
        {x: $scope.year.toString() + '-05-30', y: 0},
        {x: $scope.year.toString() + '-05-30', y: 0},
        {x: $scope.year.toString() + '-05-31', y: 0},
        {x: $scope.year.toString() + '-05-31', y: 0},
        {x: $scope.year.toString() + '-06-01', y: 0},
        {x: $scope.year.toString() + '-06-01', y: 0},
        {x: $scope.year.toString() + '-06-02', y: 0},
        {x: $scope.year.toString() + '-06-02', y: 0},
        {x: $scope.year.toString() + '-06-03', y: 0},
        {x: $scope.year.toString() + '-06-03', y: 0},
        {x: $scope.year.toString() + '-06-04', y: 0},
        {x: $scope.year.toString() + '-06-04', y: 0},
        {x: $scope.year.toString() + '-06-05', y: 0},
        {x: $scope.year.toString() + '-06-05', y: 0},
        {x: $scope.year.toString() + '-06-06', y: 0},
        {x: $scope.year.toString() + '-06-06', y: 0},
        {x: $scope.year.toString() + '-06-07', y: 0},
        {x: $scope.year.toString() + '-06-07', y: 0},
        {x: $scope.year.toString() + '-06-08', y: 0},
        {x: $scope.year.toString() + '-06-08', y: 0},
        {x: $scope.year.toString() + '-06-09', y: 0},
        {x: $scope.year.toString() + '-06-09', y: 0},
        {x: $scope.year.toString() + '-06-10', y: 0},
        {x: $scope.year.toString() + '-06-11', y: 0},
        {x: $scope.year.toString() + '-06-11', y: 0},
        {x: $scope.year.toString() + '-06-12', y: 0},
        {x: $scope.year.toString() + '-06-12', y: 0},
        {x: $scope.year.toString() + '-06-13', y: 0},
        {x: $scope.year.toString() + '-06-13', y: 0},
        {x: $scope.year.toString() + '-06-14', y: 0},
        {x: $scope.year.toString() + '-06-14', y: 0},
        {x: $scope.year.toString() + '-06-15', y: 0},
        {x: $scope.year.toString() + '-06-16', y: 0},
        {x: $scope.year.toString() + '-06-17', y: 0},
        {x: $scope.year.toString() + '-06-18', y: 0},
        {x: $scope.year.toString() + '-06-19', y: 0},
        {x: $scope.year.toString() + '-06-20', y: 0},
        {x: $scope.year.toString() + '-06-21', y: 0},
        {x: $scope.year.toString() + '-06-22', y: 0},
        {x: $scope.year.toString() + '-06-23', y: 0},
        {x: $scope.year.toString() + '-06-24', y: 0},
        {x: $scope.year.toString() + '-06-25', y: 0},
        {x: $scope.year.toString() + '-06-25', y: 0},
        {x: $scope.year.toString() + '-06-26', y: 0},
        {x: $scope.year.toString() + '-06-26', y: 0},
        {x: $scope.year.toString() + '-06-27', y: 0},
        {x: $scope.year.toString() + '-06-27', y: 0},
        {x: $scope.year.toString() + '-06-28', y: 0},
        {x: $scope.year.toString() + '-06-28', y: 0},
        {x: $scope.year.toString() + '-06-29', y: 0},
        {x: $scope.year.toString() + '-06-29', y: 0},
        {x: $scope.year.toString() + '-06-30', y: 0},
        {x: $scope.year.toString() + '-07-01', y: 0},
        {x: $scope.year.toString() + '-07-02', y: 0},
        {x: $scope.year.toString() + '-07-02', y: 0},
        {x: $scope.year.toString() + '-07-03', y: 0},
        {x: $scope.year.toString() + '-07-03', y: 0},
        {x: $scope.year.toString() + '-07-04', y: 0},
        {x: $scope.year.toString() + '-07-04', y: 0},
        {x: $scope.year.toString() + '-07-05', y: 0},
        {x: $scope.year.toString() + '-07-06', y: 0},
        {x: $scope.year.toString() + '-07-06', y: 0},
        {x: $scope.year.toString() + '-07-07', y: 0},
        {x: $scope.year.toString() + '-07-08', y: 0},
        {x: $scope.year.toString() + '-07-09', y: 0},
        {x: $scope.year.toString() + '-07-10', y: 0},
        {x: $scope.year.toString() + '-07-10', y: 0},
        {x: $scope.year.toString() + '-07-11', y: 0},
        {x: $scope.year.toString() + '-07-12', y: 0},
        {x: $scope.year.toString() + '-07-14', y: 0},
        {x: $scope.year.toString() + '-07-15', y: 0},
        {x: $scope.year.toString() + '-07-16', y: 0},
        {x: $scope.year.toString() + '-07-17', y: 0},
        {x: $scope.year.toString() + '-07-18', y: 0},
        {x: $scope.year.toString() + '-07-19', y: 0},
        {x: $scope.year.toString() + '-07-20', y: 0},
        {x: $scope.year.toString() + '-07-21', y: 0},
        {x: $scope.year.toString() + '-07-22', y: 0},
        {x: $scope.year.toString() + '-07-23', y: 0},
        {x: $scope.year.toString() + '-07-24', y: 0},
        {x: $scope.year.toString() + '-07-24', y: 0},
        {x: $scope.year.toString() + '-07-25', y: 0},
        {x: $scope.year.toString() + '-07-26', y: 0},
        {x: $scope.year.toString() + '-07-26', y: 0},
        {x: $scope.year.toString() + '-07-27', y: 0},
        {x: $scope.year.toString() + '-07-27', y: 0},
        {x: $scope.year.toString() + '-07-28', y: 0},
        {x: $scope.year.toString() + '-07-29', y: 0},
        {x: $scope.year.toString() + '-07-30', y: 0},
        {x: $scope.year.toString() + '-07-30', y: 0},
        {x: $scope.year.toString() + '-07-31', y: 0},
        {x: $scope.year.toString() + '-08-01', y: 0},
        {x: $scope.year.toString() + '-08-02', y: 0},
        {x: $scope.year.toString() + '-08-03', y: 0},
        {x: $scope.year.toString() + '-08-04', y: 0},
        {x: $scope.year.toString() + '-08-05', y: 0},
        {x: $scope.year.toString() + '-08-06', y: 0},
        {x: $scope.year.toString() + '-08-06', y: 0},
        {x: $scope.year.toString() + '-08-07', y: 0},
        {x: $scope.year.toString() + '-08-08', y: 0},
        {x: $scope.year.toString() + '-08-08', y: 0},
        {x: $scope.year.toString() + '-08-09', y: 0},
        {x: $scope.year.toString() + '-08-10', y: 0},
        {x: $scope.year.toString() + '-08-11', y: 0},
        {x: $scope.year.toString() + '-08-11', y: 0},
        {x: $scope.year.toString() + '-08-12', y: 0},
        {x: $scope.year.toString() + '-08-12', y: 0},
        {x: $scope.year.toString() + '-08-13', y: 0},
        {x: $scope.year.toString() + '-08-13', y: 0},
        {x: $scope.year.toString() + '-08-14', y: 0},
        {x: $scope.year.toString() + '-08-14', y: 0},
        {x: $scope.year.toString() + '-08-15', y: 0},
        {x: $scope.year.toString() + '-08-15', y: 0},
        {x: $scope.year.toString() + '-08-16', y: 0},
        {x: $scope.year.toString() + '-08-16', y: 0},
        {x: $scope.year.toString() + '-08-17', y: 0},
        {x: $scope.year.toString() + '-08-18', y: 0},
        {x: $scope.year.toString() + '-08-18', y: 0},
        {x: $scope.year.toString() + '-08-19', y: 0},
        {x: $scope.year.toString() + '-08-19', y: 0},
        {x: $scope.year.toString() + '-08-20', y: 0},
        {x: $scope.year.toString() + '-08-21', y: 0},
        {x: $scope.year.toString() + '-08-21', y: 0},
        {x: $scope.year.toString() + '-08-22', y: 0},
        {x: $scope.year.toString() + '-08-23', y: 0},
        {x: $scope.year.toString() + '-08-23', y: 0},
        {x: $scope.year.toString() + '-08-24', y: 0},
        {x: $scope.year.toString() + '-08-25', y: 0},
        {x: $scope.year.toString() + '-08-26', y: 0},
        {x: $scope.year.toString() + '-08-27', y: 0},
        {x: $scope.year.toString() + '-08-28', y: 0},
        {x: $scope.year.toString() + '-08-28', y: 0},
        {x: $scope.year.toString() + '-08-29', y: 0},
        {x: $scope.year.toString() + '-08-29', y: 0},
        {x: $scope.year.toString() + '-08-30', y: 0},
        {x: $scope.year.toString() + '-08-31', y: 0},
        {x: $scope.year.toString() + '-09-01', y: 0},
        {x: $scope.year.toString() + '-09-02', y: 0},
        {x: $scope.year.toString() + '-09-03', y: 0},
        {x: $scope.year.toString() + '-09-04', y: 0},
        {x: $scope.year.toString() + '-09-04', y: 0},
        {x: $scope.year.toString() + '-09-05', y: 0},
        {x: $scope.year.toString() + '-09-05', y: 0},
        {x: $scope.year.toString() + '-09-06', y: 0},
        {x: $scope.year.toString() + '-09-06', y: 0},
        {x: $scope.year.toString() + '-09-07', y: 0},
        {x: $scope.year.toString() + '-09-07', y: 0},
        {x: $scope.year.toString() + '-09-08', y: 0},
        {x: $scope.year.toString() + '-09-08', y: 0},
        {x: $scope.year.toString() + '-09-09', y: 0},
        {x: $scope.year.toString() + '-09-09', y: 0},
        {x: $scope.year.toString() + '-09-10', y: 0},
        {x: $scope.year.toString() + '-09-11', y: 0},
        {x: $scope.year.toString() + '-09-12', y: 0},
        {x: $scope.year.toString() + '-09-13', y: 0},
        {x: $scope.year.toString() + '-09-14', y: 0},
        {x: $scope.year.toString() + '-09-15', y: 0},
        {x: $scope.year.toString() + '-09-15', y: 0},
        {x: $scope.year.toString() + '-09-16', y: 0},
        {x: $scope.year.toString() + '-09-17', y: 0},
        {x: $scope.year.toString() + '-09-18', y: 0},
        {x: $scope.year.toString() + '-09-19', y: 0},
        {x: $scope.year.toString() + '-09-19', y: 0},
        {x: $scope.year.toString() + '-09-20', y: 0},
        {x: $scope.year.toString() + '-09-21', y: 0},
        {x: $scope.year.toString() + '-09-21', y: 0},
        {x: $scope.year.toString() + '-09-22', y: 0},
        {x: $scope.year.toString() + '-09-23', y: 0},
        {x: $scope.year.toString() + '-09-23', y: 0},
        {x: $scope.year.toString() + '-09-24', y: 0},
        {x: $scope.year.toString() + '-09-24', y: 0},
        {x: $scope.year.toString() + '-09-25', y: 0},
        {x: $scope.year.toString() + '-09-26', y: 0},
        {x: $scope.year.toString() + '-09-26', y: 0},
        {x: $scope.year.toString() + '-09-27', y: 0},
        {x: $scope.year.toString() + '-09-27', y: 0},
        {x: $scope.year.toString() + '-09-28', y: 0},
        {x: $scope.year.toString() + '-09-28', y: 0},
        {x: $scope.year.toString() + '-09-29', y: 0},
        {x: $scope.year.toString() + '-09-29', y: 0},
        {x: $scope.year.toString() + '-09-30', y: 0},
        {x: $scope.year.toString() + '-09-30', y: 0},
        {x: $scope.year.toString() + '-10-01', y: 0},
        {x: $scope.year.toString() + '-10-01', y: 0},
        {x: $scope.year.toString() + '-10-02', y: 0},
        {x: $scope.year.toString() + '-10-02', y: 0},
        {x: $scope.year.toString() + '-10-03', y: 0},
        {x: $scope.year.toString() + '-10-03', y: 0},
        {x: $scope.year.toString() + '-10-04', y: 0},
        {x: $scope.year.toString() + '-10-04', y: 0},
        {x: $scope.year.toString() + '-10-05', y: 0},
        {x: $scope.year.toString() + '-10-05', y: 0},
        {x: $scope.year.toString() + '-10-06', y: 0},
        {x: $scope.year.toString() + '-10-07', y: 0},
        {x: $scope.year.toString() + '-10-08', y: 0},
        {x: $scope.year.toString() + '-10-08', y: 0},
        {x: $scope.year.toString() + '-10-09', y: 0},
        {x: $scope.year.toString() + '-10-10', y: 0},
        {x: $scope.year.toString() + '-10-11', y: 0},
        {x: $scope.year.toString() + '-10-11', y: 0},
        {x: $scope.year.toString() + '-10-12', y: 0},
        {x: $scope.year.toString() + '-10-12', y: 0},
        {x: $scope.year.toString() + '-10-13', y: 0},
        {x: $scope.year.toString() + '-10-13', y: 0},
        {x: $scope.year.toString() + '-10-14', y: 0},
        {x: $scope.year.toString() + '-10-14', y: 0},
        {x: $scope.year.toString() + '-10-15', y: 0},
        {x: $scope.year.toString() + '-10-15', y: 0},
        {x: $scope.year.toString() + '-10-16', y: 0},
        {x: $scope.year.toString() + '-10-16', y: 0},
        {x: $scope.year.toString() + '-10-17', y: 0},
        {x: $scope.year.toString() + '-10-18', y: 0},
        {x: $scope.year.toString() + '-10-18', y: 0},
        {x: $scope.year.toString() + '-10-19', y: 0},
        {x: $scope.year.toString() + '-10-19', y: 0},
        {x: $scope.year.toString() + '-10-20', y: 0},
        {x: $scope.year.toString() + '-10-20', y: 0},
        {x: $scope.year.toString() + '-10-21', y: 0},
        {x: $scope.year.toString() + '-10-21', y: 0},
        {x: $scope.year.toString() + '-10-22', y: 0},
        {x: $scope.year.toString() + '-10-23', y: 0},
        {x: $scope.year.toString() + '-10-24', y: 0},
        {x: $scope.year.toString() + '-10-24', y: 0},
        {x: $scope.year.toString() + '-10-25', y: 0},
        {x: $scope.year.toString() + '-10-25', y: 0},
        {x: $scope.year.toString() + '-10-26', y: 0},
        {x: $scope.year.toString() + '-10-27', y: 0},
        {x: $scope.year.toString() + '-10-28', y: 0},
        {x: $scope.year.toString() + '-10-29', y: 0},
        {x: $scope.year.toString() + '-10-29', y: 0},
        {x: $scope.year.toString() + '-10-30', y: 0},
        {x: $scope.year.toString() + '-10-30', y: 0},
        {x: $scope.year.toString() + '-10-31', y: 0},
        {x: $scope.year.toString() + '-10-31', y: 0},
        {x: $scope.year.toString() + '-11-01', y: 0},
        {x: $scope.year.toString() + '-11-01', y: 0},
        {x: $scope.year.toString() + '-11-02', y: 0},
        {x: $scope.year.toString() + '-11-03', y: 0},
        {x: $scope.year.toString() + '-11-03', y: 0},
        {x: $scope.year.toString() + '-11-04', y: 0},
        {x: $scope.year.toString() + '-11-05', y: 0},
        {x: $scope.year.toString() + '-11-06', y: 0},
        {x: $scope.year.toString() + '-11-07', y: 0},
        {x: $scope.year.toString() + '-11-08', y: 0},
        {x: $scope.year.toString() + '-11-08', y: 0},
        {x: $scope.year.toString() + '-11-09', y: 0},
        {x: $scope.year.toString() + '-11-10', y: 0},
        {x: $scope.year.toString() + '-11-11', y: 0},
        {x: $scope.year.toString() + '-11-12', y: 0},
        {x: $scope.year.toString() + '-11-13', y: 0},
        {x: $scope.year.toString() + '-11-13', y: 0},
        {x: $scope.year.toString() + '-11-14', y: 0},
        {x: $scope.year.toString() + '-11-14', y: 0},
        {x: $scope.year.toString() + '-11-15', y: 0},
        {x: $scope.year.toString() + '-11-16', y: 0},
        {x: $scope.year.toString() + '-11-17', y: 0},
        {x: $scope.year.toString() + '-11-18', y: 0},
        {x: $scope.year.toString() + '-11-19', y: 0},
        {x: $scope.year.toString() + '-11-20', y: 0},
        {x: $scope.year.toString() + '-11-21', y: 0},
        {x: $scope.year.toString() + '-11-22', y: 0},
        {x: $scope.year.toString() + '-11-23', y: 0},
        {x: $scope.year.toString() + '-11-24', y: 0},
        {x: $scope.year.toString() + '-11-24', y: 0},
        {x: $scope.year.toString() + '-11-25', y: 0},
        {x: $scope.year.toString() + '-11-26', y: 0},
        {x: $scope.year.toString() + '-11-26', y: 0},
        {x: $scope.year.toString() + '-11-27', y: 0},
        {x: $scope.year.toString() + '-11-28', y: 0},
        {x: $scope.year.toString() + '-11-28', y: 0},
        {x: $scope.year.toString() + '-11-29', y: 0},
        {x: $scope.year.toString() + '-11-29', y: 0},
        {x: $scope.year.toString() + '-11-30', y: 0},
        {x: $scope.year.toString() + '-12-01', y: 0},
        {x: $scope.year.toString() + '-12-01', y: 0},
        {x: $scope.year.toString() + '-12-02', y: 0},
        {x: $scope.year.toString() + '-12-03', y: 0},
        {x: $scope.year.toString() + '-12-04', y: 0},
        {x: $scope.year.toString() + '-12-04', y: 0},
        {x: $scope.year.toString() + '-12-05', y: 0},
        {x: $scope.year.toString() + '-12-05', y: 0},
        {x: $scope.year.toString() + '-12-06', y: 0},
        {x: $scope.year.toString() + '-12-07', y: 0},
        {x: $scope.year.toString() + '-12-08', y: 0},
        {x: $scope.year.toString() + '-12-08', y: 0},
        {x: $scope.year.toString() + '-12-09', y: 0},
        {x: $scope.year.toString() + '-12-09', y: 0},
        {x: $scope.year.toString() + '-12-10', y: 0},
        {x: $scope.year.toString() + '-12-10', y: 0},
        {x: $scope.year.toString() + '-12-11', y: 0},
        {x: $scope.year.toString() + '-12-11', y: 0},
        {x: $scope.year.toString() + '-12-12', y: 0},
        {x: $scope.year.toString() + '-12-12', y: 0},
        {x: $scope.year.toString() + '-12-13', y: 0},
        {x: $scope.year.toString() + '-12-14', y: 0},
        {x: $scope.year.toString() + '-12-15', y: 0},
        {x: $scope.year.toString() + '-12-16', y: 0},
        {x: $scope.year.toString() + '-12-17', y: 0},
        {x: $scope.year.toString() + '-12-17', y: 0},
        {x: $scope.year.toString() + '-12-18', y: 0},
        {x: $scope.year.toString() + '-12-18', y: 0},
        {x: $scope.year.toString() + '-12-19', y: 0},
        {x: $scope.year.toString() + '-12-19', y: 0},
        {x: $scope.year.toString() + '-12-20', y: 0},
        {x: $scope.year.toString() + '-12-20', y: 0},
        {x: $scope.year.toString() + '-12-21', y: 0},
        {x: $scope.year.toString() + '-12-21', y: 0},
        {x: $scope.year.toString() + '-12-22', y: 0},
        {x: $scope.year.toString() + '-12-22', y: 0},
        {x: $scope.year.toString() + '-12-23', y: 0},
        {x: $scope.year.toString() + '-12-24', y: 0},
        {x: $scope.year.toString() + '-12-25', y: 0},
        {x: $scope.year.toString() + '-12-25', y: 0},
        {x: $scope.year.toString() + '-12-26', y: 0},
        {x: $scope.year.toString() + '-12-27', y: 0},
        {x: $scope.year.toString() + '-12-28', y: 0},
        {x: $scope.year.toString() + '-12-29', y: 0},
        {x: $scope.year.toString() + '-12-30', y: 0},
        {x: $scope.year.toString() + '-12-30', y: 0}
      ]
    };
    var dateStrings = _.pluck(seedData.data, 'x');
    dateStrings.unshift('time');
    var blankSeries = _.pluck(seedData.data, 'y');
    blankSeries.unshift('zero');

    // Query driver
    var fipsTable = {
      '01': 'Alabama',
      '02': 'Alaska',
      '04': 'Arizona',
      '05': 'Arkansas',
      '06': 'California',
      '08': 'Colorado',
      '09': 'Connecticut',
      '10': 'Delaware',
      '12': 'Florida',
      '11': 'DC',
      '13': 'Georgia',
      '15': 'Hawaii',
      '16': 'Idaho',
      '17': 'Illinois',
      '18': 'Indiana',
      '19': 'Iowa',
      '20': 'Kansas',
      '21': 'Kentucky',
      '22': 'Louisiana',
      '23': 'Maine',
      '24': 'Maryland',
      '25': 'Massachusetts',
      '26': 'Michigan',
      '27': 'Minnesota',
      '28': 'Mississippi',
      '29': 'Missouri',
      '30': 'Montana',
      '31': 'Nebraska',
      '32': 'Nevada',
      '33': 'New Hampshire',
      '34': 'New Jersey',
      '35': 'New Mexico',
      '36': 'New York',
      '37': 'North Carolina',
      '38': 'North Dakota',
      '39': 'Ohio',
      '40': 'Oklahoma',
      '41': 'Oregon',
      '42': 'Pennsylvania',
      '44': 'Rhode Island',
      '45': 'South Carolina',
      '46': 'South Dakota',
      '47': 'Tennessee',
      '48': 'Texas',
      '49': 'Utah',
      '50': 'Vermont',
      '51': 'Virginia',
      '53': 'Washington',
      '54': 'West Virginia',
      '55': 'Wisconsin',
      '56': 'Wyoming',
      '72': 'Puerto Rico',
      '78': 'Virgin Islands'
    };
    $scope.appendSeries = function(locationid, year) {
      RainfallSeriesProvider.get({
        year: year,
        id: locationid
      },
      function(data) {
        console.log('droughtioApp.controller:MainCtrl:$scope.appendSeries:data', data);
        $scope.year = year;
        data.unshift(fipsTable[locationid]);
        chart.load({
          columns: [data]
        });
        chart.unload('zero');
        d3.select('#fips' + locationid.toString())
          .style('stroke', chart.color(fipsTable[locationid]))
          .on('mouseover', function() {
            $scope.focused = fipsTable[locationid];
            chart.focus(fipsTable[locationid]);
          })
          .on('mouseout', function() {
            chart.revert();
          })
          .on('click', function() {
            chart.toggle(fipsTable[locationid]);
            d3.select(this).attr('class', 'administrative');
          });
      });
    };

    $scope.mapTitles = [
      'Drought Severity',
      'Land Requiring Irrigation (% Total)'
    ];
    $scope.index = {};
    $scope.mapTitle = $scope.mapTitles[0];
    $scope.chartTitle = 'Cumulative Rainfall (inches)';

    // Listener for when user toggles between map layers
    $scope.toggleMap = function() {
      console.log('toggleMap', $scope.mapTitle, $scope.mapTitles[0]);
      if($scope.mapTitle === $scope.mapTitles[1]) {
        // Hide irrigation layer, show drought layer
        $scope.mapTitle = $scope.mapTitles[0];
        d3.select('#irrigation').attr('visibility', 'hidden');
        d3.select('#zones').attr('visibility', 'visible');
      } else if($scope.mapTitle === $scope.mapTitles[0]) {
        // Hide drought layer, show irrigation layer
        $scope.mapTitle = $scope.mapTitles[1];
        d3.select('#zones').attr('visibility', 'hidden');
        d3.select('#irrigation').attr('visibility', 'visible');
      }  
    };

    // Compute height
    var maxWidth = Math.min($('#chart').innerWidth(), 700);
    var width = 700;
    var maxHeight = Math.max(window.innerHeight - 30 - $('#navbar').outerHeight(), 240);
    var height = 320;
    var paddingTop = Math.max((maxHeight - height) / 2, 0);
    $('#chart').parent().find('h2').css('margin-top', paddingTop);

    // Setup
    $scope.schema = {
      x: {
        type: 'datetime',
        format: '%Y-%m-%d',
        name: 'Date'
      }
    };
    $scope.config = {
      bindto: '#chart',
      size: {
        // width: width + paddingLeft,
        // width: $('#chart').innerWidth(),
        height: height
      },
      data: {
        x: 'time',
        columns: [
          dateStrings,
          blankSeries
        ],
        type: 'step'
      },
      axis: {
        x: {
          type: 'timeseries',
          tick: {
            count: 12,      // 12 months in the year.
            culling: false, // don't cull (ie, select) the number of ticks. show them all!
            fit: true,      // fit to size.
            format: '%b'    // d3.date.format() specifier. '%b' is abbreviated month, '%B' is full month name.
          }
        },
        y: {
          tick: { format: d3.format(',') }
        }
      },
      tooltip: {
        format: { 
          title: d3.time.format('%B %e, %Y'),
          value: d3.format(',')
        }
      },
      grid: {
        y: { show: true }
      },
      legend: { show: false },
    };

    // C3 chart
    var chart = c3.generate($scope.config);
    $('#navbar').css('margin-top', window.innerHeight - document.getElementById('navbar').getBoundingClientRect().bottom - 20);

    // Zerofill/pad function via http://stackoverflow.com/a/10073788
    function pad(n, width, z) {
      z = z || '0';
      n = n + '';
      return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }

    // Dynamically load new series
    var grab = function() {
      var id = pad(globalService.nextSelection(), 2).toString();
      console.log('select ' + id);
      if(chart.data().hasOwnProperty(fipsTable[id])) {
        // The data was already loaded, so unhide id.
        console.log('show ' + id);
        chart.show(fipsTable[id]);
      } else {
        // The data was never loaded, so fetch and then load it.
        $scope.appendSeries(id, $scope.year);
      }
    };
    globalService.registerObserverCallback('select', grab);

  }
]);
