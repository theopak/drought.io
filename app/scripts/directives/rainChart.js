'use strict';

app.directive('rainChart', ['$compile',
  function($compile) {

    return  {
      restrict: 'AE',
      scope: {
        series: '=',
        renderer: '=',
        onClick: '&'
      },

      link: function(scope, element, attributes) {

        console.log('inside rainChart');

        // Watch for the data or chart type changing and render via Rickshaw.
        scope.$watchCollection('[series, renderer]', function (newValue, oldValue) {
          console.log('rainChart scope.$watchCollection newValue, oldvalue:', newValue, oldValue);
          // if (!newValue[0]) {
          //   console.log('nvm tho');
          //   return;
          // }

          // Setup DOM
          var mainEl = angular.element(element);
          mainEl.empty();
          var graphEl = $compile('<div></div>')(scope);
          mainEl.append(graphEl);

          // Setup graph with options
          var graph = new Rickshaw.Graph({
            element: element[0],
            width: attributes.width,
            height: attributes.height,
            series: scope.series,
            renderer: scope.renderer,
            interpolation: 'step-after',
            xScale: d3.time.scale(),
            stack: false,
            palette: 'spectrum14'
          });
          // var yAxis = new Rickshaw.Graph.Axis.Y({
          //   graph: graph
          // });
          // yAxis.render();

          var format = function(d) {
            d = new Date(d)
            return d3.time.format("%b")(d);
          };
          var time = new Rickshaw.Fixtures.Time();
          var xAxis = new Rickshaw.Graph.Axis.Time({
            graph: graph,
            // timeUnit: time.unit('seconds'),
            // timeFixture: time,
            timeFixture: new Rickshaw.Fixtures.Time.Local(),
            tickFormat: graph.x.tickFormat('%B')
            // tickFormat: format
          });
          xAxis.render();

          var legend = new Rickshaw.Graph.Legend({
            graph: graph,
            element: document.querySelector('#legend')
          });
          var shelving = new Rickshaw.Graph.Behavior.Series.Toggle({
            graph: graph,
            legend: legend
          });
          var highlighter = new Rickshaw.Graph.Behavior.Series.Highlight({
            graph: graph,
            legend: legend
          });
          var hoverDetail = new Rickshaw.Graph.HoverDetail({
            graph: graph,
            xFormatter: function(x) {
              var t = new Date(x);
              return t.toDateString();
            },
            yFormatter: function(y) {
              return y + ' inches (YTD)';
            }
          });

          console.log(graph);
          graph.render();
        });
      }
    };
  }
]);