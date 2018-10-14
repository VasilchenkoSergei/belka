$(document).ready(function(){

  $('.headline__burger').on('click', function() {
  $('.burger-menu').toggleClass('.active');
  $('.burger-menu').toggle();
    });

$('.routes__list').owlCarousel({
    loop:true,
    centerMode:true,
    margin:10,
    dots: false,
    nav: true,
    navText: ["<img src='img/icons/arrow-prev.png'>", "<img src='img/icons/arrow-next.png'>"],
    responsive:{
        0:{
            items:1
        },
        767:{
            items:3,

        },
        1199:{
            items:5,
            nav: false,
        }
    }
});

$('.pictures__container').owlCarousel({
    loop:true,
    centerMode:true,
    margin:10,
    dots: false,
    responsive:{
        0:{
            items:1,
        },
        767:{
            items:3,
        }
    }
});

$('.reviews__list').owlCarousel({
    loop:true,
    centerMode:true,
    margin:10,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:3,
        },
    }
});


$(window).width(function() {
  if ($(window).width() > 767) {
    $('.pictures__container').trigger('destroy.owl.carousel');
  }
  else {
    return false;
  }
});


// $('.footer-nav__link').on('click', function() {
//   $(this).css({'color':'blue'});
// });

($('.main-nav__link') || $('.footer-nav__link')).on('click', function() {
  $(this).css({'color':'blue'});
});

});
