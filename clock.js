function showDateAndTime() {
  document.getElementById("display_DateAndTime").innerHTML = Date();
}
showDateAndTime();
setInterval(showDateAndTime, 1000);
// setTimeout(showDateAndTime, 5000); //display only once

function showClock() {
  var todayDate = new Date();
  var hour = todayDate.getHours();
  var minute = todayDate.getMinutes();
  var second = todayDate.getSeconds();
  document.getElementById("display_clock").innerHTML =
    hour + ":" + minute + ":" + second;
}
showClock();
setInterval(showClock, 1000);
