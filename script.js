document.addEventListener('DOMContentLoaded', () => {
  const openButton = document.getElementById('open-envelope');
  const flap = document.querySelector('#envelope .flap');
  const envelopeContainer = document.getElementById('envelope-container');
  const mainContent = document.getElementById('main-content');

  openButton.addEventListener('click', () => {
    // Animate the flap to open
    flap.style.transform = 'rotateX(-180deg)';

    // Hide the envelope container and show the main content
    setTimeout(() => {
      envelopeContainer.style.display = 'none';
      mainContent.style.display = 'block';
      document.body.style.overflow = 'auto'; // Enable scrolling
    }, 1500); // Wait for the flap animation to complete
  });
});
