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
        {x: convert('2012-01-01'), y: 0},
        {x: convert('2012-01-02'), y: 0},
        {x: convert('2012-01-03'), y: 0},
        {x: convert('2012-01-04'), y: 0},
        {x: convert('2012-01-05'), y: 0},
        {x: convert('2012-01-06'), y: 0},
        {x: convert('2012-01-07'), y: 0},
        {x: convert('2012-01-08'), y: 0},
        {x: convert('2012-01-09'), y: 0},
        {x: convert('2012-01-10'), y: 0},
        {x: convert('2012-01-11'), y: 0},
        {x: convert('2012-01-12'), y: 86},
        {x: convert('2012-01-13'), y: 137},
        {x: convert('2012-01-14'), y: 142},
        {x: convert('2012-01-15'), y: 142},
        {x: convert('2012-01-16'), y: 142},
        {x: convert('2012-01-17'), y: 157},
        {x: convert('2012-01-18'), y: 198},
        {x: convert('2012-01-19'), y: 198},
        {x: convert('2012-01-20'), y: 198},
        {x: convert('2012-01-21'), y: 198},
        {x: convert('2012-01-22'), y: 198},
        {x: convert('2012-01-23'), y: 198},
        {x: convert('2012-01-24'), y: 234},
        {x: convert('2012-01-25'), y: 234},
        {x: convert('2012-01-26'), y: 234},
        {x: convert('2012-01-27'), y: 493},
        {x: convert('2012-01-28'), y: 518},
        {x: convert('2012-01-29'), y: 518},
        {x: convert('2012-01-30'), y: 518},
        {x: convert('2012-01-31'), y: 523},
        {x: convert('2012-02-01'), y: 523},
        {x: convert('2012-02-02'), y: 523},
        {x: convert('2012-02-03'), y: 523},
        {x: convert('2012-02-04'), y: 523},
        {x: convert('2012-02-05'), y: 523},
        {x: convert('2012-02-06'), y: 523},
        {x: convert('2012-02-07'), y: 523},
        {x: convert('2012-02-08'), y: 523},
        {x: convert('2012-02-09'), y: 523},
        {x: convert('2012-02-10'), y: 523},
        {x: convert('2012-02-11'), y: 523},
        {x: convert('2012-02-12'), y: 523},
        {x: convert('2012-02-13'), y: 650},
        {x: convert('2012-02-14'), y: 650},
        {x: convert('2012-02-15'), y: 650},
        {x: convert('2012-02-16'), y: 650},
        {x: convert('2012-02-17'), y: 680},
        {x: convert('2012-02-18'), y: 680},
        {x: convert('2012-02-19'), y: 685},
        {x: convert('2012-02-20'), y: 685},
        {x: convert('2012-02-21'), y: 685},
        {x: convert('2012-02-22'), y: 685},
        {x: convert('2012-02-23'), y: 710},
        {x: convert('2012-02-24'), y: 710},
        {x: convert('2012-02-25'), y: 776},
        {x: convert('2012-02-26'), y: 776},
        {x: convert('2012-02-27'), y: 776},
        {x: convert('2012-02-28'), y: 776},
        {x: convert('2012-02-29'), y: 776},
        {x: convert('2012-03-01'), y: 1005},
        {x: convert('2012-03-02'), y: 1005},
        {x: convert('2012-03-03'), y: 1005},
        {x: convert('2012-03-04'), y: 1005},
        {x: convert('2012-03-05'), y: 1005},
        {x: convert('2012-03-06'), y: 1005},
        {x: convert('2012-03-07'), y: 1005},
        {x: convert('2012-03-08'), y: 1005},
        {x: convert('2012-03-09'), y: 1048},
        {x: convert('2012-03-10'), y: 1048},
        {x: convert('2012-03-11'), y: 1048},
        {x: convert('2012-03-12'), y: 1048},
        {x: convert('2012-03-13'), y: 1048},
        {x: convert('2012-03-14'), y: 1048},
        {x: convert('2012-03-15'), y: 1048},
        {x: convert('2012-03-16'), y: 1099},
        {x: convert('2012-03-17'), y: 1122},
        {x: convert('2012-03-18'), y: 1122},
        {x: convert('2012-03-19'), y: 1122},
        {x: convert('2012-03-20'), y: 1122},
        {x: convert('2012-03-21'), y: 1122},
        {x: convert('2012-03-22'), y: 1122},
        {x: convert('2012-03-23'), y: 1122},
        {x: convert('2012-03-24'), y: 1122},
        {x: convert('2012-03-25'), y: 1122},
        {x: convert('2012-03-26'), y: 1122},
        {x: convert('2012-03-27'), y: 1122},
        {x: convert('2012-03-28'), y: 1122},
        {x: convert('2012-03-29'), y: 1155},
        {x: convert('2012-03-30'), y: 1155},
        {x: convert('2012-03-31'), y: 1155},
        {x: convert('2012-04-01'), y: 1155},
        {x: convert('2012-04-02'), y: 1175},
        {x: convert('2012-04-03'), y: 1175},
        {x: convert('2012-04-04'), y: 1175},
        {x: convert('2012-04-05'), y: 1178},
        {x: convert('2012-04-06'), y: 1178},
        {x: convert('2012-04-07'), y: 1178},
        {x: convert('2012-04-08'), y: 1178},
        {x: convert('2012-04-09'), y: 1178},
        {x: convert('2012-04-10'), y: 1178},
        {x: convert('2012-04-11'), y: 1178},
        {x: convert('2012-04-12'), y: 1178},
        {x: convert('2012-04-13'), y: 1178},
        {x: convert('2012-04-14'), y: 1178},
        {x: convert('2012-04-15'), y: 1178},
        {x: convert('2012-04-16'), y: 1178},
        {x: convert('2012-04-17'), y: 1178},
        {x: convert('2012-04-18'), y: 1178},
        {x: convert('2012-04-19'), y: 1178},
        {x: convert('2012-04-20'), y: 1178},
        {x: convert('2012-04-21'), y: 1178},
        {x: convert('2012-04-22'), y: 1440},
        {x: convert('2012-04-22'), y: 1658},
        {x: convert('2012-04-23'), y: 2001},
        {x: convert('2012-04-23'), y: 2395},
        {x: convert('2012-04-24'), y: 2395},
        {x: convert('2012-04-24'), y: 2400},
        {x: convert('2012-04-25'), y: 2403},
        {x: convert('2012-04-25'), y: 2406},
        {x: convert('2012-04-26'), y: 2406},
        {x: convert('2012-04-26'), y: 2406},
        {x: convert('2012-04-27'), y: 2411},
        {x: convert('2012-04-27'), y: 2411},
        {x: convert('2012-04-28'), y: 2411},
        {x: convert('2012-04-29'), y: 2411},
        {x: convert('2012-04-29'), y: 2411},
        {x: convert('2012-04-30'), y: 2411},
        {x: convert('2012-04-30'), y: 2411},
        {x: convert('2012-05-01'), y: 2495},
        {x: convert('2012-05-01'), y: 2592},
        {x: convert('2012-05-02'), y: 2617},
        {x: convert('2012-05-02'), y: 2665},
        {x: convert('2012-05-03'), y: 2729},
        {x: convert('2012-05-03'), y: 2831},
        {x: convert('2012-05-04'), y: 2859},
        {x: convert('2012-05-04'), y: 2897},
        {x: convert('2012-05-05'), y: 2897},
        {x: convert('2012-05-06'), y: 2897},
        {x: convert('2012-05-07'), y: 2897},
        {x: convert('2012-05-07'), y: 2897},
        {x: convert('2012-05-08'), y: 3034},
        {x: convert('2012-05-08'), y: 3186},
        {x: convert('2012-05-09'), y: 3392},
        {x: convert('2012-05-09'), y: 3580},
        {x: convert('2012-05-10'), y: 3610},
        {x: convert('2012-05-10'), y: 3640},
        {x: convert('2012-05-11'), y: 3645},
        {x: convert('2012-05-11'), y: 3648},
        {x: convert('2012-05-12'), y: 3648},
        {x: convert('2012-05-13'), y: 3648},
        {x: convert('2012-05-14'), y: 3663},
        {x: convert('2012-05-14'), y: 3678},
        {x: convert('2012-05-15'), y: 3843},
        {x: convert('2012-05-15'), y: 4006},
        {x: convert('2012-05-16'), y: 4133},
        {x: convert('2012-05-16'), y: 4290},
        {x: convert('2012-05-17'), y: 4465},
        {x: convert('2012-05-17'), y: 4579},
        {x: convert('2012-05-18'), y: 4579},
        {x: convert('2012-05-19'), y: 4579},
        {x: convert('2012-05-20'), y: 4579},
        {x: convert('2012-05-21'), y: 4579},
        {x: convert('2012-05-21'), y: 4579},
        {x: convert('2012-05-22'), y: 4609},
        {x: convert('2012-05-22'), y: 4650},
        {x: convert('2012-05-23'), y: 4739},
        {x: convert('2012-05-23'), y: 4785},
        {x: convert('2012-05-24'), y: 4785},
        {x: convert('2012-05-24'), y: 4785},
        {x: convert('2012-05-25'), y: 4821},
        {x: convert('2012-05-25'), y: 4834},
        {x: convert('2012-05-26'), y: 4834},
        {x: convert('2012-05-27'), y: 4834},
        {x: convert('2012-05-28'), y: 4834},
        {x: convert('2012-05-29'), y: 4834},
        {x: convert('2012-05-29'), y: 4834},
        {x: convert('2012-05-30'), y: 5152},
        {x: convert('2012-05-30'), y: 5431},
        {x: convert('2012-05-31'), y: 5616},
        {x: convert('2012-05-31'), y: 5730},
        {x: convert('2012-06-01'), y: 5730},
        {x: convert('2012-06-01'), y: 5730},
        {x: convert('2012-06-02'), y: 5766},
        {x: convert('2012-06-02'), y: 5809},
        {x: convert('2012-06-03'), y: 5845},
        {x: convert('2012-06-03'), y: 5901},
        {x: convert('2012-06-04'), y: 6013},
        {x: convert('2012-06-04'), y: 6168},
        {x: convert('2012-06-05'), y: 6183},
        {x: convert('2012-06-05'), y: 6193},
        {x: convert('2012-06-06'), y: 6193},
        {x: convert('2012-06-06'), y: 6193},
        {x: convert('2012-06-07'), y: 6196},
        {x: convert('2012-06-07'), y: 6201},
        {x: convert('2012-06-08'), y: 6216},
        {x: convert('2012-06-08'), y: 6216},
        {x: convert('2012-06-09'), y: 6246},
        {x: convert('2012-06-09'), y: 6282},
        {x: convert('2012-06-10'), y: 6282},
        {x: convert('2012-06-11'), y: 6282},
        {x: convert('2012-06-11'), y: 6282},
        {x: convert('2012-06-12'), y: 6282},
        {x: convert('2012-06-12'), y: 6282},
        {x: convert('2012-06-13'), y: 6518},
        {x: convert('2012-06-13'), y: 6726},
        {x: convert('2012-06-14'), y: 6726},
        {x: convert('2012-06-14'), y: 6726},
        {x: convert('2012-06-15'), y: 6726},
        {x: convert('2012-06-16'), y: 6726},
        {x: convert('2012-06-17'), y: 6726},
        {x: convert('2012-06-18'), y: 6726},
        {x: convert('2012-06-19'), y: 6726},
        {x: convert('2012-06-20'), y: 6726},
        {x: convert('2012-06-21'), y: 6726},
        {x: convert('2012-06-22'), y: 6726},
        {x: convert('2012-06-23'), y: 6726},
        {x: convert('2012-06-24'), y: 6726},
        {x: convert('2012-06-25'), y: 6744},
        {x: convert('2012-06-25'), y: 6774},
        {x: convert('2012-06-26'), y: 6820},
        {x: convert('2012-06-26'), y: 6833},
        {x: convert('2012-06-27'), y: 6863},
        {x: convert('2012-06-27'), y: 6881},
        {x: convert('2012-06-28'), y: 6881},
        {x: convert('2012-06-28'), y: 6881},
        {x: convert('2012-06-29'), y: 6884},
        {x: convert('2012-06-29'), y: 6887},
        {x: convert('2012-06-30'), y: 6887},
        {x: convert('2012-07-01'), y: 6887},
        {x: convert('2012-07-02'), y: 6989},
        {x: convert('2012-07-02'), y: 7004},
        {x: convert('2012-07-03'), y: 7004},
        {x: convert('2012-07-03'), y: 7012},
        {x: convert('2012-07-04'), y: 7035},
        {x: convert('2012-07-04'), y: 7081},
        {x: convert('2012-07-05'), y: 7081},
        {x: convert('2012-07-06'), y: 7081},
        {x: convert('2012-07-06'), y: 7081},
        {x: convert('2012-07-07'), y: 7081},
        {x: convert('2012-07-08'), y: 7081},
        {x: convert('2012-07-09'), y: 7081},
        {x: convert('2012-07-10'), y: 7081},
        {x: convert('2012-07-10'), y: 7081},
        {x: convert('2012-07-11'), y: 7081},
        {x: convert('2012-07-12'), y: 7081},
        {x: convert('2012-07-14'), y: 7310},
        {x: convert('2012-07-15'), y: 7313},
        {x: convert('2012-07-16'), y: 7648},
        {x: convert('2012-07-17'), y: 7648},
        {x: convert('2012-07-18'), y: 7686},
        {x: convert('2012-07-19'), y: 7686},
        {x: convert('2012-07-20'), y: 7686},
        {x: convert('2012-07-21'), y: 7686},
        {x: convert('2012-07-22'), y: 7686},
        {x: convert('2012-07-23'), y: 7691},
        {x: convert('2012-07-24'), y: 7793},
        {x: convert('2012-07-24'), y: 7892},
        {x: convert('2012-07-25'), y: 7892},
        {x: convert('2012-07-26'), y: 7900},
        {x: convert('2012-07-26'), y: 7900},
        {x: convert('2012-07-27'), y: 7918},
        {x: convert('2012-07-27'), y: 7938},
        {x: convert('2012-07-28'), y: 7951},
        {x: convert('2012-07-29'), y: 8169},
        {x: convert('2012-07-30'), y: 8210},
        {x: convert('2012-07-30'), y: 8240},
        {x: convert('2012-07-31'), y: 8240},
        {x: convert('2012-08-01'), y: 8240},
        {x: convert('2012-08-02'), y: 8240},
        {x: convert('2012-08-03'), y: 8240},
        {x: convert('2012-08-04'), y: 8240},
        {x: convert('2012-08-05'), y: 8240},
        {x: convert('2012-08-06'), y: 8352},
        {x: convert('2012-08-06'), y: 8459},
        {x: convert('2012-08-07'), y: 8459},
        {x: convert('2012-08-08'), y: 8459},
        {x: convert('2012-08-08'), y: 8459},
        {x: convert('2012-08-09'), y: 8459},
        {x: convert('2012-08-10'), y: 8459},
        {x: convert('2012-08-11'), y: 8619},
        {x: convert('2012-08-11'), y: 8903},
        {x: convert('2012-08-12'), y: 8982},
        {x: convert('2012-08-12'), y: 9043},
        {x: convert('2012-08-13'), y: 9043},
        {x: convert('2012-08-13'), y: 9043},
        {x: convert('2012-08-14'), y: 9043},
        {x: convert('2012-08-14'), y: 9043},
        {x: convert('2012-08-15'), y: 9061},
        {x: convert('2012-08-15'), y: 9084},
        {x: convert('2012-08-16'), y: 9087},
        {x: convert('2012-08-16'), y: 9133},
        {x: convert('2012-08-17'), y: 9133},
        {x: convert('2012-08-18'), y: 9153},
        {x: convert('2012-08-18'), y: 9173},
        {x: convert('2012-08-19'), y: 9173},
        {x: convert('2012-08-19'), y: 9173},
        {x: convert('2012-08-20'), y: 9173},
        {x: convert('2012-08-21'), y: 9181},
        {x: convert('2012-08-21'), y: 9181},
        {x: convert('2012-08-22'), y: 9181},
        {x: convert('2012-08-23'), y: 9181},
        {x: convert('2012-08-23'), y: 9181},
        {x: convert('2012-08-24'), y: 9181},
        {x: convert('2012-08-25'), y: 9181},
        {x: convert('2012-08-26'), y: 9181},
        {x: convert('2012-08-27'), y: 9181},
        {x: convert('2012-08-28'), y: 9298},
        {x: convert('2012-08-28'), y: 9445},
        {x: convert('2012-08-29'), y: 9465},
        {x: convert('2012-08-29'), y: 9465},
        {x: convert('2012-08-30'), y: 9465},
        {x: convert('2012-08-31'), y: 9465},
        {x: convert('2012-09-01'), y: 9465},
        {x: convert('2012-09-02'), y: 9465},
        {x: convert('2012-09-03'), y: 9465},
        {x: convert('2012-09-04'), y: 9465},
        {x: convert('2012-09-04'), y: 9465},
        {x: convert('2012-09-05'), y: 9503},
        {x: convert('2012-09-05'), y: 9541},
        {x: convert('2012-09-06'), y: 9541},
        {x: convert('2012-09-06'), y: 9541},
        {x: convert('2012-09-07'), y: 9541},
        {x: convert('2012-09-07'), y: 9541},
        {x: convert('2012-09-08'), y: 9541},
        {x: convert('2012-09-08'), y: 9541},
        {x: convert('2012-09-09'), y: 9825},
        {x: convert('2012-09-09'), y: 10074},
        {x: convert('2012-09-10'), y: 10074},
        {x: convert('2012-09-11'), y: 10074},
        {x: convert('2012-09-12'), y: 10074},
        {x: convert('2012-09-13'), y: 10074},
        {x: convert('2012-09-14'), y: 10074},
        {x: convert('2012-09-15'), y: 10104},
        {x: convert('2012-09-15'), y: 10122},
        {x: convert('2012-09-16'), y: 10122},
        {x: convert('2012-09-17'), y: 10122},
        {x: convert('2012-09-18'), y: 10122},
        {x: convert('2012-09-19'), y: 10503},
        {x: convert('2012-09-19'), y: 10963},
        {x: convert('2012-09-20'), y: 10963},
        {x: convert('2012-09-21'), y: 10963},
        {x: convert('2012-09-21'), y: 10963},
        {x: convert('2012-09-22'), y: 10963},
        {x: convert('2012-09-23'), y: 11082},
        {x: convert('2012-09-23'), y: 11082},
        {x: convert('2012-09-24'), y: 11082},
        {x: convert('2012-09-24'), y: 11082},
        {x: convert('2012-09-25'), y: 11082},
        {x: convert('2012-09-26'), y: 11087},
        {x: convert('2012-09-26'), y: 11097},
        {x: convert('2012-09-27'), y: 11120},
        {x: convert('2012-09-27'), y: 11158},
        {x: convert('2012-09-28'), y: 11204},
        {x: convert('2012-09-28'), y: 11242},
        {x: convert('2012-09-29'), y: 11323},
        {x: convert('2012-09-29'), y: 11447},
        {x: convert('2012-09-30'), y: 11472},
        {x: convert('2012-09-30'), y: 11490},
        {x: convert('2012-10-01'), y: 11513},
        {x: convert('2012-10-01'), y: 11528},
        {x: convert('2012-10-02'), y: 11528},
        {x: convert('2012-10-02'), y: 11528},
        {x: convert('2012-10-03'), y: 11531},
        {x: convert('2012-10-03'), y: 11531},
        {x: convert('2012-10-04'), y: 11536},
        {x: convert('2012-10-04'), y: 11536},
        {x: convert('2012-10-05'), y: 11579},
        {x: convert('2012-10-05'), y: 11635},
        {x: convert('2012-10-06'), y: 11635},
        {x: convert('2012-10-07'), y: 11635},
        {x: convert('2012-10-08'), y: 11655},
        {x: convert('2012-10-08'), y: 11675},
        {x: convert('2012-10-09'), y: 11675},
        {x: convert('2012-10-10'), y: 11675},
        {x: convert('2012-10-11'), y: 11728},
        {x: convert('2012-10-11'), y: 11751},
        {x: convert('2012-10-12'), y: 11751},
        {x: convert('2012-10-12'), y: 11754},
        {x: convert('2012-10-13'), y: 11762},
        {x: convert('2012-10-13'), y: 11767},
        {x: convert('2012-10-14'), y: 11853},
        {x: convert('2012-10-14'), y: 11927},
        {x: convert('2012-10-15'), y: 11960},
        {x: convert('2012-10-15'), y: 11988},
        {x: convert('2012-10-16'), y: 12214},
        {x: convert('2012-10-16'), y: 12351},
        {x: convert('2012-10-17'), y: 12351},
        {x: convert('2012-10-18'), y: 12351},
        {x: convert('2012-10-18'), y: 12351},
        {x: convert('2012-10-19'), y: 12354},
        {x: convert('2012-10-19'), y: 12354},
        {x: convert('2012-10-20'), y: 12748},
        {x: convert('2012-10-20'), y: 13246},
        {x: convert('2012-10-21'), y: 13269},
        {x: convert('2012-10-21'), y: 13294},
        {x: convert('2012-10-22'), y: 13294},
        {x: convert('2012-10-23'), y: 13294},
        {x: convert('2012-10-24'), y: 13297},
        {x: convert('2012-10-24'), y: 13297},
        {x: convert('2012-10-25'), y: 13297},
        {x: convert('2012-10-25'), y: 13300},
        {x: convert('2012-10-26'), y: 13300},
        {x: convert('2012-10-27'), y: 13300},
        {x: convert('2012-10-28'), y: 13300},
        {x: convert('2012-10-29'), y: 13300},
        {x: convert('2012-10-29'), y: 13300},
        {x: convert('2012-10-30'), y: 13374},
        {x: convert('2012-10-30'), y: 13458},
        {x: convert('2012-10-31'), y: 13466},
        {x: convert('2012-10-31'), y: 13479},
        {x: convert('2012-11-01'), y: 13484},
        {x: convert('2012-11-01'), y: 13484},
        {x: convert('2012-11-02'), y: 13487},
        {x: convert('2012-11-03'), y: 13487},
        {x: convert('2012-11-03'), y: 13487},
        {x: convert('2012-11-04'), y: 13487},
        {x: convert('2012-11-05'), y: 13487},
        {x: convert('2012-11-06'), y: 13487},
        {x: convert('2012-11-07'), y: 13487},
        {x: convert('2012-11-08'), y: 13487},
        {x: convert('2012-11-08'), y: 13487},
        {x: convert('2012-11-09'), y: 13487},
        {x: convert('2012-11-10'), y: 13487},
        {x: convert('2012-11-11'), y: 13487},
        {x: convert('2012-11-12'), y: 13487},
        {x: convert('2012-11-13'), y: 13624},
        {x: convert('2012-11-13'), y: 13738},
        {x: convert('2012-11-14'), y: 13822},
        {x: convert('2012-11-14'), y: 13924},
        {x: convert('2012-11-15'), y: 13924},
        {x: convert('2012-11-16'), y: 13924},
        {x: convert('2012-11-17'), y: 13924},
        {x: convert('2012-11-18'), y: 13924},
        {x: convert('2012-11-19'), y: 13924},
        {x: convert('2012-11-20'), y: 13924},
        {x: convert('2012-11-21'), y: 13924},
        {x: convert('2012-11-22'), y: 13924},
        {x: convert('2012-11-23'), y: 13924},
        {x: convert('2012-11-24'), y: 13929},
        {x: convert('2012-11-24'), y: 13929},
        {x: convert('2012-11-25'), y: 13929},
        {x: convert('2012-11-26'), y: 13929},
        {x: convert('2012-11-26'), y: 13929},
        {x: convert('2012-11-27'), y: 13929},
        {x: convert('2012-11-28'), y: 13937},
        {x: convert('2012-11-28'), y: 13942},
        {x: convert('2012-11-29'), y: 13942},
        {x: convert('2012-11-29'), y: 13942},
        {x: convert('2012-11-30'), y: 13942},
        {x: convert('2012-12-01'), y: 13952},
        {x: convert('2012-12-01'), y: 13965},
        {x: convert('2012-12-02'), y: 13965},
        {x: convert('2012-12-03'), y: 14018},
        {x: convert('2012-12-04'), y: 14021},
        {x: convert('2012-12-04'), y: 14021},
        {x: convert('2012-12-05'), y: 14079},
        {x: convert('2012-12-05'), y: 14137},
        {x: convert('2012-12-06'), y: 14137},
        {x: convert('2012-12-07'), y: 14137},
        {x: convert('2012-12-08'), y: 14208},
        {x: convert('2012-12-08'), y: 14277},
        {x: convert('2012-12-09'), y: 14282},
        {x: convert('2012-12-09'), y: 14292},
        {x: convert('2012-12-10'), y: 14348},
        {x: convert('2012-12-10'), y: 14404},
        {x: convert('2012-12-11'), y: 14490},
        {x: convert('2012-12-11'), y: 14576},
        {x: convert('2012-12-12'), y: 14576},
        {x: convert('2012-12-12'), y: 14576},
        {x: convert('2012-12-13'), y: 14576},
        {x: convert('2012-12-14'), y: 14576},
        {x: convert('2012-12-15'), y: 14576},
        {x: convert('2012-12-16'), y: 14576},
        {x: convert('2012-12-17'), y: 14640},
        {x: convert('2012-12-17'), y: 14688},
        {x: convert('2012-12-18'), y: 14812},
        {x: convert('2012-12-18'), y: 14969},
        {x: convert('2012-12-19'), y: 15002},
        {x: convert('2012-12-19'), y: 15030},
        {x: convert('2012-12-20'), y: 15030},
        {x: convert('2012-12-20'), y: 15030},
        {x: convert('2012-12-21'), y: 15053},
        {x: convert('2012-12-21'), y: 15091},
        {x: convert('2012-12-22'), y: 15170},
        {x: convert('2012-12-22'), y: 15241},
        {x: convert('2012-12-23'), y: 15241},
        {x: convert('2012-12-24'), y: 15241},
        {x: convert('2012-12-25'), y: 15251},
        {x: convert('2012-12-25'), y: 15276},
        {x: convert('2012-12-26'), y: 15276},
        {x: convert('2012-12-27'), y: 15337},
        {x: convert('2012-12-28'), y: 15411},
        {x: convert('2012-12-29'), y: 15411},
        {x: convert('2012-12-30'), y: 15467},
        {x: convert('2012-12-30'), y: 15746}
      ]
    };
    var dateStrings = _.pluck(seedData.data, 'x');
    dateStrings.unshift('time');
    var testSeries = _.pluck(seedData.data, 'y');
    testSeries.unshift('testSeries');
    // console.log(labels, testSeries);

    // Query driver
    $scope.appendSeries = function(locationid, year) {
      RainfallSeriesProvider.get({
        startdate: year.toString() + '-01-01',
        enddate: year.toString() + '-12-31',
        locationid: locationid
      },
      function(data) {
        console.log('droughtioApp.controller:MainCtrl:$scope.appendSeries:data', data);
        $scope.year = year;
        data.unshift(locationid.toString()  + ' ' + year.toString());
        chart.load({
          columns: [data]
        });
      });
    };

    $scope.layerToggles = [
        { name: 'Drought Severity'},
        { name: '% of farm land requiring irrigation'}
    ];

    $scope.index = { };    

    //Listener for when user toggles between map layers
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
    $scope.selectionQueue = [];
    $scope.year = 2010;
    $scope.rainfallSeriesCollection = [];
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
          testSeries
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

    // Dynamically load new series
    var grab = function() {
      var id = 'FIPS:' + globalService.nextSelection().toString();
      console.log('select ' + id);
      if(chart.data().hasOwnProperty(id)) {
        // The data was already loaded, so unhide id.
        chart.show(id);
      } else {
        // The data was never loaded, so fetch and then load it.
        $scope.appendSeries(id, $scope.year);
      }
    };
    globalService.registerObserverCallback('select', grab);

    // Dynamically remove series from the chart according to which states are deselected
    var hide = function() {
      var id = 'FIPS:' + globalService.nextDeselection().toString();
      // $scope.appendSeries(id);
      console.log('deselect ' + id);
      chart.hide(id);
    };
    globalService.registerObserverCallback('deselect', hide);

  }
]);
