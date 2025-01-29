// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS
  AOS.init({
    duration: 1000, // Animation duration in milliseconds
    once: true,     // Only animate elements once
    easing: "ease-in-out", // Animation easing style
  });
});
