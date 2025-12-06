const hourEl = document.getElementById("hour");
const minutEl = document.getElementById("minutes");
const secondsEl= document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ap = "AM";


if (h > 12) {
  h= h - 12;
    ap= "PM"
}


hourEl.innerText = h;
minutEl.innerText=m;
secondsEl.innerText=s;
ampmEl,(innerText = ap);
setTimeout(()=>{

  updateClock()
}, 1000)


}
updateClock()
