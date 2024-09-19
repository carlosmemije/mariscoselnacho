$(document).ready(function () {
    function setVideoSize() {
        const video = $('#video');
        video.css({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    function openTab(e, id) {
        $('.tab-content').hide();
        $('#' + id).show();
        $('.tab-link').removeClass('active');
        $(e.currentTarget).addClass('active');
    }

    // Show page content based on menu link
    $('.nav-link').click(function (e) {
        e.preventDefault();
        $('.page-content').removeClass('active');
        $($(this).attr('href')).addClass('active');
    });

    // Handle tab navigation inside each page
    $('.tab-link').click(function (e) {
        e.preventDefault();
        openTab(e, $(this).data('id'));
    });

    // Video control button
    $('#video-control').click(function () {
        const video = $('#video').get(0);
        if (video.paused) {
            video.play();
            $(this).removeClass('fa-play').addClass('fa-pause');
        } else {
            video.pause();
            $(this).removeClass('fa-pause').addClass('fa-play');
        }
    });

    // Adjust video size on window resize
    setVideoSize();
    $(window).resize(setVideoSize);
});
