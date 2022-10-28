$(document).ready(function(){
    
    //mover
    $(".elemento").draggable();

    //resizable
    $(".elemento").resizable();

    //selectable
    //$(".lista").selectable();

    //sortable
    $(".lista").sortable({
        update: function(event, ui){
            console.log("cambio la lista");
        }
    });

    //droppable
    $("#movil").draggable();
    $("#area").droppable({
        drop: function(){
            console.log("hi");
        }
    });

});