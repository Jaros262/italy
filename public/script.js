$(document).ready(function(){
    $("#action").click(function(){
      $("#hide").toggle(1000);
    });
    $("#action2").click(function(){
        $("#hide2").toggle(1000);
    });
    $("#action3").click(function(){
        $("#hide3").toggle(1000);
    });
    $("#img1").mouseover(function(){
        $("#img1").animate({
            width: '200%',
            height: 'auto',
        });
    });
    $("#img1").mouseout(function(){
        $("#img1").animate({
            width: '100%',
            height: 'auto'
        });
    });
    $("#img2").mouseover(function(){
        $("#img2").animate({
            width: '200%',
            height: 'auto',
        });
    });
    $("#img2").mouseout(function(){
        $("#img2").animate({
            width: '100%',
            height: 'auto'
        });
    });
  });