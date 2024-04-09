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

// SWIPER SCRIPT
let swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
