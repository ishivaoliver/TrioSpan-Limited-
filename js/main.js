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

// Smooth Scroll Script
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});

// Footer js 
document.addEventListener("DOMContentLoaded", function () {
  const socialIcons = document.querySelectorAll(".social-icons a");

  socialIcons.forEach((icon) => {
    icon.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.2)";
    });

    icon.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  });
});

// button back to top
document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.getElementById("back-to-top");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      backToTopButton.style.display = "flex";
      backToTopButton.style.animation = "fadeIn 0.5s";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});




