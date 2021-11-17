const img = 'https://image.tmdb.org/t/p/w342';

//Recuperar los ids del storage.
let recuperoStorage = localStorage.getItem('favoritos');
let favoritos = JSON.parse(recuperoStorage);

//Capturar el elemendo del DOM donde los quiero mostrar.
let lista = document.querySelector('#peliculasFav');
let contenidoLista = '';

if(favoritos == null || favoritos.length == 0){
    lista.innerHTML = '<h2 class="tituloFavoritos">No tenes peliculas favoritas seleccionadas</h2>';
}

//Recorrer el array de favoritos

for(let i=0; i<favoritos.length; i++){
    //llamar a la api para obtener datos de cada id
    let url = `https://api.themoviedb.org/3/movie/${favoritos[i]}?api_key=924a6f16470b17afdd20524ec31c09be`

    fetch(url)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
                contenidoLista += `<a class="linkGenero" href="detail-movie.html?id=${data.id}">
                                        <article class="card">
                                            <img src="${img + data.poster_path}" alt="${data.title}">
                                            <h2>${data.title}</h2>
                                        </article>
                                    </a>`;

            lista.innerHTML = contenidoLista;
        })
        .catch( function(error){
            console.log(error);
        })
}

//Recuperar los ids del storage.
let recuperoStorageSerie = localStorage.getItem('favoritosSerie');
let favoritosSerie = JSON.parse(recuperoStorageSerie);

//Capturar el elemendo del DOM donde los quiero mostrar.
let listaSerie = document.querySelector('#SeriesFav');
let contenidoListaSerie = '';

if(favoritosSerie == null || favoritosSerie.length == 0){
    listaSerie.innerHTML = '<h2 class="tituloFavoritos">No tenes series favoritas seleccionadas</h2>';
}

for(let i=0; i<favoritosSerie.length; i++){
    //llamar a la api para obtener datos de cada id
    let urlSerie = `https://api.themoviedb.org/3/tv/${favoritosSerie[i]}?api_key=924a6f16470b17afdd20524ec31c09be`

    fetch(urlSerie)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            if(data.name !== undefined){
                contenidoListaSerie += `<a class="linkGenero" href="detail-serie.html?id=${data.id}">
                                        <article class="card">
                                            <img src="${img + data.poster_path}" alt="${data.name}">
                                            <h2>${data.name}</h2>
                                        </article>
                                    </a>`;
            }

            listaSerie.innerHTML = contenidoListaSerie;
        })
        .catch( function(error){
            console.log(error);
        })
}
    
    
    
    
    
    
    
