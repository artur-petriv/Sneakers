document.addEventListener("DOMContentLoaded", function () {
  // Throttle
  function throttle(fn, ms) {
    let isThrottled = false;
    let prevArgs;
    let prevThis;

    return function container() {
      if (isThrottled) {
        prevArgs = arguments;
        prevThis = this;
        return;
      }

      fn.apply(this, arguments);
      isThrottled = true;

      setTimeout(function () {
        isThrottled = false;
        if (prevArgs) {
          container.apply(prevThis, prevArgs);
          prevArgs = prevThis = null;
        }
      }, ms);
    }
  }

  // Header -> On scroll
  let prevY;
  const header = document.querySelector(".header");
  const scrollUp = document.querySelector(".scroll_up");

  function headerScroll() {
    if (!header) return;

    if (this.scrollY >= 50) {
      header.classList.add("header_scroll");

      this.scrollY > prevY
        ? header.classList.add("header_hide")
        : header.classList.remove("header_hide");
    } else {
      header.classList.remove("header_hide");
      header.classList.remove("header_scroll");
    }

    prevY = this.scrollY;

    // Scroll Arrow
    if (!scrollUp) return;
    this.scrollY >= 400 ? scrollUp.classList.remove("scroll_hidden") : scrollUp.classList.add("scroll_hidden");
  }

  headerScroll = throttle(headerScroll, 120);
  window.addEventListener("scroll", headerScroll);


  // Home -> Swiper -> Init
  const swiper = new Swiper(".home__swiper", {
    slidesPerView: 1,
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination-1",
      type: "fraction",
      clickable: false,
    },

    navigation: {
      nextEl: ".swiper-button-next-1",
      prevEl: ".swiper-button-prev-1",
    },

    breakpoints: {
      992: {
        pagination: {
          type: "fraction",
          clickable: false,
        },
      },
      1200: {
        pagination: {
          type: "bullets",
          clickable: true,
        },
      },
    },
  });


  // Favorite -> Swiper -> Init
  const swiper2 = new Swiper(".trending__swiper", {
    slidesPerView: 1,
    spaceBetween: 16,

    navigation: {
      nextEl: ".swiper-button-next-2",
      prevEl: ".swiper-button-prev-2",
    },

    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
    },
  });


  // Animation -> Reveal -> Init
  const scrollReveal = ScrollReveal({
    distance: '120px',
    viewOffset: {
      bottom: 100
    },
    origin: 'top',
    delay: 100,
    duration: 1400,
    // reset: true
  })

  scrollReveal.reveal(`.sr-home_left`, {origin: 'left'});
  scrollReveal.reveal(`.sr_left`, {origin: 'left', mobile: false});
  scrollReveal.reveal(`.sr-title_left`, {origin: 'left', mobile: false});
  scrollReveal.reveal(`.footer__socials`, {origin: 'left', delay: 1400, mobile: false});
  scrollReveal.reveal(`.sr_right`, {origin: 'right', mobile: false});
  scrollReveal.reveal(`.shipping__container`, {origin: 'right', mobile: false});
  scrollReveal.reveal(`.contacts__socials, .footer__container`, {origin: 'right', delay: 1000, mobile: false});
  scrollReveal.reveal(`.shop__item`, {origin: 'bottom', interval: 250, mobile: false});
  scrollReveal.reveal(`.sr_bottom`, {origin: 'bottom', mobile: false});
  scrollReveal.reveal(`.contacts__form`, {origin: 'bottom', delay: 600, mobile: false});
  scrollReveal.reveal(`.sr_bottom-delay`, {origin: 'bottom', delay: 1000});
});