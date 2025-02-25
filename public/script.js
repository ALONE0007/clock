let hoursElem = document.getElementById("hours");
let minuteElem = document.getElementById("minute");
let secondElem = document.getElementById("second");

setInterval(function () {
  let dates = new Date();

  let hours = dates.getHours();
  let minute = dates.getMinutes();
  let second = dates.getSeconds();

  
  if (hours < 10) {
    hours = "0" + hours;
}
  if (minute < 10) {
    minute = "0" + minute;
}
if (second < 10) {
    second = "0" + second;
}

hoursElem.innerHTML = hours;
minuteElem.innerHTML = minute;
secondElem.innerHTML = second;

}, 1000);
