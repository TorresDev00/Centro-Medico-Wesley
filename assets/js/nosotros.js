document.addEventListener("DOMContentLoaded", function () {

    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const themeText = document.getElementById('theme-text');

    let isDarkMode = true;

    function toggleTheme() {
        const htmlElement = document.documentElement;
        if (htmlElement.getAttribute('data-bs-theme') === 'light') {
            htmlElement.setAttribute('data-bs-theme', 'dark');
            htmlElement.classList.remove('dark');
            themeIcon.classList.remove('bi-sun-fill');
            themeIcon.classList.add('bi-moon-fill');
            themeText.textContent = 'Dark';
        } else {
            htmlElement.setAttribute('data-bs-theme', 'light');
            htmlElement.classList.add('dark');
            themeIcon.classList.remove('bi-moon-fill');
            themeIcon.classList.add('bi-sun-fill');
            themeText.textContent = 'Light';
        }
        isDarkMode = !isDarkMode;
    }

    themeToggle.addEventListener('click', toggleTheme);

    let descriptionCenter = document.querySelector('.descriptionCenter');
    defaultText = 'Pilares que sostienen nuestra institución';

    // Pilar Calidad

    let boxQuality = document.querySelector('.pillar-quality');
    let lottiePlayer_1 = document.querySelector('.iconoPilar_1');


    boxQuality.addEventListener('mouseenter', function () {
        lottiePlayer_1.play();
        descriptionCenter.classList.remove('fade-in');
        descriptionCenter.classList.add('fade-out');

        setTimeout(() => {
            descriptionCenter.textContent = 'Servicios de salud de calidad superior.';
            descriptionCenter.classList.remove('fade-out');
            descriptionCenter.classList.add('fade-in');
        }, 500);
    });


    boxQuality.addEventListener('mouseleave', function () {
        lottiePlayer_1.stop();
        descriptionCenter.classList.remove('fade-in');
        descriptionCenter.classList.add('fade-out');

        setTimeout(() => {
            descriptionCenter.textContent = defaultText;
            descriptionCenter.classList.remove('fade-out');
            descriptionCenter.classList.add('fade-in');
        }, 500);
    });

    // Pilar Igualdad

    let boxEquality = document.querySelector('.pillar-equality');
    let lottiePlayer_2 = document.querySelector('.iconoPilar_2');

    boxEquality.addEventListener('mouseenter', function () {
        lottiePlayer_2.play();
        descriptionCenter.classList.remove('fade-in');
        descriptionCenter.classList.add('fade-out');

        setTimeout(() => {
            descriptionCenter.textContent = 'Atención equitativa para todos.';
            descriptionCenter.classList.remove('fade-out');
            descriptionCenter.classList.add('fade-in');
        }, 500);
    });

    boxEquality.addEventListener('mouseleave', function () {
        lottiePlayer_2.stop();
        descriptionCenter.classList.remove('fade-in');
        descriptionCenter.classList.add('fade-out');

        setTimeout(() => {
            descriptionCenter.textContent = defaultText;
            descriptionCenter.classList.remove('fade-out');
            descriptionCenter.classList.add('fade-in');
        }, 500);
    });

    // Pilar Eficacia

    let boxEfficacy = document.querySelector('.pillar-efficacy');
    let lottiePlayer_3 = document.querySelector('.iconoPilar_3');

    boxEfficacy.addEventListener('mouseenter', function () {
        lottiePlayer_3.play();
        descriptionCenter.classList.remove('fade-in');
        descriptionCenter.classList.add('fade-out');

        setTimeout(() => {
            descriptionCenter.textContent = 'Resultados rápidos y precisos.';
            descriptionCenter.classList.remove('fade-out');
            descriptionCenter.classList.add('fade-in');
        }, 500);
    });

    boxEfficacy.addEventListener('mouseleave', function () {
        lottiePlayer_3.stop();
        descriptionCenter.classList.remove('fade-in');
        descriptionCenter.classList.add('fade-out');

        setTimeout(() => {
            descriptionCenter.textContent = defaultText;
            descriptionCenter.classList.remove('fade-out');
            descriptionCenter.classList.add('fade-in');
        }, 500);
    });

    // Pilar Integridad

    let boxIntegrity = document.querySelector('.pillar-integrity');
    let lottiePlayer_4 = document.querySelector('.iconoPilar_4');

    boxIntegrity.addEventListener('mouseenter', function () {
        lottiePlayer_4.play();
        descriptionCenter.classList.remove('fade-in');
        descriptionCenter.classList.add('fade-out');

        setTimeout(() => {
            descriptionCenter.textContent = 'Honestidad en cada acción';
            descriptionCenter.classList.remove('fade-out');
            descriptionCenter.classList.add('fade-in');
        }, 500);
    });

    boxIntegrity.addEventListener('mouseleave', function () {
        lottiePlayer_4.stop();
        descriptionCenter.classList.remove('fade-in');
        descriptionCenter.classList.add('fade-out');

        setTimeout(() => {
            descriptionCenter.textContent = defaultText;
            descriptionCenter.classList.remove('fade-out');
            descriptionCenter.classList.add('fade-in');
        }, 500);
    });

    // Pilar Servicio Humanizado

    let boxHumanizedService = document.querySelector('.pillar-humanized-service');
    let lottiePlayer_5 = document.querySelector('.iconoPilar_5');

    boxHumanizedService.addEventListener('mouseenter', function () {
        lottiePlayer_5.play();
        descriptionCenter.classList.remove('fade-in');
        descriptionCenter.classList.add('fade-out');

        setTimeout(() => {
            descriptionCenter.textContent = 'Cuidado centrado en usted.';
            descriptionCenter.classList.remove('fade-out');
            descriptionCenter.classList.add('fade-in');
        }, 500);
    });

    boxHumanizedService.addEventListener('mouseleave', function () {
        lottiePlayer_5.stop();
        descriptionCenter.classList.remove('fade-in');
        descriptionCenter.classList.add('fade-out');

        setTimeout(() => {
            descriptionCenter.textContent = defaultText;
            descriptionCenter.classList.remove('fade-out');
            descriptionCenter.classList.add('fade-in');
        }, 500);
    });

    const chats = document.querySelectorAll('.text-chat h2');
    let currentChat = 0;
    let currentChar = 0;
    const typingSpeed = 100; // Velocidad de escritura
    const delayBetweenChats = 1000; // Espera entre chats
    const delayAfterErase = 2000; // Espera después de borrar
    
    function typeChat() {
        if (currentChat < chats.length) {
            const currentElement = chats[currentChat];
            currentElement.style.display = 'block'; // Mostrar el h2 actual
    
            if (currentChar === 0) {
                currentElement.textContent = ''; // Limpiar el texto al inicio
            }
    
            const text = currentElement.getAttribute('data-text') || currentElement.textContent;
            const chars = Array.from(text); // Convierte el texto a una array de caracteres
    
            if (currentChar < chars.length) {
                const nextChar = chars[currentChar];
                currentElement.textContent += nextChar;
                currentChar++;
                setTimeout(typeChat, typingSpeed);
            } else {
                currentChar = 0;
                currentChat++;
                setTimeout(typeChat, delayBetweenChats);
            }
        } else {
            setTimeout(eraseAllChats, delayAfterErase);
        }
    }
    
    function eraseAllChats() {
        chats.forEach(chat => {
            chat.style.display = 'none';
            chat.textContent = chat.getAttribute('data-text') || chat.textContent;
        });
        currentChat = 0;
        setTimeout(typeChat, delayBetweenChats);
    }
    
    // Guardar el texto original en un atributo data-text
    chats.forEach(chat => {
        if (!chat.getAttribute('data-text')) {
            chat.setAttribute('data-text', chat.textContent);
        }
    });
    
    typeChat();
    
    
    
})