$(document).ready(function(){

    //Selector ID

    $("#rojo").css("background","red").css("color","white");

    $("#amarillo").css("background","yellow").css("color","green");

    $("#verde").css("background","green").css("color","blue");

    // selector clases

    var mi_clase = $('.zebra').css("padding", "5px");

    $('.sinborde').click(function(){
        console.log("click");
        $(this).addClass('zebra');
    });

    //selectore de etiqueta
    var parrafos = $('p').css("cursor","pointer");
        console.log("clicks");
        parrafos.click(function(){
            var clase = $(this);
            if(!clase.hasClass('grande')){
               $(this).addClass("grande");
            }else{
                clase.removeClass('grande');
            }
        });
    
    //selector de atributo
    $('[title = "Google"]').css('background', '#ccc');
    $('[title = "Facebook"]').css('background','green');

    //otros
    $('p,a').addClass('margen-superior');
});