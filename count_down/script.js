let timer;
let hoursInput = document.getElementById('hours');
let minutesInput = document.getElementById('minutes');
let secondsInput = document.getElementById('seconds');

function startTimer() {
  let hours = parseInt(hoursInput.value);
  let minutes = parseInt(minutesInput.value);
  let seconds = parseInt(secondsInput.value);

  if (isNaN(hours)) hours = 0;
  if (isNaN(minutes)) minutes = 0;
  if (isNaN(seconds)) seconds = 0;

  let totalSeconds = hours * 3600 + minutes * 60 + seconds;

  if (totalSeconds <= 0) {
    alert('Please enter a valid duration.');
    return;
  }

  timer = setInterval(function() {
    if (totalSeconds <= 0) {
      clearInterval(timer);
      return;
    }
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    document.getElementById('countdown').textContent = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
    totalSeconds--;
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function formatTime(time) {
  return time < 10 ? '0' + time : time;
}
