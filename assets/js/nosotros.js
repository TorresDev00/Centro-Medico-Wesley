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

})