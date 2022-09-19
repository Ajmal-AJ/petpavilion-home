// window scroll navbar fixed
$(window).scroll(function () {

    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $(".navbar-scroll").addClass("fixed-top");

    } else {
        $(".navbar-scroll").removeClass("fixed-top");

    }
});

$(window).scroll(function () {

    if ($(this).scrollTop() > 50) {
        $(".headermedialinks").removeClass("d-lg-block");

        $(".headermedialinks").addClass("d-lg-none");
    } else {

        $(".headermedialinks").removeClass("d-lg-none");
        $(".headermedialinks").addClass("d-lg-block");
    }
});

//bannner carousel
$(".bannerslider .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsiveClass: true,
    navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 1,
            nav: true,
            loop: true,
            dot: false,
        }
    }
})

//  product carousel 
$(".product-box .owl-carousel").owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    dots: false,
    responsiveClass: true,
    navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],

    responsive: {
        0: {
            items: 1,
            nav: false,
            autoplay: true,
        },
        576: {
            items: 2,
            nav: true

        },
        600: {
            items: 2,
            nav: true
        },
        1000: {
            items: 3,
            nav: true,
            loop: false,
            dot: false,
        },
        1200: {
            items: 4,
            nav: true,
            loop: false,
            dot: false,
        }
    }
})

//choose section carousel
$(document).ready(function () {
    var owl = $('.choose-us-box .owl-carousel');
    owl.owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        dots: false,
        navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                dots: false,
            },
            600: {
                items: 2,
                nav: true
            },
            1000: {
                items: 3,
                nav: true,
                loop: true,
                dots: false,
            }
        }

    });

});

//blog carousel
$(document).ready(function () {
    var owl = $('.blog-box .owl-carousel');
    owl.owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        items: 1,
        navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 1,
                nav: false,
                dots: false,
            },
            1000: {
                items: 1,
                nav: true,
                loop: true,
                dots: false,
            }
        }

    });

});

// testimonial carousel
$(document).ready(function () {
    var owl = $('.testimonialbx .owl-carousel');
    owl.owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        navText: ['<i class="fa-solid fa-arrow-right-long"></i>', '<i class="fa-solid fa-arrow-left-long"></i>'],
        items: 1,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 1,
                nav: true,
                loop: true,
                dots: false,
            }
        }

    });
});