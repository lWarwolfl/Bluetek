document.addEventListener('DOMContentLoaded', function () {
    $('#mute').on('click', function () {
        let video = $("#intro");
        if (video.prop('muted')) {
            video.prop('muted', false);
            $('#mute .fa-volume-xmark').css('display','none');
            $('#mute .fa-volume-high').css('display','unset');
        } else {
            video.prop('muted', true);
            $('#mute .fa-volume-high').css('display','none');
            $('#mute .fa-volume-xmark').css('display','unset');
        }
    });
});