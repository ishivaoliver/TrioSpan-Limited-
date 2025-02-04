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

// Why choose us section 
document.addEventListener("DOMContentLoaded", function () {
  const features = document.querySelectorAll(".feature");

  // Add hover effect with dynamic glow color
  features.forEach((feature) => {
    feature.addEventListener("mouseenter", () => {
      const colors = ["cyan", "magenta", "blue", "purple"];
      let randomColor = colors[Math.floor(Math.random() * colors.length)];
      feature.style.boxShadow = `0px 0px 20px ${randomColor}`;
      feature.style.borderColor = randomColor;
    });

    feature.addEventListener("mouseleave", () => {
      feature.style.boxShadow = "0px 0px 20px rgba(0, 255, 255, 0.6)";
      feature.style.borderColor = "rgba(255, 255, 255, 0.2)";
    });
  });

  // Scroll reveal animation
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  document.querySelectorAll(".feature").forEach((feature) => {
    observer.observe(feature);
  });
});

// Service section 
document.addEventListener("DOMContentLoaded", () => {
  // GSAP Animation for Services Section
  gsap.from(".service", {
    opacity: 0,
    y: 50,
    duration: 1.2,
    stagger: 0.2,
    ease: "power2.out",
  });

  // Hover Animation Effect
  const services = document.querySelectorAll(".service");

  services.forEach((service) => {
    service.addEventListener("mouseenter", () => {
      gsap.to(service, { scale: 1.05, duration: 0.3 });
    });
    service.addEventListener("mouseleave", () => {
      gsap.to(service, { scale: 1, duration: 0.3 });
    });
  });
});




// Price estimations section
// Smooth Scroll for 'Get a Quote' button
document.querySelectorAll('.btn-primary').forEach(btn => {
  btn.addEventListener('click', function (event) {
    event.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: target.offsetTop - 50, // Slightly adjust scroll to avoid header overlap
      behavior: 'smooth',
    });
  });
});

// Projects section
// Smooth Scroll for "projects" section
document.querySelectorAll('.project').forEach((project) => {
  project.addEventListener('mouseenter', () => {
    project.style.transform = 'scale(1.08)';
    project.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
  });

  project.addEventListener('mouseleave', () => {
    project.style.transform = 'scale(1)';
    project.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
  });
});

// JS for Sustainability section 
document.addEventListener("DOMContentLoaded", () => {
  const stats = document.querySelectorAll(".stat-item h4");

  const animateStats = () => {
    stats.forEach((stat) => {
      let target = +stat.textContent.replace("%", "");
      let count = 0;
      let speed = 20;

      const updateCount = () => {
        if (count < target) {
          count += 1;
          stat.textContent = `${count}%`;
          setTimeout(updateCount, speed);
        } else {
          stat.textContent = `${target}%`;
        }
      };

      updateCount();
    });
  };

  // Run animation when section is in viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateStats();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(document.querySelector("#safety"));
});


// Blogs and insights Section 
document.addEventListener("DOMContentLoaded", function () {
  const blogPosts = document.querySelectorAll(".blog-post");

  // Hover effect for blog posts
  blogPosts.forEach((post) => {
    post.addEventListener("mouseenter", () => {
      post.style.transform = "scale(1.05)";
      post.style.transition = "transform 0.3s ease-out";
    });

    post.addEventListener("mouseleave", () => {
      post.style.transform = "scale(1)";
    });
  });

  // Scroll animation
  function revealOnScroll() {
    blogPosts.forEach((post) => {
      const postTop = post.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (postTop < windowHeight - 100) {
        post.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Trigger on load

  // Auto-Sliding Blog Cards (Futuristic effect)
  let offset = 0;
  function autoSlide() {
    blogPosts.forEach((post, index) => {
      const direction = index % 2 === 0 ? 1 : -1;
      post.style.transform = `translateY(${direction * Math.sin(offset) * 10}px)`;
    });
    offset += 0.05;
    requestAnimationFrame(autoSlide);
  }

  autoSlide();
});


// For the FAQ section accordion effect
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Close all other open FAQs
      faqItems.forEach((el) => {
        if (el !== item) {
          el.classList.remove("active");
        }
      });

      // Toggle the clicked one
      item.classList.toggle("active");
    });
  });
});

// Clients 
// Add smooth scroll and animation effects
document.addEventListener("DOMContentLoaded", function () {
  // Animate logos on scroll
  const clientLogos = document.querySelectorAll(".clients-grid img");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    {
      threshold: 0.5, // Trigger when 50% of the element is visible
    }
  );

  clientLogos.forEach((logo) => {
    logo.style.opacity = 0;
    logo.style.transform = "translateY(50px)";
    logo.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    observer.observe(logo);
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
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });

  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});





