'use strict';

app.factory('globalService',
  function() {

    var selectionQueue = [];
    var deselectionQueue = [];
    var observerCallbacks = [];
    var notifyObservers = function(kind){
      angular.forEach(observerCallbacks, function(callback){
        if(callback.kind === kind)
        {
          callback.callback();
        }
      });
    };

    var globalService = {
      registerObserverCallback: function(kind, callback){
        observerCallbacks.push({
          kind: kind,
          callback: callback
        });
      },
      deselect: function(id) {
        deselectionQueue.push(id);
        notifyObservers('deselect');
      },
      nextDeselection: function() {
        return deselectionQueue.shift();
      },
      select: function(id) {
        selectionQueue.push(id);
        notifyObservers('select');
      },
      nextSelection: function() {
        return selectionQueue.shift();
      }
    };

    return globalService;
});