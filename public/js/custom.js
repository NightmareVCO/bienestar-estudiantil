// public/js/custom.js

(function($) {
  'use strict';

  // MeanMenu initialization
  function initMeanMenu() {
    if (typeof $.fn.meanmenu !== 'function') {
      console.error('MeanMenu plugin no está disponible.');
      return;
    }
    $('.mean-menu').meanmenu({
      meanScreenWidth: '991',
      meanMenuContainer: '.mobile-responsive-menu'
    });
  }

  // Inicializa al cargar la página
  document.addEventListener('DOMContentLoaded', initMeanMenu);

  // Re-inicializa tras cada transición de ClientRouter
  document.addEventListener('astro:page-load', initMeanMenu);


  // ——— El resto de tu código custom ———

  // Sticky, Go To Top JS
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 150) {
      $('.navbar-area').addClass('is-sticky');
    } else {
      $('.navbar-area').removeClass('is-sticky');
    }
  });

  // Others Option For Responsive JS 
  $(".others-option-for-responsive .dot-menu").on("click", function(){
    $(".others-option-for-responsive .container .container").toggleClass("active");
  });

  // Preloader JS
  $(window).on('load', function(){
    $(".preloader, .preloader-area").fadeOut(500);
  });

  // Search Popup JS
  $('.close-btn').on('click', function() {
    $('.search-overlay').fadeOut();
    $('.search-btn').show();
    $('.close-btn').removeClass('active');
  });
  $('.search-btn').on('click', function() {
    $(this).hide();
    $('.search-overlay').fadeIn();
    $('.close-btn').addClass('active');
  });

  // Home Slider (Swiper)
  var swiper = new Swiper('.home-slider-container', {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 0,
    animateOut: 'zoomOut',
    animateIn: 'zoomOut',
    autoplay: true,
    effect: 'fade',
    notification: 'false',
    fadeEffect: { crossFade: true },
    navigation: {
      nextEl: '.home-slider-container .swiper-btn-next',
      prevEl: '.home-slider-container .swiper-btn-prev',
    },
  });

  // Odometer JS
  $('.odometer').appear(function() {
    $('.odometer').each(function() {
      var countNumber = $(this).attr('data-count');
      $(this).html(countNumber);
    });
  });

  // Events Slider (Owl Carousel)
  $('.events-slider').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    navText: [
      '<i class="fa-solid fa-arrow-left"></i>',
      '<i class="fa-solid fa-arrow-right"></i>',
    ],
    responsive:{
      0:   { items:1 },
      768: { items:2 },
      992: { items:3 },
      1200:{ items:3 }
    }
  });

  // Popup JS (Magnific Popup)
  $(document).ready(function() {
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });
  });

  // Go to Top
  $(window).on('scroll', function(){
    if ($(window).scrollTop() > 300) {
      $('.go-top').addClass('active');
    } else {
      $('.go-top').removeClass('active');
    }
  });
  $('.go-top').on('click', function() {
    $('html, body').animate({ scrollTop: 0 }, 500);
  });

})(jQuery);