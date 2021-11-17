let queryString = location.search;
console.log(queryString)

let qsToObject = new URLSearchParams(queryString);
console.log(qsToObject)

let id = qsToObject.get('id');
console.log(id);

const img = 'https://image.tmdb.org/t/p/w342';

const urlSeries = `https://api.themoviedb.org/3/tv/${id}?api_key=924a6f16470b17afdd20524ec31c09be`

    /* SERIES */

    fetch(urlSeries)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        
        //Paso 1: capturar DOM
        let image = document.querySelector("img");
        let tituloSerie = document.querySelector(".tituloArticulo");
        let calificacion = document.querySelector(".calificacion");
        let temporadas = document.querySelector(".temporadas");
        let estreno = document.querySelector(".estreno");
        let genero = document.querySelector(".genero");
        let resumen = document.querySelector(".resumen");

        //Paso 2 y 3: actualizar y mandar al DOM
        image.src = img + data.poster_path;
        tituloSerie.innerHTML = data.name;
        calificacion.innerHTML += data.vote_average;
        temporadas.innerHTML += data.number_of_seasons
        estreno.innerHTML += data.first_air_date
        genero.innerHTML += `<a class="genero" href="genres.html?id=${data.id}">${data.genres[0].name}</a>`
        resumen.innerHTML = data.overview

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
            linkFavSerie.innerText = 'Quitar de favoritos'       
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
        console.log(error)
    })