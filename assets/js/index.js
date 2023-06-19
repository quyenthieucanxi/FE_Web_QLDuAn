var wow = new WOW().init();
// Mean Menu
$(".mean-menu").meanmenu({
    meanScreenWidth: "1199",
});
// Sticky Header
$(window).on("scroll", function() {
    var header = $(".sticky-header");
    // If window scroll down .is-sticky class will added to header
    if($(window).scrollTop() >= 200) {
        header.addClass("is-sticky");
    } else {
        header.removeClass("is-sticky");
    }
});
// Sponsor Slider
$(".sponsor-slider").owlCarousel({
    margin: 30,
    autoplay: true,
    loop: true,
    autoplayTimeout: 3000,
    smartSpeed: 500,
    dots: false,
    nav: false,
    items: 4,
    responsiveClass: true,
    responsive: {
        0: {
            items: 2,
        },

        992: {
            items: 4,
        }
    }
})
// Youtube Popup
$(".youtube-popup").magnificPopup({
    disableOn: 300,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
})
// Testimonial Slider
$(".testimonial-slider").owlCarousel({
    margin: 40,
    autoplayTimeout: 6500,
    smartSpeed: 500,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },

        992: {
            items: 2,
        }
    }
})
$('#myCollapsible').on('hidden.bs.collapse', function () {
    // do something...
  })

