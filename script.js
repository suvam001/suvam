// Smooth Scrolling
$('.nav-button').on('click', function (event) {
    event.preventDefault();
    var target = $(this.getAttribute('href'));
    $('html, body').stop().animate({
        scrollTop: target.offset().top
    }, 1000);
});

// Custom Cursor
$(document).mousemove(function (e) {
    $('#custom-cursor').css({
        left: e.pageX,
        top: e.pageY
    });
});

// Progress Bars for Skills
$('.progress-bar').each(function () {
    var value = $(this).data('value');
    $(this).append('<div class="progress-bar-fill"></div>');
    $(this).find('.progress-bar-fill').animate({ width: value + '%' }, 1000);
});
