document.addEventListener("DOMContentLoaded", function() {

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


})