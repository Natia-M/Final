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
// section 4//
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

showSlide(currentSlide);

//section 5//
function filterProjects(category) {
  let projects = document.querySelectorAll(".project");
  let buttons = document.querySelectorAll(".sidebar button");

  // Remove 'selected' class from all buttons
  buttons.forEach((btn) => btn.classList.remove("selected"));

  // Add 'selected' class to the clicked button
  let activeButton = document.querySelector(
    `.sidebar button[onclick="filterProjects('${category}')"]`
  );
  if (activeButton) activeButton.classList.add("selected");

  // Show or hide projects based on category
  projects.forEach((project) => {
    if (category === "all") {
      project.classList.remove("hidden");
    } else {
      if (project.classList.contains(category)) {
        project.classList.remove("hidden");
      } else {
        project.classList.add("hidden");
      }
    }
  });
}
//section 6 //
document.querySelectorAll(".team-box").forEach((box) => {
  box.addEventListener("mouseenter", () => {
    box.querySelector(".team-inner").style.transform = "rotateY(180deg)";
  });

  box.addEventListener("mouseleave", () => {
    box.querySelector(".team-inner").style.transform = "rotateY(0deg)";
  });
});
//section 7 //
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const website = document.getElementById("website").value;
    const message = document.getElementById("message").value;

    fetch("https://borjomi.loremipsum.ge/api/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, website, message }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 1) {
          document.getElementById("responseMessage").innerText =
            "Thank you for getting in touch! We appreciate you contacting us.";
          document.getElementById("responseMessage").style.color = "green";
          document.getElementById("contactForm").reset();
        } else {
          document.getElementById("responseMessage").innerText =
            "Something went wrong. Please try again.";
          document.getElementById("responseMessage").style.color = "red";
        }
      })
      .catch((error) => {
        document.getElementById("responseMessage").innerText =
          "Error sending message!";
        document.getElementById("responseMessage").style.color = "red";
      });
  });
