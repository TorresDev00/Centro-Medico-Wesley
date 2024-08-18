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

  document.querySelectorAll("section").forEach(section => {
    section.style.scrollSnapAlign = "start";
  });

  document.querySelector('.main').addEventListener("wheel", function (event) {
    event.preventDefault();  // Evita el scroll libre
    if (event.deltaY > 0) {
      scrollNext();
    } else if (event.deltaY < 0) {
      scrollPrev();
    }
  });

  function scrollNext() {
    const sections = document.querySelectorAll("section");
    for (let i = 0; i < sections.length; i++) {
      const rect = sections[i].getBoundingClientRect();
      if (rect.top >= 0) {
        const nextSection = sections[i + 1];
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth" });
        }
        break;
      }
    }
  }

  function scrollPrev() {
    const sections = document.querySelectorAll("section");
    for (let i = sections.length - 1; i >= 0; i--) {
      const rect = sections[i].getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        const prevSection = sections[i - 1];
        if (prevSection) {
          prevSection.scrollIntoView({ behavior: "smooth" });
        }
        break;
      }
    }
  }

})