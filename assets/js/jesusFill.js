$(document).ready(function() {

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

      const header = document.getElementById('header');
      const footer = document.getElementById('ref-footer');
      const icono = document.getElementById('icono')

      window.addEventListener('scroll', () => {
        // Verificar si el ancho de la ventana es menor a 768 píxeles
        if (window.innerWidth < 768) {
          // Obtener la posición del footer con respecto a la parte superior de la página
          const footerTop = footer.getBoundingClientRect().top + window.scrollY;

          // Obtener la altura del viewport
          const viewportHeight = window.innerHeight;

          // Verificar si el scrollY + altura del viewport ha alcanzado o pasado el footer
          if (window.scrollY + viewportHeight > footerTop) {
            header.classList.add('header-scrolled');
            icono.style.color = '#000'; 
          } else {
            header.classList.remove('header-scrolled');
            icono.style.color = '#fff'; 
          }
        } else {
          // Asegurarse de que la clase se elimine si el ancho de la ventana es mayor o igual a 768 píxeles
          header.classList.remove('header-scrolled');
        }
      });



  /**
   * Animation on scroll
   */

   AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: false,
    mirror: true,
    anchorPlacement: 'top-bottom',
   	onEnter: function() {
      // Mostrar contenido al pasar el mouse por encima
    },
    onLeave: function() {
      // Esconder contenido al alejarse
    }
  });

window.addEventListener('scroll', function() {
  const textElements = document.querySelectorAll('.image-text');
  textElements.forEach(function(element) {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 300) { // Cambia '100' a la distancia que prefieras
      element.style.opacity = '1';
    } else {
      element.style.opacity = '0';
    }
  });
});


  window.addEventListener('scroll', function() {
      if (window.scrollY > 250) {
          document.querySelector('#features').classList.add('blur');
      } else {
          document.querySelector('#features').classList.remove('blur');
      }
  });

});
