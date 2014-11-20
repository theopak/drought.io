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
            // var width = 960,
            //     height = 500;

            var width = window.innerWidth - (window.innerWidth / 3),
                height = window.innerHeight - 20;

            var projection = d3.geo.albersUsa()
                // .translate([50, svgHeight/2 - 95])
                .translate([width/2, height/2])
                // .translate([svgWidth*2, svgHeight / 2 + 50])
                // .scale([4000])
                // .scale([4000])
                // .rotate([123,0]);

            var path = d3.geo.path()
                .projection(projection);

            var svg = d3.select(element[0]).append('svg')
                .attr('width', width)
                .attr('height', height);

            var zoom = d3.behavior.zoom()
                .translate(projection.translate())
                .scale(projection.scale())
                .scaleExtent([height, 8 * height])
                .on('zoom', zoomed);

            var g = svg.append('g')
                .call(zoom);

            g.append("rect")
                .attr("class", "background")
                .attr("width", width)
                .attr("height", height);


            function zoomed() {
              projection.translate(d3.event.translate).scale(d3.event.scale);
              g.selectAll('path').attr('d', path);
            }

            d3.json('/assets/us.json', function(error, topology) {
              console.log(topojson);
              g.append('g')
                  .attr('id', 'counties')
                .selectAll('path')
                  .data(topojson.feature(topology, topology.objects.counties).features)
                .enter().append('path')
                  .attr('d', path)
                  .on('mouseover', function(data) {
                    // Identify county ID
                    var countyId = data.id;
                    // console.log(countyId);
                  });
            });

            // Render the zones of drought severity
            // d3.json('/assets/california-drought-topo.json', function(error, topology) {
            // // d3.json('/assets/USDM_20141111-topo.json', function(error, topology) {
            //   // Get the first object of data in the file.
            //   // console.log(topology);
            //   var first = {};
            //   for (var key in topology.objects) {
            //     first = topology.objects[key];
            //     if(typeof(first) !== 'function') {
            //       break;
            //     }
            //   }
            //   // Draw paths into the DOM.
            //   svg.selectAll('path')
            //     .data(topojson.feature(topology, first).features)
            //     .enter()
            //     .append('path')
            //     .attr('d', path)
            //     .attr('class', function(d) {
            //       console.log(d);
            //       return 'severity' + d.id;
            //     });
            // });
        });
      }
    };
  }]);