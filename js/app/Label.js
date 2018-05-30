/**
 * A label object for displaying the time from a timer. The object does this
 * by becoming an observer of a timer, and then having its update method 
 * called everytime the timer updates.
 * @contstrutor
 */
function Label() {
  
  var self = this;
  this.timerLabel = document.getElementById('timer');
  
  this.update = function(timer) {
    
    var timerText = timer.hours + ':' + ('0' + timer.minutes).slice(-2) + ':' 
      + ('0' + timer.seconds).slice(-2);
    self.timerLabel.innerHTML = timerText;
    
  };
}