const dateElement = document.querySelector("#date");
const hourElement = document.querySelector("#hour");
const themeChanger = document.querySelector("html");
const themeButton = document.querySelector(".theme-changer");
const secondNeedle = document.querySelector(".hand.second");
const hourNeedle = document.querySelector(".hand.hour");
const minuteNeedle = document.querySelector(".hand.minute");
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
if(themeChanger.classList.contains("dark")){
  themeButton.innerHTML="Light Mode"
}
else{
  themeButton.innerHTML="Dark Mode"
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
function changeTheme() {
  if (themeChanger.classList.value == "dark") {
    themeChanger.classList.remove("dark");
    themeButton.innerHTML = "Dark Mode";
  } else {
    themeChanger.classList.add("dark");
    themeButton.innerHTML = "Light Mode";
  }
}
function setTime() {
  const currentTime = new Date();
  const day = currentTime.getDay();
  const hour = currentTime.getHours();
  const hoursForClock = hour % 12;
  const month = currentTime.getMonth();
  const date = currentTime.getDate();
  const minute = currentTime.getMinutes();
  const second = currentTime.getSeconds();
  const pmOrAm = hour > 12 ? "PM" : "AM";
  secondNeedle.style.transform = `rotate(${scale(second, 0, 59, 0, 360)+180}deg)`;
  hourNeedle.style.transform = `rotate(${scale(hour, 0, 11, 0, 360)+180}deg)`;
  minuteNeedle.style.transform = `rotate(${scale(minute, 0, 59, 0, 360)+180}deg)`;

  
  hourElement.innerHTML = `${hour}:${
    minute < 10 ? `0${minute}` : `${minute}`
  } ${pmOrAm}`;
  dateElement.innerHTML = `${days[day]}, ${months[month]} <span class="day-of-the-month">${date}</span>`;
}

setTime();

setInterval(setTime, 1000);
