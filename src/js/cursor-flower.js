// Detectar el movimiento del ratón
document.addEventListener('mousemove', (event) => {
    // Número de puntos generados (3 o 4)
    const numDots = Math.floor(Math.random() * 1) + 1; 
  
    for (let i = 0; i < numDots; i++) {
      // Crear un elemento para el puntito
      const dot = document.createElement('div');
      dot.classList.add('dot');
  
      // Asignar un color aleatorio al puntito
      const color = `hsl(${Math.random() * 360}, 80%, 60%)`; // Color vibrante
      dot.style.backgroundColor = color;
  
      // Posición inicial cerca del ratón con un pequeño desplazamiento
      const offsetX = Math.random() * 20 - 10; // Aleatorio entre -10px y 10px
      const offsetY = Math.random() * 20 - 10;
      dot.style.left = `${event.pageX + offsetX}px`;
      dot.style.top = `${event.pageY + offsetY}px`;
  
      // Agregar el puntito al cuerpo del documento
      document.body.appendChild(dot);
  
      // Eliminar el puntito después de 1 segundo
      setTimeout(() => {
        dot.remove();
      }, 1000);
    }
  });