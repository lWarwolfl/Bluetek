let lazyLoadInstance = new LazyLoad({
    // Your custom settings go here
});

$(window).on('resize',function (){
    let boxes = $('.road-map-box');
    boxes.css('height','unset');
    let maxHeight = Math.max.apply(
        Math, boxes.map(function() {
            return $(this).height();
        }).get());
    boxes.height(maxHeight);
});

let video= document.getElementById("intro");
setInterval(function(){
    if ($(window).width() >= 600){
        if (video.currentTime > 1){
            $('.title-box').css('opacity','0');
        }
        if (video.currentTime < 1){
            $('.title-box').css('opacity','1');
        }
    }
},500);