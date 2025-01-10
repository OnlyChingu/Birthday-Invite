document.addEventListener('DOMContentLoaded', () => {
  const envelope = document.getElementById('envelope');
  const flap = document.querySelector('#envelope .flap');
  const openButton = document.getElementById('open-envelope');
  const mainContent = document.getElementById('main-content');
  const envelopeContainer = document.getElementById('envelope-container');
  const music = document.getElementById('background-music');

 // Play background music
  music.volume = 0.5;
  music.muted = false;
  try {
    music.play();
  } catch (err) {
    console.log("Autoplay blocked by browser.");
  }

 // Open the envelope and reveal the main content
  openButton.addEventListener('click', () => {
  flap.style.transform = 'rotateX(-180deg)'; // Open the flap
  setTimeout(() => {
    envelopeContainer.style.opacity = '0'; // Fade out envelope
    setTimeout(() => {
      envelopeContainer.style.display = 'none'; // Completely hide envelope
      mainContent.style.display = 'block'; // Show the main content
      document.body.style.overflow = 'auto'; // Allow scrolling
      document.body.style.height = 'auto'; // Reset height to fit content
    }, 500); // Wait for fade-out to complete
  }, 1500); // Wait for flap animation to complete
});
