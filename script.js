document.addEventListener('DOMContentLoaded', () => {
  const openButton = document.getElementById('open-envelope');
  const flap = document.querySelector('#envelope .flap');
  const envelopeContainer = document.getElementById('envelope-container');
  const mainContent = document.getElementById('main-content');
  const footer = document.createElement('footer');
  footer.style.height = '50px'; // or any fixed height
  document.body.appendChild(footer);
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
  // Add a fallback for non-touch devices
  openButton.addEventListener('click', () => {
    // Animate the flap to open
    flap.style.transform = 'rotateX(-180deg)';
    // Optimize animations for mobile devices
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  if (isMobile) {
    // Use a shorter animation duration for mobile devices
    flap.style.transitionDuration = '0.5s';
  }
});
