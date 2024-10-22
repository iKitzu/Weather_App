window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const headerBottom = document.querySelector('.header-bottom');
    const headerCenter = document.querySelector('.header-center');

    if (window.scrollY > 60) {
        // Reduce el tamaño del header
        header.style.height = '150px'; // Ajusta el tamaño
        headerCenter.style.transform = 'translateY(-30px)';
        headerBottom.style.opacity = '0'; // Oculta el header-bottom
    } else {
        // Vuelve a mostrar el header completo
        header.style.height = '390px';
        headerCenter.style.transform = 'translateY(0)';
        headerBottom.style.opacity = '1'; // Muestra el header-bottom
    }
});
