'use strict'

/*
programa que pida 2 numeros y diga cual es el mayor el menor y si son iguales
*/

var numero1 = parseInt(prompt('Introduce el primer numero', 0));
var numero2 = parseInt(prompt('Introduce el numero 2', 0));

console.log(numero1, numero2);

if(numero1 == numero2){
    alert("Los numeros son iguales");
}else if(numero1 > numero2){
    alert("El numero mayor es:" + numero1);
    alert("El numero menor es:" + numero2);
}else if(numero2 > numero1){
    alert("El numero mayor es:" + numero2);
    alert("El numero menor es:" + numero1);
}else if(
    alert("introduce numeros correctos")
);