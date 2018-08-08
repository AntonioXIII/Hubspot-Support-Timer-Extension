(function(){
  /**
  * Adds an event listener to handle installation logic to set initial values.
  */
  chrome.runtime.onInstalled.addListener(function(){
    
    chrome.storage.sync.set({color: '#3aa757'}, function(){
      console.log("The color is green.");
    });
    
  });
  
})();