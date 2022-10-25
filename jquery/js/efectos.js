$(document).ready(function(){
   var box = $("#box");

    $("#show").hide();

    $("#show").click(function(){
        $(this).hide();
        $("#hide").show();

        $("#box").fadeTo('slow',1);

    });
    $("#hide").click(function(){
        $(this).hide();
        $("#show").show();

        $("#box").fadeTo('slow',0.1);
    });


    $("#todo").click(function(){
        $("#box").toggle('fast');
    });

    $("#animate").click(function(){
        box.animate({
                        marginLeft: '100px',
                        fontSize: '40px',
                        height: '110px'
                    }, 'slow')
            .animate({
                        borderRadius: '900px',
                        marginTop: '80px',
                    },'slow')
            .animate({
                        borderRadius: '0px',
                        marginLeft: '0px',
                    },'slow')
            .animate({
                        borderRadius: '200px',
                        marginTop: '20px',
                    },'slow')
            .animate({
                        marginLeft: '100px',
                        fontSize: '40px',
                        height: '110px'
                    }, 'slow');                      

    });



});