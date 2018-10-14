(function(){
  
  var extLib = window.SupportTimerExtensionLib || {};
  
  /**
  * Child class of PausePlayStrategy that implements an implementation that
  * treats a div like a button. The content of the div will change based on 
  * whether the timer is currently being played, or paused.
  * @constructor
  */
  extLib.PausePlayDivStrategy = function(timer, btn, playContent, 
    pauseContent) {
    
    var self = this;
    
    // Calls constructor of parent object
    extLib.PausePlayStrategy.call(this, timer, btn, playContent, pauseContent);
    
    /**
    * Implements PausePlayStrategy method for displaying content in a div (the
    * button) for when the timer is paused, and when it is running.
    * @override
    */
    this.executeStrategy = function() {
      
      // If the timer is paused, start the timer and set the div content
      // to what should be displayed when the timer is running. Otherwise
      // pause the timer, and display in the div what should be showing
      // when the timer is paused.
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
  
  // Inherit properties from parent object
  extLib.PausePlayDivStrategy.prototype = 
    Object.create(extLib.PausePlayStrategy.prototype);
  
  // Set the properties of this object to this object
  extLib.PausePlayDivStrategy.prototype.constructor = 
    extLib.PausePlayDivStrategy;
  
  // Declare namespace, or use it if it already exists
  if(typeof window.SupportTimerExtensionLib == 'undefined') {
    
    window.SupportTimerExtensionLib = extLib;
  
  }
  
})();