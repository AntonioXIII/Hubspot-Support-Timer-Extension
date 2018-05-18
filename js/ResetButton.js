function ResetButton(timer, btn) {
  
  var self = this;
  this.timer = timer;
  this.btn = btn;
  this.btn.onclick = function() {
    
    self.timer.resetTimer();
    
  };
  
}