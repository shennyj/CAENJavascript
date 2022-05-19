document.getElementsByClassName('title')[0].textContent="JavaScript CAEN"
let counter = 0
document.getElementsByTagName('button')[0].addEventListener('click',()=>{
    alert('MESSAGE')
    console.log(++counter)
})
const googleButton = document.getElementsByTagName('button')[1]
googleButton.addEventListener('click',(e)=>{
    e.preventDefault()
})
googleButton.style.color="yellow"
googleButton.style.backgroundColor="black"

let seconds = 00
let tens = 00
let appendTens = document.getElementById('tens')
let appendSeconds = document.getElementById('seconds')
let buttonStart = document.getElementById('button-start')
let buttonStop = document.getElementById('button-stop')
let buttonReset = document.getElementById('button-reset')
let interval
function startTimer(){
    ++tens
    if(tens<9){
        appendTens.innerHTML="0"+tens
    }
    if(tens>9){
        appendTens.innerHTML=tens
    }
    if(tens>99){
        seconds++
        appendSeconds.innerHTML="0"+seconds
        tens=0
        appendTens.innerHTML="0"+0
    }
    if(seconds>9){
        appendSeconds.innerHTML=seconds
    }
}
buttonStart.addEventListener('click',function(){
    interval = setInterval(startTimer)
})
buttonStop.addEventListener('click',function () {
    clearInterval(interval)
})
buttonReset.addEventListener('click',function(){
    clearInterval(interval)
    tens="00"
    seconds="00"
    appendSeconds.innerHTML=seconds
    appendTens.innerHTML=tens
})
class Timer {
    constructor(root) {
      root.innerHTML = Timer.getHTML();
  
      this.el = {
        minutes: root.querySelector(".timer__part--minutes"),
        seconds: root.querySelector(".timer__part--seconds"),
        control: root.querySelector(".timer__btn--control"),
        reset: root.querySelector(".timer__btn--reset")
      };
  
      this.interval = null;
      this.remainingSeconds = 0;
  
      this.el.control.addEventListener("click", () => {
        if (this.interval === null) {
          this.start();
        } else {
          this.stop();
        }
      });
  
      this.el.reset.addEventListener("click", () => {
        const inputMinutes = prompt("Enter number of minutes:");
  
        if (inputMinutes < 60) {
          this.stop();
          this.remainingSeconds = inputMinutes * 60;
          this.updateInterfaceTime();
        }
      });
    }
  
    updateInterfaceTime() {
      const minutes = Math.floor(this.remainingSeconds / 60);
      const seconds = this.remainingSeconds % 60;
  
      this.el.minutes.textContent = minutes.toString().padStart(2, "0");
      this.el.seconds.textContent = seconds.toString().padStart(2, "0");
    }
  
    Controls() {
      if (this.interval === null) {
        this.el.control.innerHTML = `<span class="material-icons">play_arrow</span>`;
        this.el.control.classList.add("timer__btn--start");
        this.el.control.classList.remove("timer__btn--stop");
      } else {
        this.el.control.innerHTML = `<span class="material-icons">pause</span>`;
        this.el.control.classList.add("timer__btn--stop");
        this.el.control.classList.remove("timer__btn--start");
      }
    }
  
    start() {
      if (this.remainingSeconds === 0) return;
  
      this.interval = setInterval(() => {
        this.remainingSeconds--;
        this.updateInterfaceTime();
  
        if (this.remainingSeconds === 0) {
          this.stop();
        }
      }, 1000);
  
      this.updateInterfaceControls();
    }
  
    stop() {
      clearInterval(this.interval);
  
      this.interval = null;
  
      this.updateInterfaceControls();
    }
  
    static getHTML() {
      return `
              <span class="timer__part timer__part--minutes">00</span>
              <span class="timer__part">:</span>
              <span class="timer__part timer__part--seconds">00</span>
              <button type="button" class="timer__btn timer__btn--control timer__btn--start">
                  <span class="material-icons">play_arrow</span>
              </button>
              <button type="button" class="timer__btn timer__btn--reset">
                  <span class="material-icons">timer</span>
              </button>
          `;
    }
  }
  
//   new Timer(document.querySelector(".timer"));
  