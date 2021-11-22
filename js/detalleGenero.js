let queryString = location.search;
console.log(queryString)

let qsToObject = new URLSearchParams(queryString);
console.log(qsToObject)

let id = qsToObject.get('id');
let genre = qsToObject.get('genre');
console.log(id);
console.log(genre);

const urlGeneros = `https://api.themoviedb.org/3/genre/${id}?api_key=924a6f16470b17afdd20524ec31c09be`

const peliculasGenero = `
https://api.themoviedb.org/3/discover/movie?api_key=924a6f16470b17afdd20524ec31c09be&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`

const serieGenero = `https://api.themoviedb.org/3/discover/tv?api_key=924a6f16470b17afdd20524ec31c09be&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres=${id}&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`

const img = 'https://image.tmdb.org/t/p/w342';

fetch(urlGeneros)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        
        // capturar DOM
        let titleSectionPelis = document.querySelector('.titleSection');
        
        // actualizar y mandar al DOM
        titleSectionPelis.innerHTML = genre /* tuvimos que usar la queryString de genre ya que data.name tenia conflicto con los titulos de generos que tenian 2 o mas palabras */
    })
    .catch(function(error){
        console.log(error)
    })

    
fetch(peliculasGenero)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        let info = data.results
        
        //Paso 1: capturar DOM
        let sectionPelis = document.querySelector('#sectionPelis');

        let infoSectionPelis = '';

        for(let i=0; i<info.length; i++){
            if(info[i].poster_path !== null){ /* para sacar las peliculas que no tenian foto y que solo nos renderice las que si */
                infoSectionPelis += `
                        <a class="linkGenero" href="detail-movie.html?id=${info[i].id}">
                            <article class="card">
                                    <img src="${img + info[i].poster_path}" alt="${info[i].title}">
                                    <h2>${info[i].title}</h2>
                            </article>
                        </a>
                `;
            }
        }

        //Paso 2 y 3: actualizar y mandar al DOM
        sectionPelis.innerHTML = infoSectionPelis

    })
    .catch(function(error){
        console.log(error)
    })

    /* SERIES */

    fetch(serieGenero)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        let info = data.results
        
        //Paso 1: capturar DOM
        let sectionPelis = document.querySelector('#sectionPelis');

        let infoSectionPelis = '';

        for(let i=0; i<info.length; i++){
            if(info[i].poster_path !== null){
                infoSectionPelis += `
                        <a class="linkGenero" href="detail-serie.html?id=${info[i].id}">
                            <article class="card">
                                    <img src="${img + info[i].poster_path}" alt="${info[i].title}">
                                    <h2>${info[i].name}</h2>
                            </article>
                        </a>
                `;
            }
        }

        //Paso 2 y 3: actualizar y mandar al DOM
        sectionPelis.innerHTML = infoSectionPelis

    })
    .catch(function(error){
        console.log(error)
    })
