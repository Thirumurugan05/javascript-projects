const timeDisplay = document.querySelector(".time-display");
const hourSelect = document.querySelector(".hours");
const minuteSelect = document.querySelector(".minute");
const ampmSelect = document.querySelector(".ampm");
const setAlarmBtn = document.querySelector("#btn");

let alarmTime="";
let isAlarmSet=true;

const ringtone=new Audio("./images/Ringtone-1.mp3");





for(let i=1; i<=12;i++){
    const value= i<10 ? `0${i}` : i;
    hourSelect.innerHTML += `<option value="${value}">${value}</option>`
}

for(let i=0;i<60;i++){
    const value=i<10 ? `0${i}` : i;
    minuteSelect.innerHTML+=`<option value="${value}">${value}</option>`
}


setInterval(()=>{
    const date=new Date();

    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();

    const ampm= h>=12 ? "PM" : "AM";

    h=h%12 || 12;
    h=h<10 ? `0${h}`: h;


  m = m<10 ? `0${m}`: m;
  s= s<10 ? `0${s}`: s;
   

   timeDisplay.innerHTML = `${h}:${m}:${s} ${ampm}`


   if(alarmTime===`${h}:${m}:${ampm}` && isAlarmSet){
    ringtone.play();
    ringtone.loop=true;
   }


},1000);


setAlarmBtn.addEventListener("click",()=>{
    if(isAlarmSet){
        //Reset
        alarmTime="";
        ringtone.pause();
        ringtone.currentTime=0;
        setAlarmBtn.textContent="Set Alarm";
       [hourSelect,minuteSelect,ampmSelect].forEach((select)=>select.disabled= false)
        isAlarmSet=false;


    }else{
        //New Alarm
        alarmTime=`${hourSelect.value}:${minuteSelect.value}:${ampmSelect.value}`;
        setAlarmBtn.textContent="Clear Alarm";    
        [hourSelect,minuteSelect,ampmSelect].forEach((select)=>select.disabled= true)
        isAlarmSet=true;

        // [hourSelect,minuteSelect,ampmSelect]=dsble;
        // dsble.forEach((el)=>{
        // //     el.disabled=true;
        //       isAlarmSet=true;
        // });

    }
})