const slide = [{
    "id":"prvni",
    "img":"img/one.jpg"
}
];
$(function(){
    $("#photo").html(`
        <img src="${slide.img}" class="img-fluid pozadiFoto">
    `);
})