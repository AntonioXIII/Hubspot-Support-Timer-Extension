(function() {
  
  var extLib = window.SupportTimerExtensionLib || {};
  
  /**
  * A class that defines an implementation of how to handle toggling between
  * the pause and play states of a PausePlayButton.
  *
  * @constructor
  */
  extLib.PausePlayStrategy = function(timer, btn, playContent, pauseContent) {
    
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
  
  // Declare namespace, or use it if it already exists
  if(typeof window.SupportTimerExtensionLib == 'undefined') {
    
    window.SupportTimerExtensionLib = extLib;
  
  }
  
})();