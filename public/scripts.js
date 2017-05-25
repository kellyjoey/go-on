//firebase maybe another day
// setTimeout(function(){

//             // Initialize Firebase
//         var config = {
//             apiKey: "AIzaSyBiDeHTlmuH4KqwAfzWvQfpd7dsmssaJLA",
//             authDomain: "go-on-b0c84.firebaseapp.com",
//             databaseURL: "https://go-on-b0c84.firebaseio.com",
//             projectId: "go-on-b0c84",
//             storageBucket: "go-on-b0c84.appspot.com",
//             messagingSenderId: "868132750749"
//         };
//         firebase.initializeApp(config);


//   // Get a reference to the database service
//   var database = firebase.database();

//   database.ref().on('value', function(snapshot) {
//       $(".galleryImage").each(function(){
//           let id = this.id
//           var count
//           var that = $(this)
//         database.ref("/" + id).once('value').then(function(snapshot){           
//           count = snapshot.val().count || 0
          
//          that.next().html("Likes " + count)
          
//         });
          
          
          
//     });
//   })

  

//   var postDivs = document.querySelectorAll('.galleryImage');
//   console.log(postDivs);

//   for (var i = 0; i < postDivs.length; i++) {
//     var postID = postDivs[i].id;
//     var numLikes = getLikeCount(postID);
// }



//   function getLikeCount(postID) {
//     var thisPostRef = database.ref()(postID + '/like-count/');
//     database.ref().once('value', function(snapshot) {
//         if ( snapshot.val() ) {
//             document.querySelector('#' + postID + ' .like-count').innerHTML = snapshot.val() + ' likes';
//         } else {
//             return false;
//         }
//     });
// }


    //     var currentLikes = snapshot.val() ? snapshot.val() : 0;
    //     database.ref().update({
    //         'postID': id,
    //         'like-count': currentLikes + 1
    //         }, function(error) {
    //           if (error) {
    //             console.log('Data could not be saved:' + error);
    //           } else {
    //             console.log('Data saved successfully');
    //           }
    //         });
    //     getLikeCount(id);
    // });   





var audio = new Audio('rainbowSound.wav');

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

$(document).on("click", ".galleryImage", function(){
    if ($(this).parent().children(".heartClick").length == 0) {
       $(this).parent().append("<span class='glyphicon glyphicon-heart heartClick' aria-hidden='true'></span>")
       audio.currentTime = 0;
       audio.play();

       
       
    }else{
        $(this).parent().children(".heartClick").remove();
    }


});

$("html, body").on("click", ".arrow", function(){
    $("html, body").animate({scrollTop: $('.infoContent').offset().top -100}, 1500);
});




//Rainbow Canvas script that didn't get to see the spotlight



// (function() {
	// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
	// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
	// requestAnimationFrame polyfill by Erik MÃ¶ller. fixes from Paul Irish and Tino Zijdel
	// MIT license

//     var lastTime = 0;
//     var vendors = ['ms', 'moz', 'webkit', 'o'];
//     for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
//         window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
//         window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
//     }
 
//     if (!window.requestAnimationFrame)
//         window.requestAnimationFrame = function(callback, element) {
//             var currTime = new Date().getTime();
//             var timeToCall = Math.max(0, 16 - (currTime - lastTime));
//             var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
//               timeToCall);
//             lastTime = currTime + timeToCall;
//             return id;
//         };
 
//     if (!window.cancelAnimationFrame)
//         window.cancelAnimationFrame = function(id) {
//             clearTimeout(id);
//         };
// }());






// let rainbowImage = new Image();
// rainbowImage.src = "rainbow.png";
// let active;
// let sound = true;
// var rainbow
// var canvas

// function runRainbow () {

//     canvas = document.getElementById("rainbowAnimation");
// canvas.width = 168;
// canvas.height = 96;

//     rainbow = sprite({
//         context: canvas.getContext("2d"),
//         width: 3192,
//         height: 96,
//         image: rainbowImage,
//         numberOfFrames: 19,
//         ticksPerFrame: 1.1    
//     });

    


    
//     console.log("running");
//     var audio = new Audio('rainbowSound.wav');
//     if(sound){
//             sound = false;
//             audio.playbackRate = .5;
//             audio.play();
//     }

//     active = true;
//     gameLoop();
// }



// function gameLoop () {    
    


//     if(active){
//          window.requestAnimationFrame(gameLoop);
        
//     }
//      rainbow.update();
//     rainbow.render();


// }

//    function sprite (options) {

//     var that = {},
//         frameIndex = 0,
//         tickCount = 0,
//         ticksPerFrame = options.ticksPerFrame || 0;
//         numberOfFrames = options.numberOfFrames || 1;

//     that.context = options.context;
//     that.width = options.width;
//     that.height = options.height;
//     that.image = options.image;

//     that.update = function () {
                
//                     tickCount += 1;
//                     if (tickCount > ticksPerFrame) {
//                      tickCount = 0;
//                         if(frameIndex < numberOfFrames - 1 ) {
//                             frameIndex += 1;
//                         } 
//                         else{
//                             active = false;
//                             frameIndex = 0;
                            
//                         }
                            
//                  }
//     };

//     that.render = function () {
                    

                    
                   
                    

//                     that.context.drawImage(
//                         that.image,
//                         frameIndex * that.width / numberOfFrames,
//                         0,
//                         that.width / numberOfFrames,
//                         that.height,
//                         0,
//                         0,
//                         that.width / numberOfFrames,
//                         that.height
//                         );                   
//                 };
                
//             return that;
//     }



// // let magicButton = document.getElementById("startRainbow");
// // let clearButton = document.getElementById("clearRainbow");

// // magicButton.addEventListener('click', runRainbow);

// // clearButton.addEventListener('click', clear );


// // function clear () {
// //     rainbow.context.clearRect(0, 0, 3192, 96);
// //     sound = true;
// // }





