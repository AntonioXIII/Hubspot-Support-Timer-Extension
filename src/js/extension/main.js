/*
 * The main entry point of the JS application logic.
 */
$(document).ready(function(){
  
  var timeEntries = [];
  var appLib = chrome.extension.getBackgroundPage().SupportTimerExtensionLib;

  $('#add-timer').click(function(){
    
    var newTimer = new appLib.TimerEntry('Title', timeEntries.length);
    
    timeEntries.push(newTimer);
    $('#app-content').append(newTimer.getTimerHTML());
    
  });
  
});