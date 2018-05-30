/**
 * An object for a reset button that will reset a timer back to 0.
 * @constructor
 */
function ResetButton(timer, btn) {
  
  var self = this;
  this.timer = timer;
  this.btn = btn;
  this.btn.onclick = function() {
    
    self.timer.resetTimer();
    
  };
  
}