//capturo el formulario 

let formulario = document.querySelector('form');
let inputField = document.querySelector('.search');
let mensaje = document.querySelector('.mensaje');


formulario.addEventListener("submit",function (evento) {
    evento.preventDefault();

    //chequeo que el campo no esté vacio ' '
    if(inputField.value == ""){
        mensaje.innerText = "el campo es obligatorio";
        mensaje.style.color = "red";
    //chequear si puso más de 3 caracteres
    } else if (inputField.value.length < 3){
        mensaje.innerText = "ingrese al menos 3 caracteres "
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
let palabra = qsObject.get('buscador')

console.log(query);
    
/* let url = `https://api.themoviedb.org/3/search/movie?&api_key=924a6f16470b17afdd20524ec31c09be${palabra}`


fetch(url) 
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(error){
        console.log(error);
    })
 */


