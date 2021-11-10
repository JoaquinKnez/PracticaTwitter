let queryString = location.search;
console.log(queryString)

let qsToObject = new URLSearchParams(queryString);
console.log(qsToObject)

let id = qsToObject.get('id');
console.log(id);

const urlGeneros = `https://api.themoviedb.org/3/genre/${id}?api_key=924a6f16470b17afdd20524ec31c09be`

const peliculasMasValoradas = 'https://api.themoviedb.org/3/movie/top_rated/?api_key=924a6f16470b17afdd20524ec31c09be'

const img = 'https://image.tmdb.org/t/p/w342';

fetch(urlGeneros)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        
        //Paso 1: capturar DOM
        let titleSectionPelis = document.querySelector('.titleSection');
        
        //Paso 2 y 3: actualizar y mandar al DOM
        titleSectionPelis.innerHTML = data.name
    })
    .catch(function(error){
        console.log(error)
    })

fetch(peliculasMasValoradas)
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
            if(info[i].genre_ids.includes(18)){
                infoSectionPelis += `
                        <a class="linkGenero" href="detail-movie.html?id=${info[i].id}">
                            <article class="card">
                                    <img src="${img + info[i].poster_path}" alt="${info[i].title}">
                                    <h2>${info[i].title}</h2>
                            </article>
                        </a>
                `
            }
        }

        //Paso 2 y 3: actualizar y mandar al DOM
        sectionPelis.innerHTML = infoSectionPelis

    })
    .catch(function(error){
        console.log(error)
    })

    /* SERIES */

/* fetch(urlSeries)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        
        //Paso 1: capturar DOM
        let titleSectionSeries = document.querySelector('.titleSection');

        //Paso 2 y 3: actualizar y mandar al DOM
        titleSectionSeries.innerHTML = data.name

    })
    .catch(function(error){
        console.log(error)
    }) */