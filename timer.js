const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 120;
const ALERT_THRESHOLD = 60;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

const TIME_LIMIT = 300;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("timer").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;

function onTimesUp() {
  clearInterval(timerInterval);
 var y = document
  .getElementsByClassName("1");
 y[0].disabled = true;
 y[1].disabled = true;
 y[2].disabled = true;
 y[3].disabled = true;

  document.getElementsByClassName(
  "2")[0].disabled = true;
 document.getElementsByClassName(
  "2")[1].disabled = true;
 document.getElementsByClassName(
  "2")[2].disabled = true;
 document.getElementsByClassName(
  "2")[3].disabled = true;
  document.getElementsByClassName(
  "3")[0].disabled = true;
 document.getElementsByClassName(
  "3")[1].disabled = true;
 document.getElementsByClassName(
  "3")[2].disabled = true;
 document.getElementsByClassName(
  "3")[3].disabled = true;
  document.getElementsByClassName(
  "4")[0].disabled = true;
 document.getElementsByClassName(
  "4")[1].disabled = true;
 document.getElementsByClassName(
  "4")[2].disabled = true;
 document.getElementsByClassName(
  "4")[3].disabled = true;
  document.getElementsByClassName(
  "5")[0].disabled = true;
 document.getElementsByClassName(
  "5")[1].disabled = true;
 document.getElementsByClassName(
  "5")[2].disabled = true;
 document.getElementsByClassName(
  "5")[3].disabled = true;
  document.getElementsByClassName(
  "6")[0].disabled = true;
 document.getElementsByClassName(
  "6")[1].disabled = true;
 document.getElementsByClassName(
  "6")[2].disabled = true;
 document.getElementsByClassName(
  "6")[3].disabled = true;
  document.getElementsByClassName(
  "7")[0].disabled = true;
 document.getElementsByClassName(
  "7")[1].disabled = true;
 document.getElementsByClassName(
  "7")[2].disabled = true;
 document.getElementsByClassName(
  "7")[3].disabled = true;
  document.getElementsByClassName(
  "8")[0].disabled = true;
 document.getElementsByClassName(
  "8")[1].disabled = true;
 document.getElementsByClassName(
  "8")[2].disabled = true;
 document.getElementsByClassName(
  "8")[3].disabled = true; 
document.getElementsByClassName(
  "10")[0].disabled = true;
 document.getElementsByClassName(
  "10")[1].disabled = true;
 document.getElementsByClassName(
  "10")[2].disabled = true;
 document.getElementsByClassName(
  "10")[3].disabled = true;
    document.getElementsByClassName(
  "20")[0].disabled = true;
 document.getElementsByClassName(
  "20")[1].disabled = true;
 document.getElementsByClassName(
  "20")[2].disabled = true;
 document.getElementsByClassName(
  "20")[3].disabled = true;
}

function startGame() {
 document.getElementById(
 "startquiz").style.display = "none";
 document.getElementsByClassName(
  "next")[0].style.visibility = "visible";
 document.getElementsByClassName(
  "prev")[0].style.visibility = "visible";
document.getElementById(
 "Que-1").style.display = "block";
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}
