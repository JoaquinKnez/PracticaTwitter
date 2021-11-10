const urlPopulares = 'https://api.themoviedb.org/3/movie/popular/?api_key=924a6f16470b17afdd20524ec31c09be'

const img = 'https://image.tmdb.org/t/p/w342';

const series = 'https://api.themoviedb.org/3/tv/popular?api_key=924a6f16470b17afdd20524ec31c09be'

const peliculasMasValoradas = 'https://api.themoviedb.org/3/movie/top_rated/?api_key=924a6f16470b17afdd20524ec31c09be'

const peliculasMasNuevas = 'https://api.themoviedb.org/3/movie/upcoming/?api_key=924a6f16470b17afdd20524ec31c09be'

/* PELICULAS */

fetch(urlPopulares) 
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let info = data.results;

        let sectionPelis = document.querySelector('#peliculasPopulares');

        let infoPelis = '';

        for(let i=0; i<5; i++){
            infoPelis += `
                    <a class="linkGenero" href="detail-movie.html?id=${info[i].id}">
                        <article class="card">
                                <img src="${img + info[i].poster_path}" alt="${info[i].title}">
                                <h2>${info[i].title}</h2>
                        </article>
                    </a>
            `
        }

        sectionPelis.innerHTML = infoPelis
    })
    .catch(function(error){
        console.log(error)
    })

    /* SERIES */

    fetch(series) 
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let info = data.results;

        let sectionSeries = document.querySelector('#seriesPopulares');

        let infoSeries = '';

        for(let i=0; i<5; i++){
            infoSeries += `
                    <a class="linkGenero" href="detail-serie.html?id=${info[i].id}">
                        <article class="card">
                                <img src="${img + info[i].poster_path}" alt="${info[i].name}">
                                <h2>${info[i].name}</h2>
                        </article>
                    </a>
            `
        }

        sectionSeries.innerHTML = infoSeries
    })
    .catch(function(error){
        console.log(error)
    })

    /* Peliculas mas valoradas */

    fetch(peliculasMasValoradas) 
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let info = data.results;

        let sectionPelis = document.querySelector('#peliculasMasValoradas');

        let infoPelis = '';

        for(let i=0; i<5; i++){
            infoPelis += `
                    <a class="linkGenero" href="detail-movie.html?id=${info[i].id}">
                        <article class="card">
                                <img src="${img + info[i].poster_path}" alt="${info[i].title}">
                                <h2>${info[i].title}</h2>
                        </article>
                    </a>
            `
        }

        sectionPelis.innerHTML = infoPelis
    })
    .catch(function(error){
        console.log(error)
    })

    /* Peliculas mas nuevas */

    fetch(peliculasMasNuevas) 
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let info = data.results
        console.log(data)

        let sectionPelis = document.querySelector('#peliculasMasNuevas');

        let infoPelis = '';

        for(let i=0; i<5; i++){
            infoPelis += `
                    <a class="linkGenero" href="detail-movie.html?id=${info[i].id}">
                        <article class="card">
                                <img src="${img + info[i].poster_path}" alt="${info[i].title}">
                                <h2>${info[i].title}</h2>
                        </article>
                    </a>
            `
        }

        sectionPelis.innerHTML = infoPelis
    })
    .catch(function(error){
        console.log(error)
    })