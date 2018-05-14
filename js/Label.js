function Label() {
  
  var self = this;
  this.timerLabel = document.getElementById('timer');
  
  this.update = function(timer) {
    self.timerLabel.innerHTML = 'New text!';
    console.log('I updated!');
  };
}