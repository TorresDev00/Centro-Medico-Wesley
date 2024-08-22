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
        sede_1: ['pediatria', 'ginecologia', 'medicina_integral', 'odontologia', 'angiologia', 'cardiologia', 'otorrinolaringologia', 'gastroenterologia', 'psicologia', 'traumatologia', 'pediatria', 'ambulancia', 'clinica_movil'],
        sede_2: ['medicina_integral', 'ecografia_integral', 'ginecologia', 'pediatria', 'clinica_movil'],
        sede_3: ['medicina_integral', 'endocrinologia', 'pediatria', 'nutricionista', 'fisioterapia', 'odontologia', 'ginecologia', 'otorrinolaringologia', 'cardiologia', 'traumatologia', 'ecografia_integral', 'psicologia', 'cirugia_general', 'urologia', 'clinica_movil'],
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


    function buscarSede(nombre) {
        for (const key in infoSedes) {
            if (infoSedes[key].nombre.toLowerCase() === nombre.toLowerCase()) {
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

    document.querySelectorAll('.service').forEach(item => {
        item.addEventListener('click', event => {
            const serviceType = item.getAttribute('data-service');
            let serviceInfo = {
                title: '',
                description: '',
                icon: ''
            }

            switch (serviceType) {
                case 'ambulancia':
                    serviceInfo.title = 'Servicio: Ambulancia 24/7';
                    serviceInfo.description = 'Ofrecemos servicios de ambulancia disponibles las 24 horas del día, los 7 días de la semana, para emergencias médicas y traslados seguros y eficientes.';
                    serviceInfo.icon = 'assets/img/iconos/Ambulancia.svg';
                    break;
    
                case 'medicina_integral':
                    serviceInfo.title = 'Servicio: Medicina Integral';
                    serviceInfo.description = 'Proporcionamos atención médica integral enfocada en la prevención, diagnóstico y tratamiento de diversas enfermedades, garantizando el bienestar general de nuestros pacientes.';
                    serviceInfo.icon = 'assets/img/iconos/Medicina Integral.svg';
                    break;
    
                case 'medicina_a_domicilio':
                    serviceInfo.title = 'Servicio: Medicina a Domicilio';
                    serviceInfo.description = 'Brindamos atención médica de calidad en la comodidad de tu hogar, facilitando consultas, tratamientos y seguimiento personalizado sin necesidad de desplazarte.';
                    serviceInfo.icon = 'assets/img/iconos/Medicina a domicilio.svg';
                    break;
    
                case 'pediatria':
                    serviceInfo.title = 'Servicio: Pediatría';
                    serviceInfo.description = 'Ofrecemos cuidado especializado para la salud y el desarrollo de niños y adolescentes, asegurando un crecimiento sano y una atención preventiva adecuada.';
                    serviceInfo.icon = 'assets/img/iconos/Pediatria.svg';
                    break;
    
                case 'endocrinologia':
                    serviceInfo.title = 'Servicio: Endocrinología';
                    serviceInfo.description = 'Proporcionamos diagnóstico y tratamiento de trastornos hormonales y metabólicos, incluyendo diabetes, problemas tiroideos y otras afecciones endocrinas.';
                    serviceInfo.icon = 'assets/img/iconos/Endocri-nologo.svg';
                    break;
    
                case 'angiologia':
                    serviceInfo.title = 'Servicio: Angiología';
                    serviceInfo.description = 'Especializados en el diagnóstico y tratamiento de enfermedades del sistema vascular, incluyendo venas, arterias y linfáticos, para mejorar tu salud circulatoria.';
                    serviceInfo.icon = 'assets/img/iconos/Angiologia.svg';
                    break;
    
                case 'clinica_movil':
                    serviceInfo.title = 'Servicio: Clínica Móvil';
                    serviceInfo.description = 'Nuestra clínica móvil lleva servicios médicos completos directamente a tu comunidad, ofreciendo atención accesible y de calidad donde más se necesita.';
                    serviceInfo.icon = 'assets/img/iconos/Clinica Movil.svg';
                    break;
    
                case 'nutricionista':
                    serviceInfo.title = 'Servicio: Nutrición';
                    serviceInfo.description = 'Ofrecemos asesoramiento nutricional personalizado para promover hábitos alimenticios saludables, adaptados a tus necesidades y objetivos específicos.';
                    serviceInfo.icon = 'assets/img/iconos/Nutricionista.svg';
                    break;
    
                case 'fisioterapia':
                    serviceInfo.title = 'Servicio: Fisioterapia';
                    serviceInfo.description = 'Proporcionamos tratamientos de rehabilitación física para mejorar la movilidad, aliviar el dolor y restaurar la función muscular y articular tras lesiones o cirugías.';
                    serviceInfo.icon = 'assets/img/iconos/Fisioterapia.svg';
                    break;
    
                case 'nefrologia':
                    serviceInfo.title = 'Servicio: Nefrología';
                    serviceInfo.description = 'Especializados en el cuidado y tratamiento de enfermedades renales, ofrecemos diagnósticos precisos y planes de tratamiento efectivos para mantener la salud renal.';
                    serviceInfo.icon = 'assets/img/iconos/Nefrologia.svg';
                    break;
    
                case 'neurocirugia':
                    serviceInfo.title = 'Servicio: Neurocirugía';
                    serviceInfo.description = 'Ofrecemos intervenciones quirúrgicas avanzadas para tratar afecciones del sistema nervioso central y periférico, asegurando procedimientos seguros y efectivos.';
                    serviceInfo.icon = 'assets/img/iconos/Neurocirugia.svg';
                    break;
    
                case 'odontologia':
                    serviceInfo.title = 'Servicio: Odontología';
                    serviceInfo.description = 'Brindamos una amplia gama de servicios dentales, desde limpieza y prevención hasta tratamientos restaurativos y estéticos, para mantener tu sonrisa saludable.';
                    serviceInfo.icon = 'assets/img/iconos/Odontologia.svg';
                    break;
    
                case 'ginecologia':
                    serviceInfo.title = 'Servicio: Ginecología';
                    serviceInfo.description = 'Ofrecemos atención integral para la salud femenina, incluyendo chequeos rutinarios, control prenatal y tratamiento de diversas afecciones ginecológicas.';
                    serviceInfo.icon = 'assets/img/iconos/Ginecobste-tetricia.svg';
                    break;
    
                case 'otorrinolaringologia':
                    serviceInfo.title = 'Servicio: Otorrinolaringología';
                    serviceInfo.description = 'Especializados en el diagnóstico y tratamiento de enfermedades del oído, nariz y garganta, proporcionando soluciones efectivas para mejorar tu calidad de vida.';
                    serviceInfo.icon = 'assets/img/iconos/Otorrinolarin-gologia.svg';
                    break;
    
                case 'cardiologia':
                    serviceInfo.title = 'Servicio: Cardiología';
                    serviceInfo.description = 'Proporcionamos cuidado especializado para la salud cardiovascular, incluyendo diagnóstico y tratamiento de enfermedades del corazón y los vasos sanguíneos.';
                    serviceInfo.icon = 'assets/img/iconos/Cardiologia.svg';
                    break;
    
                case 'traumatologia':
                    serviceInfo.title = 'Servicio: Traumatología';
                    serviceInfo.description = 'Ofrecemos diagnóstico y tratamiento de lesiones del sistema músculo-esquelético, incluyendo fracturas, esguinces y otras afecciones relacionadas.';
                    serviceInfo.icon = 'assets/img/iconos/Traumato-logia.svg';
                    break;
    
                case 'ecografia_integral':
                    serviceInfo.title = 'Servicio: Ecografía Integral';
                    serviceInfo.description = 'Proporcionamos estudios ecográficos detallados para diagnóstico preciso de diversas condiciones médicas, utilizando tecnología avanzada y personal capacitado.';
                    serviceInfo.icon = 'assets/img/iconos/Ecografia integral.svg';
                    break;
    
                case 'psicologia':
                    serviceInfo.title = 'Servicio: Psicología';
                    serviceInfo.description = 'Ofrecemos apoyo psicológico profesional para ayudarte a enfrentar y superar desafíos emocionales, mentales y conductuales, promoviendo tu bienestar integral.';
                    serviceInfo.icon = 'assets/img/iconos/Psicologia.svg';
                    break;
    
                case 'gastroenterologia':
                    serviceInfo.title = 'Servicio: Gastroenterología';
                    serviceInfo.description = 'Especializados en el diagnóstico y tratamiento de trastornos del sistema digestivo, asegurando una atención completa para mantener tu salud gastrointestinal.';
                    serviceInfo.icon = 'assets/img/iconos/Gastroente-rologia.svg';
                    break;
    
                case 'cirugia_general':
                    serviceInfo.title = 'Servicio: Cirugía General';
                    serviceInfo.description = 'Ofrecemos procedimientos quirúrgicos seguros y efectivos para el tratamiento de una amplia gama de condiciones médicas, con un enfoque en la recuperación óptima.';
                    serviceInfo.icon = 'assets/img/iconos/Cirugia General.svg';
                    break;
    
                case 'urologia':
                    serviceInfo.title = 'Servicio: Urología';
                    serviceInfo.description = 'Proporcionamos atención especializada para el diagnóstico y tratamiento de enfermedades del tracto urinario y el sistema reproductor masculino.';
                    serviceInfo.icon = 'assets/img/iconos/Urologia.svg';
                    break;
    
                default:
                    serviceInfo.title = 'Servicio no disponible';
                    serviceInfo.description = 'Lo sentimos, la información sobre este servicio no está disponible en este momento.';
                    serviceInfo.icon = 'assets/img/iconos/Servicio-Default.svg';
                    break;
            }

            document.getElementById('modalTitle').textContent = serviceInfo.title;
            document.getElementById('modalDescription').textContent = serviceInfo.description;
            document.getElementById('modalIcon').src = serviceInfo.icon;
            document.getElementById('modalIcon').alt = serviceInfo.title;

            const modal = new bootstrap.Modal(document.getElementById('serviceModal'));
            modal.show();
        })
    })


})