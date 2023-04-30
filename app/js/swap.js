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

$(".more-button").on('click',function(){
    let hidden = $(this).siblings('.detail.hide');
    let button = $(this);
    if (!button.hasClass('active')){
        hidden.css({'height':'30px','margin-bottom':'5px'});
        button.addClass('active');
    }
    else {
        hidden.css({'height':'0','margin-bottom':'0'});
        button.removeClass('active');
    }
})

$(".expand-button").on('click',function(){
    let hidden = $(this).siblings('.detail.farm.hide');
    let button = $(this);
    if (!button.hasClass('active')){
        hidden.css({'height':'56px','margin-top':'10px','margin-bottom':'5px','padding':'6px 0 6px 10px','border':'3px dashed var(--first-color-light)'});
        button.addClass('active');
    }
    else {
        hidden.css({'height':'0','margin-top':'0','margin-bottom':'0','padding':'0','border':'none'});
        button.removeClass('active');
    }
})

$(".setting-button").on('click',function(){
    let hidden = $('.setting-box .detail.hide');
    let button = $(".setting-button");
    let box = $('.setting-box');
    if (!button.hasClass('active')){
        box.removeClass('hidden');
        button.addClass('active');
    }
    else {
        box.addClass('hidden');
        button.removeClass('active');
    }
})

document.addEventListener("click", (evt) => {
    const setting = document.getElementById("setting");
    const button = document.getElementById("setting-button");

    let targetElement = evt.target; // clicked element

    do {
        if (targetElement === setting || targetElement === button) {
            return;
        }
        targetElement = targetElement.parentNode;
    } while (targetElement);
    $('#setting').addClass('hidden');
    $('#setting-button').removeClass('active');
});

$(".reverse-button").on('click',function(){
    let div1 = $('.first-select');
    let div2 = $('.second-select');

    let tdiv1 = div1.clone();
    let tdiv2 = div2.clone();

    if(!div2.is(':empty')){
        tdiv2.css('z-index','2000');
        tdiv1.css('z-index','1000');
        div1.replaceWith(tdiv2);
        div2.replaceWith(tdiv1);

        $(".default_option").on('click',function(){
            let parent = $(this).parents('.select_wrap');
            let sibling = $(this).siblings(".select_ul");
            if (parent.hasClass('active'))
            {
                sibling.css('display','none');
                parent.toggleClass("active");
            }
            else {
                sibling.css('display','inline-block');
                parent.toggleClass("active");
            }
        })
    }
})

$(".swap-form").on('click',function(){
    $('.add-pool').toggleClass('hidden');
    $('.show-pool').toggleClass('hidden');
})
