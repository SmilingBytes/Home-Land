// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 60) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
        $('.main_h').addClass('sticky');
    }
});

$('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});

// navigation scroll lijepo radi materem
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

// AOS active
AOS.init({
    disable: window.innerWidth < 1024,
    duration: 600,
    easing: 'ease-out',
    once: true
});

// sm
function makeTween(selector) {
    var $q = $(selector);
    var timeline = new TimelineMax();
    var tween1 = TweenMax.from($q, 1, { opacity: .3, scale: .75 });
    var tween2 = TweenMax.to($q, 1, { opacity: 1, scale: 1 });
    timeline
        .add(tween1)
        .add(tween2);
    return timeline;
}

new ScrollMagic.Scene({ triggerElement: ".s1", triggerHook: .9, reverse: true, duration: '90%' })
    .setTween(makeTween(".s1"))
    .addTo(controller);


new ScrollMagic.Scene({ triggerElement: ".s2", triggerHook: .9, reverse: true, duration: '90%' })
    .setTween(makeTween(".s2"))
    .addTo(controller);

new ScrollMagic.Scene({ triggerElement: ".s3", triggerHook: .9, reverse: true, duration: '85%' })
    .setTween(makeTween(".s3"))
    .addTo(controller);