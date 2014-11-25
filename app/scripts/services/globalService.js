'use strict';

app.factory('globalService',
  function() {

    var selectionQueue = [];
    var observerCallbacks = [];
    var notifyObservers = function(){
      angular.forEach(observerCallbacks, function(callback){
        callback();
      });
    };

    var globalService = {
      registerObserverCallback: function(callback){
        observerCallbacks.push(callback);
      },
      queue: function(id) {
        selectionQueue.push(id);
        notifyObservers();
      },

      nextSelection: function() {
        return selectionQueue.shift();
      }
    };

    return globalService;
});