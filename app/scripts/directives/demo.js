'use strict';

app.directive('demo', function () {
  return {
    restrict: 'AE',
    replace: 'true',
    template: '<p>Hello World!!</p>'
  };
});