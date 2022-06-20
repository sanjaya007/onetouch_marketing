const swiperInit = () => {
  const loSwiber = new Swiper(".lo-swiper-container", {
    direction: "horizontal",
    loop: false,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      100: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      615: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const zoSwiber = new Swiper(".zo-swiper-container", {
    direction: "horizontal",
    loop: false,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      100: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      450: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const roleSwiper = new Swiper(".role-swiper-container", {
    direction: "horizontal",
    loop: false,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      100: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      400: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      600: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1300: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const feSwiper = new Swiper(".fe-swiper-container", {
    direction: "horizontal",
    loop: false,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      300: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      420: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      550: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const beSwiper = new Swiper(".be-swiper-container", {
    direction: "horizontal",
    loop: false,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      300: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      420: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      550: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      700: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
      1240: {
        slidesPerView: 8,
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const mbSwiber = new Swiper(".mb-swiper-container", {
    direction: "horizontal",
    loop: false,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      310: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      400: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const qaSwiber = new Swiper(".qa-swiper-container", {
    direction: "horizontal",
    loop: false,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      310: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      400: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const baSwiber = new Swiper(".ba-swiper-container", {
    direction: "horizontal",
    loop: false,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      310: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      400: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      550: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const exSwiber = new Swiper(".ex-swiper-container", {
    direction: "horizontal",
    loop: false,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      100: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      350: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      550: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const conSwiber = new Swiper(".con-swiper-container", {
    direction: "horizontal",
    loop: false,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      100: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      350: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};

window.addEventListener("load", function () {
  swiperInit();
});
