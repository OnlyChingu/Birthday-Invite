document.addEventListener('DOMContentLoaded', () => {
  const music = document.getElementById('background-music');
  const envelope = document.getElementById('envelope');
  const openButton = document.getElementById('open-envelope');
  const mainContent = document.getElementById('main-content');
  const envelopeContainer = document.getElementById('envelope-container');

 // Play background music
  music.volume = 0.75;
  music.muted = false;
  try {
    music.play();
  } catch (err) {
    console.log("Autoplay blocked by browser.");
  }


  // Open the envelope and reveal the main content
  openButton.addEventListener('click', () => {
    envelope.classList.add('open');
    setTimeout(() => {
      envelopeContainer.classList.add('hidden');
      mainContent.style.display = 'block';
      document.body.style.overflow = 'auto'; // Allow scrolling
    }, 1500); // Wait for animation to finish

  });
});