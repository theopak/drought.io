'use strict';

app.directive('droughtMap', ['d3Service', '$q', 'globalService',
  function (d3Service, $q, globalService) {
    return {
      restrict: 'AE',
      replace: false,
      scope: {
        data: '=',
        onClick: '&'
      },
      link: function (scope, element, attrs) {        
        console.log('inside drought map!!!');

        d3Service.d3().then(function(d3) {

          var stateIrrigationMap = {
           '1': {
              'name': 'Alabama',
              'percentIrrigated': 1.2
            },
            '2': {
              'name': 'Alaska',
              'percentIrrigated': 1.6
            },
            '4': {    
              'name': 'Arizona',
              'percentIrrigated': 12.9
            },
            '5': {    
              'name': 'Arkansas',
              'percentIrrigated': 25.2
            },
            '6': {    
              'name': 'California',
              'percentIrrigated': 25.2
            },
            '8': {    
              'name': 'Colorado',
              'percentIrrigated': 11.2
            },
            '9': {    
              'name': 'Connecticut',
              'percentIrrigated': 2.3
            },
            '10': {    
              'name': 'Delaware',
              'percentIrrigated': 19.7
            },
            '12': {    
              'name': 'Florida',
              'percentIrrigated': 11.0
            },
            '11': {
              'name': 'DC',
              'percentIrrigated': 0.0
            },
            '13': {    
              'name': 'Georgia',
              'percentIrrigated': 7.4
            },
            '15': {    
              'name': 'Hawaii',
              'percentIrrigated': 12.6
            },
            '16': {    
              'name': 'Idaho',
              'percentIrrigated': 29.7
            },
            '17': {    
              'name': 'Illinois',
              'percentIrrigated': 2.0
            },
            '18': {
              'name': 'Indiana',
              'percentIrrigated': 2.9
            },
            '19': {
              'name': 'Iowa',
              'percentIrrigated': 0.6
            },
            '20': {
              'name': 'Kansas',
              'percentIrrigated': 5.9
            },
            '21': {
              'name': 'Kentucky',
              'percentIrrigated': 0.4
            },
            '22': {    
              'name': 'Louisiana',
              'percentIrrigated': 8.8
            },
            '23': {    
              'name': 'Maine',
              'percentIrrigated': 1.4
            },
            '24': {
              'name': 'Maryland',
              'percentIrrigated': 3.8
            },
            '25': {    
              'name': 'Massachusetts',
              'percentIrrigated': 6.1
            },
            '26': {    
              'name': 'Michigan',
              'percentIrrigated': 4.6
            },
            '27': {    
              'name': 'Minnesota',
              'percentIrrigated': 2.8
            },
            '28': {    
              'name': 'Mississippi',
              'percentIrrigated': 8.3
            },
            '29': {
              'name': 'Missouri',
              'percentIrrigated': 4.2
            },
            '30': {
              'name': 'Montana',
              'percentIrrigated': 4.8
            },
            '31': {
              'name': 'Nebraska',
              'percentIrrigated': 22.3
            },
            '32': {
              'name': 'Nevada',
              'percentIrrigated': 20.1
            },
            '33': {
              'name': 'New Hampshire',
              'percentIrrigated': 0.6
            },
            '34': {
              'name': 'New Jersey',
              'percentIrrigated': 14.1
            },
            '35': {
              'name': 'New Mexico',
              'percentIrrigated': 2.1
            },
            '36': {
              'name': 'New York',
              'percentIrrigated': 1.6
            },
            '37': {
              'name': 'North Carolina',
              'percentIrrigated': 2.0
            },
            '38': {
              'name': 'North Dakota',
              'percentIrrigated': 0.7
            },
            '39': {
              'name': 'Ohio',
              'percentIrrigated': 0.5
            },
            '40': {
              'name': 'Oklahoma',
              'percentIrrigated': 1.1
            },
            '41': {
              'name': 'Oregon',
              'percentIrrigated': 12.5
            },
            '42': {
              'name': 'Pennsylvania',
              'percentIrrigated': 0.6
            },
            '44': {
              'name': 'Rhode Island',
              'percentIrrigated': 6.9
            },
            '45': {
              'name': 'South Carolina',
              'percentIrrigated': 3.1
            },
            '46': {
              'name': 'South Dakota',
              'percentIrrigated': 1.4
            },
            '47': {
              'name': 'Tennessee',
              'percentIrrigated': 1.2
            },
            '48': {
              'name': 'Texas',
              'percentIrrigated': 3.4
            },
            '49': {
              'name': 'Utah',
              'percentIrrigated': 16.9
            },
            '50': {
              'name': 'Vermont',
              'percentIrrigated': 0.3
            },
            '51': {
              'name': 'Virginia',
              'percentIrrigated': 0.9
            },
            '53': {
              'name': 'Washington',
              'percentIrrigated': 10.4
            },
            '54': {
              'name': 'West Virginia',
              'percentIrrigated': 0.1
            },
            '55': {
              'name': 'Wisconsin',
              'percentIrrigated': 3.3
            },
            '56': {
              'name': 'Wyoming',
              'percentIrrigated': 8.7
            },
            '72': {
              'name': 'Puerto Rico',
              'percentIrrigated': 0.0
            },
            '78': {
              'name': 'Virgin Islands',
              'percentIrrigated': 0.0
            }
          };
          for(var key in stateIrrigationMap) {
            if(stateIrrigationMap[key].percentIrrigated < 1.0) {
              stateIrrigationMap[key].percentIrrigated = 'percentIrrigated1';
            } else if(stateIrrigationMap[key].percentIrrigated < 5.0) {
              stateIrrigationMap[key].percentIrrigated = 'percentIrrigated5'; 
            } else if(stateIrrigationMap[key].percentIrrigated < 15.0) {
              stateIrrigationMap[key].percentIrrigated = 'percentIrrigated15';
            } else if(stateIrrigationMap[key].percentIrrigated < 25.0) {
              stateIrrigationMap[key].percentIrrigated = 'percentIrrigated25';
            } else {
              stateIrrigationMap[key].percentIrrigated = 'percentIrrigatedMax';
            }
          }

            // Set size and position
            var width = $(element[0]).innerWidth(),
                maxHeight = Math.max(window.innerHeight - 30 - $('#navbar').outerHeight(), 240),
                height = 320,
                paddingTop = Math.max((maxHeight - height) / 2, 0);
            $('#map').parent().find('h2').css('margin-top', paddingTop);

            var projection = d3.geo.albersUsa()
              .scale(1.3 * width)
              .translate([width / 2, height / 2]);

            var path = d3.geo.path()
              .projection(projection);

            var svg = d3.select(element[0]).append('svg')
              .attr('width', width)
              .attr('height', height);

            var g = svg.append('g')
              // .on('click', stopped, true);
            
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
            // var active = d3.select(null);
            // var zoom = d3.behavior.zoom()
            //   .translate([0, 0])
            //   .scale(1)
            //   .scaleExtent([1, 8])
            //   .on('zoom', zoomed);
            // g
            //   .call(zoom) // delete this line to disable free zooming
            //   .call(zoom.event);

            var selectedStates = [];

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
              // console.log(usTopology, droughtTopology);
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
                    // console.log(d);
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
                  .on('click', function(data) {     
                    var fips = data.id;
                    var id = data.id.toString().length >= 2 ? data.id.toString() : new Array(2 - data.id.toString().length + 1).join('0') + data.id.toString() + '';
                    d3.select(this).attr('id', 'fips' + id);
                    if(selectedStates && selectedStates[fips] === true) {
                      selectedStates[fips] = false;
                      // globalService.deselect(fips);
                      d3.select(this).attr('class', 'administrative');
                    } else {
                      selectedStates[fips] = true;
                      globalService.select(fips);
                      d3.select(this).attr('class', 'administrative-selected');
                    }
                    console.log(fips);
                  });
              // Draw the states with color representing % of farm land that is irrigated
              g.append('g')
                .attr('id', 'irrigation')
                .attr('visibility', 'hidden')
                .selectAll('path')
                  .data(topojson.feature(topology, topology.objects.states).features)
                .enter().append('path')                
                  .attr('class', function(data) { 
                    var temp = stateIrrigationMap[data.id].percentIrrigated; 
                    console.log('!!!!!', temp);
                    return temp.toString();
                  })
                  .attr('d', path)
                  .on('click', function(data) {     
                    var fips = data.id;
                    var irrigationLevel = stateIrrigationMap[data.id].percentIrrigated; 
                    d3.select(this).attr('id', stateIrrigationMap[data.id].name);
                    if(selectedStates && selectedStates[fips] === true) {
                      selectedStates[fips] = false;
                      globalService.deselect(fips);
                      d3.select(this).attr('class', irrigationLevel);                      
                    } else {
                      selectedStates[fips] = true;
                      globalService.select(fips);
                      irrigationLevel += '-selected';
                      d3.select(this).attr('class', irrigationLevel);
                    }
                    console.log(fips);
                  });
              // g.append('g')
              //     .attr('id', 'counties')
              //   .selectAll('path')
              //     .data(topojson.feature(topology, topology.objects.counties).features)
              //   .enter().append('path')
              //     .attr('class', 'county')
              //     .attr('d', path)
                  // .on('click', function(data) {
                  //   var countyId = data.id;
                  //   console.log(countyId);
                  //   globalService.queue(countyId);
                  // });

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
                  .attr('class', function(d) {
                    // console.log(d);
                    return 'severity' + severity++;
                  });
            });

        });
      }
    };
  }]);