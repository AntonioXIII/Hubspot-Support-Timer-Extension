/**
 * A pause button object that pauses a timer when clicked.
 * @constructor
 */
function PauseButton(timer, btn) {
  
  var self = this;
  this.timer = timer;
  this.btn = btn;
  this.btn.onclick = function(){
    
    self.timer.pauseTimer();
    
  };
  
}