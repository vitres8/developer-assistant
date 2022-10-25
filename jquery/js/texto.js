$(document).ready(function(){
    
    reloadlinks();

    $("#add-button").click(function(){
        $("#menu").prepend('<li><a href='+$("#add-link").val()+'></a></li>');
        reloadlinks();
        $("#add-link").val("");
    });

    

});

function reloadlinks(){
    console.log($("a").length);
    $('a').each(function(index){
        var eln = $(this);
        var enlace = eln.attr("href");
        eln.text(enlace);
        
    });
}