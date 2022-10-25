 $(document).ready(function(){
   
    //MouseOver y mouseOut

    var caja = $("#caja");

    /*caja.mouseover(function(){
        $(this).css("background", "red");
    });

    caja.mouseout(function(){
        $(this).css("background", "green");
    });*/

    //hover

    function changeRed(){
        $(this).css("background","red");
    }

    function changeGreen(){
        $(this).css("background","green");
    }

    caja.hover(changeRed, changeGreen);

    //clicks
    
    caja.click(function(){
        $(this).css("background", "blue")
               .css("color","white");
    });

    caja.dblclick(function(){
        $(this).css("background", "pink")
               .css("color", "yellow");
    });

    //focus and blur

    var nombre = $("#nombre");
    var datos = $("#datos");

    nombre.focus(function(){
        $(this).css("border","2px solid red");
    });
    
    nombre.blur(function(){
        $(this).css("border", "2px solid green");
        datos.text($(this).val()).show();
    });

    //mousedown mouseup

    datos.mousedown(function(){
        $(this).css("border-color", "gray");
    });

    datos.mouseup(function(){
        $(this).css("border-color", "blue");
    });

    //mousemove
    $(document).mousemove(function(){
        $("body").css("cursor", "none");
        $("#sigueme").css("left", event.clientX)
                     .css("top", event.clientY);
    });

 }); 