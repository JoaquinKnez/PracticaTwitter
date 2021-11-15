let queryString = location.search;
console.log(queryString)

let qsToObject = new URLSearchParams(queryString);
console.log(qsToObject)

let id = qsToObject.get('id');
console.log(id);

let urlSeries = `https://api.themoviedb.org/3/tv/${id}?api_key=924a6f16470b17afdd20524ec31c09be`

let imagen = 'https://image.tmdb.org/t/p/w342'

fetch(urlSeries)
    .then(function(response){
        return response.json()
    })

    .then(function(data){
        console.log(data);
        let imagenSerie = document.querySelector('.imagenSerie')
        let tituloArticulo = document.querySelector('.tituloArticulo')
        let calificacionSerie = document.querySelector('.calificacionSerie')
        let duracionSerie = document.querySelector('.temporadasSerie')
        let estrenoSerie = document.querySelector('.emisionSerie')
        let generoSerie = document.querySelector('.generoSerie')
        let sinopsisSerie = document.querySelector('.sinopsisSerie')

        imagenSerie.src = imagen + data.poster_path;
        tituloArticulo.innerText = data.name;
        calificacionSerie.innerText += data.vote_average;
        duracionSerie.innerText += data.number_of_seasons;
        estrenoSerie.innerText += data.first_air_date;
        generoSerie.innerHTML += `<a class="genero" href="genres.html?id=${data.id}">${data.genres[0].name}</a>`
        sinopsisSerie.innerText += data.overview;
    })

    .catch(function(error){
        console.log(error);
    })