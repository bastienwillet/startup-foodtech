// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery
//= require jquery_ujs

$(document).ready(function() {


    // TABS

    // Tabs processus

    tab_init();
    $('#tab1-selector').click(function() {tab1_show()} );
    $('#tab2-selector').click(function() {tab2_show()} );
    $('#tab3-selector').click(function() {tab3_show()} );


    // Tabs fonctions

    function tab_init() {
        $('#tab1-content').show();
        $('#tab2-content').hide();
        $('#tab3-content').hide();
        $('#tab1-selector').addClass('tab-selector-selected');
    };

    function tab1_show() {
        $('#tab1-content').fadeIn();
        $('#tab2-content').fadeOut();
        $('#tab3-content').fadeOut();
        $('#tab1-selector').addClass('tab-selector-selected');
        $('#tab2-selector').removeClass('tab-selector-selected');
        $('#tab3-selector').removeClass('tab-selector-selected');
    };

    function tab2_show() {
        $('#tab1-content').fadeOut();
        $('#tab2-content').fadeIn();
        $('#tab3-content').fadeOut();
        $('#tab1-selector').removeClass('tab-selector-selected');
        $('#tab2-selector').addClass('tab-selector-selected');
        $('#tab3-selector').removeClass('tab-selector-selected');
    };

    function tab3_show() {
        $('#tab1-content').fadeOut();
        $('#tab2-content').fadeOut();
        $('#tab3-content').fadeIn();
        $('#tab1-selector').removeClass('tab-selector-selected');
        $('#tab2-selector').removeClass('tab-selector-selected');
        $('#tab3-selector').addClass('tab-selector-selected');
    };


    // CAROUSEL

    // Carousel variables

    var timer = 5000;


    // Carousel processus

    carousel_init();
    carousel_loop();
    $('.carousel-arrow-right').click(function() {next()} );
    $('.carousel-arrow-left').click(function() {previous()} );
    $('#carrousel-dot1').click(function() {photo1_show()} );
    $('#carrousel-dot2').click(function() {photo2_show()} );
    $('#carrousel-dot3').click(function() {photo3_show()} );
    $('#carrousel-dot4').click(function() {photo4_show()} );
    $('#carrousel-dot5').click(function() {photo5_show()} );


    // Carousel fonctions

    function carousel_init() {
        $('#carrousel-photo1').show();
        $('#carrousel-photo2').hide();
        $('#carrousel-photo3').hide();
        $('#carrousel-photo4').hide();
        $('#carrousel-photo5').hide();
        $('#carrousel-dot1').addClass('carousel-dot-selected');
    };

    function carousel_loop() {
        carousel_slideshow ()
        setInterval(carousel_slideshow, timer * 5);
    };

    function carousel_slideshow() {
        photo1_show();
        setTimeout(photo2_show, timer);
        setTimeout(photo3_show, timer * 2);
        setTimeout(photo4_show, timer * 3);
        setTimeout(photo5_show, timer * 4);
    };

    function next() {
        if ($('#carrousel-photo1').is(':visible')) {
            photo2_show();
        }
        else if ($('#carrousel-photo2').is(':visible')) {
            photo3_show();
        }
        else if ($('#carrousel-photo3').is(':visible')) {
            photo4_show();
        }
        else if ($('#carrousel-photo4').is(':visible')) {
            photo5_show();
        }
        else if ($('#carrousel-photo5').is(':visible')) {
            photo1_show();
        };
    };

    function previous() {
        if ($('#carrousel-photo1').is(':visible')) {
            photo5_show();
        }
        else if ($('#carrousel-photo2').is(':visible')) {
            photo1_show();
        }
        else if ($('#carrousel-photo3').is(':visible')) {
            photo2_show();
        }
        else if ($('#carrousel-photo4').is(':visible')) {
            photo3_show();
        }
        else if ($('#carrousel-photo5').is(':visible')) {
            photo4_show();
        };
    };

    function photo1_show() {
        $('#carrousel-photo1').show();
        $('#carrousel-photo2').hide();
        $('#carrousel-photo3').hide();
        $('#carrousel-photo4').hide();
        $('#carrousel-photo5').hide();
        $('#carrousel-dot1').addClass('carousel-dot-selected');
        $('#carrousel-dot2').removeClass('carousel-dot-selected');
        $('#carrousel-dot3').removeClass('carousel-dot-selected');
        $('#carrousel-dot4').removeClass('carousel-dot-selected');
        $('#carrousel-dot5').removeClass('carousel-dot-selected');
    };

    function photo2_show() {
        $('#carrousel-photo1').hide();
        $('#carrousel-photo2').show();
        $('#carrousel-photo3').hide();
        $('#carrousel-photo4').hide();
        $('#carrousel-photo5').hide();
        $('#carrousel-dot1').removeClass('carousel-dot-selected');
        $('#carrousel-dot2').addClass('carousel-dot-selected');
        $('#carrousel-dot3').removeClass('carousel-dot-selected');
        $('#carrousel-dot4').removeClass('carousel-dot-selected');
        $('#carrousel-dot5').removeClass('carousel-dot-selected');
    };

    function photo3_show() {
        $('#carrousel-photo1').hide();
        $('#carrousel-photo2').hide();
        $('#carrousel-photo3').show();
        $('#carrousel-photo4').hide();
        $('#carrousel-photo5').hide();
        $('#carrousel-dot1').removeClass('carousel-dot-selected');
        $('#carrousel-dot2').removeClass('carousel-dot-selected');
        $('#carrousel-dot3').addClass('carousel-dot-selected');
        $('#carrousel-dot4').removeClass('carousel-dot-selected');
        $('#carrousel-dot5').removeClass('carousel-dot-selected');
    };

    function photo4_show() {
        $('#carrousel-photo1').hide();
        $('#carrousel-photo2').hide();
        $('#carrousel-photo3').hide();
        $('#carrousel-photo4').show();
        $('#carrousel-photo5').hide();
        $('#carrousel-dot1').removeClass('carousel-dot-selected');
        $('#carrousel-dot2').removeClass('carousel-dot-selected');
        $('#carrousel-dot3').removeClass('carousel-dot-selected');
        $('#carrousel-dot4').addClass('carousel-dot-selected');
        $('#carrousel-dot5').removeClass('carousel-dot-selected');
    };

    function photo5_show() {
        $('#carrousel-photo1').hide();
        $('#carrousel-photo2').hide();
        $('#carrousel-photo3').hide();
        $('#carrousel-photo4').hide();
        $('#carrousel-photo5').show();
        $('#carrousel-dot1').removeClass('carousel-dot-selected');
        $('#carrousel-dot2').removeClass('carousel-dot-selected');
        $('#carrousel-dot3').removeClass('carousel-dot-selected');
        $('#carrousel-dot4').removeClass('carousel-dot-selected');
        $('#carrousel-dot5').addClass('carousel-dot-selected');
    };
});