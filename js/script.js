// script.js

// Get the image element by ID
const image = document.getElementById("spinningImage");

// Add the spinning animation
function startSpinning() {
  image.style.animation = "spin 1.5s infinite linear";  // Set the animation (2s rotation)
}

// Call the function to start spinning
startSpinning();
