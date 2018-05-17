function Label() {
  
  var self = this;
  this.timerLabel = document.getElementById('timer');
  
  this.update = function(timer) {
    
    var timerText = timer.hours + ':' + ('0' + timer.minutes).slice(-2) + ':' 
      + ('0' + timer.seconds).slice(-2);
    self.timerLabel.innerHTML = timerText;
    
  };
}