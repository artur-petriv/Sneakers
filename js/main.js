document.addEventListener("DOMContentLoaded", function () {
  // Header -> On scroll -> Change background (temporal, TODO: Find solution - debounce?)
  function headerScroll() {
    const header = document.querySelector(".header");
    this.scrollY >= 50
      ? header.classList.add("header_scroll")
      : header.classList.remove("header_scroll");
  }

  window.addEventListener("scroll", headerScroll);

  // Home -> Swiper -> Init
  const swiper = new Swiper(".home__swiper", {
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination1",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next1",
      prevEl: ".swiper-button-prev1",
    },
  });

  // Favorite -> Swiper -> Init
  const swiper2 = new Swiper(".favorite__swiper", {
    slidesPerView: 3,
    spaceBetween: 16,

    navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
    },
  });
});
