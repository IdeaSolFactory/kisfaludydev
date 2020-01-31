$(document).ready(function(){

    $(window).scroll(function(){
        slideDownHeader($(".nav-container"));
        console.log($(document).scrollTop());
    });

    

    function slideDownHeader(navContainer){
        if($("body").scrollTop() > 200 || $(document).scrollTop() > 200){
            $(navContainer).addClass("sticky");
            console.log("fired");
        } else{
            $(navContainer).removeClass("sticky");
        }
    }

});