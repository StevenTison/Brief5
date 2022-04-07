const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: true,
    // constante du swiper a l'horizontal pour faire défiler les images
    autoplay: {
        delay: 4600,
        disableOnInteraction: false,
      },
    //  l'auto play qui defile les images automatiqument en ms 
   
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    // les bouton droite et gauche du swiper
    
    scrollbar: {
      el: ".swiper-scrollbar"
    }
  });