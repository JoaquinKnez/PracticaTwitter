let queryString = location.search;
console.log(queryString)

let qsToObject = new URLSearchParams(queryString);
console.log(qsToObject)

let id = qsToObject.get('id');
console.log(id);

const urlPelis = `https://api.themoviedb.org/3/movie/${id}?api_key=924a6f16470b17afdd20524ec31c09be`

const img = 'https://image.tmdb.org/t/p/w342';

fetch(urlPelis)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        
        //Paso 1: capturar DOM
        let image = document.querySelector("img");
        let tituloArticulo = document.querySelector(".tituloArticulo");
        let calificacion = document.querySelector(".calificacion");
        let duracion = document.querySelector(".duracion");
        let estreno = document.querySelector(".estreno");
        let genero = document.querySelector(".genero");
        let resumen = document.querySelector(".resumen");

        //Paso 2 y 3: actualizar y mandar al DOM
        image.src = img + data.poster_path;
        tituloArticulo.innerText = data.title;
        calificacion.innerHTML += data.vote_average;
        duracion.innerHTML += `${data.runtime} minutos`
        estreno.innerHTML += data.release_date
        genero.innerHTML += `<a class="genero" href="genres.html?id=${data.id}">${data.genres[0].name}</a>`
        resumen.innerHTML = data.overview

        /* favoritos */

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
        console.log(error)
    })

