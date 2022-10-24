'use strict'
/*
1. pida 6 numeros por pantalla y los meta en un array
2. mostrar el array entero(todos sus elementos, en el cuerpo de la pagina y la consola)
3. ordenar el array y mostrarlo
4. invertir su orden y mostrarlo
5. mostrar cuantos elementos tiene el array
6. hacer una busqueda de un valor introducido por el usuario, que indique si existe y su indice.
*/

/* puntos 1 y 2*/
var numeros = new Array();

for(var i=0; i<6; i++){
   var element = prompt("Introduzca el numero "+i+":");
    numeros[i] = element;
}

console.log("El arreglo de 6 numeros es, (vertical) ")
for (var i=0; i<numeros.length; i++){
    console.log(" - "+i+" . "+numeros[i]);
}

console.log("El arreglo de 6 numeros es, (horizontal) ");
console.log("["+numeros[0]+","+numeros[1]+","+numeros[2]+","+numeros[3]+","+numeros[4]+","+numeros[5]+"]");
console.log(numeros);

document.write("<h2>El arreglo es : </h2>");
document.write("<ul>");
for(var i=0; i< numeros.length; i++){
    document.write("<li>"+numeros[i]+"</li>");
}
document.write("</ul>");
/*puntos 3*/
numeros.sort();
console.log("El arreglo de 6 numeros es, (ordenado) ");
console.log("["+numeros[0]+","+numeros[1]+","+numeros[2]+","+numeros[3]+","+numeros[4]+","+numeros[5]+"]");

/*punto 4*/

numeros.reverse();
console.log("El arreglo de 6 numeros es, (invertido) ");
console.log("["+numeros[0]+","+numeros[1]+","+numeros[2]+","+numeros[3]+","+numeros[4]+","+numeros[5]+"]");

/*punto 5*/
console.log("El array tiene "+numeros.length+"  elementos");
/*punto6*/
var numeroBusqueda = prompt("Introduzca un numero a buscar en el array");

numeros.reverse();
for(var i=0; i<numeros.length; i++){
    if (numeroBusqueda == numeros[i]){
        console.log("El numero "+numeroBusqueda+" se encuentra en el array");
        console.log("en la posicion "+i);
        break;
    }
    
}