//display search bar
function fold_menu() {
    let menu = $('#nav-small-container');
    $('#expand-menu').attr('onclick','expand_menu()');
    menu.css('height','0');
    menu.removeClass('display');
}

function expand_menu() {
    let menu = $('#nav-small-container');
    let count = $('#nav-small-container a').length * 50 + 20;
    $('#expand-menu').attr('onclick','fold_menu()');
    $('#nav-small-container .nav-small-link').attr('onclick','fold_menu()');
    menu.css('height',count.toString());
    menu.addClass('display');
}
//hide search bar when user clicked outside of it
document.addEventListener("click", (evt) => {
    const bar = document.getElementById("nav-small-container");
    const button = document.getElementById("expand-menu");
    let targetElement = evt.target; // clicked element

    do {
        if (targetElement === bar || targetElement === button) {
            return;
        }
        targetElement = targetElement.parentNode;
    } while (targetElement);
    let menu = $('#nav-small-container');
    $('#expand-menu').attr('onclick','expand_menu()');
    menu.css('height','0');
    menu.removeClass('display');
});

function fold_menu_mobile() {
    let menu = $('#nav-small-container-mobile');
    $('#expand-menu-mobile').attr('onclick','expand_menu_mobile()');
    menu.css('height','0');
    menu.removeClass('display');
}
function expand_menu_mobile() {
    let menu = $('#nav-small-container-mobile');
    let count = $('#nav-small-container-mobile a').length * 50 + 20;
    $('#expand-menu-mobile').attr('onclick','fold_menu_mobile()');
    $('#nav-small-container-mobile .nav-small-link').attr('onclick','fold_menu_mobile()');
    menu.css('height',count.toString());
    menu.addClass('display');

}
//hide search bar when user clicked outside of it
document.addEventListener("click", (evt) => {
    const bar = document.getElementById("nav-small-container-mobile");
    const button = document.getElementById("expand-menu-mobile");
    let targetElement = evt.target; // clicked element

    do {
        if (targetElement === bar || targetElement === button) {
            return;
        }
        targetElement = targetElement.parentNode;
    } while (targetElement);
    let menu = $('#nav-small-container-mobile');
    menu.css('height','0');
    menu.removeClass('display');
    $('#expand-menu-mobile').attr('onclick','expand_menu_mobile()');
});

function fold_token_mobile() {
    let menu = $('#nav-token-container-mobile');
    $('#expand-token-mobile').attr('onclick','expand_token_mobile()');
    menu.css('height','0');
    menu.removeClass('display2');
}
function expand_token_mobile() {
    let height = 0;
    let items = $('#nav-token-container-mobile div');
    let menu = $('#nav-token-container-mobile');
    $('#expand-token-mobile').attr('onclick','fold_token_mobile()');
    menu.css('height',280);
    menu.addClass('display2');
}
//hide search bar when user clicked outside of it
document.addEventListener("click", (evt) => {
    const bar = document.getElementById("nav-token-container-mobile");
    const button = document.getElementById("expand-token-mobile");
    let targetElement = evt.target; // clicked element

    do {
        if (targetElement === bar || targetElement === button) {
            return;
        }
        targetElement = targetElement.parentNode;
    } while (targetElement);
    let menu = $('#nav-token-container-mobile');
    menu.css('height','0');
    menu.removeClass('display2');
    $('#expand-token-mobile').attr('onclick','expand_token_mobile()');
});


$(window).on('resize', function(){
    let menu = $('#nav-small-container');
    let menu_mobile = $('#nav-small-container-mobile');
    if ($(window).width() >= 985){
        menu.css('height','0');
        menu.removeClass('display');
    }
    if ($(window).width() >= 600){
        menu_mobile.css('height','0');
        menu_mobile.removeClass('display');
    }
});