function init() {
  const navbar = document.querySelector("nav");
  function toggleNavbarClass() {
    if (window.scrollY > 0) {
      navbar.classList.add("fixed-top");
    } else {
      navbar.classList.remove("fixed-top");
    }
  }
  window.addEventListener("scroll", toggleNavbarClass);
  navbar.style.transition = "top 0.3s ease-in-out";

  const section = document.querySelector("section");
  if (section.id === "section") {
    section.style.minHeight = `calc(100vh - ${headerHeight}px)`;
  }
  section.style.marginTop = `${headerHeight}px`;
  document.getElementById("year").textContent = `${new Date().getFullYear()}`;
}
window.addEventListener("load", init);
window.addEventListener("resize", init);

let navbarToggler = document.querySelector(".navbar-toggler");

navbarToggler.addEventListener("click", function () {
  let navbarCollapse = document.querySelector(".navbar-collapse");
  navbarCollapse.classList.toggle("show");
});

document.addEventListener("DOMContentLoaded", function () {
  let videoButton = document.querySelector(".video-button");
  let videoModal = document.querySelector(".video-modal");
  let closeButton = videoModal.querySelector(".close-button");
  let overlay = document.querySelector(".video-modal-overlay");

  videoButton.addEventListener("click", function () {
    videoModal.classList.add("show");
    overlay.style.display = "block";
  });

  closeButton.addEventListener("click", function () {
    videoModal.classList.remove("show");
    overlay.style.display = "none";
  });
});

swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

//faq's
var accordion = document.getElementsByClassName("accordion");
var i;

// Set the first accordion as active initially
accordion[0].classList.add("active");
accordion[0].nextElementSibling.style.display = "block";

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    var isActive = this.classList.contains("active");

    // Remove "active" class from all accordions
    for (var j = 0; j < accordion.length; j++) {
      accordion[j].classList.remove("active");
      accordion[j].nextElementSibling.style.display = "none";
    }

    // Add or remove "active" class based on previous state
    if (!isActive) {
      this.classList.add("active");
      this.nextElementSibling.style.display = "block";
    }
  });
}
