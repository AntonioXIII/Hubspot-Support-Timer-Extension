(function(){
  
  var extLib = window.SupportTimerExtensionLib || {};
  
  /**
   * A label object for displaying the time from a timer. The object does this
   * by becoming an observer of a timer, and then having its update method 
   * called everytime the timer updates.
   * @contstrutor
   */
  extLib.Label = function() {
    
    var self = this;
    this.timerLabel = document.getElementById('timer');
    
    this.update = function(timer) {
      
      var timerText = timer.hours + ':' + ('0' + timer.minutes).slice(-2) + ':' 
        + ('0' + timer.seconds).slice(-2);
      self.timerLabel.innerHTML = timerText;
      
    };
  }
  
  /**
   * Overloaded constructor for creating a specialized label only for 
   * hour, minutes or seconds.
   * @constructor
   */
  extLib.Label = function(labelElement, purpose) {
    
    var self = this;
    this.timerLabel = labelElement;
    this.purpose = purpose;
    
    this.update = function(timer) {
      
      var updateVal = 0;
      
      if(purpose == 'hour') {
        
        updateVal = timer.hours;
        
      }
      else if(purpose == 'minute') {
        
        updateVal = timer.minutes;
        
      }
      else {
        
        updateVal = timer.seconds;
        
      }
      
      self.timerLabel.innerHTML = updateVal;
      
    };
    
  }
  
  // Declare namespace, or use it if it already exists
  if(typeof window.SupportTimerExtensionLib == 'undefined') {
    
    window.SupportTimerExtensionLib = extLib;
  
  }
  
})();