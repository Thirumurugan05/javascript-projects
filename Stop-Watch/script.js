const startBtn = document.querySelector(".start-timer");
const pauseBtn = document.querySelector(".pause-timer");
const resetBtn = document.querySelector(".reset-timer");

const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const milliseconds = document.querySelector(".milliseconds");





let hrs = min = sec = ms = 0, startTimer;


startBtn.addEventListener("click", () => {
    startTimer = setInterval(() => {
        ms++;


        if(ms==100){
            sec++;
            ms=0;
        }
        if(sec==60){
            min++;
            sec=0;
        }
        if(min==60){
            hrs++;
            min=0;
        }
       

        displayTime()
    }, 10);
})
pauseBtn.addEventListener("click", () => {
    clearInterval(startTimer);
    // displayTime()

})
resetBtn.addEventListener("click", () => {
    hrs = min = sec = ms = 0;
    clearInterval(startTimer);
    displayTime();
})


function displayTime() {


  let  phrs = hrs < 10 ? "0" + hrs : hrs;
  let    pmin = min < 10 ? "0" + min : min;
   let   psec = sec < 10 ? "0" + sec : sec;
   let   pms = ms < 10 ? "0" + ms : ms;


    hours.textContent = phrs;
    minutes.textContent = pmin;
    seconds.textContent = psec;
    milliseconds.textContent = pms;


}