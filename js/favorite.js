
let imagen = 'https://image.tmdb.org/t/p/w342'
// Lista de gifs favoritos

//Recuperar los ids del Storage
let recuperoStorage = localStorage.getItem('favoritos');
let favoritos = JSON.parse(recuperoStorage);


// Capturar el elemento del DOM donde lo quiero mostrar
let lista = document.querySelector('#seriesFav');
let contenidoLista = ''

if(favoritos == null || favoritos.length == 0){
    lista.innerHTML = '<h2 class="tituloFavoritos">No tenes favoritos seleccionados</h2>';
}


// recorrer el array y:
for(let i=0; i<favoritos.length; i++){
    // Llamar a la api para obtener cada id
    let url = `https://api.themoviedb.org/3/tv/${favoritos[i]}?api_key=924a6f16470b17afdd20524ec31c09be`
    

    fetch(url)
        .then(function(response){
            return response.json();
        }) 
        .then(function (data) {
            console.log(data);
            contenidoLista += `<a class="linkGenero" href="detail-serie.html?id=${data.id}">
                                <article class="card">
                                    <img src=${imagen + data.poster_path}>
                                    <h2>${data.name}<h2>
                                </article>
                                </a>`

            lista.innerHTML = contenidoLista;
        })
        .catch( function (error) {
            console.log(error);
        })
    }