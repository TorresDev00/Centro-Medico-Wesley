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


 // Definimos las especialidades por sede
const especialidadesPorSede = {
  sede_1: ['pediatria', 'ginecologia', 'medicina_integral', 'odontologia', 'angiologia', 'cardiologia', 'otorrinolaringologia', 'gastroenterologia', 'psicologia', 'traumatologia','pediatria', 'ambulancia', 'clinica_movil'],
  sede_2: ['medicina_integral', 'ecografia_integral', 'ginecologia', 'pediatria', 'clinica_movil'],
  sede_3: ['medicina_integral', 'endocrinologia', 'pediatria', 'nutricionista', 'fisioterapia', 'odontologia', 'ginecologia', 'otorrinolaringologia', 'cardiologia', 'traumatologia', 'ecografia_integral' , 'psicologia', 'cirugia_general', 'urologia', 'clinica_movil'],
  sede_4: ['ambulancia', 'medicina_integral', 'pediatria', 'cardiologia', 'otorrinolaringologia', 'ginecologia', 'odontologia', 'neurocirugia', 'nefrologia', 'psicologia'],
  sede_5: ['medicina_a_domicilio', 'endocrinologia', 'angiologia', 'fisioterapia', 'nutricionista', 'cirugia_general', 'traumatologia', 'ecografia_integral', 'psicologia'],
  sede_6: ['medicina_a_domicilio', 'endocrinologia', 'angiologia', 'fisioterapia', 'nutricionista', 'cirugia_general', 'traumatologia', 'ecografia_integral', 'psicologia']
};

// Información de las sedes
const infoSedes = {
  sede_1: {
      nombre: 'Cabudare',
      direccion: 'C. Altamira, Cabudare 3023, Lara',
      maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d337.4004379242522!2d-69.2224774983544!3d10.008255855299405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e875f000a08eec9%3A0x4194a391889eeae9!2sCentro%20Medico%20Wesley%20Cabudare!5e0!3m2!1ses-419!2sve!4v1723052696696!5m2!1ses-419!2sve" style="border:0; width: 100%; height: 500px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      numberSede: 'sede_1'
  },
  sede_2: {
      nombre: 'Valle Dorado',
      direccion: 'Comunidad Valle Dorado, carrera 4, con calle 5, Barquisimeto, Lara',
      maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.758016789003!2d-69.42185125497039!3d10.036816441432993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e87630028bd7a2b%3A0x55326e0d5018bb6b!2sCentro%20M%C3%A9dico%20Wesley%20Valle%20Dorado!5e0!3m2!1ses-419!2sve!4v1723425491077!5m2!1ses-419!2sve" style="border:0; width: 100%; height: 500px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      numberSede: 'sede_2'
  },
  sede_3: {
      nombre: 'La Rotaria',
      direccion: 'Av. Rotaria con carrera 17, C.C. Los CARDENALES. Local 1.',
      maps: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245.52893743461516!2d-69.35544162059291!3d10.061096418933586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8767003ee941b5%3A0x1c67ce20212dacce!2sCentro%20Medico%20Wesley%20La%20Rotaria!5e0!3m2!1ses-419!2sve!4v1723433665476!5m2!1ses-419!2sve" style="border:0; width: 100%; height: 500px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      numberSede: 'sede_3'
  },
  sede_4: {
      nombre: 'Tejeria',
      direccion: 'Sede 4',
      maps: '<iframe class="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d491.13823052044654!2d-69.22253736994304!3d10.008115351027937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e875f722e50bdc7%3A0x68fa4d525677f0bb!2sSeminario%20Wesleyano%20de%20Venezuela!5e0!3m2!1ses-419!2sve!4v1721919468022!5m2!1ses-419!2sve" style="border:0; width: 100%; height: 500px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      numberSede: 'sede_4'
  },
  sede_5: {
      nombre: 'La Victoria',
      direccion: 'Sede 5',
      maps: '<iframe class="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d491.13823052044654!2d-69.22253736994304!3d10.008115351027937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e875f722e50bdc7%3A0x68fa4d525677f0bb!2sSeminario%20Wesleyano%20de%20Venezuela!5e0!3m2!1ses-419!2sve!4v1721919468022!5m2!1ses-419!2sve" style="border:0; width: 100%; height: 500px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      numberSede: 'sede_5'
  },
  sede_6: {
      nombre: 'Coro',
      direccion: 'Sede 6',
      maps: '<iframe class="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d491.13823052044654!2d-69.22253736994304!3d10.008115351027937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e875f722e50bdc7%3A0x68fa4d525677f0bb!2sSeminario%20Wesleyano%20de%20Venezuela!5e0!3m2!1ses-419!2sve!4v1721919468022!5m2!1ses-419!2sve" style="border:0; width: 100%; height: 500px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      numberSede: 'sede_6'
  }
};

// Sedes con sub-sedes
const sedesPorEstado = {
  sede_lara: ['Cabudare', 'Valle Dorado', 'La Rotaria'],
  sede_falcon: ['Coro'], 
  sede_aragua: ['Tejeria', 'La Victoria'],
};


function buscarSede(nombre){
  for(const key in infoSedes){
    if(infoSedes[key].nombre.toLowerCase() === nombre.toLowerCase()){
      return infoSedes[key];
    }
  }
  return null
}

// Seleccionamos los íconos de las sedes
const locationIcons = document.querySelectorAll('.location-icon');

locationIcons.forEach(icon => {
  icon.addEventListener('click', function () {
      // Obtenemos la sede seleccionada
      const sedeSeleccionada = this.getAttribute('data-sede');

      // Obtenemos la información de la sede seleccionada
      const info = infoSedes[sedeSeleccionada] || {};

      // Obtenemos el div donde se mostrará la información
      const tituloStart = document.getElementById('tituloStart');

      // Ocultamos todos los servicios
      const services = document.querySelectorAll('.service');
      services.forEach(service => {
          service.classList.remove('visible'); // Ocultamos los servicios
      });

      if (sedeSeleccionada === 'sede_falcon') {
          // Mostrar directamente la información de Coro

          let estado = sedesPorEstado[sedeSeleccionada];

          const sedeCoro = buscarSede(estado[0])

          let especialidades = especialidadesPorSede[sedeCoro.numberSede]

          tituloStart.innerHTML = `
              <div id="maps" style="position: relative; overflow: hidden;">${sedeCoro.maps}</div>
              <h2 class="m-3 text-1 fs-3"><i class="bi bi-hospital"></i> <span id="sedeNombre">Sede <strong class="text-darkCyan">${sedeCoro.nombre}</strong></span></h2>
              <h2 class="m-3 text-1 fs-3"><i class="bi bi-geo-alt-fill"></i> Dirección: <span id="sedeDireccion"><strong class="text-darkCyan">${sedeCoro.direccion}</strong></span></h2>
              <h2 class="m-3 text-1 fs-3"><i class="bi bi-capsule"></i> Esta sede ofrece los siguientes servicios para tu <strong class="text-darkCyan">bienestar:</strong></h2>
          `;
          scrollToInfo(tituloStart);

          // Mostrar los servicios de la sede Coro
          services.forEach(service => {
              const serviceType = service.getAttribute('data-service');
              if (especialidades.includes(serviceType)) {
                  service.classList.add('visible'); // Añadimos la clase visible
              }
          });
      } else if (sedesPorEstado[sedeSeleccionada]) {
        // Crear el menú de sub-sedes
        let menu = '<div class="menuSedes"><ul class="list-group">';
        sedesPorEstado[sedeSeleccionada].forEach(subSede => {
            menu += `<li class="list-group-item sedeItem fs-4"><i class="bi bi-hospital fs-4"></i> ${subSede}</li>`;
        });
        menu += '</ul></div>';
        const tituloStart = document.getElementById('tituloStart');
        tituloStart.innerHTML = menu;
        scrollToInfo(tituloStart);

        // Añadir evento a cada sub-sede para mostrar la información
        document.querySelectorAll('.sedeItem').forEach(item => {
            item.addEventListener('click', function () {
                const subSedeNombre = this.textContent.trim();
                const subSede = buscarSede(subSedeNombre);
                
                if (subSede) {
                    const especialidades = especialidadesPorSede[subSede.numberSede] || [];

                    tituloStart.innerHTML = `
                        <div id="maps" style="position: relative; overflow: hidden;">${subSede.maps}</div>
                        <h2 class="m-3 text-1 fs-3"><i class="bi bi-hospital"></i> <span id="sedeNombre">Sede <strong class="text-darkCyan">${subSede.nombre}</strong></span></h2>
                        <h2 class="m-3 text-1 fs-3"><i class="bi bi-geo-alt-fill"></i> Dirección: <span id="sedeDireccion"><strong class="text-darkCyan">${subSede.direccion}</strong></span></h2>
                        <h2 class="m-3 text-1 fs-3"><i class="bi bi-capsule"></i> Esta sede ofrece los siguientes servicios para tu <strong class="text-darkCyan">bienestar:</strong></h2>
                    `;
                    scrollToInfo(tituloStart);

                    // Mostrar los servicios de la sub-sede seleccionada
                    services.forEach(service => {
                        const serviceType = service.getAttribute('data-service');
                        if (especialidades.includes(serviceType)) {
                            service.classList.add('visible');
                        }
                    });
                }
            });
        });
    } else {
          // Mostrar directamente la información de la sede sin sub-sedes
          tituloStart.innerHTML = `
              <div id="maps" style="position: relative; overflow: hidden;">${info.maps}</div>
              <h2 class="m-3 text-1 fs-3"><i class="bi bi-hospital"></i> <span id="sedeNombre">Sede <strong class="text-darkCyan">${info.nombre}</strong></span></h2>
              <h2 class="m-3 text-1 fs-3"><i class="bi bi-geo-alt-fill"></i> Dirección: <span id="sedeDireccion"><strong class="text-darkCyan">${info.direccion}</strong></span></h2>
              <h2 class="m-3 text-1 fs-3"><i class="bi bi-capsule"></i> Esta sede ofrece los siguientes servicios para tu <strong class="text-darkCyan">bienestar:</strong></h2>
          `;
          scrollToInfo(tituloStart);

          // Mostrar los servicios de la sede seleccionada
          services.forEach(service => {
              const serviceType = service.getAttribute('data-service');
              if (especialidades.includes(serviceType)) {
                  service.classList.add('visible'); // Añadimos la clase visible
              }
          });
      }
  });
});

// Función para desplazar la página hacia la información
function scrollToInfo(element) {
  setTimeout(() => {
      if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
  }, 300);
}




})