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

$('.rating-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 540,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                autoplay: true,
                centerPadding: "50px"
            }
        }
    ]
});

$('.about-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 540,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: "20px"
            }
        }
    ]
});

$('.what-we-do-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 540,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                centerMode: true,
                centerPadding: "20px"
            }
        }
    ]
});

$('.why-us-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 540,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                centerMode: true,
                centerPadding: "15px"
            }
        }
    ]
});

$('.testimonials-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "400px",
    autoplay: true,
    responsive: [
        {
            breakpoint: 540,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                centerMode: true,
                centerPadding: "15px"
            }
        }
    ]
});