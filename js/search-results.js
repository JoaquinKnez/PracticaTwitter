//capturo el formulario 

let formulario = document.querySelector('form');
let inputField = document.querySelector('.search');
let mensaje = document.querySelector('.mensaje');


formulario.addEventListener("submit",function (evento) {
    evento.preventDefault();

    //chequeo que el campo no esté vacio ' '
    if(inputField.value == ""){
        mensaje.innerHTML = `El campo es obligatorio`
        mensaje.style.color = "red";
    //chequear si puso más de 3 caracteres
    } else if (inputField.value.length < 3){
        mensaje.innerHTML = `Ingrese al menos 3 caracteres`
        mensaje.style.color = "red";
    } else {
        formulario.submit();
    }
})

//cuando el usuario ingrese al campo --> quiero eliminar el mensaje de error 
inputField.addEventListener('focus',function() {
    //limpiar el mensaje de error
    mensaje.innerText = "";
    this.value = "" //con this refiero a input fields y con .value lo de adentro
})


let query = location.search;
let qsObject = new URLSearchParams(query);
let palabra = qsObject.get('buscador') //estoy seleccionando solamente la palabra que buscó la persona 


const key = "924a6f16470b17afdd20524ec31c09be";
let url = `https://api.themoviedb.org/3/search/multi?api_key=${key}&language=es&query=${palabra}`;


let sectionResultadoBusqueda = document.querySelector(".peliculas");

const imgResult = 'https://image.tmdb.org/t/p/w342'

let resultados = []; //array para meteer los resultados 

fetch(url) 
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let info = data.results;
        console.log(info);

        if(info.length == 0){
            sectionResultadoBusqueda.innerHTML += `<p class="titleSection">No hay resultados para su búsqueda</p>`;
        } else {
            for (let i = 0; i < info.length; i++) {
                if(info[i].poster_path == null){
                    resultados += ''
                } else if(info[i].name == undefined){
                    resultados += `<a class="linkGenero" href="detail-movie.html?id=${info[i].id}">
                    <article class="card">
                            <img src="${imgResult + info[i].poster_path}" alt="${info[i].title}">
                            <h2>${info[i].title}</h2>
                    </article>`
                } else {
                    resultados += `<a class="linkGenero" href="detail-movie.html?id=${info[i].id}">
                    <article class="card">
                            <img src="${imgResult + info[i].poster_path}" alt="${info[i].title}">
                            <h2>${info[i].name}</h2>
                    </article>`
                }
            
                sectionResultadoBusqueda.innerHTML = resultados; 
             }  }
        
    })
    .catch(function(error){
        console.log(error);
    })



