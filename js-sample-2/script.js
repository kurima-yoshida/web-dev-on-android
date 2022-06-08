let touchNumber = 0;

function handleTouch() {
  touchNumber = touchNumber + 1;
  document.getElementById("score-value").innerText =
    touchNumber;
}
