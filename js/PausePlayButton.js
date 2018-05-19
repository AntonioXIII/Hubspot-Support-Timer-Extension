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