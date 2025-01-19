document.addEventListener("DOMContentLoaded" , function () {
    cargarRebajas();
});

function cargarRebajas() {
    fetch('../../caja-ofertas/ofertas.json')
    .then(response => response.json())
    .then(data => {
        const contenedorRebajas = document.getElementById('rebajas-container');
        data.forEach(rebajas => {
            const rebajasDiv = document.createElement('article');
            rebajasDiv.classList.add('news');
            rebajasDiv.innerHTML = `
            <div class="box-rebajas">
             <img src="${rebajas.img} alt="${rebajas.titulo}" class="image img-rebajas">
            <h3 class="h3-rebajas">${rebajas.titulo}</h3>
            <div class="box-pre">
            <p class="precio"><small>${rebajas.precio}</small></p>
            <p class="precio_rebaja">${rebajas.precio_rebaja}</p>
            </div>
            <button class="btn-rebajas"><a href="../../caja-ofertas/html/cards-ofer.html">Ver oferta</a></button>
            </div>
            `;
            contenedorRebajas.appendChild(rebajasDiv);
        })
    })
    .catch(error => console.error(error));
    
}
