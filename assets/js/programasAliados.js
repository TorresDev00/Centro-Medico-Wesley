  document.addEventListener("DOMContentLoaded", function() {

  	
	new Swiper('.logos', {
	  direction: 'horizontal', // Desplazamiento hacia la derecha
	  speed: 600,
	  loop: true,
	  autoplay: {
	    delay: 5000,
	    disableOnInteraction: false
	  },
	  centeredSlides: true,
	  breakpoints: {
	    320: {
	      slidesPerView: 1,
	      spaceBetween: 30
	    },
	    768: {
	      slidesPerView: 2,
	      spaceBetween: 30
	    },
	    1024: {
	      slidesPerView: 3,
	      spaceBetween: 130
	    },
	    1200: {
	      slidesPerView: 3,
	      spaceBetween: 130
	    }
	  }
	});


})

