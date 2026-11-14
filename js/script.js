const themeToggleButton = document.getElementById('theme-toggle');

themeToggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark');
});