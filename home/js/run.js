$('.swiper-slide').each(function (){
    let width = 0;
    let height = 0;
    $(this).children('.data').each(function (){
        width += $(this).outerWidth(true);
    });
    height = $(this).children('.data:first-child').outerHeight(true);
    $(this).css({'width': width + 'px','height': height + 'px'});
});

$(window).on('resize', function(){
    $('.swiper-slide').each(function (){
        let width = 0;
        let height = 0;
        $(this).children('.data').each(function (){
            width += $(this).outerWidth(true);
        });
        height = $(this).children('.data:first-child').outerHeight(true) + 20;
        $(this).css({'width': width + 'px','height': height + 'px'});
    });
});

var swiper = new Swiper(".road-map-container", {
    direction: "horizontal",
    slidesPerView: "auto",
    freeMode: true,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        snapOnRelease: false
    }
});

Chart.defaults.font.size = 16;
Chart.defaults.font.family = "sans-serif";
Chart.defaults.font.weight = 500;
const ctx = document.getElementById('token-chart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Team (15%)', 'Play-To-Earn (8%)', 'Ecosystem (12%)', 'Pre Sale (10%)', 'Public Sale (10%)', 'Burning Event (45%)'],
        datasets: [{
            label: 'Distribution',
            data: [150000000000000, 80000000000000, 120000000000000, 100000000000000, 100000000000000, 450000000000000],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderColor: [
                'transparent',
            ],
        }]
    },
    options: {
        responsive: true,
        datasets: {
            doughnut:{
                spacing:30,
                weight:0.1,
                borderRadius:5,
            }
        },
        plugins: {
            legend: false
        }
    }
});

function update() {
    myChart.update();
}

let lazyLoadInstance = new LazyLoad({
    // Your custom settings go here
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