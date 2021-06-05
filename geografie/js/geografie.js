$(document).ready(function(){
    $(".land").on("mouseover", function(){
        if($("#kraje:checked").val()) {
            $(this).css("fill", "red"); 
        }
         
    });
    $(".land").on("mouseout", function(){
        $(this).css("fill", "lightgray");
    });
    $(".city").on("click", function(){
        if($("#mesta:checked").val()) {
            $(".city").css("fill", "gray");
            $(this).css("fill", "green"); 
        }  
    });
    $(".vypinac").on("click", function(){
        //$(".city").css("fill", "green");
        //$(".vypinac").add(checked);
    });
});