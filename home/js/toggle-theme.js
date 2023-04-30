let dark_icon = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" viewBox="0 0 38.5 38.5">\n' +
    '  <defs>\n' +
    '    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">\n' +
    '      <stop offset="0" stop-color="#2524ff"/>\n' +
    '      <stop offset="1" stop-color="#dc25f9"/>\n' +
    '    </linearGradient>\n' +
    '  </defs>\n' +
    '  <path id="Path_10" data-name="Path 10" d="M16.625,8.369a15.845,15.845,0,0,0,15.25,20.084,15.722,15.722,0,0,0,4.256-.577A14.976,14.976,0,1,1,16.625,8.369ZM22.25,3A19.25,19.25,0,1,0,41.5,22.25a21.65,21.65,0,0,0-.214-2.909A11.56,11.56,0,1,1,25.159,3.214,21.649,21.649,0,0,0,22.25,3Z" transform="translate(-3 -3)" fill="url(#linear-gradient)"/>\n' +
    '</svg>\n';

let light_icon = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="30" height="30" viewBox="0 0 46.43 46.43">\n' +
    '            <defs>\n' +
    '                <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">\n' +
    '                    <stop offset="0" stop-color="#2524ff"/>\n' +
    '                    <stop offset="1" stop-color="#dc25f9"/>\n' +
    '                </linearGradient>\n' +
    '            </defs>\n' +
    '            <path id="Path_2" data-name="Path 2" d="M24.215,17.884a6.331,6.331,0,1,1-6.331,6.331,6.35,6.35,0,0,1,6.331-6.331m0-4.221A10.552,10.552,0,1,0,34.767,24.215,10.556,10.556,0,0,0,24.215,13.663ZM3.11,26.326H7.331a2.11,2.11,0,0,0,0-4.221H3.11a2.11,2.11,0,0,0,0,4.221Zm37.988,0H45.32a2.11,2.11,0,0,0,0-4.221H41.1a2.11,2.11,0,1,0,0,4.221ZM22.1,3.11V7.331a2.11,2.11,0,0,0,4.221,0V3.11a2.11,2.11,0,0,0-4.221,0Zm0,37.988V45.32a2.11,2.11,0,0,0,4.221,0V41.1a2.11,2.11,0,1,0-4.221,0ZM11.531,8.555a2.1,2.1,0,0,0-2.976,2.976l2.237,2.237a2.1,2.1,0,0,0,2.976-2.976ZM37.638,34.662a2.1,2.1,0,0,0-2.976,2.976L36.9,39.875A2.1,2.1,0,0,0,39.875,36.9Zm2.237-23.131A2.1,2.1,0,0,0,36.9,8.555l-2.237,2.237a2.1,2.1,0,0,0,2.976,2.976ZM13.768,37.638a2.1,2.1,0,1,0-2.976-2.976L8.555,36.9a2.1,2.1,0,0,0,2.976,2.976Z" transform="translate(-1 -1)" fill="url(#linear-gradient)"/>\n' +
    '        </svg>';

$(window).on('load',function (){
    let body = $('body');

    let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;
    let toggle_button = $('#toggle-theme');
    let toggle_button_sec = $('#toggle-theme-mobile');
    let toggle_icon = $('#toggle-theme svg');
    let toggle_icon_sec = $('#toggle-theme-mobile svg');

    //set preferred theme
    if (!localStorage.getItem('theme')){
        if (matched){
            localStorage.setItem('theme','dark');
        }
        else{
            localStorage.setItem('theme','light');
        }
    }

    //apply preferred theme
    if(matched && (localStorage.getItem('theme') === 'dark')){
        body.addClass('dark');
        toggle_icon.replaceWith(dark_icon);
        toggle_icon_sec.replaceWith(dark_icon);
        toggle_button.addClass('dark');
        toggle_button_sec.addClass('dark');
        Chart.defaults.color = "#FDFDFD";
    }
    else{
        body.addClass('light');
        toggle_icon.replaceWith(light_icon);
        toggle_icon_sec.replaceWith(light_icon);
        toggle_button.addClass('light');
        toggle_button_sec.addClass('light');
        Chart.defaults.color = "#1E1E1E";
    }

    body.removeClass('hidden');

    let size = 0;
    if ($(window).width() >= 600){
        size = 7;
    }
    else {
        size = 5;
    }
    particlesJS("body", {
            "particles": {"number": {"value":80,"density":{"enable":true,"value_area":800}},
                "color":{"value":["#706FFE","#E758FE"]},
                "shape":{"type":"circle",
                    "stroke":{"width":0,"color":"#ffffff"},
                    "polygon":{"nb_sides":5},
                    "image":{"src":"img/github.svg","width":100,"height":100}},
                "opacity":{"value":0.65,"random":true,"anim":{"enable":true,"speed":0.1,"opacity_min":0.5,"sync":false}},
                "size":{"value":size,"random":true,"anim":{"enable":true,"speed":0.3,"size_min":2,"sync":false}},
                "line_linked":{"enable":false,"distance":50,"color":"#706FFE","opacity":0.4,"width":2},
                "move":{"enable":true,"speed":0.5,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,
                    "attract":{"enable":false,"rotateX":600,"rotateY":600}}},
            "interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"bubble"},"onclick":{"enable":false,"mode":"repulse"},
                    "resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},
                    "bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},
                    "push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true
        }
    );
});

//toggle between dark and light theme
function toggle_theme(){
    let toggle_button = $('#toggle-theme');
    let toggle_icon = $('#toggle-theme svg');
    let toggle_icon_sec = $('#toggle-theme-mobile svg');
    //let mobile_toggle_icon = $('#mobile-toggle-theme .icon');
    let body = $('body');

    if (toggle_button.hasClass('light')){
        body.removeClass('light');
        body.addClass('dark');
        toggle_icon.replaceWith(dark_icon);
        toggle_icon_sec.replaceWith(dark_icon);
        toggle_button.removeClass('light');
        toggle_button.addClass('dark');

        localStorage.setItem('theme','dark');
        Chart.defaults.color = "#FDFDFD";
    }

    else if (toggle_button.hasClass('dark')){
        body.removeClass('dark');
        body.addClass('light');
        toggle_icon.replaceWith(light_icon);
        toggle_icon_sec.replaceWith(light_icon);
        toggle_button.removeClass('dark');
        toggle_button.addClass('light');

        localStorage.setItem('theme','light');
        Chart.defaults.color = "#1E1E1E";
    }

    update();
}

function toggle_theme_mobile(){
    let toggle_button = $('#toggle-theme-mobile');
    let toggle_icon = $('#toggle-theme-mobile svg');
    let toggle_icon_sec = $('#toggle-theme svg');
    //let mobile_toggle_icon = $('#mobile-toggle-theme .icon');
    let body = $('body');

    if (toggle_button.hasClass('light')){
        body.removeClass('light');
        body.addClass('dark');
        toggle_icon.replaceWith(dark_icon);
        toggle_icon_sec.replaceWith(dark_icon);
        toggle_button.removeClass('light');
        toggle_button.addClass('dark');

        localStorage.setItem('theme','dark');
        Chart.defaults.color = "#FDFDFD";
    }

    else if (toggle_button.hasClass('dark')){
        body.removeClass('dark');
        body.addClass('light');
        toggle_icon.replaceWith(light_icon);
        toggle_icon_sec.replaceWith(light_icon);
        toggle_button.removeClass('dark');
        toggle_button.addClass('light');

        localStorage.setItem('theme','light');
        Chart.defaults.color = "#1E1E1E";
    }

    update();
}