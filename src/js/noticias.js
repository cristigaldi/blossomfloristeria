document.addEventListener("DOMContentLoaded" , function () {
    cargarNoticias();
});

function cargarNoticias() {
    fetch('src/json/noticias.json')
    .then(response => response.json())
    .then(data => {
        const contenedorNoticias = document.getElementById('not-container');
        data.forEach(noticia => {
            const noticiaDiv = document.createElement('article');
            noticiaDiv.classList.add('news');
            noticiaDiv.innerHTML = `
            <h3 class="h3-noticias">${noticia.titulo}</h3>
            <p class="p-fechanoticias"><small>${noticia.fecha}</small></p>
            <p><i>${noticia.description}</i></p>
            <img src="${noticia.img} alt="${noticia.titulo}" class="image img-noticias">
            `;
            contenedorNoticias.appendChild(noticiaDiv);
        })
    })
    .catch(error => console.error(error));
    
}
