document.addEventListener("DOMContentLoaded", function () {

  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const themeText = document.getElementById('theme-text');
  let selectImg = document.querySelector('.navbar .navbar-brand img')

  let isDarkMode = false;

  function toggleTheme() {
    const htmlElement = document.documentElement;
    if (htmlElement.getAttribute('data-bs-theme') === 'light') {
      htmlElement.setAttribute('data-bs-theme', 'dark');
      selectImg.src = 'assets/img/iconoWesley.png';
      htmlElement.classList.add('dark');
      themeIcon.classList.remove('bi-sun-fill');
      themeIcon.classList.add('bi-moon-fill');
      themeText.textContent = 'Dark';
    } else {
      htmlElement.setAttribute('data-bs-theme', 'light');
      htmlElement.classList.remove('dark');
      selectImg.src = 'assets/img/iconoWesley_1.png';
      themeIcon.classList.remove('bi-moon-fill');
      themeIcon.classList.add('bi-sun-fill');
      themeText.textContent = 'Light';
    }
    isDarkMode = !isDarkMode;
  }

  themeToggle.addEventListener('click', toggleTheme);


  // Definimos las especialidades disponibles por cada sede
  const especialidadesPorSede = {
    sede_1: ['ambulancia', 'medicina_integral', 'pediatria', 'cardiologia', 'otorrinolaringologia', 'ginecologia', 'odontologia', 'neurocirugia', 'nefroloia'],
    sede_2: ['medicina_a_domicilio', 'endocrinologia', 'angiologia', 'fisioterapia', 'nutricionista', 'cirugia_general', 'traumatologia', 'ecografia_integral', 'psicologia'],
    sede_3: ['clinica_movil', 'nutricionista', 'fisioterapia', 'gastroenterologia', 'cirugia_general', 'urologia', 'otorrinolaringologia', 'ginecologia', 'odontologia']
    // Añade más según sea necesario
  };

  // Información de las sedes
  const infoSedes = {
    sede_1: {
      nombre: 'Cabudare',
      direccion: 'C. Altamira, Cabudare 3023, Lara',
      maps: '<iframe class="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d491.13823052044654!2d-69.22253736994304!3d10.008115351027937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e875f722e50bdc7%3A0x68fa4d525677f0bb!2sSeminario%20Wesleyano%20de%20Venezuela!5e0!3m2!1ses-419!2sve!4v1721919468022!5m2!1ses-419!2sve" style="border:0; width: 100%; height: 600px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    sede_2: {
      nombre: 'Sede 2',
      direccion: 'Sede 2',
      maps: '<iframe class="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d491.13823052044654!2d-69.22253736994304!3d10.008115351027937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e875f722e50bdc7%3A0x68fa4d525677f0bb!2sSeminario%20Wesleyano%20de%20Venezuela!5e0!3m2!1ses-419!2sve!4v1721919468022!5m2!1ses-419!2sve" style="border:0; width: 100%; height: 600px;"allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    },
    sede_3: {
      nombre: 'Sede 3',
      direccion: 'Sede 3',
      maps: '<iframe class="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d491.13823052044654!2d-69.22253736994304!3d10.008115351027937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e875f722e50bdc7%3A0x68fa4d525677f0bb!2sSeminario%20Wesleyano%20de%20Venezuela!5e0!3m2!1ses-419!2sve!4v1721919468022!5m2!1ses-419!2sve" style="border:0; width: 100%; height: 600px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    }
    // Añade más según sea necesario
  };

  // Obtenemos los íconos de las sedes
  const locationIcons = document.querySelectorAll('.location-icon');

  locationIcons.forEach(icon => {
    icon.addEventListener('click', function () {
      // Obtenemos la sede seleccionada
      const sedeSeleccionada = this.getAttribute('data-sede');

      // Obtenemos las especialidades para la sede seleccionada
      const especialidades = especialidadesPorSede[sedeSeleccionada] || [];

      // Actualizamos el nombre y la dirección de la sede
      const sedeNombre = document.getElementById('sedeNombre');
      const sedeDireccion = document.getElementById('sedeDireccion');
      const sedeMaps = document.getElementById('maps');
      const info = infoSedes[sedeSeleccionada] || {};

      sedeNombre.innerHTML = `Sede <strong class="text-darkCyan">${info.nombre}</strong>`;
      sedeDireccion.innerHTML = ` <strong class="text-darkCyan">${info.direccion}</strong>`;
      sedeMaps.innerHTML = `${info.maps}`

      // Actualizamos la visibilidad de los servicios
      const services = document.querySelectorAll('.service');
      services.forEach(service => {
        const serviceType = service.getAttribute('data-service');
        if (especialidades.includes(serviceType)) {
          service.classList.add('visible'); // Añadimos la clase visible
        } else {
          service.classList.remove('visible'); // Quitamos la clase visible
        }
      });

      // Animamos la visibilidad del título
      const tituloStart = document.getElementById('tituloStart');
      tituloStart.classList.add('visible'); // Mostramos el título con transición

      // Desplazamos la página hacia abajo
      setTimeout(() => {
        if (tituloStart) {
          tituloStart.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);

    });
  });

})