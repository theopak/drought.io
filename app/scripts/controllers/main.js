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

    // Scope
    $scope.selectionQueue = [];
    $scope.year = 2010;
    $scope.rainfallSeriesCollection = [];

    // Debug
    function convert(str) {
      // var d = new Date(str);
      // return d.valueOf() / 1000;
      return str;
    }
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
        {x: $scope.year.toString() + '-01-12', y: 86},
        {x: $scope.year.toString() + '-01-13', y: 137},
        {x: $scope.year.toString() + '-01-14', y: 142},
        {x: $scope.year.toString() + '-01-15', y: 142},
        {x: $scope.year.toString() + '-01-16', y: 142},
        {x: $scope.year.toString() + '-01-17', y: 157},
        {x: $scope.year.toString() + '-01-18', y: 198},
        {x: $scope.year.toString() + '-01-19', y: 198},
        {x: $scope.year.toString() + '-01-20', y: 198},
        {x: $scope.year.toString() + '-01-21', y: 198},
        {x: $scope.year.toString() + '-01-22', y: 198},
        {x: $scope.year.toString() + '-01-23', y: 198},
        {x: $scope.year.toString() + '-01-24', y: 234},
        {x: $scope.year.toString() + '-01-25', y: 234},
        {x: $scope.year.toString() + '-01-26', y: 234},
        {x: $scope.year.toString() + '-01-27', y: 493},
        {x: $scope.year.toString() + '-01-28', y: 518},
        {x: $scope.year.toString() + '-01-29', y: 518},
        {x: $scope.year.toString() + '-01-30', y: 518},
        {x: $scope.year.toString() + '-01-31', y: 523},
        {x: $scope.year.toString() + '-02-01', y: 523},
        {x: $scope.year.toString() + '-02-02', y: 523},
        {x: $scope.year.toString() + '-02-03', y: 523},
        {x: $scope.year.toString() + '-02-04', y: 523},
        {x: $scope.year.toString() + '-02-05', y: 523},
        {x: $scope.year.toString() + '-02-06', y: 523},
        {x: $scope.year.toString() + '-02-07', y: 523},
        {x: $scope.year.toString() + '-02-08', y: 523},
        {x: $scope.year.toString() + '-02-09', y: 523},
        {x: $scope.year.toString() + '-02-10', y: 523},
        {x: $scope.year.toString() + '-02-11', y: 523},
        {x: $scope.year.toString() + '-02-12', y: 523},
        {x: $scope.year.toString() + '-02-13', y: 650},
        {x: $scope.year.toString() + '-02-14', y: 650},
        {x: $scope.year.toString() + '-02-15', y: 650},
        {x: $scope.year.toString() + '-02-16', y: 650},
        {x: $scope.year.toString() + '-02-17', y: 680},
        {x: $scope.year.toString() + '-02-18', y: 680},
        {x: $scope.year.toString() + '-02-19', y: 685},
        {x: $scope.year.toString() + '-02-20', y: 685},
        {x: $scope.year.toString() + '-02-21', y: 685},
        {x: $scope.year.toString() + '-02-22', y: 685},
        {x: $scope.year.toString() + '-02-23', y: 710},
        {x: $scope.year.toString() + '-02-24', y: 710},
        {x: $scope.year.toString() + '-02-25', y: 776},
        {x: $scope.year.toString() + '-02-26', y: 776},
        {x: $scope.year.toString() + '-02-27', y: 776},
        {x: $scope.year.toString() + '-02-28', y: 776},
        {x: $scope.year.toString() + '-02-29', y: 776},
        {x: $scope.year.toString() + '-03-01', y: 1005},
        {x: $scope.year.toString() + '-03-02', y: 1005},
        {x: $scope.year.toString() + '-03-03', y: 1005},
        {x: $scope.year.toString() + '-03-04', y: 1005},
        {x: $scope.year.toString() + '-03-05', y: 1005},
        {x: $scope.year.toString() + '-03-06', y: 1005},
        {x: $scope.year.toString() + '-03-07', y: 1005},
        {x: $scope.year.toString() + '-03-08', y: 1005},
        {x: $scope.year.toString() + '-03-09', y: 1048},
        {x: $scope.year.toString() + '-03-10', y: 1048},
        {x: $scope.year.toString() + '-03-11', y: 1048},
        {x: $scope.year.toString() + '-03-12', y: 1048},
        {x: $scope.year.toString() + '-03-13', y: 1048},
        {x: $scope.year.toString() + '-03-14', y: 1048},
        {x: $scope.year.toString() + '-03-15', y: 1048},
        {x: $scope.year.toString() + '-03-16', y: 1099},
        {x: $scope.year.toString() + '-03-17', y: 1122},
        {x: $scope.year.toString() + '-03-18', y: 1122},
        {x: $scope.year.toString() + '-03-19', y: 1122},
        {x: $scope.year.toString() + '-03-20', y: 1122},
        {x: $scope.year.toString() + '-03-21', y: 1122},
        {x: $scope.year.toString() + '-03-22', y: 1122},
        {x: $scope.year.toString() + '-03-23', y: 1122},
        {x: $scope.year.toString() + '-03-24', y: 1122},
        {x: $scope.year.toString() + '-03-25', y: 1122},
        {x: $scope.year.toString() + '-03-26', y: 1122},
        {x: $scope.year.toString() + '-03-27', y: 1122},
        {x: $scope.year.toString() + '-03-28', y: 1122},
        {x: $scope.year.toString() + '-03-29', y: 1155},
        {x: $scope.year.toString() + '-03-30', y: 1155},
        {x: $scope.year.toString() + '-03-31', y: 1155},
        {x: $scope.year.toString() + '-04-01', y: 1155},
        {x: $scope.year.toString() + '-04-02', y: 1175},
        {x: $scope.year.toString() + '-04-03', y: 1175},
        {x: $scope.year.toString() + '-04-04', y: 1175},
        {x: $scope.year.toString() + '-04-05', y: 1178},
        {x: $scope.year.toString() + '-04-06', y: 1178},
        {x: $scope.year.toString() + '-04-07', y: 1178},
        {x: $scope.year.toString() + '-04-08', y: 1178},
        {x: $scope.year.toString() + '-04-09', y: 1178},
        {x: $scope.year.toString() + '-04-10', y: 1178},
        {x: $scope.year.toString() + '-04-11', y: 1178},
        {x: $scope.year.toString() + '-04-12', y: 1178},
        {x: $scope.year.toString() + '-04-13', y: 1178},
        {x: $scope.year.toString() + '-04-14', y: 1178},
        {x: $scope.year.toString() + '-04-15', y: 1178},
        {x: $scope.year.toString() + '-04-16', y: 1178},
        {x: $scope.year.toString() + '-04-17', y: 1178},
        {x: $scope.year.toString() + '-04-18', y: 1178},
        {x: $scope.year.toString() + '-04-19', y: 1178},
        {x: $scope.year.toString() + '-04-20', y: 1178},
        {x: $scope.year.toString() + '-04-21', y: 1178},
        {x: $scope.year.toString() + '-04-22', y: 1440},
        {x: $scope.year.toString() + '-04-22', y: 1658},
        {x: $scope.year.toString() + '-04-23', y: 2001},
        {x: $scope.year.toString() + '-04-23', y: 2395},
        {x: $scope.year.toString() + '-04-24', y: 2395},
        {x: $scope.year.toString() + '-04-24', y: 2400},
        {x: $scope.year.toString() + '-04-25', y: 2403},
        {x: $scope.year.toString() + '-04-25', y: 2406},
        {x: $scope.year.toString() + '-04-26', y: 2406},
        {x: $scope.year.toString() + '-04-26', y: 2406},
        {x: $scope.year.toString() + '-04-27', y: 2411},
        {x: $scope.year.toString() + '-04-27', y: 2411},
        {x: $scope.year.toString() + '-04-28', y: 2411},
        {x: $scope.year.toString() + '-04-29', y: 2411},
        {x: $scope.year.toString() + '-04-29', y: 2411},
        {x: $scope.year.toString() + '-04-30', y: 2411},
        {x: $scope.year.toString() + '-04-30', y: 2411},
        {x: $scope.year.toString() + '-05-01', y: 2495},
        {x: $scope.year.toString() + '-05-01', y: 2592},
        {x: $scope.year.toString() + '-05-02', y: 2617},
        {x: $scope.year.toString() + '-05-02', y: 2665},
        {x: $scope.year.toString() + '-05-03', y: 2729},
        {x: $scope.year.toString() + '-05-03', y: 2831},
        {x: $scope.year.toString() + '-05-04', y: 2859},
        {x: $scope.year.toString() + '-05-04', y: 2897},
        {x: $scope.year.toString() + '-05-05', y: 2897},
        {x: $scope.year.toString() + '-05-06', y: 2897},
        {x: $scope.year.toString() + '-05-07', y: 2897},
        {x: $scope.year.toString() + '-05-07', y: 2897},
        {x: $scope.year.toString() + '-05-08', y: 3034},
        {x: $scope.year.toString() + '-05-08', y: 3186},
        {x: $scope.year.toString() + '-05-09', y: 3392},
        {x: $scope.year.toString() + '-05-09', y: 3580},
        {x: $scope.year.toString() + '-05-10', y: 3610},
        {x: $scope.year.toString() + '-05-10', y: 3640},
        {x: $scope.year.toString() + '-05-11', y: 3645},
        {x: $scope.year.toString() + '-05-11', y: 3648},
        {x: $scope.year.toString() + '-05-12', y: 3648},
        {x: $scope.year.toString() + '-05-13', y: 3648},
        {x: $scope.year.toString() + '-05-14', y: 3663},
        {x: $scope.year.toString() + '-05-14', y: 3678},
        {x: $scope.year.toString() + '-05-15', y: 3843},
        {x: $scope.year.toString() + '-05-15', y: 4006},
        {x: $scope.year.toString() + '-05-16', y: 4133},
        {x: $scope.year.toString() + '-05-16', y: 4290},
        {x: $scope.year.toString() + '-05-17', y: 4465},
        {x: $scope.year.toString() + '-05-17', y: 4579},
        {x: $scope.year.toString() + '-05-18', y: 4579},
        {x: $scope.year.toString() + '-05-19', y: 4579},
        {x: $scope.year.toString() + '-05-20', y: 4579},
        {x: $scope.year.toString() + '-05-21', y: 4579},
        {x: $scope.year.toString() + '-05-21', y: 4579},
        {x: $scope.year.toString() + '-05-22', y: 4609},
        {x: $scope.year.toString() + '-05-22', y: 4650},
        {x: $scope.year.toString() + '-05-23', y: 4739},
        {x: $scope.year.toString() + '-05-23', y: 4785},
        {x: $scope.year.toString() + '-05-24', y: 4785},
        {x: $scope.year.toString() + '-05-24', y: 4785},
        {x: $scope.year.toString() + '-05-25', y: 4821},
        {x: $scope.year.toString() + '-05-25', y: 4834},
        {x: $scope.year.toString() + '-05-26', y: 4834},
        {x: $scope.year.toString() + '-05-27', y: 4834},
        {x: $scope.year.toString() + '-05-28', y: 4834},
        {x: $scope.year.toString() + '-05-29', y: 4834},
        {x: $scope.year.toString() + '-05-29', y: 4834},
        {x: $scope.year.toString() + '-05-30', y: 5152},
        {x: $scope.year.toString() + '-05-30', y: 5431},
        {x: $scope.year.toString() + '-05-31', y: 5616},
        {x: $scope.year.toString() + '-05-31', y: 5730},
        {x: $scope.year.toString() + '-06-01', y: 5730},
        {x: $scope.year.toString() + '-06-01', y: 5730},
        {x: $scope.year.toString() + '-06-02', y: 5766},
        {x: $scope.year.toString() + '-06-02', y: 5809},
        {x: $scope.year.toString() + '-06-03', y: 5845},
        {x: $scope.year.toString() + '-06-03', y: 5901},
        {x: $scope.year.toString() + '-06-04', y: 6013},
        {x: $scope.year.toString() + '-06-04', y: 6168},
        {x: $scope.year.toString() + '-06-05', y: 6183},
        {x: $scope.year.toString() + '-06-05', y: 6193},
        {x: $scope.year.toString() + '-06-06', y: 6193},
        {x: $scope.year.toString() + '-06-06', y: 6193},
        {x: $scope.year.toString() + '-06-07', y: 6196},
        {x: $scope.year.toString() + '-06-07', y: 6201},
        {x: $scope.year.toString() + '-06-08', y: 6216},
        {x: $scope.year.toString() + '-06-08', y: 6216},
        {x: $scope.year.toString() + '-06-09', y: 6246},
        {x: $scope.year.toString() + '-06-09', y: 6282},
        {x: $scope.year.toString() + '-06-10', y: 6282},
        {x: $scope.year.toString() + '-06-11', y: 6282},
        {x: $scope.year.toString() + '-06-11', y: 6282},
        {x: $scope.year.toString() + '-06-12', y: 6282},
        {x: $scope.year.toString() + '-06-12', y: 6282},
        {x: $scope.year.toString() + '-06-13', y: 6518},
        {x: $scope.year.toString() + '-06-13', y: 6726},
        {x: $scope.year.toString() + '-06-14', y: 6726},
        {x: $scope.year.toString() + '-06-14', y: 6726},
        {x: $scope.year.toString() + '-06-15', y: 6726},
        {x: $scope.year.toString() + '-06-16', y: 6726},
        {x: $scope.year.toString() + '-06-17', y: 6726},
        {x: $scope.year.toString() + '-06-18', y: 6726},
        {x: $scope.year.toString() + '-06-19', y: 6726},
        {x: $scope.year.toString() + '-06-20', y: 6726},
        {x: $scope.year.toString() + '-06-21', y: 6726},
        {x: $scope.year.toString() + '-06-22', y: 6726},
        {x: $scope.year.toString() + '-06-23', y: 6726},
        {x: $scope.year.toString() + '-06-24', y: 6726},
        {x: $scope.year.toString() + '-06-25', y: 6744},
        {x: $scope.year.toString() + '-06-25', y: 6774},
        {x: $scope.year.toString() + '-06-26', y: 6820},
        {x: $scope.year.toString() + '-06-26', y: 6833},
        {x: $scope.year.toString() + '-06-27', y: 6863},
        {x: $scope.year.toString() + '-06-27', y: 6881},
        {x: $scope.year.toString() + '-06-28', y: 6881},
        {x: $scope.year.toString() + '-06-28', y: 6881},
        {x: $scope.year.toString() + '-06-29', y: 6884},
        {x: $scope.year.toString() + '-06-29', y: 6887},
        {x: $scope.year.toString() + '-06-30', y: 6887},
        {x: $scope.year.toString() + '-07-01', y: 6887},
        {x: $scope.year.toString() + '-07-02', y: 6989},
        {x: $scope.year.toString() + '-07-02', y: 7004},
        {x: $scope.year.toString() + '-07-03', y: 7004},
        {x: $scope.year.toString() + '-07-03', y: 7012},
        {x: $scope.year.toString() + '-07-04', y: 7035},
        {x: $scope.year.toString() + '-07-04', y: 7081},
        {x: $scope.year.toString() + '-07-05', y: 7081},
        {x: $scope.year.toString() + '-07-06', y: 7081},
        {x: $scope.year.toString() + '-07-06', y: 7081},
        {x: $scope.year.toString() + '-07-07', y: 7081},
        {x: $scope.year.toString() + '-07-08', y: 7081},
        {x: $scope.year.toString() + '-07-09', y: 7081},
        {x: $scope.year.toString() + '-07-10', y: 7081},
        {x: $scope.year.toString() + '-07-10', y: 7081},
        {x: $scope.year.toString() + '-07-11', y: 7081},
        {x: $scope.year.toString() + '-07-12', y: 7081},
        {x: $scope.year.toString() + '-07-14', y: 7310},
        {x: $scope.year.toString() + '-07-15', y: 7313},
        {x: $scope.year.toString() + '-07-16', y: 7648},
        {x: $scope.year.toString() + '-07-17', y: 7648},
        {x: $scope.year.toString() + '-07-18', y: 7686},
        {x: $scope.year.toString() + '-07-19', y: 7686},
        {x: $scope.year.toString() + '-07-20', y: 7686},
        {x: $scope.year.toString() + '-07-21', y: 7686},
        {x: $scope.year.toString() + '-07-22', y: 7686},
        {x: $scope.year.toString() + '-07-23', y: 7691},
        {x: $scope.year.toString() + '-07-24', y: 7793},
        {x: $scope.year.toString() + '-07-24', y: 7892},
        {x: $scope.year.toString() + '-07-25', y: 7892},
        {x: $scope.year.toString() + '-07-26', y: 7900},
        {x: $scope.year.toString() + '-07-26', y: 7900},
        {x: $scope.year.toString() + '-07-27', y: 7918},
        {x: $scope.year.toString() + '-07-27', y: 7938},
        {x: $scope.year.toString() + '-07-28', y: 7951},
        {x: $scope.year.toString() + '-07-29', y: 8169},
        {x: $scope.year.toString() + '-07-30', y: 8210},
        {x: $scope.year.toString() + '-07-30', y: 8240},
        {x: $scope.year.toString() + '-07-31', y: 8240},
        {x: $scope.year.toString() + '-08-01', y: 8240},
        {x: $scope.year.toString() + '-08-02', y: 8240},
        {x: $scope.year.toString() + '-08-03', y: 8240},
        {x: $scope.year.toString() + '-08-04', y: 8240},
        {x: $scope.year.toString() + '-08-05', y: 8240},
        {x: $scope.year.toString() + '-08-06', y: 8352},
        {x: $scope.year.toString() + '-08-06', y: 8459},
        {x: $scope.year.toString() + '-08-07', y: 8459},
        {x: $scope.year.toString() + '-08-08', y: 8459},
        {x: $scope.year.toString() + '-08-08', y: 8459},
        {x: $scope.year.toString() + '-08-09', y: 8459},
        {x: $scope.year.toString() + '-08-10', y: 8459},
        {x: $scope.year.toString() + '-08-11', y: 8619},
        {x: $scope.year.toString() + '-08-11', y: 8903},
        {x: $scope.year.toString() + '-08-12', y: 8982},
        {x: $scope.year.toString() + '-08-12', y: 9043},
        {x: $scope.year.toString() + '-08-13', y: 9043},
        {x: $scope.year.toString() + '-08-13', y: 9043},
        {x: $scope.year.toString() + '-08-14', y: 9043},
        {x: $scope.year.toString() + '-08-14', y: 9043},
        {x: $scope.year.toString() + '-08-15', y: 9061},
        {x: $scope.year.toString() + '-08-15', y: 9084},
        {x: $scope.year.toString() + '-08-16', y: 9087},
        {x: $scope.year.toString() + '-08-16', y: 9133},
        {x: $scope.year.toString() + '-08-17', y: 9133},
        {x: $scope.year.toString() + '-08-18', y: 9153},
        {x: $scope.year.toString() + '-08-18', y: 9173},
        {x: $scope.year.toString() + '-08-19', y: 9173},
        {x: $scope.year.toString() + '-08-19', y: 9173},
        {x: $scope.year.toString() + '-08-20', y: 9173},
        {x: $scope.year.toString() + '-08-21', y: 9181},
        {x: $scope.year.toString() + '-08-21', y: 9181},
        {x: $scope.year.toString() + '-08-22', y: 9181},
        {x: $scope.year.toString() + '-08-23', y: 9181},
        {x: $scope.year.toString() + '-08-23', y: 9181},
        {x: $scope.year.toString() + '-08-24', y: 9181},
        {x: $scope.year.toString() + '-08-25', y: 9181},
        {x: $scope.year.toString() + '-08-26', y: 9181},
        {x: $scope.year.toString() + '-08-27', y: 9181},
        {x: $scope.year.toString() + '-08-28', y: 9298},
        {x: $scope.year.toString() + '-08-28', y: 9445},
        {x: $scope.year.toString() + '-08-29', y: 9465},
        {x: $scope.year.toString() + '-08-29', y: 9465},
        {x: $scope.year.toString() + '-08-30', y: 9465},
        {x: $scope.year.toString() + '-08-31', y: 9465},
        {x: $scope.year.toString() + '-09-01', y: 9465},
        {x: $scope.year.toString() + '-09-02', y: 9465},
        {x: $scope.year.toString() + '-09-03', y: 9465},
        {x: $scope.year.toString() + '-09-04', y: 9465},
        {x: $scope.year.toString() + '-09-04', y: 9465},
        {x: $scope.year.toString() + '-09-05', y: 9503},
        {x: $scope.year.toString() + '-09-05', y: 9541},
        {x: $scope.year.toString() + '-09-06', y: 9541},
        {x: $scope.year.toString() + '-09-06', y: 9541},
        {x: $scope.year.toString() + '-09-07', y: 9541},
        {x: $scope.year.toString() + '-09-07', y: 9541},
        {x: $scope.year.toString() + '-09-08', y: 9541},
        {x: $scope.year.toString() + '-09-08', y: 9541},
        {x: $scope.year.toString() + '-09-09', y: 9825},
        {x: $scope.year.toString() + '-09-09', y: 10074},
        {x: $scope.year.toString() + '-09-10', y: 10074},
        {x: $scope.year.toString() + '-09-11', y: 10074},
        {x: $scope.year.toString() + '-09-12', y: 10074},
        {x: $scope.year.toString() + '-09-13', y: 10074},
        {x: $scope.year.toString() + '-09-14', y: 10074},
        {x: $scope.year.toString() + '-09-15', y: 10104},
        {x: $scope.year.toString() + '-09-15', y: 10122},
        {x: $scope.year.toString() + '-09-16', y: 10122},
        {x: $scope.year.toString() + '-09-17', y: 10122},
        {x: $scope.year.toString() + '-09-18', y: 10122},
        {x: $scope.year.toString() + '-09-19', y: 10503},
        {x: $scope.year.toString() + '-09-19', y: 10963},
        {x: $scope.year.toString() + '-09-20', y: 10963},
        {x: $scope.year.toString() + '-09-21', y: 10963},
        {x: $scope.year.toString() + '-09-21', y: 10963},
        {x: $scope.year.toString() + '-09-22', y: 10963},
        {x: $scope.year.toString() + '-09-23', y: 11082},
        {x: $scope.year.toString() + '-09-23', y: 11082},
        {x: $scope.year.toString() + '-09-24', y: 11082},
        {x: $scope.year.toString() + '-09-24', y: 11082},
        {x: $scope.year.toString() + '-09-25', y: 11082},
        {x: $scope.year.toString() + '-09-26', y: 11087},
        {x: $scope.year.toString() + '-09-26', y: 11097},
        {x: $scope.year.toString() + '-09-27', y: 11120},
        {x: $scope.year.toString() + '-09-27', y: 11158},
        {x: $scope.year.toString() + '-09-28', y: 11204},
        {x: $scope.year.toString() + '-09-28', y: 11242},
        {x: $scope.year.toString() + '-09-29', y: 11323},
        {x: $scope.year.toString() + '-09-29', y: 11447},
        {x: $scope.year.toString() + '-09-30', y: 11472},
        {x: $scope.year.toString() + '-09-30', y: 11490},
        {x: $scope.year.toString() + '-10-01', y: 11513},
        {x: $scope.year.toString() + '-10-01', y: 11528},
        {x: $scope.year.toString() + '-10-02', y: 11528},
        {x: $scope.year.toString() + '-10-02', y: 11528},
        {x: $scope.year.toString() + '-10-03', y: 11531},
        {x: $scope.year.toString() + '-10-03', y: 11531},
        {x: $scope.year.toString() + '-10-04', y: 11536},
        {x: $scope.year.toString() + '-10-04', y: 11536},
        {x: $scope.year.toString() + '-10-05', y: 11579},
        {x: $scope.year.toString() + '-10-05', y: 11635},
        {x: $scope.year.toString() + '-10-06', y: 11635},
        {x: $scope.year.toString() + '-10-07', y: 11635},
        {x: $scope.year.toString() + '-10-08', y: 11655},
        {x: $scope.year.toString() + '-10-08', y: 11675},
        {x: $scope.year.toString() + '-10-09', y: 11675},
        {x: $scope.year.toString() + '-10-10', y: 11675},
        {x: $scope.year.toString() + '-10-11', y: 11728},
        {x: $scope.year.toString() + '-10-11', y: 11751},
        {x: $scope.year.toString() + '-10-12', y: 11751},
        {x: $scope.year.toString() + '-10-12', y: 11754},
        {x: $scope.year.toString() + '-10-13', y: 11762},
        {x: $scope.year.toString() + '-10-13', y: 11767},
        {x: $scope.year.toString() + '-10-14', y: 11853},
        {x: $scope.year.toString() + '-10-14', y: 11927},
        {x: $scope.year.toString() + '-10-15', y: 11960},
        {x: $scope.year.toString() + '-10-15', y: 11988},
        {x: $scope.year.toString() + '-10-16', y: 12214},
        {x: $scope.year.toString() + '-10-16', y: 12351},
        {x: $scope.year.toString() + '-10-17', y: 12351},
        {x: $scope.year.toString() + '-10-18', y: 12351},
        {x: $scope.year.toString() + '-10-18', y: 12351},
        {x: $scope.year.toString() + '-10-19', y: 12354},
        {x: $scope.year.toString() + '-10-19', y: 12354},
        {x: $scope.year.toString() + '-10-20', y: 12748},
        {x: $scope.year.toString() + '-10-20', y: 13246},
        {x: $scope.year.toString() + '-10-21', y: 13269},
        {x: $scope.year.toString() + '-10-21', y: 13294},
        {x: $scope.year.toString() + '-10-22', y: 13294},
        {x: $scope.year.toString() + '-10-23', y: 13294},
        {x: $scope.year.toString() + '-10-24', y: 13297},
        {x: $scope.year.toString() + '-10-24', y: 13297},
        {x: $scope.year.toString() + '-10-25', y: 13297},
        {x: $scope.year.toString() + '-10-25', y: 13300},
        {x: $scope.year.toString() + '-10-26', y: 13300},
        {x: $scope.year.toString() + '-10-27', y: 13300},
        {x: $scope.year.toString() + '-10-28', y: 13300},
        {x: $scope.year.toString() + '-10-29', y: 13300},
        {x: $scope.year.toString() + '-10-29', y: 13300},
        {x: $scope.year.toString() + '-10-30', y: 13374},
        {x: $scope.year.toString() + '-10-30', y: 13458},
        {x: $scope.year.toString() + '-10-31', y: 13466},
        {x: $scope.year.toString() + '-10-31', y: 13479},
        {x: $scope.year.toString() + '-11-01', y: 13484},
        {x: $scope.year.toString() + '-11-01', y: 13484},
        {x: $scope.year.toString() + '-11-02', y: 13487},
        {x: $scope.year.toString() + '-11-03', y: 13487},
        {x: $scope.year.toString() + '-11-03', y: 13487},
        {x: $scope.year.toString() + '-11-04', y: 13487},
        {x: $scope.year.toString() + '-11-05', y: 13487},
        {x: $scope.year.toString() + '-11-06', y: 13487},
        {x: $scope.year.toString() + '-11-07', y: 13487},
        {x: $scope.year.toString() + '-11-08', y: 13487},
        {x: $scope.year.toString() + '-11-08', y: 13487},
        {x: $scope.year.toString() + '-11-09', y: 13487},
        {x: $scope.year.toString() + '-11-10', y: 13487},
        {x: $scope.year.toString() + '-11-11', y: 13487},
        {x: $scope.year.toString() + '-11-12', y: 13487},
        {x: $scope.year.toString() + '-11-13', y: 13624},
        {x: $scope.year.toString() + '-11-13', y: 13738},
        {x: $scope.year.toString() + '-11-14', y: 13822},
        {x: $scope.year.toString() + '-11-14', y: 13924},
        {x: $scope.year.toString() + '-11-15', y: 13924},
        {x: $scope.year.toString() + '-11-16', y: 13924},
        {x: $scope.year.toString() + '-11-17', y: 13924},
        {x: $scope.year.toString() + '-11-18', y: 13924},
        {x: $scope.year.toString() + '-11-19', y: 13924},
        {x: $scope.year.toString() + '-11-20', y: 13924},
        {x: $scope.year.toString() + '-11-21', y: 13924},
        {x: $scope.year.toString() + '-11-22', y: 13924},
        {x: $scope.year.toString() + '-11-23', y: 13924},
        {x: $scope.year.toString() + '-11-24', y: 13929},
        {x: $scope.year.toString() + '-11-24', y: 13929},
        {x: $scope.year.toString() + '-11-25', y: 13929},
        {x: $scope.year.toString() + '-11-26', y: 13929},
        {x: $scope.year.toString() + '-11-26', y: 13929},
        {x: $scope.year.toString() + '-11-27', y: 13929},
        {x: $scope.year.toString() + '-11-28', y: 13937},
        {x: $scope.year.toString() + '-11-28', y: 13942},
        {x: $scope.year.toString() + '-11-29', y: 13942},
        {x: $scope.year.toString() + '-11-29', y: 13942},
        {x: $scope.year.toString() + '-11-30', y: 13942},
        {x: $scope.year.toString() + '-12-01', y: 13952},
        {x: $scope.year.toString() + '-12-01', y: 13965},
        {x: $scope.year.toString() + '-12-02', y: 13965},
        {x: $scope.year.toString() + '-12-03', y: 14018},
        {x: $scope.year.toString() + '-12-04', y: 14021},
        {x: $scope.year.toString() + '-12-04', y: 14021},
        {x: $scope.year.toString() + '-12-05', y: 14079},
        {x: $scope.year.toString() + '-12-05', y: 14137},
        {x: $scope.year.toString() + '-12-06', y: 14137},
        {x: $scope.year.toString() + '-12-07', y: 14137},
        {x: $scope.year.toString() + '-12-08', y: 14208},
        {x: $scope.year.toString() + '-12-08', y: 14277},
        {x: $scope.year.toString() + '-12-09', y: 14282},
        {x: $scope.year.toString() + '-12-09', y: 14292},
        {x: $scope.year.toString() + '-12-10', y: 14348},
        {x: $scope.year.toString() + '-12-10', y: 14404},
        {x: $scope.year.toString() + '-12-11', y: 14490},
        {x: $scope.year.toString() + '-12-11', y: 14576},
        {x: $scope.year.toString() + '-12-12', y: 14576},
        {x: $scope.year.toString() + '-12-12', y: 14576},
        {x: $scope.year.toString() + '-12-13', y: 14576},
        {x: $scope.year.toString() + '-12-14', y: 14576},
        {x: $scope.year.toString() + '-12-15', y: 14576},
        {x: $scope.year.toString() + '-12-16', y: 14576},
        {x: $scope.year.toString() + '-12-17', y: 14640},
        {x: $scope.year.toString() + '-12-17', y: 14688},
        {x: $scope.year.toString() + '-12-18', y: 14812},
        {x: $scope.year.toString() + '-12-18', y: 14969},
        {x: $scope.year.toString() + '-12-19', y: 15002},
        {x: $scope.year.toString() + '-12-19', y: 15030},
        {x: $scope.year.toString() + '-12-20', y: 15030},
        {x: $scope.year.toString() + '-12-20', y: 15030},
        {x: $scope.year.toString() + '-12-21', y: 15053},
        {x: $scope.year.toString() + '-12-21', y: 15091},
        {x: $scope.year.toString() + '-12-22', y: 15170},
        {x: $scope.year.toString() + '-12-22', y: 15241},
        {x: $scope.year.toString() + '-12-23', y: 15241},
        {x: $scope.year.toString() + '-12-24', y: 15241},
        {x: $scope.year.toString() + '-12-25', y: 15251},
        {x: $scope.year.toString() + '-12-25', y: 15276},
        {x: $scope.year.toString() + '-12-26', y: 15276},
        {x: $scope.year.toString() + '-12-27', y: 15337},
        {x: $scope.year.toString() + '-12-28', y: 15411},
        {x: $scope.year.toString() + '-12-29', y: 15411},
        {x: $scope.year.toString() + '-12-30', y: 15467},
        {x: $scope.year.toString() + '-12-30', y: 15746}
      ]
    };
    var dateStrings = _.pluck(seedData.data, 'x');
    dateStrings.unshift('time');
    var testSeries = _.pluck(seedData.data, 'y');
    testSeries.unshift('testSeries');
    // console.log(labels, testSeries);

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
      '13': 'Geogia',
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
        chart.unload('initialized');
      });
    };

    $scope.layerToggles = [
        { name: 'Drought Severity'},
        { name: '% of farm land requiring irrigation'}
    ];

    $scope.index = { };    

    $scope.$watch('index', function(newValue, oldValue) {
        if(newValue !== oldValue)
        {
            if(newValue.name == $scope.layerToggles[0].name)
            {
                //Hide irrigation layer, show drought layer
                d3.select('#irrigation').attr('visibility', 'hidden');
                d3.select('#zones').attr('visibility', 'visible');       
            }
            if(newValue.name == $scope.layerToggles[1].name)
            {                
                //Hide drought layer, show irrigation layer
                d3.select('#zones').attr('visibility', 'hidden');
                d3.select('#irrigation').attr('visibility', 'visible');    
            }
        }        
    });

    // Compute height
    var maxWidth = Math.min($('#chart').innerWidth(), 700);
    var width = 700;
    var paddingLeft = (maxWidth - width) / 2;
    var maxHeight = Math.max(window.innerHeight - 30 - $('#navbar').outerHeight(), 240);
    var height = 300;
    var paddingTop = (maxHeight - height) / 2;

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
        width: $('#chart').innerWidth(),
        height: height + paddingTop
      },
      padding: {
        // left: paddingLeft,
        top: paddingTop
      },
      data: {
        x: 'time',
        columns: [
          dateStrings,
          ['initialized', {x: $scope.year.toString() + '-01-01', y: 0}, {x: $scope.year.toString() + '-12-31', y: 0}]
          // testSeries
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
      legend: { position: 'bottom' },
    };

    // C3 chart
    var chart = c3.generate($scope.config);
    // $scope.appendSeries('FIPS:12', 2012);

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

    // Dynamically remove series from the chart according to which states are deselected
    var hide = function() {
      var id = pad(globalService.nextDeselection(), 2).toString();
      // $scope.appendSeries(id);
      console.log('deselect ' + id);
      chart.unload(fipsTable[id]);
    };
    globalService.registerObserverCallback('deselect', hide);

  }
]);
