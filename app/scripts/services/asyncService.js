'use strict';

// https://gist.github.com/auser/6506865#file-d3-example1-js
//angular.module('droughtioApp')
app.factory('asyncService', ['$document', '$window', '$q', '$rootScope',
  function ($document, $window, $q, $rootScope) {
    var d = $q.defer();
    var s = {
      d3: function() { return d.promise; },
      topoJson: function() { return d.promise; }
    };
    
    function onScriptLoadD3() {
      // Load client in the browser
      $rootScope.$apply(function() { d.resolve($window.d3); });
    }
    var scriptTagD3 = $document[0].createElement('script');
    scriptTagD3.type = 'text/javascript'; 
    scriptTagD3.async = true;
    scriptTagD3.src = 'http://d3js.org/d3.v3.min.js';
    scriptTagD3.onreadystatechange = function () {
      if (this.readyState === 'complete') { 
        onScriptLoadD3();
      }
    };
    scriptTagD3.onload = onScriptLoadD3;
   
    $document[0].getElementsByTagName('body')[0].appendChild(scriptTagD3);


    function onScriptLoadTopoJson() {
      // Load client in the browser
      $rootScope.$apply(function() { d.resolve($window.topoJson); });
    }
    var scriptTagTopoJson = $document[0].createElement('script');
    scriptTagTopoJson.type = 'text/javascript'; 
    scriptTagTopoJson.async = true;
    scriptTagTopoJson.src = 'http://d3js.org/topojson.v1.min.js';
    scriptTagTopoJson.onreadystatechange = function () {
      if (this.readyState === 'complete') { 
        onScriptLoadTopoJson();
      }
    };
    scriptTagTopoJson.onload = onScriptLoadTopoJson;
    
    $document[0].getElementsByTagName('body')[0].appendChild(scriptTagTopoJson);
   
    return s;
  }
]);