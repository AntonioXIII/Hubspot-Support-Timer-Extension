/*
 * The main entry point of the JS application logic.
 */
(function() {
  
  var timeEntries = [];
  var appLib = chrome.extension.getBackgroundPage().SupportTimerExtensionLib;
  var bgApp = chrome.extension.getBackgroundPage().BackgroundApp;
  
  function addTimeEntry(timeEntry) {
    
    var entrySelector = '#timer-' + timeEntry.id;
    var playPauseButton = '';
    
    $('#app-content').append(timeEntry.getTimerHTML());
    
    playPauseButton = new appLib.PausePlayButton(timeEntry.timer, 
      $(entrySelector).find('.play-pause-btn')[0], 
      new appLib.PausePlayBtnStrategy(timeEntry.timer, 
        $(entrySelector).find('.play-pause-btn')[0], 'Pause', 'Play'));
    
    // Set labels
    timeEntry.setLabel('second', 
      document.querySelector(entrySelector + ' .timer-second'));
    timeEntry.setLabel('minute', 
      document.querySelector(entrySelector + ' .timer-minute'));
    timeEntry.setLabel('hour', 
      document.querySelector(entrySelector + ' .timer-hour'));
    
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