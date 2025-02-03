document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS (Animate on Scroll)
  AOS.init({
    offset: 200,
    duration: 1000,
    easing: "ease-in-out",
    once: true,
  });
});

// Auto-play carousel faster
document.addEventListener("DOMContentLoaded", function () {
  let heroCarousel = document.querySelector("#heroCarousel");
  let carousel = new bootstrap.Carousel(heroCarousel, {
    interval: 3000, // 3 seconds per slide
    ride: "carousel",
  });
});

