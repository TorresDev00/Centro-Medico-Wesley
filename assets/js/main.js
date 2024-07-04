document.addEventListener("DOMContentLoaded", function() {

    document.querySelectorAll('[data-bs-theme-value]').forEach(button => {
        button.addEventListener('click', function () {
            const theme = this.getAttribute('data-bs-theme-value');
            document.documentElement.setAttribute('data-bs-theme', theme);
    
            // Update active button
            document.querySelectorAll('.dropdown-item').forEach(item => {
                item.classList.remove('active');
                item.setAttribute('aria-pressed', 'false');
            });
            this.classList.add('active');
            this.setAttribute('aria-pressed', 'true');
    
            // Update theme icon
            const icon = document.querySelector('.theme-icon-active');
            if (theme === 'light') {
                icon.classList.remove('bi-moon-stars-fill');
                icon.classList.add('bi-sun-fill');
                document.getElementById('bd-theme-text').textContent = 'Light';
            } else {
                icon.classList.remove('bi-sun-fill');
                icon.classList.add('bi-moon-stars-fill');
                document.getElementById('bd-theme-text').textContent = 'Dark';
            }
        });
    });
    
    const swiper = new Swiper('.servicios', {
        speed: 600,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        slidesPerView: 'auto',
        centeredSlides: true,
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
            },
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 1,
            },
            1200: {
                slidesPerView: 1,
                centeredSlides: true,
                spaceBetween: 40
            }
        }
    });

})