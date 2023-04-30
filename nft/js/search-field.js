//display search bar
function expand_search() {
    $('#expand-search svg').attr({'width':'25','height':'25'});
    setTimeout(function (){
        $('.nav-link-container').css('width','0');
        $('#search-bar-closed').addClass('display');
    },100);
}
//hide search bar when user clicked outside of it
document.addEventListener("click", (evt) => {
    const bar = document.getElementById("search-bar-closed");
    const button = document.getElementById("expand-search");
    let targetElement = evt.target; // clicked element

    do {
        if (targetElement === bar || targetElement === button) {
            return;
        }
        targetElement = targetElement.parentNode;
    } while (targetElement);
    $('#search-bar-closed').removeClass('display');
    $('.nav-link-container.normal').css('width','unset');
    setTimeout(function (){
        $('#expand-search svg').attr({'width':'30','height':'30'});
    },250);
});

$(window).on('resize', function(){
    if ($(window).width() >= 1150){
        $('#search-bar-closed').removeClass('display');
        $('.nav-link-container.normal').css('width','unset');
        $('#expand-search svg').attr({'width':'30','height':'30'});
    }
});

function expand_search_mobile() {
    $('.nav-mobile-link').css('opacity','0');
    $('#search-bar-mobile').addClass('display');
}
//hide search bar when user clicked outside of it
document.addEventListener("click", (evt) => {
    const bar = document.getElementById("search-bar-mobile");
    const button = document.getElementById("expand-search-mobile");
    let targetElement = evt.target; // clicked element

    do {
        if (targetElement === bar || targetElement === button) {
            return;
        }
        targetElement = targetElement.parentNode;
    } while (targetElement);
    $('.nav-mobile-link').css('opacity','1');
    $('#search-bar-mobile').removeClass('display');
});

$(window).on('resize', function(){
    if ($(window).width() >= 600){
        $('.nav-mobile-link').css('opacity','1');
        $('#search-bar-mobile').removeClass('display');
    }
});