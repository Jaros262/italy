const act = "active1";
$(document).ready(function(){
    $(".udalostiText").hide();


    $(".udalosti tr").on("mouseover", function(){
        $(".udalostiText").slideUp();
        $(".tr udalostiText").slideDown(1000);
        $(this).addClass("bg-secondary text-white");
        $(".udalosti td").removeClass("bg-secondary text-white");
    });

    $("#udalosti22").mouseover(function(){
        $("#udalostiText1").slideUp();
        $("#udalostiText2").slideDown(1000);
        $("#udalostiText3").slideUp();
        $("#udalostiText4").slideUp();
        $("#udalostiText5").slideUp();
        $("#udalostiText6").slideUp();
        $("#udalosti1").removeClass("bg-secondary text-white");
        $("#udalosti2").addClass("bg-secondary text-white");
        $("#udalosti3").removeClass("bg-secondary text-white");
        $("#udalosti4").removeClass("bg-secondary text-white");
        $("#udalosti5").removeClass("bg-secondary text-white");
        $("#udalosti6").removeClass("bg-secondary text-white");
    });

    $("#udalosti33").mouseover(function(){
        $("#udalostiText1").slideUp();
        $("#udalostiText2").slideUp();
        $("#udalostiText3").slideDown(1000);
        $("#udalostiText4").slideUp();
        $("#udalostiText5").slideUp();
        $("#udalostiText6").slideUp();
        $("#udalosti1").removeClass("bg-secondary text-white");
        $("#udalosti2").removeClass("bg-secondary text-white");
        $("#udalosti3").addClass("bg-secondary text-white");
        $("#udalosti4").removeClass("bg-secondary text-white");
        $("#udalosti5").removeClass("bg-secondary text-white");
        $("#udalosti6").removeClass("bg-secondary text-white");
    });

    $("#udalosti44").mouseover(function(){
        $("#udalostiText1").slideUp();
        $("#udalostiText2").slideUp();
        $("#udalostiText3").slideUp();
        $("#udalostiText4").slideDown(1000);
        $("#udalostiText5").slideUp();
        $("#udalostiText6").slideUp();
        $("#udalosti1").removeClass("bg-secondary text-white");
        $("#udalosti2").removeClass("bg-secondary text-white");
        $("#udalosti3").removeClass("bg-secondary text-white");
        $("#udalosti4").addClass("bg-secondary text-white");
        $("#udalosti5").removeClass("bg-secondary text-white");
        $("#udalosti6").removeClass("bg-secondary text-white");
    });

    $("#udalosti55").mouseover(function(){
        $("#udalostiText1").slideUp();
        $("#udalostiText2").slideUp();
        $("#udalostiText3").slideUp();
        $("#udalostiText4").slideUp();
        $("#udalostiText5").slideDown(1000);
        $("#udalostiText6").slideUp();
        $("#udalosti1").removeClass("bg-secondary text-white");
        $("#udalosti2").removeClass("bg-secondary text-white");
        $("#udalosti3").removeClass("bg-secondary text-white");
        $("#udalosti4").removeClass("bg-secondary text-white");
        $("#udalosti5").addClass("bg-secondary text-white");
        $("#udalosti6").removeClass("bg-secondary text-white");
    });

    $("#udalosti66").mouseover(function(){
        $("#udalostiText1").slideUp();
        $("#udalostiText2").slideUp();
        $("#udalostiText3").slideUp();
        $("#udalostiText4").slideUp();
        $("#udalostiText5").slideUp();
        $("#udalostiText6").slideDown(1000);
        $("#udalosti1").removeClass("bg-secondary text-white");
        $("#udalosti2").removeClass("bg-secondary text-white");
        $("#udalosti3").removeClass("bg-secondary text-white");
        $("#udalosti4").removeClass("bg-secondary text-white");
        $("#udalosti5").removeClass("bg-secondary text-white");
        $("#udalosti6").addClass("bg-secondary text-white");
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