function PausePlayStrategy(timer, btn, playContent, pauseContent) {
  
  var self = this;
  this.timer = timer;
  this.btn = btn;
  this.playContent = playContent;
  this.pauseContent = pauseContent;
  
  // Abstract method that must be implemented by child object.
  this.executeStrategy = function() {
    
    console.error('Strategy method must be implemented by concrete object.');
    
  };
  
}