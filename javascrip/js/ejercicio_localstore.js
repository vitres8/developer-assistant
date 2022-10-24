'use strict'

window.addEventListener('load', function(){


var formulario = document.querySelector("#formpelicula");

    formulario.addEventListener('submit', function(){  
        var titulo = document.querySelector("#addpelicula").value;
        localStorage.setItem(titulo, titulo);
    });




var ul = document.querySelector("#peliculas-list");

for(var i in localStorage){
    if(typeof localStorage[i] == 'string'){
        var li = document.createElement("li");
        console.log(localStorage[i]);
        li.append(localStorage[i]);
        ul.append(li);
    }
}

var formulariob = document.querySelector("#borrarPelicula");

    formulariob.addEventListener('submit', function(){  
        var titulo = document.querySelector("#RemovePelicula").value;
        localStorage.removeItem(titulo);
    });

});