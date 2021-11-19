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
        tituloArticulo.innerHTML = data.title;
        calificacionPeli.innerHTML += data.vote_average;
        duracionPeli.innerHTML += `${data.runtime} minutos`;
        estrenoPeli.innerHTML += data.release_date;
        generoPeli.innerHTML += `<a class="genero" href="genres.html">${data.genres[0].name}</a>`;
        sinopsisPeli.innerHTML += data.overview;

        let favoritos = []

        //Si hay datos anteriores entonces debemos actualizar el array.
        let recuperoStorage = localStorage.getItem('favoritos'); //Esto retorna un json.

        if (recuperoStorage != null){
            favoritos = JSON.parse(recuperoStorage);
        }   

        //Cuando el usuario haga click en el link
        let linkFav = document.querySelector('#direccionFavPeli');

        //Si el id está en el array de favoritos
        if(favoritos.includes(id)){
            linkFav.innerText = 'Eliminar de favoritos'       
        }

        linkFav.addEventListener('click', function(event){
            event.preventDefault();

            if(favoritos.includes(id)){
                //Quiero sacar el id del array. Necesito saber la posición.
                let idASacar = favoritos.indexOf(id);
                //Sacar el id del array
                favoritos.splice(idASacar, 1);
                linkFav.innerText = "Añadir a Favoritos";

            } else {
                //pushear un id al array.
                favoritos.push(id);
                linkFav.innerText = 'Eliminar de favoritos'
            }

            //Guardar el array en localStorage
            let favoritosAString = JSON.stringify(favoritos);
            localStorage.setItem('favoritos', favoritosAString);
        })
    })

    .catch(function(error){
        console.log(error);
    })