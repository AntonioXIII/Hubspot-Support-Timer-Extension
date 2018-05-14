function Timer() {
  
  var self = this;
  this.dateObj = new Date();
  this.time = this.dateObj.getTime();
  this.observers = [];
  
  this.startTimer = function() {
    setInterval(self.runningTimer, 1000);
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
    
    self.notify();
    
  };
  
}
