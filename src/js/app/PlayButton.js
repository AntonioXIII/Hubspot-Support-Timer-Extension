(function() {

  var extLib = window.SupportTimerExtensionLib || {};

  /**
  * A dedicated play button object that will start a timer when clicked.
  * @constructor
  */
  extLib.PlayButton = function(timer, btn) {
    
    var self = this;
    this.timer = timer;
    this.btn = btn;
    this.btn.onclick = function() {
      
      self.timer.startTimer();
      
    };
    
  }
  
  // Declare namespace, or use it if it already exists
  if(typeof window.SupportTimerExtensionLib == 'undefined') {
    
    window.SupportTimerExtensionLib = extLib;
  
  }
  
})();