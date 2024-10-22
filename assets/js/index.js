function setActive(button) {
    // Eliminar la clase 'active' de todos los botones
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Agregar la clase 'active' al botón que fue clickeado
    button.classList.add('active');
    
    // Obtener las secciones que vamos a mostrar u ocultar
    const todaySections = document.querySelectorAll('main > section');
    const tomorrowContainer = document.getElementById('tomorrow-container');
    const tenDaysContainer = document.getElementById('ten-days-container');

    // Lógica para manejar los botones
    if (button.textContent === 'Today') {
        // Mostrar todas las secciones iniciales
        todaySections.forEach(section => {
            section.classList.remove('hidden');
            section.classList.add('visible');
        });
        // Ocultar los contenedores adicionales
        tomorrowContainer.classList.remove('visible');
        tomorrowContainer.classList.add('hidden');
        tenDaysContainer.classList.remove('visible');
        tenDaysContainer.classList.add('hidden');
    } else if (button.textContent === 'Tomorrow') {
        // Ocultar las secciones iniciales
        todaySections.forEach(section => {
            section.classList.remove('visible');
            section.classList.add('hidden');
        });
        // Mostrar solo el contenedor exclusivo para "Tomorrow"
        tomorrowContainer.classList.remove('hidden');
        tomorrowContainer.classList.add('visible');
        tenDaysContainer.classList.remove('visible');
        tenDaysContainer.classList.add('hidden');
    } else if (button.textContent === '10 Days') {
        // Ocultar las secciones iniciales
        todaySections.forEach(section => {
            section.classList.remove('visible');
            section.classList.add('hidden');
        });
        // Mostrar solo el contenedor con 10 secciones
        tomorrowContainer.classList.remove('visible');
        tomorrowContainer.classList.add('hidden');
        tenDaysContainer.classList.remove('hidden');
        tenDaysContainer.classList.add('visible');
    }
}
