jQuery(function($) {

    'use strict';

    // -------------------------------------------------------------
    // Preloader
    // -------------------------------------------------------------
    (function() {
        $('#status').fadeOut();
        $('#preloader').delay(200).fadeOut('slow');
    }());


    $('p:empty').remove();
    // ------------------------------------------------------------------
    // sticky menu
    // ------------------------------------------------------------------
    $(window).scroll(function() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("sticky-nav");
        } else {
            $(".navbar-fixed-top").removeClass("sticky-nav");
        }
    });


    // sidebar




    // -------------------------------------------------------------
    // mobile menu
    // -------------------------------------------------------------
    (function() {
        $('button.navbar-toggle').ucOffCanvasMenu({
            documentWrapper: '#main-wrapper',
            contentWrapper: '.content-wrapper',
            position: 'uc-offcanvas-left', // class name
            // opener         : 'st-menu-open',            // class name
            effect: 'slide-along', // class name
            closeButton: '#uc-mobile-menu-close-btn',
            menuWrapper: '.uc-mobile-menu', // class name below-pusher
            documentPusher: '.uc-mobile-menu-pusher'
        });
    }());




    // -------------------------------------------------------------
    // tooltip
    // -------------------------------------------------------------

    (function() {

        $('[data-toggle="tooltip"]').tooltip()

    }());




    // ------------------------------------------------------------------
    // jQuery for back to Top
    // ------------------------------------------------------------------
    (function() {

        $('body').append('<div id="toTop"><i class="fa fa-angle-up"></i></div>');

        $(window).scroll(function() {
            if ($(this).scrollTop() != 0) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        });

        $('#toTop').on('click', function() {
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });

    }());


    // -------------------------------------------------------------
    // testimonialSlider
    // -------------------------------------------------------------
    (function() {

        $('.testimonialSlider').flexslider({
            animation: "slide",
            controlNav: "thumbnails",
            directionNav: false
        })

        // Navigation
        $('.prev').on('click', function() {
            $('.testimonialSlider').flexslider('prev')
            return false;
        })

        $('.next').on('click', function() {
            $('.testimonialSlider').flexslider('next')
            return false;
        })
    }());


    // -------------------------------------------------------------
    // Google Map
    // -------------------------------------------------------------

    (function() {

        if ($('#googleMap').length > 0) {

            //set your google maps parameters
            var $latitude = 48.869319, //If you unable to find latitude and longitude of your address. Please visit http://www.latlong.net/convert-address-to-lat-long.html you can easily generate.
                $longitude = 2.354261,
                $map_zoom = 16; /* ZOOM SETTING */

            //google map custom marker icon
            var $marker_url = 'img/google-map-marker.png';

            //we define here the style of the map
            var style = [{
                "stylers": [{
                    "hue": "#000"
                }, {
                    "saturation": -100
                }, {
                    "gamma": 2.15
                }, {
                    "lightness": 12
                }]
            }];

            //set google map options
            var map_options = {
                    center: new google.maps.LatLng($latitude, $longitude),
                    zoom: $map_zoom,
                    panControl: false,
                    zoomControl: false,
                    mapTypeControl: false,
                    streetViewControl: false,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    scrollwheel: false,
                    styles: style,
                }
                //initialize the map
            var map = new google.maps.Map(document.getElementById('googleMap'), map_options);
            //add a custom marker to the map
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng($latitude, $longitude),
                map: map,
                visible: true,
                icon: $marker_url
            });
        }
    }());


}); // JQuery end


$(document).on('click', '.m-menu .dropdown-menu', function(e) {
    e.stopPropagation()
})

//===================================================


/*!
 * Bootstrap 4 multi dropdown navbar ( https://bootstrapthemes.co/demo/resource/bootstrap-4-multi-dropdown-navbar/ )
 * Copyright 2017.
 * Licensed under the GPL license
 */


$(document).ready(function() {
    $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
        var $el = $(this);
        var $parent = $(this).offsetParent(".dropdown-menu");
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');

        $(this).parent("li").toggleClass('show');

        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
            $('.dropdown-menu .show').removeClass("show");
        });

        if (!$parent.parent().hasClass('navbar-nav')) {
            $el.next().css({ "top": $el[0].offsetTop, "left": $parent.outerWidth() - 4 });
        }

        return false;
    });
});


// scrolling Effect================


var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);

        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
            $element.addClass('in-view');
        } else {
            $element.removeClass('in-view');
        }
    });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll', check_if_in_view);


// drop down 
// $(document).ready(function() {
//     $(".dropdown").hover(
//         function() {
//             $('.dropdown-menu', this).stop(true, true).slideDown("fast");
//             $(this).toggleClass('open');
//         },
//         function() {
//             $('.dropdown-menu', this).stop(true, true).slideUp("fast");
//             $(this).toggleClass('open');
//         }
//     );
    
// });

$(document).ready(function() {
    $(".modal a").not(".dropdown-toggle").on("click", function() {
        $(".modal").modal("hide");
    });
});

// sildebar
$(document).ready(function() {


    $('.dismiss, .overlay').on('click', function() {


        $('#sidebar0').removeClass('active');
        $('#sidebar1').removeClass('active');
        $('#sidebar2').removeClass('active');
        $('#sidebar3').removeClass('active');
        $('#sidebar4').removeClass('active');
        $('#sidebar5').removeClass('active');
        $('#sidebar6').removeClass('active');

        $('#sidebar7').removeClass('active');
        $('#sidebar8').removeClass('active');
        $('#sidebar9').removeClass('active');
        $('#sidebar10').removeClass('active');
        $('#sidebar11').removeClass('active');
        $('#sidebar12').removeClass('active');
        $('#sidebar13').removeClass('active');
        $('#sidebar14').removeClass('active');
        $('#sidebar15').removeClass('active');
        $('#sidebar16').removeClass('active');
        $('#sidebar17').removeClass('active');
        $('#sidebar41').removeClass('active');
        $('#sidebar42').removeClass('active');


        $('.overlay').hide();



    });

    $('#sidebarCollapse0').on('click', function() {
        $('#sidebar0').addClass('active');
        $('.overlay').show();

        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    $('#sidebarCollapse1').on('click', function() {
        $('#sidebar1').addClass('active');
        $('.overlay').show();

        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    $('#sidebarCollapse2').on('click', function() {
        $('#sidebar2').addClass('active');
        $('.overlay').show();

        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    $('#sidebarCollapse3').on('click', function() {
        $('#sidebar3').addClass('active');
        $('.overlay').show();

        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    $('#sidebarCollapse4').on('click', function() {
        $('#sidebar4').addClass('active');
        $('.overlay').show();

        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    $('#sidebarCollapse5').on('click', function() {
        $('#sidebar5').addClass('active');
        $('.overlay').show();

        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    $('#sidebarCollapse6').on('click', function() {
        $('#sidebar6').addClass('active');
        $('.overlay').show();

        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });


    $('#sidebarCollapse7').on('click', function() {
        $('#sidebar7').addClass('active');
        $('.overlay').show();

        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
    $('#sidebarCollapse8').on('click', function() {
        $('#sidebar811').addClass('active');
        $('.overlay').show();

        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
    $('#sidebarCollapse9').on('click', function() {
        $('#sidebar9').addClass('active');
        $('.overlay').show();

        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
    $('#sidebarCollapse10').on('click', function() {
        $('#sidebar10').addClass('active');
        $('.overlay').show();

        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
    $('#sidebarCollapse11').on('click', function() {
        $('#sidebar11').addClass('active');
        $('.overlay').show();

        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
    $('#sidebarCollapse12').on('click', function() {
        $('#sidebar12').addClass('active');
        $('.overlay').show();

        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
    $('#sidebarCollapse13').on('click', function() {
        $('#sidebar13').addClass('active');
        $('.overlay').show();

        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
    $('#sidebarCollapse14').on('click', function() {
        $('#sidebar14').addClass('active');
        $('.overlay').show();

        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
    $('#sidebarCollapse15').on('click', function() {
        $('#sidebar15').addClass('active');
        $('.overlay').show();

        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    $('#sidebarCollapse16').on('click', function() {
        $('#sidebar16').addClass('active');
        $('.overlay').show();

        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    $('#sidebarCollapse17').on('click', function() {
        $('#sidebar17').addClass('active');
        $('.overlay').show();

        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    $('#sidebarCollapse41').on('click', function() {
        $('#sidebar41').addClass('active');
        $('.overlay').show();

        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    $('#sidebarCollapse42').on('click', function() {
        $('#sidebar42').addClass('active');
        $('.overlay').show();

        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    $('.myli').on('click', function() {
        $('.myli').removeClass('myactive');
        $(this).addClass('myactive');

    });

    $('#link-1').on('click', function() {
        $('#nav-1').show();
        $('#nav-2').hide();
        $('#nav-3').hide();
        $('#nav-4').hide();
    });
    $('#link-2').on('click', function() {
        $('#nav-1').hide();
        $('#nav-2').show();
        $('#nav-3').hide();
        $('#nav-4').hide();
    });
    $('#link-3').on('click', function() {
        $('#nav-1').hide();
        $('#nav-2').hide();
        $('#nav-3').show();
        $('#nav-4').hide();
    });
    $('#link-4').on('click', function() {
        $('#nav-1').hide();
        $('#nav-2').hide();
        $('#nav-3').hide();
        $('#nav-4').show();
    });

    $('.navbar-btn').on('click', function() {


        $('.dismiss').addClass('dismiss1');

    });


    $('.dismiss').on('click', function() {


        $(this).removeClass('dismiss1');
        $('.mydivclass').removeClass('mydivclass2 ,mydivclass2 p');

    });
    $('.overlay').on('click', function() {

        $('.mydivclass').removeClass('mydivclass2 ,mydivclass2 p');
        $('.dismiss').removeClass('dismiss1');

    });


    $('.mydivclass').on('click', function() {


        $(this).addClass('mydivclass2 ,mydivclass2 p');


        $('a[aria-expanded=true]').attr('aria-expanded', 'false');

    });


});



// -----------------30 March---our services------------



/**
 * Template Name: Eterna - v2.0.0
 * Template URL: https://bootstrapmade.com/eterna-free-multipurpose-bootstrap-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
!(function($) {
    "use strict";

    // Smooth scroll for the navigation menu and links with .scrollto classes
    $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            e.preventDefault();
            var target = $(this.hash);
            if (target.length) {

                var scrollto = target.offset().top;
                var scrolled = 20;

                if ($('#header').length) {
                    scrollto -= $('#header').outerHeight()

                    if (!$('#header').hasClass('header-scrolled')) {
                        scrollto += scrolled;
                    }
                }

                if ($(this).attr("href") == '#header') {
                    scrollto = 0;
                }

                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');

                if ($(this).parents('.nav-menu, .mobile-nav').length) {
                    $('.nav-menu .active, .mobile-nav .active').removeClass('active');
                    $(this).closest('li').addClass('active');
                }

                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
                    $('.mobile-nav-overly').fadeOut();
                }
                return false;
            }
        }
    });

    // Mobile Navigation
    if ($('.nav-menu').length) {
        var $mobile_nav = $('.nav-menu').clone().prop({
            class: 'mobile-nav d-lg-none'
        });
        $('body').append($mobile_nav);
        $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
        $('body').append('<div class="mobile-nav-overly"></div>');

        $(document).on('click', '.mobile-nav-toggle', function(e) {
            $('body').toggleClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            $('.mobile-nav-overly').toggle();
        });

        $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
            e.preventDefault();
            $(this).next().slideToggle(300);
            $(this).parent().toggleClass('active');
        });

        $(document).click(function(e) {
            var container = $(".mobile-nav, .mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
                    $('.mobile-nav-overly').fadeOut();
                }
            }
        });
    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
        $(".mobile-nav, .mobile-nav-toggle").hide();
    }

    // Stick the header at top on scroll
    $("#header").sticky({
        topSpacing: 0,
        zIndex: '50'
    });

    // Real view height for mobile devices
    if (window.matchMedia("(max-width: 767px)").matches) {
        $('#hero').css({
            height: $(window).height()
        });
    }

    // Intro carousel
    var heroCarousel = $("#heroCarousel");
    var heroCarouselIndicators = $("#hero-carousel-indicators");
    heroCarousel.find(".carousel-inner").children(".carousel-item").each(function(index) {
        (index === 0) ?
        heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "' class='active'></li>"):
            heroCarouselIndicators.append("<li data-target='#heroCarousel' data-slide-to='" + index + "'></li>");

    });

    heroCarousel.on('slid.bs.carousel', function(e) {
        $(this).find('h2').addClass('animated fadeInDown');
        $(this).find('p').addClass('animated fadeInUp');
        $(this).find('.btn-get-started').addClass('animated fadeInUp');
    });

    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });

    // Clients carousel (uses the Owl Carousel library)
    $(".clients-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 4
            },
            900: {
                items: 6
            }
        }
    });

    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1000
    });

    // Skills section
    $('.skills-content').waypoint(function() {
        $('.progress .progress-bar').each(function() {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {
        offset: '80%'
    });

    // Porfolio isotope and filter
    $(window).on('load', function() {
        var portfolioIsotope = $('.portfolio-container').isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });

        $('#portfolio-flters li').on('click', function() {
            $("#portfolio-flters li").removeClass('filter-active');
            $(this).addClass('filter-active');

            portfolioIsotope.isotope({
                filter: $(this).data('filter')
            });
        });

        // Initiate venobox (lightbox feature used in portofilo)
        $(document).ready(function() {
            $('.venobox').venobox();
        });
    });

    // Portfolio details carousel
    $(".portfolio-details-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        items: 1
    });
//add active class for mobile menu
     

})(jQuery);


// --------------------------09 april-------------------