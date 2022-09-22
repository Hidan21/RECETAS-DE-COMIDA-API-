export const iniciar = () => {
  const swiper = new Swiper('.swiper-hero', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 4000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false,
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};
