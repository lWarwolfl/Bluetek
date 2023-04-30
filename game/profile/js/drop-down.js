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