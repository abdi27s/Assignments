setInterval(displayClock, 1000); //to recall function after 1000ms

let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function displayClock() {
  let displayDate = new Date();
  let hour = displayDate.getHours();
  let minute = displayDate.getMinutes();
  let second = displayDate.getSeconds();
  let day = displayDate.getDay();
  console.log(day);

  hour = hour < 10 ? "0" + hour : hour; //to display 1-9 as 01-09
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  let theTime = hour + ":" + minute + ":" + second + " " + days[day];

  document.getElementById("time").innerHTML = theTime;
}
