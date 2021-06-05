const act = "active1";
const udalostiText = ".udalostiText"
$(document).ready(function(){
    $(".udalostiText").hide();
    $(".udalosti tr").on("mouseover", function(){
        //$(".udalostiText").slideUp();
        $(".udalostiText").slideDown(1000);
        $(this).addClass("bg-secondary text-white");
    });

    $(".udalosti tr").on("mouseout", function(){
        $(".udalostiText").slideUp();
        //$(".udalostiText").slideDown(1000);
        $(this).removeClass("bg-secondary text-white");
    });

    $("#pT1").hide();
    $(".jmena tr").on("click", function(){
        //$("#pT1").fadeIn(1000);
        $(".jmena tr").removeClass(act);
        $(this).addClass(act);
        
    });
    $(".jmena tr").on("mouseover", function(){
            $(this).addClass("bg-success");
            $(this).css("color", "white");  
    });
    $(".jmena tr").on("mouseout", function(){
        $(this).removeClass("bg-success");
        $(this).css("color", "black");
        console.log(this);
    });
  });