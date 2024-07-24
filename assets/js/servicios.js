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
      direccion: 'C. Altamira, Cabudare 3023, Lara'
    },
    sede_2: {
      nombre: 'Sede 2',
      direccion: 'Dirección Sede 2'
    },
    sede_3: {
      nombre: 'Sede 3',
      direccion: 'Dirección Sede 3'
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
      const info = infoSedes[sedeSeleccionada] || {};

      sedeNombre.innerHTML = `Sede <strong class="text-darkCyan">${info.nombre}</strong>`;
      sedeDireccion.innerHTML = `Dirección: <strong class="text-darkCyan">${info.direccion}</strong>`;

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
        tituloStart.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        console.log('Desplazamiento realizado con scrollIntoView');
      }, 300);
    });
  });

})