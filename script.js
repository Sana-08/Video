const video = document.querySelector(".video");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  if (video.paused) {
    video.play();
    btn.classList.toggle("playing");
  } else {
    video.pause();
    btn.classList.toggle("playing");
  }
});
