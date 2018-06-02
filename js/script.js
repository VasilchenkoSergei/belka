$(document).ready(function(){

  // $('.promo__burger').bind('click', function() {
  // $(this).toggleClass('active');
  // $(this).find('div').removeClass('no-animation');
  // $(".page-header").toggle();
  //   });

  $('.routes__list').slick({
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: '<button type="button"><img src="../img/icons/arrow-prev.png"></button>',
    nextArrow: '<button type="button"><img src="../img/icons/arrow-next.png"></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.reviews__list').slick({
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          slidesToShow: 1,
        }
      }
    ]
  });


  $('.pictures__container').slick({
    arrows: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          slidesToShow: 1,
        }
      }
    ]
  });

});
