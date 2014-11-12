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
      name: 'Troy, NY',
      color: 'steelblue',
      data: [
        {x: Date.parse('2012-01-01'), y: 0},
        {x: Date.parse('2012-01-02'), y: 0},
        {x: Date.parse('2012-01-03'), y: 0},
        {x: Date.parse('2012-01-04'), y: 0},
        {x: Date.parse('2012-01-05'), y: 0},
        {x: Date.parse('2012-01-06'), y: 0},
        {x: Date.parse('2012-01-07'), y: 0},
        {x: Date.parse('2012-01-08'), y: 0},
        {x: Date.parse('2012-01-09'), y: 0},
        {x: Date.parse('2012-01-10'), y: 0},
        {x: Date.parse('2012-01-11'), y: 0},
        {x: Date.parse('2012-01-12'), y: 86},
        {x: Date.parse('2012-01-13'), y: 137},
        {x: Date.parse('2012-01-14'), y: 142},
        {x: Date.parse('2012-01-15'), y: 142},
        {x: Date.parse('2012-01-16'), y: 142},
        {x: Date.parse('2012-01-17'), y: 157},
        {x: Date.parse('2012-01-18'), y: 198},
        {x: Date.parse('2012-01-19'), y: 198},
        {x: Date.parse('2012-01-20'), y: 198},
        {x: Date.parse('2012-01-21'), y: 198},
        {x: Date.parse('2012-01-22'), y: 198},
        {x: Date.parse('2012-01-23'), y: 198},
        {x: Date.parse('2012-01-24'), y: 234},
        {x: Date.parse('2012-01-25'), y: 234},
        {x: Date.parse('2012-01-26'), y: 234},
        {x: Date.parse('2012-01-27'), y: 493},
        {x: Date.parse('2012-01-28'), y: 518},
        {x: Date.parse('2012-01-29'), y: 518},
        {x: Date.parse('2012-01-30'), y: 518},
        {x: Date.parse('2012-01-31'), y: 523},
        {x: Date.parse('2012-02-01'), y: 523},
        {x: Date.parse('2012-02-02'), y: 523},
        {x: Date.parse('2012-02-03'), y: 523},
        {x: Date.parse('2012-02-04'), y: 523},
        {x: Date.parse('2012-02-05'), y: 523},
        {x: Date.parse('2012-02-06'), y: 523},
        {x: Date.parse('2012-02-07'), y: 523},
        {x: Date.parse('2012-02-08'), y: 523},
        {x: Date.parse('2012-02-09'), y: 523},
        {x: Date.parse('2012-02-10'), y: 523},
        {x: Date.parse('2012-02-11'), y: 523},
        {x: Date.parse('2012-02-12'), y: 523},
        {x: Date.parse('2012-02-13'), y: 650},
        {x: Date.parse('2012-02-14'), y: 650},
        {x: Date.parse('2012-02-15'), y: 650},
        {x: Date.parse('2012-02-16'), y: 650},
        {x: Date.parse('2012-02-17'), y: 680},
        {x: Date.parse('2012-02-18'), y: 680},
        {x: Date.parse('2012-02-19'), y: 685},
        {x: Date.parse('2012-02-20'), y: 685},
        {x: Date.parse('2012-02-21'), y: 685},
        {x: Date.parse('2012-02-22'), y: 685},
        {x: Date.parse('2012-02-23'), y: 710},
        {x: Date.parse('2012-02-24'), y: 710},
        {x: Date.parse('2012-02-25'), y: 776},
        {x: Date.parse('2012-02-26'), y: 776},
        {x: Date.parse('2012-02-27'), y: 776},
        {x: Date.parse('2012-02-28'), y: 776},
        {x: Date.parse('2012-02-29'), y: 776},
        {x: Date.parse('2012-03-01'), y: 1005},
        {x: Date.parse('2012-03-02'), y: 1005},
        {x: Date.parse('2012-03-03'), y: 1005},
        {x: Date.parse('2012-03-04'), y: 1005},
        {x: Date.parse('2012-03-05'), y: 1005},
        {x: Date.parse('2012-03-06'), y: 1005},
        {x: Date.parse('2012-03-07'), y: 1005},
        {x: Date.parse('2012-03-08'), y: 1005},
        {x: Date.parse('2012-03-09'), y: 1048},
        {x: Date.parse('2012-03-10'), y: 1048},
        {x: Date.parse('2012-03-11'), y: 1048},
        {x: Date.parse('2012-03-12'), y: 1048},
        {x: Date.parse('2012-03-13'), y: 1048},
        {x: Date.parse('2012-03-14'), y: 1048},
        {x: Date.parse('2012-03-15'), y: 1048},
        {x: Date.parse('2012-03-16'), y: 1099},
        {x: Date.parse('2012-03-17'), y: 1122},
        {x: Date.parse('2012-03-18'), y: 1122},
        {x: Date.parse('2012-03-19'), y: 1122},
        {x: Date.parse('2012-03-20'), y: 1122},
        {x: Date.parse('2012-03-21'), y: 1122},
        {x: Date.parse('2012-03-22'), y: 1122},
        {x: Date.parse('2012-03-23'), y: 1122},
        {x: Date.parse('2012-03-24'), y: 1122},
        {x: Date.parse('2012-03-25'), y: 1122},
        {x: Date.parse('2012-03-26'), y: 1122},
        {x: Date.parse('2012-03-27'), y: 1122},
        {x: Date.parse('2012-03-28'), y: 1122},
        {x: Date.parse('2012-03-29'), y: 1155},
        {x: Date.parse('2012-03-30'), y: 1155},
        {x: Date.parse('2012-03-31'), y: 1155},
        {x: Date.parse('2012-04-01'), y: 1155},
        {x: Date.parse('2012-04-02'), y: 1175},
        {x: Date.parse('2012-04-03'), y: 1175},
        {x: Date.parse('2012-04-04'), y: 1175},
        {x: Date.parse('2012-04-05'), y: 1178},
        {x: Date.parse('2012-04-06'), y: 1178},
        {x: Date.parse('2012-04-07'), y: 1178},
        {x: Date.parse('2012-04-08'), y: 1178},
        {x: Date.parse('2012-04-09'), y: 1178},
        {x: Date.parse('2012-04-10'), y: 1178},
        {x: Date.parse('2012-04-11'), y: 1178},
        {x: Date.parse('2012-04-12'), y: 1178},
        {x: Date.parse('2012-04-13'), y: 1178},
        {x: Date.parse('2012-04-14'), y: 1178},
        {x: Date.parse('2012-04-15'), y: 1178},
        {x: Date.parse('2012-04-16'), y: 1178},
        {x: Date.parse('2012-04-17'), y: 1178},
        {x: Date.parse('2012-04-18'), y: 1178},
        {x: Date.parse('2012-04-19'), y: 1178},
        {x: Date.parse('2012-04-20'), y: 1178},
        {x: Date.parse('2012-04-21'), y: 1178},
        {x: Date.parse('2012-04-22'), y: 1440},
        {x: Date.parse('2012-04-22'), y: 1658},
        {x: Date.parse('2012-04-23'), y: 2001},
        {x: Date.parse('2012-04-23'), y: 2395},
        {x: Date.parse('2012-04-24'), y: 2395},
        {x: Date.parse('2012-04-24'), y: 2400},
        {x: Date.parse('2012-04-25'), y: 2403},
        {x: Date.parse('2012-04-25'), y: 2406},
        {x: Date.parse('2012-04-26'), y: 2406},
        {x: Date.parse('2012-04-26'), y: 2406},
        {x: Date.parse('2012-04-27'), y: 2411},
        {x: Date.parse('2012-04-27'), y: 2411},
        {x: Date.parse('2012-04-28'), y: 2411},
        {x: Date.parse('2012-04-29'), y: 2411},
        {x: Date.parse('2012-04-29'), y: 2411},
        {x: Date.parse('2012-04-30'), y: 2411},
        {x: Date.parse('2012-04-30'), y: 2411},
        {x: Date.parse('2012-05-01'), y: 2495},
        {x: Date.parse('2012-05-01'), y: 2592},
        {x: Date.parse('2012-05-02'), y: 2617},
        {x: Date.parse('2012-05-02'), y: 2665},
        {x: Date.parse('2012-05-03'), y: 2729},
        {x: Date.parse('2012-05-03'), y: 2831},
        {x: Date.parse('2012-05-04'), y: 2859},
        {x: Date.parse('2012-05-04'), y: 2897},
        {x: Date.parse('2012-05-05'), y: 2897},
        {x: Date.parse('2012-05-06'), y: 2897},
        {x: Date.parse('2012-05-07'), y: 2897},
        {x: Date.parse('2012-05-07'), y: 2897},
        {x: Date.parse('2012-05-08'), y: 3034},
        {x: Date.parse('2012-05-08'), y: 3186},
        {x: Date.parse('2012-05-09'), y: 3392},
        {x: Date.parse('2012-05-09'), y: 3580},
        {x: Date.parse('2012-05-10'), y: 3610},
        {x: Date.parse('2012-05-10'), y: 3640},
        {x: Date.parse('2012-05-11'), y: 3645},
        {x: Date.parse('2012-05-11'), y: 3648},
        {x: Date.parse('2012-05-12'), y: 3648},
        {x: Date.parse('2012-05-13'), y: 3648},
        {x: Date.parse('2012-05-14'), y: 3663},
        {x: Date.parse('2012-05-14'), y: 3678},
        {x: Date.parse('2012-05-15'), y: 3843},
        {x: Date.parse('2012-05-15'), y: 4006},
        {x: Date.parse('2012-05-16'), y: 4133},
        {x: Date.parse('2012-05-16'), y: 4290},
        {x: Date.parse('2012-05-17'), y: 4465},
        {x: Date.parse('2012-05-17'), y: 4579},
        {x: Date.parse('2012-05-18'), y: 4579},
        {x: Date.parse('2012-05-19'), y: 4579},
        {x: Date.parse('2012-05-20'), y: 4579},
        {x: Date.parse('2012-05-21'), y: 4579},
        {x: Date.parse('2012-05-21'), y: 4579},
        {x: Date.parse('2012-05-22'), y: 4609},
        {x: Date.parse('2012-05-22'), y: 4650},
        {x: Date.parse('2012-05-23'), y: 4739},
        {x: Date.parse('2012-05-23'), y: 4785},
        {x: Date.parse('2012-05-24'), y: 4785},
        {x: Date.parse('2012-05-24'), y: 4785},
        {x: Date.parse('2012-05-25'), y: 4821},
        {x: Date.parse('2012-05-25'), y: 4834},
        {x: Date.parse('2012-05-26'), y: 4834},
        {x: Date.parse('2012-05-27'), y: 4834},
        {x: Date.parse('2012-05-28'), y: 4834},
        {x: Date.parse('2012-05-29'), y: 4834},
        {x: Date.parse('2012-05-29'), y: 4834},
        {x: Date.parse('2012-05-30'), y: 5152},
        {x: Date.parse('2012-05-30'), y: 5431},
        {x: Date.parse('2012-05-31'), y: 5616},
        {x: Date.parse('2012-05-31'), y: 5730},
        {x: Date.parse('2012-06-01'), y: 5730},
        {x: Date.parse('2012-06-01'), y: 5730},
        {x: Date.parse('2012-06-02'), y: 5766},
        {x: Date.parse('2012-06-02'), y: 5809},
        {x: Date.parse('2012-06-03'), y: 5845},
        {x: Date.parse('2012-06-03'), y: 5901},
        {x: Date.parse('2012-06-04'), y: 6013},
        {x: Date.parse('2012-06-04'), y: 6168},
        {x: Date.parse('2012-06-05'), y: 6183},
        {x: Date.parse('2012-06-05'), y: 6193},
        {x: Date.parse('2012-06-06'), y: 6193},
        {x: Date.parse('2012-06-06'), y: 6193},
        {x: Date.parse('2012-06-07'), y: 6196},
        {x: Date.parse('2012-06-07'), y: 6201},
        {x: Date.parse('2012-06-08'), y: 6216},
        {x: Date.parse('2012-06-08'), y: 6216},
        {x: Date.parse('2012-06-09'), y: 6246},
        {x: Date.parse('2012-06-09'), y: 6282},
        {x: Date.parse('2012-06-10'), y: 6282},
        {x: Date.parse('2012-06-11'), y: 6282},
        {x: Date.parse('2012-06-11'), y: 6282},
        {x: Date.parse('2012-06-12'), y: 6282},
        {x: Date.parse('2012-06-12'), y: 6282},
        {x: Date.parse('2012-06-13'), y: 6518},
        {x: Date.parse('2012-06-13'), y: 6726},
        {x: Date.parse('2012-06-14'), y: 6726},
        {x: Date.parse('2012-06-14'), y: 6726},
        {x: Date.parse('2012-06-15'), y: 6726},
        {x: Date.parse('2012-06-16'), y: 6726},
        {x: Date.parse('2012-06-17'), y: 6726},
        {x: Date.parse('2012-06-18'), y: 6726},
        {x: Date.parse('2012-06-19'), y: 6726},
        {x: Date.parse('2012-06-20'), y: 6726},
        {x: Date.parse('2012-06-21'), y: 6726},
        {x: Date.parse('2012-06-22'), y: 6726},
        {x: Date.parse('2012-06-23'), y: 6726},
        {x: Date.parse('2012-06-24'), y: 6726},
        {x: Date.parse('2012-06-25'), y: 6744},
        {x: Date.parse('2012-06-25'), y: 6774},
        {x: Date.parse('2012-06-26'), y: 6820},
        {x: Date.parse('2012-06-26'), y: 6833},
        {x: Date.parse('2012-06-27'), y: 6863},
        {x: Date.parse('2012-06-27'), y: 6881},
        {x: Date.parse('2012-06-28'), y: 6881},
        {x: Date.parse('2012-06-28'), y: 6881},
        {x: Date.parse('2012-06-29'), y: 6884},
        {x: Date.parse('2012-06-29'), y: 6887},
        {x: Date.parse('2012-06-30'), y: 6887},
        {x: Date.parse('2012-07-01'), y: 6887},
        {x: Date.parse('2012-07-02'), y: 6989},
        {x: Date.parse('2012-07-02'), y: 7004},
        {x: Date.parse('2012-07-03'), y: 7004},
        {x: Date.parse('2012-07-03'), y: 7012},
        {x: Date.parse('2012-07-04'), y: 7035},
        {x: Date.parse('2012-07-04'), y: 7081},
        {x: Date.parse('2012-07-05'), y: 7081},
        {x: Date.parse('2012-07-06'), y: 7081},
        {x: Date.parse('2012-07-06'), y: 7081},
        {x: Date.parse('2012-07-07'), y: 7081},
        {x: Date.parse('2012-07-08'), y: 7081},
        {x: Date.parse('2012-07-09'), y: 7081},
        {x: Date.parse('2012-07-10'), y: 7081},
        {x: Date.parse('2012-07-10'), y: 7081},
        {x: Date.parse('2012-07-11'), y: 7081},
        {x: Date.parse('2012-07-12'), y: 7081},
        {x: Date.parse('2012-07-14'), y: 7310},
        {x: Date.parse('2012-07-15'), y: 7313},
        {x: Date.parse('2012-07-16'), y: 7648},
        {x: Date.parse('2012-07-17'), y: 7648},
        {x: Date.parse('2012-07-18'), y: 7686},
        {x: Date.parse('2012-07-19'), y: 7686},
        {x: Date.parse('2012-07-20'), y: 7686},
        {x: Date.parse('2012-07-21'), y: 7686},
        {x: Date.parse('2012-07-22'), y: 7686},
        {x: Date.parse('2012-07-23'), y: 7691},
        {x: Date.parse('2012-07-24'), y: 7793},
        {x: Date.parse('2012-07-24'), y: 7892},
        {x: Date.parse('2012-07-25'), y: 7892},
        {x: Date.parse('2012-07-26'), y: 7900},
        {x: Date.parse('2012-07-26'), y: 7900},
        {x: Date.parse('2012-07-27'), y: 7918},
        {x: Date.parse('2012-07-27'), y: 7938},
        {x: Date.parse('2012-07-28'), y: 7951},
        {x: Date.parse('2012-07-29'), y: 8169},
        {x: Date.parse('2012-07-30'), y: 8210},
        {x: Date.parse('2012-07-30'), y: 8240},
        {x: Date.parse('2012-07-31'), y: 8240},
        {x: Date.parse('2012-08-01'), y: 8240},
        {x: Date.parse('2012-08-02'), y: 8240},
        {x: Date.parse('2012-08-03'), y: 8240},
        {x: Date.parse('2012-08-04'), y: 8240},
        {x: Date.parse('2012-08-05'), y: 8240},
        {x: Date.parse('2012-08-06'), y: 8352},
        {x: Date.parse('2012-08-06'), y: 8459},
        {x: Date.parse('2012-08-07'), y: 8459},
        {x: Date.parse('2012-08-08'), y: 8459},
        {x: Date.parse('2012-08-08'), y: 8459},
        {x: Date.parse('2012-08-09'), y: 8459},
        {x: Date.parse('2012-08-10'), y: 8459},
        {x: Date.parse('2012-08-11'), y: 8619},
        {x: Date.parse('2012-08-11'), y: 8903},
        {x: Date.parse('2012-08-12'), y: 8982},
        {x: Date.parse('2012-08-12'), y: 9043},
        {x: Date.parse('2012-08-13'), y: 9043},
        {x: Date.parse('2012-08-13'), y: 9043},
        {x: Date.parse('2012-08-14'), y: 9043},
        {x: Date.parse('2012-08-14'), y: 9043},
        {x: Date.parse('2012-08-15'), y: 9061},
        {x: Date.parse('2012-08-15'), y: 9084},
        {x: Date.parse('2012-08-16'), y: 9087},
        {x: Date.parse('2012-08-16'), y: 9133},
        {x: Date.parse('2012-08-17'), y: 9133},
        {x: Date.parse('2012-08-18'), y: 9153},
        {x: Date.parse('2012-08-18'), y: 9173},
        {x: Date.parse('2012-08-19'), y: 9173},
        {x: Date.parse('2012-08-19'), y: 9173},
        {x: Date.parse('2012-08-20'), y: 9173},
        {x: Date.parse('2012-08-21'), y: 9181},
        {x: Date.parse('2012-08-21'), y: 9181},
        {x: Date.parse('2012-08-22'), y: 9181},
        {x: Date.parse('2012-08-23'), y: 9181},
        {x: Date.parse('2012-08-23'), y: 9181},
        {x: Date.parse('2012-08-24'), y: 9181},
        {x: Date.parse('2012-08-25'), y: 9181},
        {x: Date.parse('2012-08-26'), y: 9181},
        {x: Date.parse('2012-08-27'), y: 9181},
        {x: Date.parse('2012-08-28'), y: 9298},
        {x: Date.parse('2012-08-28'), y: 9445},
        {x: Date.parse('2012-08-29'), y: 9465},
        {x: Date.parse('2012-08-29'), y: 9465},
        {x: Date.parse('2012-08-30'), y: 9465},
        {x: Date.parse('2012-08-31'), y: 9465},
        {x: Date.parse('2012-09-01'), y: 9465},
        {x: Date.parse('2012-09-02'), y: 9465},
        {x: Date.parse('2012-09-03'), y: 9465},
        {x: Date.parse('2012-09-04'), y: 9465},
        {x: Date.parse('2012-09-04'), y: 9465},
        {x: Date.parse('2012-09-05'), y: 9503},
        {x: Date.parse('2012-09-05'), y: 9541},
        {x: Date.parse('2012-09-06'), y: 9541},
        {x: Date.parse('2012-09-06'), y: 9541},
        {x: Date.parse('2012-09-07'), y: 9541},
        {x: Date.parse('2012-09-07'), y: 9541},
        {x: Date.parse('2012-09-08'), y: 9541},
        {x: Date.parse('2012-09-08'), y: 9541},
        {x: Date.parse('2012-09-09'), y: 9825},
        {x: Date.parse('2012-09-09'), y: 10074},
        {x: Date.parse('2012-09-10'), y: 10074},
        {x: Date.parse('2012-09-11'), y: 10074},
        {x: Date.parse('2012-09-12'), y: 10074},
        {x: Date.parse('2012-09-13'), y: 10074},
        {x: Date.parse('2012-09-14'), y: 10074},
        {x: Date.parse('2012-09-15'), y: 10104},
        {x: Date.parse('2012-09-15'), y: 10122},
        {x: Date.parse('2012-09-16'), y: 10122},
        {x: Date.parse('2012-09-17'), y: 10122},
        {x: Date.parse('2012-09-18'), y: 10122},
        {x: Date.parse('2012-09-19'), y: 10503},
        {x: Date.parse('2012-09-19'), y: 10963},
        {x: Date.parse('2012-09-20'), y: 10963},
        {x: Date.parse('2012-09-21'), y: 10963},
        {x: Date.parse('2012-09-21'), y: 10963},
        {x: Date.parse('2012-09-22'), y: 10963},
        {x: Date.parse('2012-09-23'), y: 11082},
        {x: Date.parse('2012-09-23'), y: 11082},
        {x: Date.parse('2012-09-24'), y: 11082},
        {x: Date.parse('2012-09-24'), y: 11082},
        {x: Date.parse('2012-09-25'), y: 11082},
        {x: Date.parse('2012-09-26'), y: 11087},
        {x: Date.parse('2012-09-26'), y: 11097},
        {x: Date.parse('2012-09-27'), y: 11120},
        {x: Date.parse('2012-09-27'), y: 11158},
        {x: Date.parse('2012-09-28'), y: 11204},
        {x: Date.parse('2012-09-28'), y: 11242},
        {x: Date.parse('2012-09-29'), y: 11323},
        {x: Date.parse('2012-09-29'), y: 11447},
        {x: Date.parse('2012-09-30'), y: 11472},
        {x: Date.parse('2012-09-30'), y: 11490},
        {x: Date.parse('2012-10-01'), y: 11513},
        {x: Date.parse('2012-10-01'), y: 11528},
        {x: Date.parse('2012-10-02'), y: 11528},
        {x: Date.parse('2012-10-02'), y: 11528},
        {x: Date.parse('2012-10-03'), y: 11531},
        {x: Date.parse('2012-10-03'), y: 11531},
        {x: Date.parse('2012-10-04'), y: 11536},
        {x: Date.parse('2012-10-04'), y: 11536},
        {x: Date.parse('2012-10-05'), y: 11579},
        {x: Date.parse('2012-10-05'), y: 11635},
        {x: Date.parse('2012-10-06'), y: 11635},
        {x: Date.parse('2012-10-07'), y: 11635},
        {x: Date.parse('2012-10-08'), y: 11655},
        {x: Date.parse('2012-10-08'), y: 11675},
        {x: Date.parse('2012-10-09'), y: 11675},
        {x: Date.parse('2012-10-10'), y: 11675},
        {x: Date.parse('2012-10-11'), y: 11728},
        {x: Date.parse('2012-10-11'), y: 11751},
        {x: Date.parse('2012-10-12'), y: 11751},
        {x: Date.parse('2012-10-12'), y: 11754},
        {x: Date.parse('2012-10-13'), y: 11762},
        {x: Date.parse('2012-10-13'), y: 11767},
        {x: Date.parse('2012-10-14'), y: 11853},
        {x: Date.parse('2012-10-14'), y: 11927},
        {x: Date.parse('2012-10-15'), y: 11960},
        {x: Date.parse('2012-10-15'), y: 11988},
        {x: Date.parse('2012-10-16'), y: 12214},
        {x: Date.parse('2012-10-16'), y: 12351},
        {x: Date.parse('2012-10-17'), y: 12351},
        {x: Date.parse('2012-10-18'), y: 12351},
        {x: Date.parse('2012-10-18'), y: 12351},
        {x: Date.parse('2012-10-19'), y: 12354},
        {x: Date.parse('2012-10-19'), y: 12354},
        {x: Date.parse('2012-10-20'), y: 12748},
        {x: Date.parse('2012-10-20'), y: 13246},
        {x: Date.parse('2012-10-21'), y: 13269},
        {x: Date.parse('2012-10-21'), y: 13294},
        {x: Date.parse('2012-10-22'), y: 13294},
        {x: Date.parse('2012-10-23'), y: 13294},
        {x: Date.parse('2012-10-24'), y: 13297},
        {x: Date.parse('2012-10-24'), y: 13297},
        {x: Date.parse('2012-10-25'), y: 13297},
        {x: Date.parse('2012-10-25'), y: 13300},
        {x: Date.parse('2012-10-26'), y: 13300},
        {x: Date.parse('2012-10-27'), y: 13300},
        {x: Date.parse('2012-10-28'), y: 13300},
        {x: Date.parse('2012-10-29'), y: 13300},
        {x: Date.parse('2012-10-29'), y: 13300},
        {x: Date.parse('2012-10-30'), y: 13374},
        {x: Date.parse('2012-10-30'), y: 13458},
        {x: Date.parse('2012-10-31'), y: 13466},
        {x: Date.parse('2012-10-31'), y: 13479},
        {x: Date.parse('2012-11-01'), y: 13484},
        {x: Date.parse('2012-11-01'), y: 13484},
        {x: Date.parse('2012-11-02'), y: 13487},
        {x: Date.parse('2012-11-03'), y: 13487},
        {x: Date.parse('2012-11-03'), y: 13487},
        {x: Date.parse('2012-11-04'), y: 13487},
        {x: Date.parse('2012-11-05'), y: 13487},
        {x: Date.parse('2012-11-06'), y: 13487},
        {x: Date.parse('2012-11-07'), y: 13487},
        {x: Date.parse('2012-11-08'), y: 13487},
        {x: Date.parse('2012-11-08'), y: 13487},
        {x: Date.parse('2012-11-09'), y: 13487},
        {x: Date.parse('2012-11-10'), y: 13487},
        {x: Date.parse('2012-11-11'), y: 13487},
        {x: Date.parse('2012-11-12'), y: 13487},
        {x: Date.parse('2012-11-13'), y: 13624},
        {x: Date.parse('2012-11-13'), y: 13738},
        {x: Date.parse('2012-11-14'), y: 13822},
        {x: Date.parse('2012-11-14'), y: 13924},
        {x: Date.parse('2012-11-15'), y: 13924},
        {x: Date.parse('2012-11-16'), y: 13924},
        {x: Date.parse('2012-11-17'), y: 13924},
        {x: Date.parse('2012-11-18'), y: 13924},
        {x: Date.parse('2012-11-19'), y: 13924},
        {x: Date.parse('2012-11-20'), y: 13924},
        {x: Date.parse('2012-11-21'), y: 13924},
        {x: Date.parse('2012-11-22'), y: 13924},
        {x: Date.parse('2012-11-23'), y: 13924},
        {x: Date.parse('2012-11-24'), y: 13929},
        {x: Date.parse('2012-11-24'), y: 13929},
        {x: Date.parse('2012-11-25'), y: 13929},
        {x: Date.parse('2012-11-26'), y: 13929},
        {x: Date.parse('2012-11-26'), y: 13929},
        {x: Date.parse('2012-11-27'), y: 13929},
        {x: Date.parse('2012-11-28'), y: 13937},
        {x: Date.parse('2012-11-28'), y: 13942},
        {x: Date.parse('2012-11-29'), y: 13942},
        {x: Date.parse('2012-11-29'), y: 13942},
        {x: Date.parse('2012-11-30'), y: 13942},
        {x: Date.parse('2012-12-01'), y: 13952},
        {x: Date.parse('2012-12-01'), y: 13965},
        {x: Date.parse('2012-12-02'), y: 13965},
        {x: Date.parse('2012-12-03'), y: 14018},
        {x: Date.parse('2012-12-04'), y: 14021},
        {x: Date.parse('2012-12-04'), y: 14021},
        {x: Date.parse('2012-12-05'), y: 14079},
        {x: Date.parse('2012-12-05'), y: 14137},
        {x: Date.parse('2012-12-06'), y: 14137},
        {x: Date.parse('2012-12-07'), y: 14137},
        {x: Date.parse('2012-12-08'), y: 14208},
        {x: Date.parse('2012-12-08'), y: 14277},
        {x: Date.parse('2012-12-09'), y: 14282},
        {x: Date.parse('2012-12-09'), y: 14292},
        {x: Date.parse('2012-12-10'), y: 14348},
        {x: Date.parse('2012-12-10'), y: 14404},
        {x: Date.parse('2012-12-11'), y: 14490},
        {x: Date.parse('2012-12-11'), y: 14576},
        {x: Date.parse('2012-12-12'), y: 14576},
        {x: Date.parse('2012-12-12'), y: 14576},
        {x: Date.parse('2012-12-13'), y: 14576},
        {x: Date.parse('2012-12-14'), y: 14576},
        {x: Date.parse('2012-12-15'), y: 14576},
        {x: Date.parse('2012-12-16'), y: 14576},
        {x: Date.parse('2012-12-17'), y: 14640},
        {x: Date.parse('2012-12-17'), y: 14688},
        {x: Date.parse('2012-12-18'), y: 14812},
        {x: Date.parse('2012-12-18'), y: 14969},
        {x: Date.parse('2012-12-19'), y: 15002},
        {x: Date.parse('2012-12-19'), y: 15030},
        {x: Date.parse('2012-12-20'), y: 15030},
        {x: Date.parse('2012-12-20'), y: 15030},
        {x: Date.parse('2012-12-21'), y: 15053},
        {x: Date.parse('2012-12-21'), y: 15091},
        {x: Date.parse('2012-12-22'), y: 15170},
        {x: Date.parse('2012-12-22'), y: 15241},
        {x: Date.parse('2012-12-23'), y: 15241},
        {x: Date.parse('2012-12-24'), y: 15241},
        {x: Date.parse('2012-12-25'), y: 15251},
        {x: Date.parse('2012-12-25'), y: 15276},
        {x: Date.parse('2012-12-26'), y: 15276},
        {x: Date.parse('2012-12-27'), y: 15337},
        {x: Date.parse('2012-12-28'), y: 15411},
        {x: Date.parse('2012-12-29'), y: 15411},
        {x: Date.parse('2012-12-30'), y: 15467},
        {x: Date.parse('2012-12-30'), y: 15746}
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
