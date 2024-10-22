window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    const headerBottom = document.querySelector('.header-bottom');
    const headerCenter = document.querySelector('.header-center');
    const buttons = document.querySelector('.buttons');
    const textElements = header.querySelectorAll('.text-element'); // Ajusta la clase según tus elementos de texto

    if (window.scrollY > 60) {
        // Cambia el color de la fuente a negro al hacer scroll
        textElements.forEach(el => {
            el.style.color = 'black'; // Cambia el color del texto a negro
        });
        
        header.style.backgroundColor = '#e1d3fa'; // Cambia el color de fondo a blanco semitransparente
        header.style.backgroundImage = "none";
        header.style.height = '150px'; // Ajusta el tamaño del header
        headerCenter.style.transform = 'translateY(-30px)';
        headerBottom.style.opacity = '0'; // Oculta el header-bottom
        buttons.style.transform = 'translateY(-30px)'; // Mueve los botones hacia arriba junto con el header
    } else {
        // Restaura el color de la fuente original
        textElements.forEach(el => {
            el.style.color = 'var(--color-1)'; // Cambia el color de texto al original (ajusta según sea necesario)
        });

        // Vuelve al fondo original
        header.style.backgroundImage = "url('/assets/img/background.png')"; // Regresa a la imagen de fondo
        header.style.height = '390px';
        headerCenter.style.transform = 'translateY(0)';
        headerBottom.style.opacity = '1'; // Muestra el header-bottom
        buttons.style.transform = 'translateY(0)'; // Mantiene los botones en su posición original
    }
});


window.addEventListener('scroll', function() {
    const textElements = [
        document.querySelector('.location'),
        document.querySelector('.temp-value'),
        document.querySelector('.temperature span:nth-child(2)'),
        document.querySelector('.date-time'),
        document.querySelector('.additional-info')
    ];

    if (window.scrollY > 60) {
        textElements.forEach(el => {
            el.style.color = 'black'; // Cambia el color del texto a negro
        });
    } else {
        textElements.forEach(el => {
            el.style.color = 'var(--color-1)'; // Restaura el color original
        });
    }
});
