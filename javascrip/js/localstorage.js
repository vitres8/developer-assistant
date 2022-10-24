'use strict'

//Localstorage

if(typeof(Storage) !== undefined){
    console.log("localstorage esta disponible");
}
else{
    console.log("localstorage NO disponible");
}

//guardar datos

localStorage.setItem("titulo", "Curso de jorge");

//recuperar elemento
console.log(localStorage.getItem("titulo"));

document.querySelector("#peliculas").innerHTML= localStorage.getItem("titulo");

//guardar objetos

var usuario = {
    nombre: "Jorge Gavidia",
    apellido: "Ferrer",
    email:"vitres8@gmail.com"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

console.log(localStorage.getItem("usuario"));
var userjs = JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);
document.querySelector("#peliculas").append(userjs.apellido);
//document.querySelector("#peliculas").innerHTML = localStorage.getItem("usuario");