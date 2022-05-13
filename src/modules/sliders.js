import Swiper, { Navigation, Pagination } from "swiper";

const sliders = () => {
  if (document.querySelector(".benefits-slider")) {
    const swiper = new Swiper(".benefits-slider", {
      // Install modules
      modules: [Navigation, Pagination],
      speed: 500,
      autoHeight: true,
      slidesPerView: 3,
      loop: true,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        576: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      },

      navigation: {
        nextEl: ".benefits__arrow--right",
        prevEl: ".benefits__arrow--left",
      },
    });
  }
  if (document.querySelector(".services-slider")) {
    const swiper = new Swiper(".services-slider", {
      // Install modules
      modules: [Navigation, Pagination],
      speed: 500,
      autoHeight: true,
      slidesPerView: 1,
      loop: true,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        1200: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
      },

      navigation: {
        nextEl: ".services__arrow--right",
        prevEl: ".services__arrow--left",
      },
    });
  }
};

export default sliders;
