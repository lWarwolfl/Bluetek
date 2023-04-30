window.onload = function (){
    let elements;
    let windowHeight;

    let lastScrollTop = 0;
    $(window).on('scroll',function(event){
        let st = $(this).scrollTop();
        if (st > lastScrollTop){
            for (let i = 0; i < elements.length; i++) {
                let element = elements[i];
                let positionFromTop = elements[i].getBoundingClientRect().top;
                if (positionFromTop - windowHeight <= -100) {
                    element.classList.add('fade');
                }
            }
        } else {
            for (let i = 0; i < elements.length; i++) {
                let element = elements[i];
                let positionFromTop = elements[i].getBoundingClientRect().top;
                if (positionFromTop - windowHeight >= -100) {
                    element.classList.remove('fade');
                }
            }
        }
        lastScrollTop = st;
    });

    function init() {
        elements = $(".anim");
        windowHeight = window.innerHeight;
    }
    window.addEventListener('resize', init);

    init();
}