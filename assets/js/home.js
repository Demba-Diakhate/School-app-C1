let cguCarte = document.querySelectorAll(".cgu-carte")

cguCarte.forEach(carte => {
    carte.addEventListener("click", () => {
        carte.classList.toggle("active")
    })
})


const swiper = new Swiper('.swiper', {
    // Paramètre pour limiter le nombre de diapositives visibles
    slidesPerView: 'auto',
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
    },

    // Activer le défilement tactile
    touchRatio: 1,          // Ratio de sensibilité au défilement tactile (1 par défaut)
    simulateTouch: true,    // Simule le comportement tactile si la souris est utilisée
    grabCursor: true,       // Change le curseur pour indiquer que l'utilisateur peut faire glisser

  });