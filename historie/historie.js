$(document).ready(function(){
    $("#udalostiText1").hide();
    $("#udalostiText2").hide();
    $("#udalostiText3").hide();
    $("#udalostiText4").hide();
    $("#udalostiText5").hide();
    $("#udalostiText6").hide();

    $("#udalosti1").mouseover(function(){
        $("#udalostiText1").slideDown(1000);
        $("#udalostiText2").slideUp(1000);
        $("#udalostiText3").slideUp(1000);
        $("#udalostiText4").slideUp(1000);
        $("#udalostiText5").slideUp(1000);
        $("#udalostiText6").slideUp(1000);
        $("#udalosti1").addClass("bg-secondary text-white");
        $("#udalosti2").removeClass("bg-secondary text-white");
        $("#udalosti3").removeClass("bg-secondary text-white");
        $("#udalosti4").removeClass("bg-secondary text-white");
        $("#udalosti5").removeClass("bg-secondary text-white");
        $("#udalosti6").removeClass("bg-secondary text-white");
    });

    $("#udalosti2").mouseover(function(){
        $("#udalostiText1").slideUp(1000);
        $("#udalostiText2").slideDown(1000);
        $("#udalostiText3").slideUp(1000);
        $("#udalostiText4").slideUp(1000);
        $("#udalostiText5").slideUp(1000);
        $("#udalostiText6").slideUp(1000);
        $("#udalosti1").removeClass("bg-secondary text-white");
        $("#udalosti2").addClass("bg-secondary text-white");
        $("#udalosti3").removeClass("bg-secondary text-white");
        $("#udalosti4").removeClass("bg-secondary text-white");
        $("#udalosti5").removeClass("bg-secondary text-white");
        $("#udalosti6").removeClass("bg-secondary text-white");
    });

    $("#udalosti3").mouseover(function(){
        $("#udalostiText1").slideUp(1000);
        $("#udalostiText2").slideUp(1000);
        $("#udalostiText3").slideDown(1000);
        $("#udalostiText4").slideUp(1000);
        $("#udalostiText5").slideUp(1000);
        $("#udalostiText6").slideUp(1000);
        $("#udalosti1").removeClass("bg-secondary text-white");
        $("#udalosti2").removeClass("bg-secondary text-white");
        $("#udalosti3").addClass("bg-secondary text-white");
        $("#udalosti4").removeClass("bg-secondary text-white");
        $("#udalosti5").removeClass("bg-secondary text-white");
        $("#udalosti6").removeClass("bg-secondary text-white");
    });

    $("#udalosti4").mouseover(function(){
        $("#udalostiText1").slideUp(1000);
        $("#udalostiText2").slideUp(1000);
        $("#udalostiText3").slideUp(1000);
        $("#udalostiText4").slideDown(1000);
        $("#udalostiText5").slideUp(1000);
        $("#udalostiText6").slideUp(1000);
        $("#udalosti1").removeClass("bg-secondary text-white");
        $("#udalosti2").removeClass("bg-secondary text-white");
        $("#udalosti3").removeClass("bg-secondary text-white");
        $("#udalosti4").addClass("bg-secondary text-white");
        $("#udalosti5").removeClass("bg-secondary text-white");
        $("#udalosti6").removeClass("bg-secondary text-white");
    });

    $("#udalosti5").mouseover(function(){
        $("#udalostiText1").slideUp(1000);
        $("#udalostiText2").slideUp(1000);
        $("#udalostiText3").slideUp(1000);
        $("#udalostiText4").slideUp(1000);
        $("#udalostiText5").slideDown(1000);
        $("#udalostiText6").slideUp(1000);
        $("#udalosti1").removeClass("bg-secondary text-white");
        $("#udalosti2").removeClass("bg-secondary text-white");
        $("#udalosti3").removeClass("bg-secondary text-white");
        $("#udalosti4").removeClass("bg-secondary text-white");
        $("#udalosti5").addClass("bg-secondary text-white");
        $("#udalosti6").removeClass("bg-secondary text-white");
    });

    $("#udalosti6").mouseover(function(){
        $("#udalostiText1").slideUp(1000);
        $("#udalostiText2").slideUp(1000);
        $("#udalostiText3").slideUp(1000);
        $("#udalostiText4").slideUp(1000);
        $("#udalostiText5").slideUp(1000);
        $("#udalostiText6").slideDown(1000);
        $("#udalosti1").removeClass("bg-secondary text-white");
        $("#udalosti2").removeClass("bg-secondary text-white");
        $("#udalosti3").removeClass("bg-secondary text-white");
        $("#udalosti4").removeClass("bg-secondary text-white");
        $("#udalosti5").removeClass("bg-secondary text-white");
        $("#udalosti6").addClass("bg-secondary text-white");
    });
  });