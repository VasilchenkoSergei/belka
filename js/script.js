$(document).ready(function(){


  $('.routes__list').slick({
    arrows: false,
    centerMode: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    variableWidth: true,
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


  // $('.reviews__list').slick({
  //   arrows: false,
  //   centerMode: true,
  //   slidesToShow: 3,
  //   responsive: [
  //     // {
  //     //   breakpoint: 1050,
  //     //   settings: {
  //     //     slidesToShow: ,
  //     //   }
  //     // },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         centerMode: true,
  //         slidesToShow: 1,
  //       }
  //     },
  //     // {
  //     //   breakpoint: 480,
  //     //   settings: {
  //     //     centerMode: true,
  //     //     slidesToShow: 1,
  //     //   }
  //     // }
  //   ]
  // });


});
