'use strict'
// JSON JavaScript Object Notation

var pelicula = {
    titulo: 'Batman vs Superman',
    year: 2017,
    pais: 'Estados Unidos'
};

var peliculas = [
    {titulo:'superman', year: 2010, pais: 'españa'},
    pelicula
];

var cajas_peliculas = document.querySelector("#peliculas");
var index;
for(index in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[index].titulo+" - "+peliculas[index].year);
    cajas_peliculas.append(p);
};