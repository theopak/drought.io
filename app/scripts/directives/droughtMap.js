'use strict';

app.directive('droughtMap', ['$window', '$timeout', 'd3Service', 'topoJsonService',
  function($window, $timeout, d3Service, topoJsonService) {
    return {
      restrict: 'A',
      scope: {
        data: '=',
        label: '@',
        onClick: '&'
      },
      link: function(scope, ele, attrs) {
        console.log('inside drought map!!!');
        d3Service.d3().then(function(d3) {
          topoJsonService.topoJson().then(function(topoJson) {        
            var width = 960,
                height = 500;

            var path = d3.geo.path();

            var svg = d3.select('body').append('svg')
                .attr('width', width)
                .attr('height', height);

            d3.json('./us.json', function(error, topology) {
              svg.selectAll('path')
                .data(topoJson.feature(topology, topology.objects.counties).features)
                .enter().append('path')
                .attr('d', path)
                .on('mouseover', function(data) {                  
                  //Identify county ID
                  var countyID = data.id;
                });
            });
          });
        });
      }
    };
  }]);