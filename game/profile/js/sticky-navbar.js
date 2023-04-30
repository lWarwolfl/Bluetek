window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("nav-bar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop + 30;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if ($(window).width() >= 870){
        if (window.pageYOffset >= sticky) {
            setTimeout(
                function() {
                    navbar.classList.add("sticky")
                }, 0
            );
        } else {
            navbar.classList.remove("sticky");
        }
    }
    else {
        navbar.classList.remove("sticky");
    }
}