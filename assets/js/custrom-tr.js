$(document).ready(function(){
  new WOW().init();
  
  $('.map').maphilight();

  /* site35_head_col0_icon */
  $('.open_form').click(function() {
    $('.form_search').toggleClass('active')
  })

  $('.icon_open_menu').click(function() {
    $('.section_header').toggleClass('active')
  });
  $('.icon_open_menu').click(function() {
    $('.site36_head_col0_dcentral').toggleClass('active_bg')
  });

  $(window).scroll(function(){
    if ($(this).scrollTop() > 500) {
      $('.backtotop').fadeIn();
    } else {
      $('.backtotop').fadeOut();
    }
  });
  $('.backtotop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });

  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.site36_head_col0_dcentral').addClass('active');
    } else {
      $('.site36_head_col0_dcentral').removeClass('active');
    }
  });

  $('.slider_homepage').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplaySpeed: 6000,
    arrows: false,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: false,
    dots: true,
  });

  $.Tween.propHooks.number = {
    get: function(tween) {
      var num = tween.elem.innerHTML.replace(/^[^\d-]+/, "");
      return parseFloat(num) || 0;
    },

    set: function(tween) {
      var opts = tween.options;
      tween.elem.innerHTML =
        (opts.prefix || "") +
        tween.now.toFixed(opts.fixed || 0) +
        (opts.postfix || "");
    }
  };

  $("#num-1").animate(
    { number: 200 },
    {
      duration: 8000,
      postfix: "+"
    }
  );

  $("#num-2")
  .delay(0)
  .animate(
    { number: 100 },
    {
      duration: 8000,
      postfix: "+"
    }
  );

  $("#num-3")
  .delay(0)
    .animate(
    { number: 1500 },
    {
        duration: 8000,
        postfix: "+"
    }
  );
  $("#num-4")
  .delay(0)
    .animate(
    { number: 8000 },
    {
        duration: 8000,
        postfix: "+"
    }
  );
  

  var widthmanhinh = $( window ).width();
  if(widthmanhinh > 1024) {
    var lastScrollTop = 0;
    $(window).scroll(function(event){
       var st = $(this).scrollTop();
       if ((st > lastScrollTop) || ($(this).scrollTop() < 100)){
           $('.site36_head_col0_dcentral').removeClass('active');
           $('.site36_head_col0_dcentral').addClass('active1');
       } else {
          $('.site36_head_col0_dcentral').addClass('active');
           $('.site36_head_col0_dcentral').removeClass('active1');
       }
       
       lastScrollTop = st;
    });
  }
  

  var widthmanhinh = $( window ).width();
  if(widthmanhinh <= 1024) {
    $(window).scroll(function(){
      if ($(this).scrollTop() < 100) {
        $('.site36_head_col0_dcentral').removeClass('active');
        $('.site36_head_col0_dcentral').removeClass('active1');
      } else {
        $('.site36_head_col0_dcentral').addClass('active');
      }
    });
  }

  $('.slider_for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    dots: false,
    fade: true,
    centerMode: true,
    prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/left.png' alt=''></button>",
    nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/right1.png' alt=''></button>",
    
  });
  $('.slider_nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider_for',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true
  });

  $('.slider_for_our').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    fade: true,
    centerMode: true,
    asNavFor: '.slider_nav_our',
    prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/lefto.png' alt=''></button>",
    nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/righto.png' alt=''></button>",
    
  });
  $('.slider_nav_our').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider_for_our',
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true
  });

});

$(document).ready(function () {
    $('.eu').mouseover(function (data) {
      $('.eu').addClass('active');
    }).mouseout(function () {
       
      $('.eu').removeClass('active');
    })
    $('.cn').mouseover(function (data) {
      $('.cn').addClass('active');
    }).mouseout(function () {
       
      $('.cn').removeClass('active');
    })
    $('.tw').mouseover(function (data) {
      $('.tw').addClass('active');
    }).mouseout(function () {
       
      $('.tw').removeClass('active');
    })
    $('.jp').mouseover(function (data) {
      $('.jp').addClass('active');
    }).mouseout(function () {
       
      $('.jp').removeClass('active');
    });
    $('.land.eu').click(function(){
        if($('.box_item').hasClass('home')) { 
           $('.home').addClass('active');
           $('.menu1').removeClass('active');
           $('.menu2').removeClass('active');
           $('.menu3').removeClass('active');
        }
    });

    $('.land.cn').click(function(){
        if($('.box_item').hasClass('menu1')) { 
           $('.menu1').addClass('active');
           $('.home').removeClass('active');
           $('.menu2').removeClass('active');
           $('.menu3').removeClass('active');
        }
    });

    $('.land.tw').click(function(){
        if($('.box_item').hasClass('menu2')) { 
           $('.menu2').addClass('active');
           $('.home').removeClass('active');
           $('.menu1').removeClass('active');
           $('.menu3').removeClass('active');
        }
    });

    $('.land.jp').click(function(){
        if($('.box_item').hasClass('menu3')) { 
           $('.menu3').addClass('active');
           $('.home').removeClass('active');
           $('.menu2').removeClass('active');
           $('.menu1').removeClass('active');
        }
    });
  });