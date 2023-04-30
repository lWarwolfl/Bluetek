var swiper_normal = new Swiper(".swiper.normal", {
    direction: "horizontal",
    slidesPerView: "auto",
    freeMode: true,
    breakpoints: {
        0:{
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
                snapOnRelease: false
            }
        },
        1400:{
            scrollbar: false
        }
    }
});

var swiper = new Swiper(".swiper", {
    direction: "horizontal",
    slidesPerView: "auto",
    freeMode: true,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        snapOnRelease: false
    }
});

setTimeout(function (){
    swiper_normal.update();
    swiper.update();
},1000);

setTimeout(function (){
    $('.swiper-slide').each(function (){
        let width = 0;
        let tag_slide = $('.swiper-slide.tags');
        let collect_slide = $('.swiper-slide.collect');
        if ($(window).width() <= 600){
            $(this).children('.all').each(function (){
                width += $(this).outerWidth(true);
            });
        }
        else {
            $(this).children('.data').each(function (){
                width += $(this).outerWidth(true);
            });
        }
        $(this).css({'width': width + 'px'});
        if ($(window).width() <= 600){
            $('.swiper.mobile .swiper-slide').css({'width':'calc(100vw - 40px)','height':'min-content'});
        }
        tag_slide.css('width',tag_slide.outerWidth(true) + 15 + 'px');
        collect_slide.css('width',collect_slide.outerWidth(true) + 3.5 + 'px');
    });
},100);

$(window).on('load',function (){
    if ($(window).width() <= 600){
        $('.swiper.mobile .swiper-scrollbar').remove();
    }
});

/*$(window).on('resize', function(){
    $('.swiper-slide').each(function (){
        let width = 0;
        let height = 0;
        if ($(window).width() <= 600){
            $(this).children('.all').each(function (){
                width += $(this).outerWidth();
            });
        }
        else {
            $(this).children('.data').each(function (){
                width += $(this).outerWidth(true);
            });
        }
        height = $(this).children('.data:first-child').outerHeight(true) + 20;
        $(this).css({'width': width + 'px','height': height + 'px'});
    });
});*/