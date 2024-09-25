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
  let currentSectionIndex = 0;
  let isScrolling = false;
  let lastScrollTime = 0;
  const scrollCooldown = 1000; // 1 segundo de espera entre desplazamientos
  
  function getCurrentSectionIndex() {
    const scrollTop = mainContainer.scrollTop;
    for (let i = 0; i < sections.length; i++) {
      if (scrollTop < sections[i].offsetTop + sections[i].offsetHeight / 2) {
        return i;
      }
    }
    return sections.length - 1;
  }
  
  function scrollToSection(index) {
    if (index >= 0 && index < sections.length) {
      currentSectionIndex = index;
      const targetSection = sections[index];
      const offset = mainContainer.offsetTop;
      mainContainer.scrollTo({
        top: targetSection.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  }
  
  function handleScroll(event) {
    event.preventDefault();
    const now = Date.now();
  
    if (!isScrolling && now - lastScrollTime > scrollCooldown) {
      isScrolling = true;
      lastScrollTime = now;
  
      const direction = event.deltaY > 0 ? 1 : -1;
      const nextIndex = getCurrentSectionIndex() + direction;
  
      if (nextIndex >= 0 && nextIndex < sections.length) {
        scrollToSection(nextIndex);
      }
  
      setTimeout(() => {
        isScrolling = false;
      }, scrollCooldown);
    }
  }
  
  function initializeScroll() {
    mainContainer.scrollTop = 0;
    currentSectionIndex = 0;
  }
  
  mainContainer.addEventListener("wheel", handleScroll, { passive: false });
  
  window.addEventListener('load', () => {
    initializeScroll();
    // Esperar a que las imágenes se carguen antes de permitir el desplazamiento
    Promise.all(Array.from(document.images).map(img => {
      if (img.complete) return Promise.resolve();
      return new Promise(resolve => { img.onload = img.onerror = resolve; });
    })).then(() => {
      mainContainer.style.overflowY = 'scroll';
    });
  });
  
  window.addEventListener('resize', initializeScroll);

})