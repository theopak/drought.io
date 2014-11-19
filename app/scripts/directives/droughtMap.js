'use strict';

app.directive('droughtMap', ['d3Service',
  function (d3Service) {
    return {
      restrict: 'AE',
      replace: true,
      scope: {
        data: '=',
        label: '@',
        onClick: '&'
      },
      link: function (scope, element, attrs) {
        console.log('inside drought map!!!');
        d3Service.d3().then(function(d3) {      
            var width = 960,
                height = 500;

            var path = d3.geo.path();

            var svg = d3.select(element[0]).append('svg')
                .attr('width', width)
                .attr('height', height);

            d3.json('../us.json', function(error, topology) {
              console.log(topojson);
              svg.selectAll('path')
                .data(topojson.feature(topology, topology.objects.counties).features)
                .enter().append('path')
                .attr('d', path)
                .on('mouseover', function(data) {                  
                  // Identify county ID
                  var countyID = data.id;
                });
            });
        });
      }
    };
  }]);