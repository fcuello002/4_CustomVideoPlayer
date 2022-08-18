const video = document.getElementById('video');
const playBtn = document.getElementById('play');
const stopBtn = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

const toggleVideoStatus = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

const updatePlayIcon = () => {
  if (video.paused) {
    playBtn.innerHTML = '<i class="fa fa-play fa-2x"></i>'
  } else {
    playBtn.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

const updateProgress = () => {
  progress.value = (video.currentTime / video.duration) * 100;
  let minutes = Math.floor(video.currentTime / 60);
  if (minutes < 10) {
    minutes = String(minutes);
  }
  let seconds = Math.floor(video.currentTime % 60);
  if (seconds < 10) {
    seconds = '0' + String(seconds);
  }
  timestamp.innerHTML = `${minutes}:${seconds}`
}

const setVideoProgress = () => {
  video.currentTime = (+progress.value * video.duration) / 100;
}

const stopVideo = () => {
  video.currentTime = 0;
  video.pause();
};

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('play', updatePlayIcon);
video.addEventListener("pause", updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);
playBtn.addEventListener('click', toggleVideoStatus);
stopBtn.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);
