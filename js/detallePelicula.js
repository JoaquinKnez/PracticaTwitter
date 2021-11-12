let queryString = location.search;
console.log(queryString)

let qsToObject = new URLSearchParams(queryString);
console.log(qsToObject)

let id = qsToObject.get('id');
console.log(id);

let urlPeliculas = `https://api.themoviedb.org/3/movie/${id}?api_key=924a6f16470b17afdd20524ec31c09be`

let imagen = 'https://image.tmdb.org/t/p/w342'

fetch(urlPeliculas)
    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data);
        let imagenPelis = document.querySelector('.imagenPeli')
        let tituloArticulo = document.querySelector('.tituloArticulo')
        let calificacionPeli = document.querySelector('.calificacionPeli')
        let duracionPeli = document.querySelector('.duracionPeli')
        let estrenoPeli = document.querySelector('.estrenoPeli')
        let generoPeli = document.querySelector('.generoPeli')
        let sinopsisPeli = document.querySelector('.sinopsisPeli')

        imagenPelis.src = imagen + data.poster_path;
        tituloArticulo = data.original_title
        calificacionPeli += data.vote_average
        duracionPeli += data.runtime
        estrenoPeli += data.release_date
        generoPeli += data.genres.name
        sinopsisPeli += data.overview
    })

    .catch(function(error){
        console.log(error);
    })