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
    var previewPicClass = "video__preview"
    var btnClass = "video__btn";
    var videoRunning = false;

    $("." + sectionClass).click(function(){
        
        if(videoRunning){
            videoRunning = false;;
            $("."  + sectionClass).removeClass("videoplaying");            
            $("." + btnClass).removeClass("hiding");
            $("." + btnClass).addClass("play");
            $("." + videoClass).get(0).pause(); 
        } else{
            videoRunning = true;
            $("."  + sectionClass).addClass("videoplaying");
            $("." + previewPicClass).addClass("hiding")
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
    var btn = $(".show-mail-btn");
    var btnText = "Email cím megjelenítése";
    var textIsShown = false;

    setTimeout(function(){

        $("span", btn).html(btnText);
      
        $(btn).click(function(){
            if(!textIsShown){
                $("span", this).html("<b>info@kisfaludygozos.hu</b>");
                textIsShown = true;
            }
        });
    }, 1200);
};