let urlGeneros = 'https://api.themoviedb.org/3/genre/movie/list?api_key=924a6f16470b17afdd20524ec31c09be'

const urlSeries = `https://api.themoviedb.org/3/genre/tv/list?api_key=924a6f16470b17afdd20524ec31c09be`

fetch(urlGeneros) 
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let info = data.genres
        console.log(info);

        let seccionGeneros = document.querySelector('.seccionGeneros');

        let seccionInfo = '';

        for(let i=0; i<info.length; i++){
            seccionInfo += `
                    <a class="linkGenero" href="detail-genres.html?id=${info[i].id}&genre=${info[i].name}">
                        <article class="categorias">
                            ${info[i].name}
                        </article>
                    </a>
            `
        }

        seccionGeneros.innerHTML = seccionInfo
    })
    .catch(function(error){
        console.log(error)
    })

    /* SERIES */

    fetch(urlSeries) 
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let info = data.genres
        console.log(info);

        let seccionGenerosSeries = document.querySelector('#sectionSeries');

        let seccionInfo = '';

        for(let i=0; i<info.length; i++){
            seccionInfo += `
                    <a class="linkGenero" href="detail-genres.html?id=${info[i].id}&genre=${info[i].name}">
                        <article class="categorias">
                            ${info[i].name}
                        </article>
                    </a>
            `
        }

        seccionGenerosSeries.innerHTML = seccionInfo
    })
    .catch(function(error){
        console.log(error)
    })
    