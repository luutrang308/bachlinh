$(document).ready(function(){
  new WOW().init();
  AOS.init(); 

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
      duration: 4000,
      postfix: "+"
    }
  );

  $("#num-2")
  .delay(0)
  .animate(
    { number: 100 },
    {
      duration: 4000,
      postfix: "+"
    }
  );

  $("#num-3")
  .delay(0)
    .animate(
    { number: 1500 },
    {
        duration: 4000,
        postfix: "+"
    }
  );
  $("#num-4")
  .delay(0)
    .animate(
    { number: 8000 },
    {
        duration: 4000,
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
    arrows: true,
    dots: false,
    fade: true,
    centerMode: true,
    asNavFor: '.slider_nav',
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


















  $('.play_img').click(function() {
    $('.video_page').addClass('active');
  });

  $('.slider_about').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: false,    
    arrows: true,
    prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/left.png' alt=''></button>",
    nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/right1.png' alt=''></button>",
    
  });

  $('.slider_thuvien').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: false,    
    arrows: true,
    prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/left.png' alt=''></button>",
    nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/right1.png' alt=''></button>",
    
  });
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('.slider_thuvien').slick('setPosition');
  });

  $('.slider_dcentral').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: false,    
    arrows: true,
    prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/left.png' alt=''></button>",
    nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/right1.png' alt=''></button>",
    
  });
  
  $('.news_page').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplaySpeed: 6000,
    arrows: false,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
  });
  $('.dailypp_page').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplaySpeed: 6000,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/left1.png' alt=''></button>",
    nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/right2.png' alt=''></button>",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.img_position').click(function() {
    $(this).find('.box_hover').toggleClass('active');
  });

  
















  


  $('.slide_for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slide_nav'
  });
  $('.slide_nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slide_for',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    arrows: true,
    prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/left.png' alt=''></button>",
    nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/right.png' alt=''></button>",
    
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.slider_lichsu').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplaySpeed: 6000,
    arrows: false,
    slidesToShow: 4,
    adaptiveHeight: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.slider_img').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplaySpeed: 6000,
    arrows: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/left.png' alt=''></button>",
    nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/right.png' alt=''></button>",
    
  });




  














  
  

  $('.form_item img').click(function() {
    $('.form_item').toggleClass('active');
  });
  $('.form_item p').click(function() {
    $('.form_item').toggleClass('active');
  });

  

  


});



var TabPictureView = {
    classPreview    : ".preview_img",
    elmGirdImg      : ".list_grid_img",
    elmGirdItem     : ".gird_img_item",
    elmSlidePreview : ".slider_preview_img",
    elmClosePreview : ".close_preview_img",
    slickActive     : null,

    unSlick: function(elm = null) {
        if (elm == null) {
            elm = this.slickActive;
        }
        elm.slick('unslick');
    },

    setSlick: function(elmSetSlick) {
        this.slickActive = $(elmSetSlick).slick({
            dots: true,
            slidesToShow: 1,
        });
    },

    openPreview: function(elmClick) {
        var elementPreview = $(elmClick).find(this.classPreview);
        var sliderPreview = elementPreview.find(this.elmSlidePreview);
        elementPreview.show();
        this.setSlick(sliderPreview);
    },

    closePreview : function(elmClick){
        this.unSlick();
        $(elmClick).closest(this.classPreview).hide();
    },

    setClickLibraryPicture : function(){
        $(this.elmGirdImg).on('click', this.elmGirdItem, function(e) {
            if($(e.target).hasClass(TabPictureView.classPreview) || $(e.target).closest(TabPictureView.classPreview).length > 0){
                return true;
            }
            TabPictureView.openPreview(this);
        });
        $(this.elmGirdImg).on('click', this.elmClosePreview, function() {
            TabPictureView.closePreview(this);
        });
    }
}

TabPictureView.setClickLibraryPicture();