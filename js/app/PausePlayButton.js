/**
 * A button object that can double as a play and pause button. What operation
 * is available depends on the status of the timer. If the timer is running,
 * the button will pause the timer. Otherwise, the button will start playing
 * the timer. The specifics of how this is determined and how the button gets
 * updated are specified in a PausePlayStrategy object.
 * @constructor
 */
function PausePlayButton(timer, btn, pausePlayStrategy) {
  
  var self = this;
  this.timer = timer;
  this.btn = btn;
  this.pausePlayStrategy = pausePlayStrategy;
  
  // If the timer is currently paused, start the timer and change the content
  // of the button to display what should be shown when the timer is playing.
  // Otherwise pause the timer, and display what should be shown when the
  // timer is paused.
  this.btn.onclick = self.pausePlayStrategy.executeStrategy;
  
}