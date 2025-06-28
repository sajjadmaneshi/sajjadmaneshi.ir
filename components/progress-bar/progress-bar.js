const progressBars = document.querySelectorAll(".progress-bar");

export function initProgressBar() {
  progressBars.forEach(function (progressBar) {
    animate(progressBar);
  });
}

function animate(bar) {
  let width = 0;
  const interval = setInterval(function () {
    if (width >= bar.getAttribute("aria-valuenow")) {
      clearInterval(interval);
    } else {
      width += 1;

      bar.style.width = width + "%";
    }
  }, 10);
}
