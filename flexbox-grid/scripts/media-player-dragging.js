let isDragging = false;
let offsetX = 0;
let offsetY = 0;

const mediaPlayer = document.querySelector('.media-player');

// Mouse events
mediaPlayer.addEventListener('mousedown', (event) => {
  isDragging = true;
  offsetX = event.clientX - mediaPlayer.offsetLeft;
  offsetY = event.clientY - mediaPlayer.offsetTop;

  document.addEventListener('mousemove', drag);
  document.addEventListener('mouseup', stopDrag);
});

// Touch events
mediaPlayer.addEventListener('touchstart', (event) => {
  isDragging = true;
  const touch = event.touches[0];
  offsetX = touch.clientX - mediaPlayer.offsetLeft;
  offsetY = touch.clientY - mediaPlayer.offsetTop;

  document.addEventListener('touchmove', drag);
  document.addEventListener('touchend', stopDrag);
});

// Dragging logic
const drag = (event) => {
  if (!isDragging) return;

  let clientX, clientY;
  if (event.type === 'mousemove') {
    clientX = event.clientX;
    clientY = event.clientY;
  } else if (event.type === 'touchmove') {
    const touch = event.touches[0];
    clientX = touch.clientX;
    clientY = touch.clientY;
  }

  mediaPlayer.style.left = `${clientX - offsetX}px`;
  mediaPlayer.style.top = `${clientY - offsetY}px`;
};

// Stop dragging
const stopDrag = () => {
  isDragging = false;

  document.removeEventListener('mousemove', drag);
  document.removeEventListener('mouseup', stopDrag);
  document.removeEventListener('touchmove', drag);
  document.removeEventListener('touchend', stopDrag);
};
