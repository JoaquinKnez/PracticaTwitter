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
        tituloArticulo.innerHTML = data.name;
        calificacionSerie.innerHTML += data.vote_average;
        duracionSerie.innerHTML += data.number_of_seasons;
        estrenoSerie.innerHTML += data.first_air_date;
        generoSerie.innerHTML += `<a class="genero" href="genres.html">${data.genres[0].name}</a>`
        sinopsisSerie.innerHTML += data.overview;

    /* favoritos */

    let favoritosSerie = []

    //Si hay datos anteriores entonces debemos actualizar el array.
    let recuperoStorageSerie = localStorage.getItem('favoritosSerie'); //Esto retorna un json.

    if (recuperoStorageSerie != null){
        favoritosSerie = JSON.parse(recuperoStorageSerie);
    }   

    //Cuando el usuario haga click en el link
    let linkFavSerie = document.querySelector('#direccionFavoritosSerie');

    //Si el id está en el array de favoritos
    if(favoritosSerie.includes(id)){
        linkFavSerie.innerText = 'Eliminar de favoritos'       
    }

    linkFavSerie.addEventListener('click', function(event){
        event.preventDefault();

        //Pregunto si el id está en el array
        if(favoritosSerie.includes(id)){
            //Quiero sacar el id del array. Necesito saber la posición.
            let idASacar = favoritosSerie.indexOf(id);
            //Sacar el id del array
            favoritosSerie.splice(idASacar, 1);
            linkFavSerie.innerText = "Añadir a Favoritos";

        } else {
            //pushear un id al array.
            favoritosSerie.push(id);
            linkFavSerie.innerText = 'Eliminar de favoritos'
        }

        //Guardar el array en localStorage
            let favoritosAString = JSON.stringify(favoritosSerie);
            localStorage.setItem('favoritosSerie', favoritosAString);
        })
    })

    .catch(function(error){
        console.log(error);
    })

