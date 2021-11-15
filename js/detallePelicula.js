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
        let imagenPelis = document.querySelector('.imagenPeli');
        let tituloArticulo = document.querySelector('.tituloArticulo');
        let calificacionPeli = document.querySelector('.calificacionPeli');
        let duracionPeli = document.querySelector('.duracionPeli');
        let estrenoPeli = document.querySelector('.estrenoPeli');
        let generoPeli = document.querySelector('.generoPeli');
        let sinopsisPeli = document.querySelector('.sinopsisPeli');

        imagenPelis.src = imagen + data.poster_path;
        tituloArticulo.innerText = data.title;
        calificacionPeli.innerText += data.vote_average;
        duracionPeli.innerText += `${data.runtime} minutos`;
        estrenoPeli.innerText += data.release_date;
        generoPeli.innerHTML += `<a class="genero" href="genres.html?id=${data.id}">${data.genres[0].name}</a>`;
        sinopsisPeli.innerText += data.overview;
    })

    .catch(function(error){
        console.log(error);
    })