'use strict';

app.directive('droughtMap', ['d3Service', '$q',
  function (d3Service, $q) {
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

            var width = window.innerWidth,
                height = window.innerHeight - $('#navbar').outerHeight(),
                centered;

            var projection = d3.geo.albersUsa()
                // .clipExtent(90)
                // .clipExtent([[1, 1], [width - 1, height - 1]])
                // .translate([50, svgHeight/2 - 95])
                .translate([width/2, height/2])
                // .translate([svgWidth / 2, svgHeight / 2 + 50])
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
                // .call(zoom);

            // g.append('rect')
            //   .attr('class', 'background')
            //   .attr('width', width)
            //   .attr('height', height)
            //   .on('click', clicked);

            // var trim = d3.geom.polygon([[0,0], [0,height], [width,height], [width,0]])
            //   .clip(projection);

            function zoomed() {
              projection.translate(d3.event.translate).scale(d3.event.scale);
              g.selectAll('path').attr('d', path);
            }

            function clicked(d) {
              var x, y, k;

              if (d && centered !== d) {
                var centroid = path.centroid(d);
                x = centroid[0];
                y = centroid[1];
                k = 4;
                centered = d;
              } else {
                x = width / 2;
                y = height / 2;
                k = 1;
                centered = null;
              }
              console.log(centered);

              g.selectAll('path')
                .classed('active', centered && function(d) { return d === centered; });

              g.transition()
                .duration(750)
                .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')scale(' + k + ')translate(' + -x + ',' + -y + ')')
                .style('stroke-width', 1.5 / k + 'px');
            }

            // Draw map once all topologies are loaded
            function drawMap() {

              // Grab the correct paths from the topologies.
              console.log(usTopology, droughtTopology);
              var zones = {};
              for (var key in droughtTopology.objects) {
                zones = droughtTopology.objects[key];
                if(typeof(zones) !== 'function') {
                  break;
                }
              }

              // Draw the US paths as the base layer.
              g.append('g')
                  .attr('id', 'counties')
                .selectAll('path')
                  .data(topojson.feature(topology, usTopology.objects.counties).features)
                .enter().append('path')
                  .attr('d', path)
                  .on('click', clicked)
                  .on('mouseover', function(data) {
                    var countyId = data.id;
                    // console.log(countyId);
                  });

              // Draw drought severity paths as the top layer
              var severity = 0;
              g.append('g')
                  .attr('id', 'zones')
                .selectAll('path')
                  .data(topojson.feature(droughtTopology, zones).features)
                .enter().append('path')
                  .attr('d', path)
                  .on('click', clicked)
                  .attr('class', function(d) {
                    console.log(d);
                    return 'severity' + severity++;
                  });
            }

            d3.json('/assets/us.json', function(error, topology) {
              g.append('g')
                  .attr('id', 'counties')
                .selectAll('path')
                  .data(topojson.feature(topology, topology.objects.counties).features)
                .enter().append('path')
                  .attr('d', path)
                  .on('click', clicked)
                  .on('mouseover', function(data) {
                    var countyId = data.id;
                    // console.log(countyId);
                  });
            });

            // Render the zones of drought severity
            // d3.json('/assets/california-drought-topo.json', function(error, topology) {
            d3.json('/assets/USDM_20141111-topo.json', function(error, topology) {
              // Get the first object of data in the file.
              console.log(topology);
              var first = {};
              for (var key in topology.objects) {
                first = topology.objects[key];
                if(typeof(first) !== 'function') {
                  break;
                }
              }
              // Draw paths into the DOM.
              var severity = 0;
              g.append('g')
                  .attr('id', 'zones')
                .selectAll('path')
                  .data(topojson.feature(topology, first).features)
                .enter().append('path')
                  .attr('d', path)
                  .on('click', clicked)
                  .attr('class', function(d) {
                    console.log(d);
                    return 'severity' + severity++;
                  });
            });
        });
      }
    };
  }]);