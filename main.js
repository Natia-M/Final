function sliderFn() {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function renderSlides() {
    slides.forEach((slide, index) => {
      slide.classList.remove("show-slide");
    });
    slides[currentSlide].classList.add("show-slide");
  }

  function goToNextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    renderSlides();
  }

  setInterval(goToNextSlide, 5000);
  renderSlides();
}

sliderFn();
// first section//
document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress");

  function fillProgressBars() {
    progressBars.forEach((bar) => {
      const percentage = bar.getAttribute("data-percentage");
      const barPosition = bar.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;

      if (barPosition < screenPosition) {
        bar.style.width = percentage + "%";
      }
    });
  }

  window.addEventListener("scroll", fillProgressBars);
});
//4//
const slides = document.querySelectorAll(".slide-2");
const dots = document.querySelectorAll(".dot");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("show-2");
    dots[i].classList.remove("active");
  });

  slides[index].classList.add("show-2");
  dots[index].classList.add("active");
}

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    currentSlide = parseInt(dot.getAttribute("data-slide"));
    showSlide(currentSlide);
  });
});

// Show the first slide by default
showSlide(currentSlide);
