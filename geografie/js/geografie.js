$(document).ready(function(){
    $(".land").on("mouseover", function(){
        $(this).css("fill", "red");  
    });
    $(".land").on("mouseout", function(){
        $(this).css("fill", "lightgray");
    });
    $(".city").on("click", function(){
        $(".city").css("fill", "gray");
        $(this).css("fill", "green");  
    });
    $(".vypinac").on("click", function(){
        //$(".city").css("fill", "green");
        //$(".vypinac").add(checked);
    });
});