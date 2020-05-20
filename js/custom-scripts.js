$(document).ready(function(){

    $(window).scroll(function(){
        slideDownHeader($(".nav-container"));
    });

    toggleNav();
    showEmailDelay();
    contentToggle();
    myVideoPlayer(); 

});

// Video player
function myVideoPlayer(){
    var sectionClass = "video--section"
    var videoClass = "myvideoplayer-video";
    var btnClass = "video__btn";
    var videoRunning = false;

    $("." + sectionClass).click(function(){
        
        if(videoRunning){
            videoRunning = false;
            $("."  + sectionClass).removeClass("videoplaying");
            $("." + btnClass).removeClass("hiding");
            $("." + btnClass).addClass("play");
            $("." + videoClass).get(0).pause(); 
        } else{
            videoRunning = true;
            $("."  + sectionClass).addClass("videoplaying");
            $("." + btnClass).addClass("hiding");
            $("." + btnClass).removeClass("play");
            $("." + videoClass).get(0).play();
        }
        
    });
}



// Content Toggle
function contentToggle(){
    var showClass = "show";
    var initBtnText = "Több";
    var activeBtnText = "Kevesebb";

    $(".content-reveal__btn").click(function(){
        var buttonClicked = $(this);
        var contentToReveal = $(buttonClicked).siblings(".hidden-content");

        if( !$(contentToReveal).hasClass(showClass) ){
            $(contentToReveal).addClass(showClass);
            $(buttonClicked).html(activeBtnText);
        } else{
            $(contentToReveal).removeClass(showClass);
            $(buttonClicked).html(initBtnText);
        }
    });
}

// Sticks navigation to top on scrolling down
function slideDownHeader(navContainer){
    if($("body").scrollTop() > 200 || $(document).scrollTop() > 200){
        $(navContainer).addClass("sticky");
    } else{
        $(navContainer).removeClass("sticky");
    }
}

// Toggles sticky menu upon clicking on hamburger menu at the top
function toggleNav(){

    var hamburgerMenu = $(".hamburger-toggle");
    var navBar = $(".nav-container");
    var navBarMenu = $("#menu1");
    var stickyClass = "sticky";
    var menuActive = "active";

    $(hamburgerMenu).click(function(){

        if( !$(navBarMenu).hasClass(menuActive) ){
            $(navBarMenu).addClass(menuActive);
        } else{
            $(navBarMenu).removeClass(menuActive);
        }

        if( !$(navBar).hasClass(stickyClass)){
            $(navBar).addClass(stickyClass);
        }
    });

};

// Shows email address with a small amount of delay upon clicking the button

function showEmailDelay(){
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
};