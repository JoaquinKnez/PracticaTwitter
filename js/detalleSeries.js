let queryString = location.search;
let qsToObject = new URLSearchParams(queryString);
let id = qsToObject.get('id');

let urlSeries = `https://api.themoviedb.org/3/tv/${id}?api_key=924a6f16470b17afdd20524ec31c09be`

let imagen = 'https://image.tmdb.org/t/p/w342'

fetch(urlSeries)
    .then(function(response){
        return response.json()
    })

    .then(function(data){

        let imagenSerie = document.querySelector('.imagenSerie')
        let tituloArticulo = document.querySelector('.tituloArticulo')
        let calificacionSerie = document.querySelector('.calificacionSerie')
        let duracionSerie = document.querySelector('.temporadasSerie')
        let estrenoSerie = document.querySelector('.emisionSerie')
        let generoSerie = document.querySelector('.generoSerie')
        let sinopsisSerie = document.querySelector('.sinopsisSerie')

        imagenSerie.src = imagen + data.poster_path;
        tituloArticulo.innerHTML = data.name;
        calificacionSerie.innerHTML += data.vote_average;
        duracionSerie.innerHTML += data.number_of_seasons;
        estrenoSerie.innerHTML += data.first_air_date;
        generoSerie.innerHTML += `<a href="genres.html">${data.genres[0].name}</a>`
        sinopsisSerie.innerHTML += data.overview;

    let favoritosSerie = []

    let recuperoStorageSerie = localStorage.getItem('favoritosSerie'); 

    if (recuperoStorageSerie != null){
        favoritosSerie = JSON.parse(recuperoStorageSerie);
    }   


    let linkFavSerie = document.querySelector('#direccionFavoritosSerie');

    if(favoritosSerie.includes(id)){
        linkFavSerie.innerText = 'Eliminar de favoritos'       
    }

    linkFavSerie.addEventListener('click', function(event){
        event.preventDefault();

        if(favoritosSerie.includes(id)){
            let idASacar = favoritosSerie.indexOf(id);
            favoritosSerie.splice(idASacar, 1);
            linkFavSerie.innerText = "Añadir a Favoritos";

        } else {
            favoritosSerie.push(id);
            linkFavSerie.innerText = 'Eliminar de favoritos'
        }

            let favoritosAString = JSON.stringify(favoritosSerie);
            localStorage.setItem('favoritosSerie', favoritosAString);
        })
    })

    .catch(function(error){
        console.log(error);
    })

