document.addEventListener("DOMContentLoaded", function() {

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