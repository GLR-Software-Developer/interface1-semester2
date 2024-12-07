

let currentSongIndex = 0

const updateMediaPlayer = (autoplay) => {
  const currentSong = musicLibrary[currentSongIndex]
  const title = document.getElementById('title')
  const artist = document.getElementById('artist')
  const albumCover = document.getElementById('albumCover')
  const audioFile = document.getElementById('audioFile')

  title.innerText = currentSong.title
  artist.innerText = currentSong.artist
  albumCover.src = currentSong.albumCover
  audioFile.src = currentSong.audioFile
  
  if (autoplay) {
    playAudio()
  }
}

const nextSong = () => {
  if (currentSongIndex >= musicLibrary.length - 1) {
    currentSongIndex = 0
  } else {
    currentSongIndex++
  }

  updateMediaPlayer(true)
}

const prevSong = () => {
  if (currentSongIndex <= 0) {
    currentSongIndex = musicLibrary.length - 1
  } else {
    currentSongIndex--
  }

  updateMediaPlayer(true)
}

const playSong = (index) => {
  currentSongIndex = index
  updateMediaPlayer(true)
}

const playAudio = () => {
  const audio = document.getElementById('audioFile');
  const playPauseButton = document.getElementById('play-pause');
  
  if (audio.paused) {
    audio.play();
    playPauseButton.textContent = '⏸'; // Change to pause icon
  } else {
    audio.pause();
    playPauseButton.textContent = '▶'; // Change back to play icon
  }
};

// Update progress knob position
const updateProgress = () => {
  const audio = document.getElementById('audioFile');
  const rangeKnob = document.getElementById('rangeKnob');
  const range = document.querySelector('.range');

  if (audio.duration) {
    const progressPercentage = (audio.currentTime / audio.duration) * 100;

    // Update the knob position
    rangeKnob.style.left = `${progressPercentage}%`;

    // Update the progress bar gradient
    range.style.background = `linear-gradient(to right, #ff6f61 ${progressPercentage}%, transparent ${progressPercentage}%)`;

    if (progressPercentage === 100) {
      if (currentSongIndex >= musicLibrary.length - 1) {
        currentSongIndex = 0;
      } else {
        currentSongIndex++;
      }

      updateMediaPlayer(true);
    }
  }
};

// Add an event listener to update progress bar during playback
document.getElementById('audioFile').addEventListener('timeupdate', updateProgress);

// Optional: Add a function to seek when clicking on the progress bar
document.querySelector('.range').addEventListener('click', (event) => {
  const audio = document.getElementById('audioFile');
  const range = document.querySelector('.range');
  const rangeRect = range.getBoundingClientRect();
  const clickPosition = event.clientX - rangeRect.left;
  const newTime = (clickPosition / rangeRect.width) * audio.duration;
  
  audio.currentTime = newTime;
});

// Gebruik currentSong om de mediaplayer informatie te updaten
updateMediaPlayer()