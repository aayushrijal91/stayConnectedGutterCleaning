// AOS.init({ duration: 1500 });

document.querySelectorAll('a[href="#form"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

$(window).on('scroll', () => {
    if ($(this).scrollTop() >= 600) {
        $('#return-to-top').fadeIn(300);
    } else {
        $('#return-to-top').fadeOut(300);
    }
});

$('#return-to-top').on('click', () => {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
});

$('.about-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
});

$('.what-we-do-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
});

$('.why-us-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
});

$('.testimonials-slider').slick({
    slidesToShow: 2,
    slidesToScroll:1,
    arrows: false,
    centerMode: true,
    centerPadding: "400px",
    autoplay: true,
})