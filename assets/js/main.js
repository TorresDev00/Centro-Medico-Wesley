(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 24
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Toggle .header-scrolled class to #header when page is scrolled
   */
   let selectHeader = document.querySelector('#header');
   let selectNavItems = document.querySelectorAll('#navbar ul li');
   let selectImg = document.querySelector('#header .logo img');

   if (selectHeader) {
    const headerScrolled = () => {
      if (window.scrollY > 100) {
        selectHeader.classList.add('header-scrolled');
        selectImg.src = 'assets/img/Wesleyano/logo_4.svg'
        selectNavItems.forEach(item => {
          item.classList.remove('colorLi');
        });
      } else {
        selectHeader.classList.remove('header-scrolled');
        selectImg.src = 'assets/img/Wesleyano/logo_7.svg'
        selectNavItems.forEach(item => {
          item.classList.add('colorLi');
        });
      }
    };

    window.addEventListener('load', headerScrolled);
    window.addEventListener('scroll', headerScrolled);
  }


    // Animacion cambio fondo

    let showingDivTitle = false;

    document.getElementById("excelencia").addEventListener("click", function() {
      const excelencia = document.querySelector('#excelencia');

      if (excelencia) {
        let divTitle = `<div class="icon-box-white h-100">
        <h4 class="title mt-2 py-5 fs-3" data-aos="fade-up" data-aos-delay="200"><a>Excelencia</a></h4>
        </div>`;

        let divInfo = `<div class="icon-box-yellow h-100">
        <p class="description py-4 my-2" data-aos="fade-up" data-aos-delay="100" >Educación cristiana para formar una generación relevante y eficaz en la propagación del evangelio.</p>
        </div>`;

        excelencia.classList.add('transition');

        excelencia.style.opacity = 0;
        excelencia.style.visibility = 'hidden';

        setTimeout(() => {
          if (showingDivTitle) {
            excelencia.innerHTML = divInfo;
          } else {
            excelencia.innerHTML = divTitle;
          }
          excelencia.style.opacity = 1;
          excelencia.style.visibility = 'visible';
        }, 500); // Ajusta el tiempo de retraso según tus necesidades

        showingDivTitle = !showingDivTitle; // Alternar el estado
      } else {
        console.error('No se encontró ningún elemento con el ID "excelencia"');
      }
    });


      let showingDivTitle1 = false;

      document.getElementById("santidad").addEventListener("click", function() {
        const santidad = document.querySelector('#santidad');

        if (santidad) {
          let divTitle = `<div class="icon-box-black h-100">
          <h4 class="title mt-2 py-5 fs-3" data-aos="fade-up" data-aos-delay="200"><a>Santidad</a></h4>
          </div>`;

          let divInfo = `<div class="icon-box-white h-100">
          <p class="description py-4 my-2" data-aos="fade-up" data-aos-delay="100"> Un estilo de vida que erradica el pecado, con una integridad para la manifestación de un evangelio genuino</p>
          </div>`;

          santidad.classList.add('transition');

          santidad.style.opacity = 0;
          santidad.style.visibility = 'hidden';

          setTimeout(() => {
            if (showingDivTitle1) {
              santidad.innerHTML = divInfo;
            } else {
              santidad.innerHTML = divTitle;
            }
            santidad.style.opacity = 1;
            santidad.style.visibility = 'visible';
      }, 500); // Ajusta el tiempo de retraso según tus necesidades

      showingDivTitle1 = !showingDivTitle1; // Alternar el estado
    } else {
      console.error('No se encontró ningún elemento con el ID "santidad"');
    }
  });

      let showingDivTitle2 = false;

      document.getElementById("vidaEspiritu").addEventListener("click", function() {
        const vidaEspiritu = document.querySelector('#vidaEspiritu');

        if (vidaEspiritu) {
          let divTitle = `<div class="icon-box-white h-100">
          <h4 class="title mt-2 py-5 fs-3" data-aos="fade-up" data-aos-delay="200"><a>Vida en el Espíritu</a></h4>
          </div>`;

          let divInfo = `<div class="icon-box h-100">
          <p class="description py-4 my-2" data-aos="fade-up" data-aos-delay="100">Apasionados por una intimidad ferviente y una adoración transformadora.</p>
          </div>`;

          vidaEspiritu.classList.add('transition');

          vidaEspiritu.style.opacity = 0;
          vidaEspiritu.style.visibility = 'hidden';

          setTimeout(() => {
            if (showingDivTitle2) {
              vidaEspiritu.innerHTML = divInfo;
            } else {
              vidaEspiritu.innerHTML = divTitle;
            }
            vidaEspiritu.style.opacity = 1;
            vidaEspiritu.style.visibility = 'visible';
      }, 500); // Ajusta el tiempo de retraso según tus necesidades

      showingDivTitle2 = !showingDivTitle2; // Alternar el estado
    } else {
      console.error('No se encontró ningún elemento con el ID "vidaEspiritu"');
    }
  });



  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });


new Swiper('.swiper_1', {
  direction: 'horizontal', // Desplazamiento hacia la derecha
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
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
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  }
});

new Swiper('.swiper_2', {
  direction: 'horizontal', // Desplazamiento horizontal
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
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
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  }
});


new Swiper('.swiper_3', {
  direction: 'horizontal', // Desplazamiento hacia la derecha
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  slidesPerView: 'auto',
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
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  }
});

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()