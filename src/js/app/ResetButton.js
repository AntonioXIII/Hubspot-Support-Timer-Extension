(function() {
  
  var extLib = window.SupportTimerExtensionLib || {};
  
  /**
  * An object for a reset button that will reset a timer back to 0.
  * @constructor
  */
  extLib.ResetButton = function(timer, btn) {
    
    var self = this;
    this.timer = timer;
    this.btn = btn;
    this.btn.onclick = function() {
      
      self.timer.resetTimer();
      
    };
    
  }
  
  // Declare namespace, or use it if it already exists
  if(typeof window.SupportTimerExtensionLib == 'undefined') {
    
    window.SupportTimerExtensionLib = extLib;
  
  }
  
})();