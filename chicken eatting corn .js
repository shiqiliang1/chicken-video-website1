// Get the video and buttons
const video = document.getElementById("myVideo");
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const restartButton = document.getElementById("restartButton");

// Create an audio element for the chicken sound
const chickenSound = new Audio("cock crow.mp3");

// Play the video and sound
playButton.addEventListener("click", () => {
  video.play();
  chickenSound.play();
  chickenSound.loop = true; // Loop the chicken sound while the video is playing
});

// Pause the video and sound
pauseButton.addEventListener("click", () => {
  video.pause();
  chickenSound.pause();
});

// Restart the video and sound
restartButton.addEventListener("click", () => {
  video.currentTime = 0; // Reset the video to the beginning
  chickenSound.currentTime = 0; // Reset the sound to the beginning
  video.play();
  chickenSound.play();
});