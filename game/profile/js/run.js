var swiper_normal = new Swiper(".swiper.normal", {
    direction: "vertical",
    slidesPerView: "auto",
    mousewheel: {
        sensitivity: 1,
        releaseOnEdges: true,
    },
    freeMode: true,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        snapOnRelease: false
    },
});

var swiper_mobile = new Swiper(".swiper.mobile", {
    direction: "vertical",
    slidesPerView: "auto",
    freeMode: true,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        mousewheel: true,
        snapOnRelease: false
    },
});

$(".side-link-expand .side-link:first-child").on('click',function(){
    let expand = $(this).parent(".side-link-expand");
    if (expand.hasClass('active'))
    {
        expand.css('height','70px');
        expand.toggleClass("active");
    }
    else {
        expand.css('height','unset');
        expand.toggleClass("active");
    }
    swiper_mobile.update();
})

if ($(window).width() < 930){
    swiper_normal.destroy(true,true);
}

function replace(button,name){
    $('.tag').removeClass('active');
    button.addClass('active');

    $('.replace').addClass('hidden');
    $('.' + name).removeClass('hidden');
    swiper_normal.update();
}

$(".default_option").on('click',function(){
    let parent = $(this).parents('.select_wrap');
    let sibling = $(this).siblings(".select_ul");

    if (parent.hasClass('active'))
    {
        sibling.css('display','none');
        parent.toggleClass("active");
        parent.removeAttr('id');
    }
    else {
        let drop = $('#active-drop');
        if (drop.length){
            drop.removeClass('active');
            drop.children('.select_ul').css('display','none');
            drop.removeAttr('id');
        }
        sibling.css('display','inline-block');
        parent.toggleClass("active");
        parent.attr('id','active-drop');
    }
})

$(".select_ul li").on('click',function(){
    let element = $(this).html();
    $(this).parents('.select_ul').siblings(".default_option").find('li').html(element);
    $(this).parents(".select_ul").css('display','none');
    $(this).parents(".select_ul").parents('.select_wrap').removeClass("active");
    $(this).parents(".select_ul").parents('.select_wrap').removeAttr("id");
})

document.addEventListener("click", (evt) => {
    const down = document.getElementById("active-drop");

    let targetElement = evt.target; // clicked element

    do {
        if (targetElement === down) {
            return;
        }
        targetElement = targetElement.parentNode;
    } while (targetElement);
    let drop = $('#active-drop');
    drop.removeClass('active');
    drop.children('.select_ul').css('display','none');
    drop.removeAttr('id');
});