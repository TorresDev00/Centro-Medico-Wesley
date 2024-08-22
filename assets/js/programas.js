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


  let sections = document.querySelectorAll('section');
  let mainContainer = document.querySelector('.main');
  let threshold = window.innerHeight / 2;

  sections.forEach(sections => sections.style.scrollSnapAlign = "start");

  let isScrolling = false // evita miltiples desplazamientos simultaneamente

  mainContainer.addEventListener("wheel", function (event) {
    event.preventDefault();

    if (!isScrolling) {
      isScrolling = true;

      if (event.deltaY > 0) {
        scrollNext();
      } else if (event.deltaY < 0) {
        scrollPrev();
      }

      setTimeout(() => isScrolling = false, 800);
    }
  })


  function scrollNext() {
      for (const section of sections) {
          const rect = section.getBoundingClientRect();
          console.log('rect.top:', rect.top, 'threshold:', threshold);
          if (rect.top >= 0 && rect.top > threshold) { // Asegurar que rect.top sea positivo
              console.log('Scrolling to next section');
              section.scrollIntoView({ behavior: "smooth" });
              break;
          }
      }
  }

function scrollPrev() {
    for (let i = sections.length - 1; i >= 0; i--) {
        const rect = sections[i].getBoundingClientRect();
        console.log('rect.bottom:', rect.bottom, 'threshold:', threshold);
        if (rect.bottom < window.innerHeight - threshold) {
            console.log('Scrolling to previous section');
            sections[i].scrollIntoView({ behavior: "smooth" });
            break;
        }
    }
}

})