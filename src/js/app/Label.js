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
  
  // Declare namespace, or use it if it already exists
  if(typeof window.SupportTimerExtensionLib == 'undefined') {
    
    window.SupportTimerExtensionLib = extLib;
  
  }
  
})();