document.addEventListener("DOMContentLoaded", function () {
  // Throttle
  function throttle(fn, ms) {
    let isThrottled = false;
    let prevArgs;
    let prevThis;

    function container() {
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

    return container;
  }

  // Header -> On scroll
  let prevY;

  function headerScroll() {
    const header = document.querySelector(".header");

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
  }

  headerScroll = throttle(headerScroll, 250);

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
