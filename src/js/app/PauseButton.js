(function(){
  
  var extLib = window.SupportTimerExtensionLib || {};
  
  /**
  * A pause button object that pauses a timer when clicked.
  * @constructor
  */
  extLib.PauseButton = function(timer, btn) {
    
    var self = this;
    this.timer = timer;
    this.btn = btn;
    this.btn.onclick = function(){
      
      self.timer.pauseTimer();
      
    };
    
  }
  
  // Declare namespace, or use it if it already exists
  if(typeof window.SupportTimerExtensionLib == 'undefined') {
    
    window.SupportTimerExtensionLib = extLib;
  
  }
  
})();