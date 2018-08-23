$(document).ready(function(){

  $('.headline__burger').on('click', function() {
  $('.burger-menu').toggleClass('.active');
  $('.burger-menu').toggle();
    });

  $('.routes__list').slick({
    arrows: false,
    centerMode: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

  $('.pictures__container').slick({
    arrows: false,
    slidesToShow: 3,
        responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });


});
