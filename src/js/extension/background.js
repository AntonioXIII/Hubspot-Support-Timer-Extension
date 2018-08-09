(function(){
  
  if(window.BackgroundApp == undefined) {
    
    window.BackgroundApp = {};
    
  }
  
  BackgroundApp.timers = [];
  
  BackgroundApp.getTimers = function() {

    return BackgroundApp.timers;
    
  }
  
  BackgroundApp.setTimers = function(newTimers) {
    
    BackgroundApp.timers = newTimers;
    chrome.storage.sync.set({'timerEntries': newTimers});
    
  }
  
  /**
  * Adds an event listener to handle installation logic to set initial values.
  */
  chrome.runtime.onInstalled.addListener(function(){
    
    chrome.storage.sync.set({color: '#3aa757'}, function(){
      console.log("The color is green.");
    });
    
  });
  
})();