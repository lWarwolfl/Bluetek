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

var swiper = new Swiper(".swiper", {
    direction: "horizontal",
    effect: "coverflow",
    grabCursor: !0,
    watchSlidesProgress: !0,
    loop: !0,
    loopedSlides: 5,
    slidesPerView: "auto",
    centeredSlides: !0,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    coverflowEffect: {
        rotate: 10,
        stretch: 0,
        depth: 200,
        slideShadows: false,
    },
    on: {
        progress(e) {
            const t = e.slides.length;
            for (let r = 0; r < e.slides.length; r += 1) {
                const o = e.slides[r],
                    s = e.slides[r].progress,
                    i = Math.abs(s);
                let n = 1;
                i > 1 && (n = 0.3 * (i - 1) + 1);
                const l = o.querySelectorAll(".carousel-slider-animate-opacity"),
                    a = s * n * 50 + "%",
                    c = 1 - 0.2 * i,
                    d = t - Math.abs(Math.round(s));
                (o.style.transform = `translateX(${a}) scale(${c})`),
                    (o.style.zIndex = d),
                    (o.style.opacity = i > 3 ? 0 : 1),
                    l.forEach((e) => {
                        e.style.opacity = 1 - i / 3;
                    });
            }
        },
        setTransition(e, t) {
            for (let r = 0; r < e.slides.length; r += 1) {
                const o = e.slides[r],
                    s = o.querySelectorAll(".carousel-slider-animate-opacity");
                (o.style.transitionDuration = `${t}ms`),
                    s.forEach((e) => {
                        e.style.transitionDuration = `${t}ms`;
                    });
            }
        },
    }
});