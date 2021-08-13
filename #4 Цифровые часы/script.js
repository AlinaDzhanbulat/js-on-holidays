setInterval(() => {
const myTime = document.querySelector("cl");
let date = new Date();
let hours = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
let session = "AM";

hours = (hours < 10) ? "0" + hours : hours;
min = (min < 10) ? "0" + min : min;
sec = (sec < 10) ? "0" + sec : sec;
let text = hours + ":" + min + ":" + sec +" " + session;
document.getElementById("cl").innerText = text;
document.getElementById("cl").textContent = text;
})

