$(document).ready(function(){

    $(window).scroll(function(){
        slideDownHeader($(".nav-container"));
    });

    
// Sticks navigation to top on scrolling down
    function slideDownHeader(navContainer){
        if($("body").scrollTop() > 200 || $(document).scrollTop() > 200){
            $(navContainer).addClass("sticky");
        } else{
            $(navContainer).removeClass("sticky");
        }
    }

});

// Shows email address with a small amount of delay upon clicking the button

$(document).ready(function(){

    var emailContainer = $(".email-address-container");
    var btn = $(".show-mail-btn");
    var loadingText = '<p class="loadingText">(Kis türelmet kérünk...)</p>'

    $(emailContainer).append(loadingText);

    setTimeout(function(){        
        $('.loadingText').remove();
        btn.removeClass("hidden");
        $(btn).click(function(){
            $(this).css('display', 'none');
            $(emailContainer).append("<h3><strong>info@kisfaludygozos.hu</strong></h3>");
        });
    }, 1200);
   
})