function PausePlayDivStrategy(timer, btn, playContent, pauseContent) {
  
  var self = this;
  
  
  PausePlayStrategy.call(this, timer, btn, playContent, pauseContent);
  
  this.executeStrategy = function() {
    
    if(self.timer.paused == true) {
    
      self.timer.startTimer();
      self.btn.innerHTML = self.playContent;
      
    }
    else {
      
      self.timer.pauseTimer();
      self.btn.innerHTML = self.pauseContent;
      
    }
    
  };
  
}

PausePlayDivStrategy.prototype = Object.create(PausePlayStrategy.prototype);

PausePlayDivStrategy.prototype.constructor = PausePlayDivStrategy;