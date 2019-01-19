// AOS active
AOS.init({
    disable: window.innerWidth < 1024,
    duration: 600,
    easing: 'ease-out',
    once: true
});

// sm Animation
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
