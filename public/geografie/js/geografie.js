$(function(){

    //in progress
    let town = [];
    fetch('https://agile-peak-84733.herokuapp.com//api/town')
    .then(response => { return response.json() })
    .then(json => { town = json; })
    .catch(function (error) {
       console.error('Chyba: \n', error);
    });

    /*let unesco = [];
    fetch('https://evening-reaches-42891.herokuapp.com/api/unesco')
    .then(response => { return response.json() })
    .then(json => { unesco = json; })
    .catch(function (error) {
       console.error('Chyba: \n', error);
    });*/
    //in progress

    $(".land").on("mouseover", function(){
        if($("#kraje:checked").val()) {
            $(this).css("fill", "rgb(53, 189, 53)"); 

            /*$(this).popover({
            'trigger':'click',
            'placement': 'right',
            'offset': '10%, -100', 
            'title': $(this).find('title').text()
            });*/
        }
         
    });
    $(".land").on("mouseout", function(){
        $(this).css("fill", "lightgray");
    });

    $("#mapa ellipse").on("click", function(){
        if($("#mesta:checked").val()) {
            $(".city").css("fill", "gray");
            $(this).css("fill", "green");
            let id = $(this).attr('id');
            let towns = town.find(item => {return item.id == id});
            $("#info").html(`
            <div class="col-12 nadpis">
                <h2>${towns.city} 
                    <small class="text-small">${towns.peoples} obv.</small>
                </h2>
            </div>
            <div class="col-2">
                <img src="img/${towns.sign}" class="img-fluid" style="padding: 10px">
            </div>
            <div class="col-10">
                ${towns.text}
            </div>
            `);
        }  else if(!$("#mesta:checked").val()){
            $(".city").css("fill", "gray");
            
        }
    });
    $("#mesta").on("click", function(){
        if(!$("#mesta:checked").val()){
            $(".city").css("fill", "gray");
        }
    });
})