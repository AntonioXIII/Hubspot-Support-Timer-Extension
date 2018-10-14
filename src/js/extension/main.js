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
    var resetButton = '';
    
    $('#app-content').append(timeEntry.getTimerHTML());
    
    // Setup for buttons
    playPauseButton = new appLib.PausePlayButton(timeEntry.timer, 
      $(entrySelector).find('.play-pause-btn')[0], 
      new appLib.PausePlayBtnStrategy(timeEntry.timer, 
        $(entrySelector).find('.play-pause-btn')[0], 'Pause', 'Play'));
    
    resetButton = new appLib.ResetButton(timeEntry.timer,
      $(entrySelector).find('.reset-btn')[0]);
    
    $(entrySelector).find('.delete-btn').click(function(){
      
      if(confirm('Are you sure you want to delete this entry?')) {
        
        $(entrySelector).remove();
        timeEntries.forEach(function(element, index){
          
          if(element.id == timeEntry.id) {
            
            timeEntries.splice(index, 1);
            
          }
          
        });
        
      }
      
    });
    
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