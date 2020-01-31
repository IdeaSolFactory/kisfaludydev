$(document).ready(function(){

    SelectCategory();  
      
});

function SelectCategory(){
    var classForShow = "selected";

    $("li[data-event]").click(function(){

        var btnData = $(this).data("event");

        $("li[data-event]").removeClass("active");
        $(this).addClass("active");
        $("li[data-event]").removeClass(classForShow);
        $(this).addClass(classForShow);               
        
        $("[data-event]").removeClass(classForShow);
        $("[data-event='" + btnData +  "']").first().addClass(classForShow);
    });
}  