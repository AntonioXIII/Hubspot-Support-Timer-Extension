(function() {
  
  var extLib = window.SupportTimerExtensionLib || {};
  
  /**
  * A collection of timer entries.
  * @constructor
  */
  extLib.TimersMap = function() {
    
    var self = this;
    
    this.addTimer = function(timer){
      
      if(timer != null && typeof timer == 'TimerEntry') {
        
        console.log('Timer added');
        
      }
      else {
        console.log('Timer not added.');
      }
      
    };
    
  }
  
  // Declare namespace, or use it if it already exists
  if(typeof window.SupportTimerExtensionLib == 'undefined') {
    
    window.SupportTimerExtensionLib = extLib;
  
  }
  
})();