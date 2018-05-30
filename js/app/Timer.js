/**
 * A timer object that counts seconds, minutes and hours. The timer can be
 * paused, played, and restarted. The timer also keeps track of a list of 
 * observers, and notifies them every time the time changes.
 * @constructor
 */
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
  
  /**
   * Method that starts a timer if the timer isn't already running.
   */
  this.startTimer = function() {
    
    if(self.runningInterval == null) {
      
      self.runningInterval = setInterval(self.runningTimer, 1000);
      self.paused = false;
      
    }
    
  };
  
  /**
   * Method that pauses the timer if the timer isn't already paused.
   */
  this.pauseTimer = function() {
    
    if(self.runningInterval != null) {
      
      clearInterval(self.runningInterval);
      self.runningInterval = null;
      self.paused = true;
      
    }
    
  };
  
  /**
   * Restarts the timer. If the timer is running currently when reset is
   * called, the timer will restart and then start running again. Otherwise
   * the timer will reset and stay paused.
   */
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
  
  /**
   * Adds an observer to the array of observers watching the timer.
   */
  this.registerObserver = function(observer) {
    if(typeof(observer.update) == 'function') {
      self.observers.push(observer);
      return true;
    }
    
    return false;
  };
  
  /**
   * When an event has happened that changes the state of the timer that 
   * observers may be interested in knowing, this method should be called
   * to inform the observers that a change has taken place.
   */
  this.notify = function() {
    self.observers.forEach(function(observer, index){
      
      observer.update(self);
      
    });
  };
  
  /**
   * Increments seconds, minutes, and hours based on the current state of 
   * the timer.
   */
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
