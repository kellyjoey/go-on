$("body").on('click', '.uploadButton', function(){
    // let image = $(this).attr("data-image");
    let image = { image: $(this).attr("data-image") }
    $.post('/upload', image, function(data){
        console.log(data);
    });
});

// $.get('/piclist', function(data){
//     console.log(data);
// })