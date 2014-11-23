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

            // Set size and position
            var width = window.innerWidth,
                minHeight = Math.max(window.innerHeight - $('#navbar').outerHeight(), 240),
                centered,
                height = minHeight - $('#details').outerHeight() > 240 ? 
                  minHeight - $('#details').outerHeight() :
                  minHeight;

            var projection = d3.geo.albersUsa()
              .scale(700)
              .translate([width / 2, height / 2]);

            var path = d3.geo.path()
              .projection(projection);

            var svg = d3.select(element[0]).append('svg')
              .attr('width', width)
              .attr('height', height);

            var g = svg.append('g')
              .on('click', stopped, true);
            
            // Add graticules
            // var graticule = d3.geo.graticule();
            // g.append('path')
            //     .datum(graticule)
            //     .attr('class', 'graticule')
            //     .attr('d', path);

            // Add background rectangle
            // g.append('rect')
            //   .attr('class', 'background')
            //   .attr('width', width)
            //   .attr('height', height)
            //   .on('click', reset);

            // Zoom to bounding box
            var active = d3.select(null);
            var zoom = d3.behavior.zoom()
              .translate([0, 0])
              .scale(1)
              .scaleExtent([1, 8])
              .on('zoom', zoomed);
            g
              .call(zoom) // delete this line to disable free zooming
              .call(zoom.event);

            function clicked(d) {
              if (active.node() === this) 
                return reset();
              active.classed('active', false);
              active = d3.select(this).classed('active', true);

              var bounds = path.bounds(d),
                dx = bounds[1][0] - bounds[0][0],
                dy = bounds[1][1] - bounds[0][1],
                x = (bounds[0][0] + bounds[1][0]) / 2,
                y = (bounds[0][1] + bounds[1][1]) / 2,
                scale = .9 / Math.max(dx / width, dy / height),
                translate = [width / 2 - scale * x, height / 2 - scale * y];

              svg.transition()
                .duration(750)
                .call(zoom.translate(translate).scale(scale).event);
            }

            function reset() {
              active.classed('active', false);
              active = d3.select(null);

              svg.transition()
                .duration(750)
                .call(zoom.translate([0, 0]).scale(1).event);
            }

            function zoomed() {
              g.attr('transform', 'translate(' + d3.event.translate + ')scale(' + d3.event.scale + ')');
            }

            // If the drag behavior prevents the default click,
            // also stop propagation so we don’t click-to-zoom.
            function stopped() {
              if (d3.event.defaultPrevented) 
                d3.event.stopPropagation();
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

            // Draw the US
            d3.json('/assets/us.json', function(error, topology) {
              // g.append('path')
              //   .datum(topojson.merge(topology, topology.objects.states.geometries))
              //   .attr('class', 'land')
              //   .attr('d', path);
              g.append('g')
                  .attr('id', 'states')
                .selectAll('path')
                  .data(topojson.feature(topology, topology.objects.states).features)
                .enter().append('path')
                  .attr('class', 'administrative')
                  .attr('d', path)
                  .on('click', clicked)
                  .on('mouseover', function(data) {
                    //var countyId = data.id;
                    // console.log(countyId);
                  });
            });

            // Draw the zones of drought severity
            // d3.json('/assets/california-drought-topo.json', function(error, topology) {
            d3.json('/assets/USDM_20141111-topo.json', function(error, topology) {
              // Get the first object of data in the file.
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
                  .attr('class', 'zone')
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