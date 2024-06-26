$(document).ready(function() { 

	function cambioLight(){
		$(".dropdown").hover(function() {
	       $('.navbar .dropdown:hover>ul').css('background', '#ffe600');
	    });

        $('#header').css('background', '#ffe600');
		$('.mobile-nav-toggle').click(function(event) {
			$('.navbar').css('background', '#0000');
			$('.navbar-mobile ul').css('background-color', '#ffe600');
			$('.navbar-mobile').css('background', '#323233');
		});
        $('.btn-reseña').click(function(event) {
            $('.sobreNosotros .modal-content').css('background-color', '#ffe600 !important');
            $('.sobreNosotros .modal-content').css('color', '#fff !important');
        });
	}

	function cambioDark(){
		$(".dropdown").hover(function() {
	       $('.navbar .dropdown:hover>ul').css('background', '#000');
	    });


      $('#header').css('background', '#101010');
		$('.mobile-nav-toggle').click(function(event) {
			$('.navbar').css('background', '#0000');
			$('.navbar-mobile ul').css('background-color', '#000');
			$('.navbar-mobile').css('background', '#323233');
		});
	}  



$('#buttonStyle').change(function() {
  if ($(this).is(':checked')) {
  	$('body').css('background', '#ffe600');
    $('body').css('transition', 'background 0.5s ease');
    $('a').css('color', '#2196F3');
    $('.section-bg').css('background-color', '#ffffff');
    $('#header').css('background', '#ffe600');
    $('.navbar').css('background', '#0000');
    $('.navbar navbar-mobile').css('background', 'rgb(255 255 255)');
    $('.navbar a').css('color', '#000000db');
    $('.navbar .active, .navbar .active:focus, .navbar li:hover>a').css('background', '#ffffff4f');
    $('.navbar .dropdown:hover>ul').css('background', '#fff');
    $('.navbar .dropdown ul a').css('color', '#000');
    $('.mobile-nav-toggle').css('color', '#000');
    $('.navbar-mobile ul').css('background-color', '#ffe600');
    $('.navbar-mobile').css('background', '#fff');
    $('.logo img').css('transition', 'opacity 0.5s ease');
    $('.breadcrumbs').css('background-color', '#ffe600');
    $('.breadcrumbs h2').css('color', '#000');
    $('.breadcrumbs ol li+li').css('color', '#000');
    $('.sobreNosotros').css('background-color', '#ffe600');
    $('.sobreNosotros h2').css('color', '#000');
    $('.sobreNosotros h3').css('color', '#000');
    $('.sobreNosotros h4').css('color', '#000');
    $('.sobreNosotros p').css('color', '#000');
    $('.sobreNosotros .p-1').css('color', '#fff');
    $('.sobreNosotros .section-change').css('background-color', '#fff');
    $('.sobreNosotros .p-3').css('color', '#000');
    $('.sobreNosotros .p-4').css('color', '#000');
    $('.perfil h4').css('color', '#000');
    cambioLight();
    $('.footer').css('background', '#ffe600');
    $('.footer').css('color', '#000');
    $('#footer .footer-top h4').css('color', '#000');
    $('#footer .footer-top .footer-links ul a').css('color', '#000');
    $('#footer .footer-top .footer-links ul i').css('color', '#000');
    $('.footer .footer-top h4').css('color', '#000');
    $('.footer .footer-top .footer-links ul a').css('color', '#000');
    $('.footer .footer-top .footer-links ul i').css('color', '000f');
    $('.footer .copyright').css('border-top', '1px solid #000');

    $(this).next('label').find('.bi-moon-fill').addClass('d-none');
    $(this).next('label').find('.bi-sun-fill').removeClass('d-none');
    var selectImg = $('.logo img');
    selectImg.css('transition', 'opacity 0.5s'); // Agregar transición de 0.5 segundos
    selectImg.css('opacity', '0');
    setTimeout(function() {
      selectImg.attr('src', 'assets/img/Wesleyano/logo_4.svg');
      selectImg.css('opacity', '1');
    }, 200);
  }else{

    $('body').css('background', '#101010');
    $('body').css('transition', 'background 0.5s ease');
    $('a').css('color', '#2196F3');
    $('.section-bg').css('background-color', '#000');
    $('#header').css('background', '#101010');
    $('.navbar').css('background', '#0000');
    $('.navbar navbar-mobile').css('background', 'rgb(0 0 0)');
    $('.navbar a').css('color', '#ffffffdb');
    $('.navbar .active, .navbar .active:focus, .navbar li:hover>a').css('background', '#ffffff4f');
    $('.navbar .dropdown:hover>ul').css('background', '#000');
    $('.navbar .dropdown ul a').css('color', '#fff');
    $('.mobile-nav-toggle').css('color', '#fff');
    $('.navbar-mobile ul').css('background-color', '#000');
    $('.navbar-mobile').css('background', '#323233');
    $('.logo img').css('transition', 'opacity 0.5s ease');
    $('.breadcrumbs').css('background-color', '#101010');
    $('.breadcrumbs h2').css('color', '#fff');
    $('.breadcrumbs ol li+li').css('color', '#fff');
    $('.sobreNosotros').css('background-color', '#101010');
    $('.sobreNosotros h2').css('color', '#fff');
    $('.sobreNosotros h3').css('color', '#fff');
    $('.sobreNosotros h4').css('color', '#fff');
    $('.sobreNosotros p').css('color', '#fff');
    $('.perfil h4').css('color', '#fff');
    $('.sobreNosotros .section-change').css('background-color', '#000');
    cambioDark();
    $('.footer').css('background', '#101010');
    $('.footer').css('color', '#fff');
    $('#footer .footer-top h4').css('color', '#fff');
    $('#footer .footer-top .footer-links ul a').css('color', '#fff');
    $('#footer .footer-top .footer-links ul i').css('color', '#fff');
    $('.footer .footer-top h4').css('color', '#fff');
    $('.footer .footer-top .footer-links ul a').css('color', '#fff');
    $('.footer .footer-top .footer-links ul i').css('color', '#fff');
    $('.footer .copyright').css('border-top', '1px solid #fff');

    $(this).next('label').find('.bi-sun-fill').addClass('d-none');
    $(this).next('label').find('.bi-moon-fill').removeClass('d-none');
    var selectImg = $('.logo img');
    selectImg.css('transition', 'opacity 0.5s'); // Agregar transición de 0.5 segundos
    selectImg.css('opacity', '0');
    setTimeout(function() {
      selectImg.attr('src', 'assets/img/Wesleyano/logo_7.svg');
      selectImg.css('opacity', '1');
    }, 200);
  }
})

document.addEventListener('DOMContentLoaded', () => {
    const profileItems = document.querySelectorAll('.profile-item');
    const profileImage = document.getElementById('profile-image');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const image = entry.target.getAttribute('data-image');
                profileImage.src = image;
            }
        });
    }, options);

    profileItems.forEach(item => {
        observer.observe(item);
    });
});

    var images = [];
    for (var i = 1; i <= 44; i++) {
       let imageUrl  = 'assets/img/stop motion/Web-' + (i < 10 ? '0' : '') + i + '.webp';
       images.push(new Image().src = imageUrl);

    }

    function updateProfileImage() {
        var scrollPos = $(window).scrollTop();
        var startPerfilTop = $('.start-perfil').offset().top;
        var footerTop = $('#footer').offset().top;

        if (scrollPos >= startPerfilTop && scrollPos <= footerTop) {
            var index = Math.floor((scrollPos - startPerfilTop) / (footerTop - startPerfilTop) * images.length);
            $('#profile-image').attr('src', images[index]);
        }
    }

    // Llamar a updateProfileImage en cada frame de animación
    function animate() {
        requestAnimationFrame(animate);
        updateProfileImage();
    }

     animate();

     $(window).on('resize', function() {
        animate(); // Volver a iniciar la animación en caso de redimensionamiento de la ventana
    });



})