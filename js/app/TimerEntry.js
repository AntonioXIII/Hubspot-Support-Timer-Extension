/**
 * Object for a timer entry in the GUI. It contains all elements necessary
 * to submitting a time entry to the web service responsible for passing
 * the information along via a HubSpot API request.
 @constructor
 */
 function TimerEntry(title) {

  var self = this;
  this.timer = new Timer();
  this.title = title;
  
  /**
   * Returns the HTML structure of this timer in a templated string.
   */
  this.getTimerHTML = function() {
    
    return `<section class="timer">  
              <header class="timer-header">  
                <h2>${self.title}</h2> 
              </header> 
              <section class="timer-info"> 
                <section class="timer-entry">  
                  <input type="text" class="timer-hour" 
                    value="${self.timer.hours}" /> 
                  <span class="timerColon">:</span> 
                  <input type="text" class="timer-minute" 
                    value="${self.timer.minutes}" /> 
                  <span class="timerColon">:</span>  
                  <input type="text" class="timer-second" 
                    value="${self.timer.seconds}" /> 
                </section>  
                <section class="timer-btns"> 
                  <button class="play-pause-btn">Play</button> 
                  <button class="reset-btn">Reset</button>
                  <button class="delete-btn">Delete</button> 
                </section>
                <section class="timer-billable"> 
                  <input type="checkbox" class="nonbillable-cb" />  
                </section>
              </section>
              <section class="ticket-info">  
                <label class="ticket-num">#</label> 
                <input type="textarea" class="ticket-desc"/>  
                <button class="timer-submit">Submit</button>  
              </section>
            </section>`;
    
  };
 
}