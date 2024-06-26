  document.addEventListener("DOMContentLoaded", function() {

    const swiper = new Swiper('.pensum', {
      speed: 600,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      centeredSlides: true, // Centrar los cuadros
      keyboard: {
      enabled: true,
      onlyInViewport: true
      },
      grabCursor: true,
      mousewheel: true, // Habilita el desplazamiento con la rueda del ratón
      touchRatio: 0.5, // Controla la sensibilidad del desplazamiento táctil
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        768: {
          slidesPerView: 2, // Mostrar 2 cuadros en pantallas de 768px o menos
          spaceBetween: 30 // Espacio entre los cuadros
        },
        1024: {
          slidesPerView: 3, // Mostrar 3 cuadros en pantallas de 1200px o más
          centeredSlides: true, // Centrar los cuadros en pantallas de 1200px o más
          spaceBetween: 30
        },
        1200: {
          slidesPerView: 3, // Mostrar 3 cuadros en pantallas de 1200px o más
          centeredSlides: true, // Centrar los cuadros en pantallas de 1200px o más
          spaceBetween: 30
        }
      }
    })

    document.querySelector('.prev').addEventListener('click', function() {
      swiper.slidePrev();
    });

    document.querySelector('.next').addEventListener('click', function() {
      swiper.slideNext();
    });


     const imagesToPreload = [
    '../assets/img/pensum/herramientaDeInterpretacion.webp',
    '../assets/img/pensum/redaccionLectura.webp',
    '../assets/img/pensum/familia.webp',
    '../assets/img/pensum/informatica.webp',
    '../assets/img/pensum/panoramaAntiguoTestamento.webp',
    '../assets/img/pensum/herramientasInterpretacionPractica.webp',
    '../assets/img/pensum/pentateuco.webp',
    '../assets/img/pensum/panoramaDelNuevoTestamento.webp',
    '../assets/img/pensum/espirituSanto.webp',
    '../assets/img/pensum/jesus.webp',
    '../assets/img/pensum/teologiaI.webp',
    '../assets/img/pensum/cristologia.webp',
    '../assets/img/pensum/misionologia.webp',
    '../assets/img/pensum/emociones.webp',
    '../assets/img/pensum/pedagogia.webp',
    '../assets/img/pensum/librosHistoricos.webp',
    '../assets/img/pensum/teologiaII.webp',
    '../assets/img/pensum/oratoria.webp',
    '../assets/img/pensum/historioDeLaIglesia.webp',
    '../assets/img/pensum/eticaCristiana.webp',
    '../assets/img/pensum/evangelismoPersonal.webp',
    '../assets/img/pensum/homiletica.webp',
    '../assets/img/pensum/misionIglesia.webp',
    '../assets/img/pensum/consejeria.webp',
    '../assets/img/pensum/adoración.webp',
    '../assets/img/pensum/proyectoDeVida.webp',
    '../assets/img/pensum/teologiaWesley.webp',
    '../assets/img/pensum/movimientoMetodista.webp',
    '../assets/img/pensum/apologetica.webp',
    '../assets/img/pensum/santidad.webp',
    '../assets/img/pensum/predicando.webp',
    '../assets/img/pensum/gruposCelulares.webp',
    '../assets/img/pensum/hechos.webp',
    '../assets/img/pensum/ministerioPastoral.webp',
    '../assets/img/pensum/dones.webp',
    // Agrega aquí más imágenes que necesiten pre-carga
  ];

  imagesToPreload.forEach(src => {
    const img = new Image();
    img.src = src;
  });

  var lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));
  if ('IntersectionObserver' in window) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove('lazy');
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });
    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Fallback para navegadores que no soportan IntersectionObserver
    lazyImages.forEach(function(lazyImage) {
      lazyImage.src = lazyImage.dataset.src;
      lazyImage.classList.remove('lazy');
    });
  }


    
  });
