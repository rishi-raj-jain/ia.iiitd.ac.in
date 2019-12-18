(function($){
  "use strict"; 

  $(window).on("load", function(){
    $("#preloader").delay(300).animate({
      "opacity" : "0"
      }, 300, function() {
      $("#preloader").css("display","none");
    });  

    //js code for mobile menu 
   $(".menu-toggle").on("click", function() {
    $(this).toggleClass("is-active");
});

  // responsive menu slideing
    $(".navbar-collapse>ul>li>a, .navbar-collapse ul.sub-menu>li>a").on("click", function() {
      var element = $(this).parent("li");
      if (element.hasClass("open")) {
        element.removeClass("open");
        element.find("li").removeClass("open");
        element.find("ul").slideUp(500,"linear");
      }
      else {
        element.addClass("open");
        element.children("ul").slideDown();
        element.siblings("li").children("ul").slideUp();
        element.siblings("li").removeClass("open");
        element.siblings("li").find("li").removeClass("open");
        element.siblings("li").find("ul").slideUp();
      }
    });

  });

    // menu options custom affix
    var fixed_top = $(".header-section");
    $(window).on("scroll", function(){
        if( $(window).scrollTop() > 50){  
            fixed_top.addClass("animated fadeInDown menu-fixed");
        }
        else{
            fixed_top.removeClass("animated fadeInDown menu-fixed");
        }
    });

    // tab active init
    $('.card').on('click', function () {
        var notthis = $('.is_active').not(this);
        notthis.toggleClass('is_active');
        $(this).toggleClass('is_active').next();
    });

  
    // testmonial-slider
    $('.testmonial-slider').owlCarousel({
      loop:true,
      dots: true,
      smartSpeed: 1200,
      responsiveClass:true,
      responsive:{
          0:{
              items:1,
              nav:true
          },
          600:{
              items:2,
              nav:false
          },
          1000:{
              items:3,
              nav:true,
              loop:false
          }
      }
    });

  // lightcase plugin init
  $('a[data-rel^=lightcase]').lightcase();

  // counter 
  $('.counter').countUp({
      'time': 1500,
      'delay': 10
  });

  // progress bar
  $(".progressbar").each(function(){
    $(this).find(".bar").animate({
      "width": $(this).attr("data-perc")
    },3000);
    $(this).find(".label").animate({
        "left": $(this).attr("data-perc")
      },3000);
  });

  // Show or hide the sticky footer button
  $(window).on("scroll", function() {
      if ($(this).scrollTop() > 200) {
          $(".scroll-to-top").fadeIn(200);
      } else {
          $(".scroll-to-top").fadeOut(200);
      }
  });

    // teacher-slider
    $('.teacher-thumb-slider').owlCarousel({
        loop:true,
        dots: false,
        smartSpeed: 800,
        responsiveClass:true,
        margin: 0,
        nav: true,
        navText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:true,
                loop:false
            }
        }
    });

    // blog-slider
    $('.blog-slider').owlCarousel({
        loop:true,
        dots: true,
        smartSpeed: 800,
        responsiveClass:true,
        margin: 30,
        nav: true,
        navText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:false
            }
        }
    });

    // event-gallery-slider
    $('.event-gallery-slider').owlCarousel({
        loop:true,
        dots: true,
        smartSpeed: 800,
        responsiveClass:true,
        margin: 30,
        nav: true,
        navText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive:{
            0:{
                items:1,
                nav: false
            },
            600:{
                items:2,
                nav: false
            },
            1000:{
                items:3,
                loop:false,
                nav: false
            },
            1400:{
              items:3,
              nav:true,
              loop:false
            }
        }
    });

  // skill circle progress bar
  var skillLevel1 = $(".skill-circle-item .first").data("skill-level");
  var skillLevel2 = $(".skill-circle-item .second").data("skill-level");
  var skillLevel3 = $(".skill-circle-item .third").data("skill-level");
  var skillLevel4 = $(".skill-circle-item .fourth").data("skill-level");
  //first.circle
  $(".first.circle").circleProgress({
    value: "0." + skillLevel1,
    size: 110,
    emptyFill: "#dadada",
    reverse: true,
    fill: {
      color: "#faa603"
    }
  }).on("circle-animation-progress", function(event, progress) {
    $(this).find("strong").html(Math.round(skillLevel1 * progress) + "<span>%</span>");
  });

  //second.circle
  $(".second.circle").circleProgress({
    value: "0." + skillLevel2,
    size: 110,
    emptyFill: "#dadada",
    reverse: true,
    fill: {
      color: "#faa603"
    }
  }).on("circle-animation-progress", function(event, progress) {
    $(this).find("strong").html(Math.round(skillLevel2 * progress) + "<span>%</span>");
  });

  //third.circle
  $(".third.circle").circleProgress({
    value: "0." + skillLevel3,
    size: 110,
    emptyFill: "#dadada",
    reverse: true,
    fill: {
      color: "#faa603"
    }
  }).on("circle-animation-progress", function(event, progress) {
    $(this).find("strong").html(Math.round(skillLevel3 * progress) + "<span>%</span>");
  });

  //fourth.circle
  $(".fourth.circle").circleProgress({
    value: "0." + skillLevel4,
    size: 110,
    emptyFill: "#dadada",
    reverse: true,
    fill: {
      color: "#faa603"
    }
  }).on("circle-animation-progress", function(event, progress) {
    $(this).find("strong").html(Math.round(skillLevel4 * progress) + "<span>%</span>");
  });

    // countdown plungin init
    $('#clock').countdown('2020/10/10', function(event) {
        $(this).html(event.strftime(''
          +'<div><span>%D</span><p>Days</p></div>'
          +'<div><span>%H</span><p>Hours</p></div>'
          +'<div><span>%M</span><p>Minutes</p></div>'
          +'<div><span>%S</span><p>Seconds</p></div>'));
    });

    // Show or hide the sticky footer button
  $(window).on("scroll", function() {
      if ($(this).scrollTop() > 200) {
          $(".scroll-to-top").fadeIn(200);
      } else {
          $(".scroll-to-top").fadeOut(200);
      }
  });

  // Animate the scroll to top
  $(".scroll-to-top").on("click", function(event) {
      event.preventDefault();
      $("html, body").animate({scrollTop: 0}, 300);
  });

})(jQuery); 