function setActive(button) {
    // Eliminar la clase 'active' de todos los botones
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Agregar la clase 'active' al botón que fue clickeado
    button.classList.add('active');
}

