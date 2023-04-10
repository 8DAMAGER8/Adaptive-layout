$(function(){
  $('.popup__link').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });

  $('.portofolio__item--inner').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplaySpeed: 2000,
    dots: true,
    arrows: false,
    prevArrow: '<button type="button" class="portofolio-prev"><img src="images/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="portofolio-next"><img src="images/arrow-right.svg" alt=""></button>',
    prevArrow: '<button type="button" class="portofolio-prev"><img src="images/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="portofolio-next"><img src="images/arrow-right.svg" alt=""></button>',
    responsive: [{
      
        breakpoint: 1101,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
    },
        {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1,
          arrows: true,
          dots: false,
        },
        }
      ]
  });

  $('.menu__btn').on('click', function (){
    $('.menu__list').toggleClass('menu__list--activ');
  })


  // $('.portofolio__item-inner').magnificPopup({
  //   delegate: 'a',
  //   type: 'image',
  //   tLoading: 'Loading image #%curr%...',
  //   mainClass: 'mfp-img-mobile',
  //   gallery: {
  //     enabled: true,
  //     navigateByImgClick: true,
  //     preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
  //   },
  //   image: {
  //     tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
  //     titleSrc: function (item) {
  //       return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
  //     }
  //   }
  // });
});