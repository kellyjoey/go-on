$("body").on('click', '.uploadButton', function(){
    // let image = $(this).attr("data-image");
    let image = { image: $(this).attr("data-image") }

    $.post('/upload', image)
    .done(function(data){
        console.log(data);
        window.location.replace("#/uploads"); //redirects to this React component
    })
    .fail(function(error){
        alert("An error occured during the upload process");
        console.log(error);
    })
});

// $.get('/piclist', function(data){
//     console.log(data);
// })