$(document).ready(function(){
   
    //load
    //$("#datos").load("https://reqres.in/");

    //get y post
    $.get("https://reqres.in/api/users", {page: 2}, function(response){
        console.log(response);
        response.data.forEach((element,index) => {
            $("#datos").append("<p>"+element.first_name+" "+element.last_name+"</p>");
        });
    });

    $("#formulario").submit(function(e){
        e.preventDefault();
        var usuario = {
                name: $('input[name="name"]').val(),
                email: $('input[name="email"]').val()
        }
        console.log(usuario);
        $.post($(this).attr("action"), usuario,function(response){
        console.log(response);
        });
        return false;
    });


    /*var usuario = {
        name: "Jorge Gavidia",
        email: "vitres8@hotmail.com"
    }
    $.post("https://reqres.in/api/users", usuario,function(response){
        console.log(response);
    });*/

});