(function(){
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link');
    const closeMenu = document.querySelector('.nav__close');
    const navLinks = document.querySelectorAll('.nav__links'); // Seleccionamos todos los enlaces del menú

    // Abrir el menú
    openButton.addEventListener('click', () => {
        menu.classList.add('nav__link--show');
    });

    // Cerrar el menú cuando se haga clic en el botón de cerrar
    closeMenu.addEventListener('click', () => {
        menu.classList.remove('nav__link--show');
    });

    // Cerrar el menú cuando se haga clic en cualquier enlace
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('nav__link--show');
        });
    });
})();
