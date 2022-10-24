'use strict'

alert("funcionando OK");

// Fetch peticiones API Rest

var div_usuarios = document.querySelector("#listaUsuarios");
var div_clemen = document.querySelector("#clemen");

    getUsuarios()
        .then(data => data.json())
        .then(data => {
            listadoUsuarios(data);

            return getClementine()
        })
        .then(data => data.json())
        .then(clement => {
            mostrarClement(clement);
        });


function getUsuarios(){
    return fetch('https://jsonplaceholder.typicode.com/users')
};


function getClementine(){
    return fetch('https://jsonplaceholder.typicode.com/users/2')
};

function listadoUsuarios(data){
    
    data.map((data,i) =>{
            
        let nombre = document.createElement('h3');
        
        nombre.innerHTML = "id: "+ i +"/  Nombre: "+ data.name + "/  Usuario: " + data.username + "/  email: " 
        + data.email;

        div_usuarios.appendChild(nombre);

        document.querySelector(".loading").style.display = 'none';
         
    });
};

function mostrarClement(clement){
            
        let nombre = document.createElement('h4');
        let avatar = document.createElement('img');
        nombre.innerHTML = "Nombre: "+ clement.name + "/  Usuario: " + clement.username + "/  email: " 
        + clement.email;
        avatar.src = clement.avatar;

        div_clemen.appendChild(nombre);
        div_clemen.appendChild(avatar);

        document.querySelector(".clement").style.display = 'none';
    };