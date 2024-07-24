document.addEventListener("DOMContentLoaded", function () {

    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const themeText = document.getElementById('theme-text');

    let isDarkMode = false;

    function toggleTheme() {
        const htmlElement = document.documentElement;
        if (htmlElement.getAttribute('data-bs-theme') === 'light') {
            htmlElement.setAttribute('data-bs-theme', 'dark');
            htmlElement.classList.add('dark');
            themeIcon.classList.remove('bi-sun-fill');
            themeIcon.classList.add('bi-moon-fill');
            themeText.textContent = 'Dark';
        } else {
            htmlElement.setAttribute('data-bs-theme', 'light');
            htmlElement.classList.remove('dark');
            themeIcon.classList.remove('bi-moon-fill');
            themeIcon.classList.add('bi-sun-fill');
            themeText.textContent = 'Light';
        }
        isDarkMode = !isDarkMode;
    }

    themeToggle.addEventListener('click', toggleTheme);



    const swiper = new Swiper('.servicios', {
        speed: 600,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 40, // Añadir esta línea
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true
        },
        grabCursor: true,
        mousewheel: true,
        touchRatio: 0.5,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 40 // Asegurarse de tener esto aquí también
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 40 // Ajustar espacio entre diapositivas
            },
            1024: {
                slidesPerView: 1,
                spaceBetween: 40 // Ajustar espacio entre diapositivas
            },
            1200: {
                slidesPerView: 1,
                centeredSlides: true,
                spaceBetween: 40 // Ajustar espacio entre diapositivas
            }
        }
    });

    let boxRespect = document.querySelector('.respect');
    let lottiePlayer_1 = document.querySelector('.icono_1');

    boxRespect.addEventListener('mouseenter', function () {
        lottiePlayer_1.play();
    });

    boxRespect.addEventListener('mouseleave', function () {
        lottiePlayer_1.stop();
    });

    let boxResponsibility = document.querySelector('.responsibility');
    let lottiePlayer_2 = document.querySelector('.icono_2');

    boxResponsibility.addEventListener('mouseenter', function () {
        lottiePlayer_2.play();
    });

    boxResponsibility.addEventListener('mouseleave', function () {
        lottiePlayer_2.stop();
    });


    let boxLove = document.querySelector('.love');
    let lottiePlayer_3 = document.querySelector('.icono_3');

    boxLove.addEventListener('mouseenter', function () {
        lottiePlayer_3.play();
    });

    boxLove.addEventListener('mouseleave', function () {
        lottiePlayer_3.stop();
    });


})