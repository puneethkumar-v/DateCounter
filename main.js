// CONSTANTS
const daysEl = document.querySelector(".days");
const hoursEl = document.querySelector(".hours");
const minutesEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".seconds");

// DESTINATION
const NEW_YEAR = "1 Jan 2022";

// MAIN FUNCTION
const countDown = () => {
  const newYearDate = new Date(NEW_YEAR);
  const currentDate = new Date();

  const totalMiliSeconds = Math.floor((newYearDate - currentDate) / 1000);
  const days = Math.floor(totalMiliSeconds / 3600 / 24);
  const hours = Math.floor(totalMiliSeconds / 3600) % 24;
  const mins = Math.floor(totalMiliSeconds / 60) % 60;
  const seconds = Math.floor(totalMiliSeconds) % 60;

  daysEl.innerHTML = format(days);
  hoursEl.innerHTML = format(hours);
  minutesEl.innerHTML = format(mins);
  secondsEl.innerHTML = format(seconds);
};
countDown();

// TO ADD "0"
function format(time) {
  return time < 10 ? `0${time}` : time;
}

// TO CALL THE FUNCTION EVERY SEC
setInterval(countDown, 1000);
