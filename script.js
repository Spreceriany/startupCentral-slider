const swiper = new Swiper('.swiper-container', {
    spaceBetween: 20,
    slidesPerView:4,
    loop:true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: ".swiper-button-prev",

    },

    allowSwipeToNext: true
  
    // And if we need scrollbar
    
  });
  swiper.slideNext();