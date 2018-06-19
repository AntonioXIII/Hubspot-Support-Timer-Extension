/*
 * The main entry point of the JS application logic.
 */
$(document).ready(function(){
  
  var newTimerHTML = '<section class="timer">' + 
                      '<header class="timerHeader">' + 
                      '<h2>Title</h2>' +
                      '</header>' +
                      '<section class="timerInfo">' +
                      '<section class="timerEntry">' + 
                      '<input type="text" class="timerHour" value="00" />' +
                      '<span class="timerColon">:</span>' +
                      '<input type="text" class="timerMinute" value="00" />' +
                      '<span class="timerColon">:</span>' + 
                      '<input type="text" class="timerSecond" value="00" />' +
                      '</section>' + 
                      '<section class="timerButtons">' +
                      '<button class="playPauseBtn">Play</button>' +
                      '<button class="resetBtn">Reset</button>' +
                      '<button class="deleteBtn">Delete</button>' +
                      '</section>' + 
                      '<section class="timerBillable">' +
                      '<input type="checkbox" class="nonbillableCb" />' + 
                      '</section>' +
                      '<section class="ticketInfo">' + 
                      '<label class="ticketNum">#</label>' +
                      '<input type="textarea" class="ticketDesc"/>' + 
                      '<button class="timerSubmit">Submit</button>' + 
                      '</section>' +
                      '</section>';
  
  $('#addTimer').click(function(){
    
    $('#app-content').append(newTimerHTML);
    
  });
  
});