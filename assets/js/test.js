window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const headerBottom = document.querySelector('.header-bottom');
    const headerCenter = document.querySelector('.header-center');
    const buttons = document.querySelector('.buttons');
    const textElements = header.querySelectorAll('.location, .temp-value, .feels-like, .weather-description, .date-time, .additional-info, .search-icon'); // Ajusta las clases según tus elementos de texto
    const weatherDescription = document.querySelector('.weather-description'); // Selecciona la descripción del clima

    if (window.scrollY > 60) {
        // Cambia el color de la fuente a negro al hacer scroll
        textElements.forEach(el => {
            el.style.color = 'black'; // Cambia el color del texto a negro
        });
        
        header.style.backgroundColor = '#e1d3fa'; // Cambia el color de fondo
        header.style.backgroundImage = "none";
        header.style.height = '150px'; // Ajusta el tamaño del header
        headerCenter.style.transform = 'translateY(-30px)';
        headerBottom.style.opacity = '0'; // Oculta el header-bottom
        buttons.style.transform = 'translateY(-30px)'; // Mueve los botones hacia arriba junto con el header

        // Ocultar la descripción del clima
        weatherDescription.style.display = 'none'; 
    } else {
        // Restaura el color de la fuente original (blanco)
        textElements.forEach(el => {
            el.style.color = 'white'; // Cambia el color del texto a blanco
        });

        // Vuelve al fondo original
        header.style.backgroundImage = "url('/assets/img/background.png')"; // Regresa a la imagen de fondo
        header.style.height = '330px';
        headerCenter.style.transform = 'translateY(0)';
        headerBottom.style.opacity = '1'; // Muestra el header-bottom
        buttons.style.transform = 'translateY(0)'; // Mantiene los botones en su posición original

        // Mostrar nuevamente la descripción del clima
        weatherDescription.style.display = 'block'; 
    }
});
