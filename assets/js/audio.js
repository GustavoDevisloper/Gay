document.addEventListener("DOMContentLoaded", function() {
    playAudio();
  });
  
  function playAudio() {
    var audio = new Audio("assets/music.mp3");
    audio.play();
  }
  