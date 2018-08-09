/*
 * The main entry point of the JS application logic.
 */
(function() {
  
  var timeEntries = [];
  var appLib = chrome.extension.getBackgroundPage().SupportTimerExtensionLib;
  var bgApp = chrome.extension.getBackgroundPage().BackgroundApp;
  
  function addTimeEntry(timeEntry) {
    
    $('#app-content').append(timeEntry.getTimerHTML());
    timeEntries.push(timeEntry);
    
  }
  
  $(document).ready(function(){
    
    // Populate the timers in the user interface with what is currently being
    // stored
    $.each(bgApp.getTimers(), function(index, timerEntry){
      
      addTimeEntry(timerEntry);
      
    });
    
    // The logic that runs when the new timer button is clicked
    $('#add-timer').click(function(){
      
      var newTimer = new appLib.TimerEntry('Title', timeEntries.length);
      
      addTimeEntry(newTimer);
      bgApp.setTimers(timeEntries);
      console.log(bgApp.getTimers());
    });
    
  });
  
})();