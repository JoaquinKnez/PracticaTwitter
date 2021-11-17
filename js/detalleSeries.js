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
        generoSerie.innerHTML += `<a class="genero" href="genres.html?id=${data.id}">${data.genres[0].name}</a>`
        sinopsisSerie.innerHTML += data.overview;

/* agregado a favoritos  */

        let favoritos = []; /* array para guardar ids favoritos  */

        //si hay datos anteriores entonces debemos actualizar con los datos que ya tengo en el storage 
        let recuperoStorage = localStorage.getItem("favoritos");//retorna un json 

        if (recuperoStorage != null){
            favoritos = JSON.parse(recuperoStorage);
        }

        let linkFav = document.querySelector('#botonFav') //etiqueta a que tiene lo de agg a favoritos 

        if (favoritos.includes(id)){
            linkFav.innerText = "Quitar de favoritos"
        }

        //pushear un id al array --> pushear un id cuando el usuario haga click en el link >> EVENTO
       
        linkFav.addEventListener("click", function(evento){
                evento.preventDefault();

            //sirve para tocas "quitar de favoritos" no se te agregue mas veces
            if (favoritos.includes(id)){//pregunto si el id está en el array 
                //quiero sacar el id del array >> indexOf
                let idASacar = favoritos.indexOf(id); 
                //sacar el id del array 
                favoritos.splice(idASacar, 1);
                linkFav.innerText = "Agregar a favoritos"; 
            } else {
                
           //pushear un id al array 
            favoritos.push(id);
            linkFav.innerHTML = "Quitar de favoritos" //es lo que quiero que aparezca despues de que le de click a agg a favoritos 
            
            }


            //guardar el array en localStorage 
            //paso 1: lo paso a sting
            let favoritosAString = JSON.stringify(favoritos);
            localStorage.setItem("favoritos", favoritosAString); 

            //chequear que los ids se guardan en favoritos 
            console.log(localStorage)
        })

        //guardar el array en localStorage 
    })

    .catch(function(error){
        console.log(error);
    })

