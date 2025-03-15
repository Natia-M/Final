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
