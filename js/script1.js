$(document).ready(function() {


    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 52
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });


    smoothScroll.init({
        speed: 2000,
        easing: 'easeInOutCubic',
        offset: 0,
        updateURL: true,
        callbackBefore: function(toggle, anchor) {},
        callbackAfter: function(toggle, anchor) {}
    });




});