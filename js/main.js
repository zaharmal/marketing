$(function () {

  $(document).ready(function () {
    $(".menu a").on("click", function (e) {
      e.preventDefault();
      var id = $(this).attr('href'),
        top = $(id).offset().top;
      $('body,html').animate({ scrollTop: top }, 1500);
    });
  });

  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });

  $('.slider-blog__inner').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrow-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arrow-right.svg" alt=""></button>',
    autoplay: true,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false
        }
      },
    ]
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

  var mixer = mixitup('.portfolio__content');

});