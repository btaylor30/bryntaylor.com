// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'youtube-video' element with an <iframe> and
// YouTube player after the API code downloads.
var player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player('youtube-video', {
    height: '225',
    width: '400',
    videoId: 'w01uSblkppw'
  });
}

function playVideo() {
  player.playVideo();
}

function stopVideo() {
  player.stopVideo();
}

function flexsliderInit(el) {
  $(el).flexslider({
    animation: "slide",
    controlNav: false,
    slideshow: false
  });
}

(function($){
  'use strict';

  //smooth scrolling: http://css-tricks.com/examples/SmoothPageScroll/
  $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
          || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        var win = $(window).width();
        if (target.length && win >= 600) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 750);
          return false;
        }
      }
    });

  //Contact form toggle
  $('.contact-toggle, .contact-cancel').click(function (event) {
    event.preventDefault();

    $('body').toggleClass('show-contact');
  });

  //mobile toggle
  $('.nav-item').click(function (event) {
    event.preventDefault();
    var showThis = $(this).data('show'),
        winWidth = $(window).width();

    if( winWidth <= 600) {
      $('body').removeClass().addClass('show-' + showThis);
      flexsliderInit('.flexslider');
      $('html,body').animate({
        scrollTop: 0
      }, 750);
    }
  });


  //services toggle
  $('.services-content-toggle').click(function (event) {
    event.preventDefault();

    $(this).siblings('.services-content').toggleClass('show').toggleClass('arrow-up');
  });

  // var $masonry = $('.masonry_container');

  // $masonry.imagesLoaded( function(){
  //   $masonry.masonry({
  //     itemSelector : '.masonry_item',
  //     isAnimated: true
  //   });
  // });

  $(".learn-more").click(function (event) {
      event.preventDefault();
      var sectionName = $(this).data('postname');
      $('.content-extra').removeClass('show');
      $('.content-extra[data-postname="'+ sectionName +'"]').addClass('show');

      $('.service-each[data-postname="'+ sectionName +'"]').siblings().removeClass('show-full').end().addClass('show-full');
      // masonry
      // setTimeout(function() {
      //   $masonry.masonry({
      //     itemSelector : '.masonry_item',
      //     isAnimated: true
      //   });
      // }, 500);  
  });

  //   //learn more toggle
  // $('.learn-more').click(function (event) {
  //   event.preventDefault();
  //   var sectionName = $(this).data('more');
    
  //   $('.content-extra[data-extra="'+ sectionName +'"]').addClass('show');
  //   $(this).addClass('hide');
  //   $('.tagline').addClass('hide');
  // });

  // Video Play/Pause toggle
  $('.video-toggle, .video-cancel').click(function (event) {
    event.preventDefault();

    if (player.getPlayerState() == 1) {
      // console.log(player.getPlayerState());
      stopVideo();
    }

    $('.video-container').toggleClass('show').toggleClass('show-video').fitVids();
  });

  //cloning
  if( $(window).width() <= 600) {
    $('.interested').clone().appendTo('.extend-interested-block');
  }


})( jQuery );//end

$(window).load(function() {
  winWidth = $(window).width();
  if( winWidth >= 600) {
    flexsliderInit('.flexslider');
  }
});
