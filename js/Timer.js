function Timer() {
  
  var self = this;
  this.dateObj = new Date();
  this.time = this.dateObj.getTime();
  this.observers = [];
  this.seconds = 0;
  this.minutes = 0;
  this.hours = 0;
  this.runningInterval = null;
  this.paused = true;
  
  this.startTimer = function() {
    
    if(self.runningInterval == null) {
      
      self.runningInterval = setInterval(self.runningTimer, 1000);
      self.paused = false;
      
    }
    
  };
  
  this.pauseTimer = function() {
    
    if(self.runningInterval != null) {
      
      clearInterval(self.runningInterval);
      self.runningInterval = null;
      self.paused = true;
      
    }
    
  };
  
  this.resetTimer = function() {
    
    var runAgain = false;
    
    if(self.runningInterval != null) {
      
      self.pauseTimer();
      runAgain = true;
      
    }
    
    self.seconds = 0;
    self.minutes = 0;
    self.hours = 0;
    self.notify();
    
    if(runAgain) {
      
      self.startTimer();
      
    }
    
  };
  
  this.registerObserver = function(observer) {
    if(typeof(observer.update) == 'function') {
      self.observers.push(observer);
      return true;
    }
    
    return false;
  };
  
  this.notify = function() {
    self.observers.forEach(function(observer, index){
      
      observer.update(self);
      
    });
  };
  
  this.runningTimer = function() {
    
    if(self.seconds < 59) {
      
      self.seconds++;
      
    }
    else {
      
      self.seconds = 0;
      
      if(self.minutes < 59) {
        
        self.minutes++;
        
      }
      else {
        
        self.minutes = 0;
        self.hours++;
        
      }
      
    }
    
    self.notify();
    
  };
  
}
