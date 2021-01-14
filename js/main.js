// ---------------------------
//         [ Navbar scroll ]
//  -------------------------------

$(function() {
    var navbar = $('.header-inner');
    $(window).scroll(function() {
        if ($(window).scrollTop() <= 40) {
            navbar.removeClass('navbar-scroll');
        } else {
            navbar.addClass('navbar-scroll');
        }
    });
});

// ---------------------------
//         [ Portfolio isotope ]
//  -------------------------------

(function() {

    'use strict';


    var $gallary = $('.gallary');

    $gallary.isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    $('ul.filters > li').on('click', function(e) {

        e.preventDefault();

        var filter = $(this).attr('data-filter');

        $('ul.filters > li').removeClass('active');
        $(this).addClass('active');

        $gallary.isotope({ filter: filter });

    });

    $('.card').mouseenter(function() {

        $(this).find('.card-head').css({ 'top': '-100%' });
        $(this).find('.card-hover').css({ 'top': '0' });

    }).mouseleave(function() {

        $(this).find('.card-head').css({ 'top': '0' });
        $(this).find('.card-hover').css({ 'top': '100%' });

    });

})(jQuery);

// ---------------------------
//         [ Portfolio Counter up ]
//  -------------------------------

$(".count").counterUp({
    delay: 10,
    time: 3000
});