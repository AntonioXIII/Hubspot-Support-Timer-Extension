/**
 * A class that defines an implementation of how to handle toggling between
 * the pause and play states of a PausePlayButton.
 *
 * @constructor
 */
function PausePlayStrategy(timer, btn, playContent, pauseContent) {
  
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