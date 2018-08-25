$(document).ready(function(){

  $('.headline__burger').on('click', function() {
  $('.burger-menu').toggleClass('.active');
  $('.burger-menu').toggle();
    });

$('.routes__list').owlCarousel({
    loop:true,
    centerMode:true,
    margin:10,
    // nav:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        },
        1200:{
            items:5
        }
    }
});

$('.pictures__container').owlCarousel({
    loop:true,
    centerMode:true,
    margin:10,
    // nav:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        },
    }
});

$('.reviews__list').owlCarousel({
    loop:true,
    centerMode:true,
    margin:10,
    // nav:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:3
        },
    }
});
// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     // nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         800:{
//             items:3
//         },
//         1100:{
//             items:5
//         }
//     }
// })
// new Siema({
//   selector: '.siema',
//   duration: 200,
//   easing: 'ease-out',
//   perPage: 3,
//   draggable: true,
//   threshold: 20,
//   loop: true,
//   onInit: () => {},
//   onChange: () => {},
// });
  // $('.routes__list').slick({
  //   arrows: false,
  //   centerMode: true,
  //   slidesToShow: 5,
  //   slidesToScroll: 5,
  //   responsive: [
  //     {
  //       breakpoint: 1200,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //       }
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //       }
  //     },
  //   ]
  // });

  // $('.pictures__container').slick({
  //   arrows: false,
  //   slidesToShow: 3,
  //       responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //       }
  //     },
  //   ]
  // });


});
