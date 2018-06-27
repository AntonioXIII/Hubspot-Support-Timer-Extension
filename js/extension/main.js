/*
 * The main entry point of the JS application logic.
 */
$(document).ready(function(){
  
  var timeEntries = [];

  $('#add-timer').click(function(){
    
    var newTimer = new TimerEntry('Title');
    
    timeEntries.push(newTimer);
    $('#app-content').append(newTimer.getTimerHTML());
    
  });
  
});