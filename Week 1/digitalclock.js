setInterval(displayClock, 1000);  //to recall function after 1000ms

function displayClock() {
  let displayDate = new Date();
  let hour = displayDate.getHours();                
  let minute = displayDate.getMinutes();
  let second = displayDate.getSeconds();

  hour = hour < 10 ? "0" + hour : hour;         //to display 1-9 as 01-09 
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  let theTime = hour + ":" + minute + ":" + second;

  document.getElementById("time").innerHTML = theTime;
}