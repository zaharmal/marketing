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

const animatedElements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // Убираем наблюдение после появления
    }
  });
}, { threshold: 0.1 }); // Процент видимости элемента

animatedElements.forEach(el => observer.observe(el));

function animateCounter(el, target, duration = 2000) {
  let start = 0;
  let stepTime = Math.abs(Math.floor(duration / target));

  let timer = setInterval(() => {
    start += 1;
    el.textContent = start;

    if (start >= target) {
      clearInterval(timer);
    }
  }, stepTime);
}

const counters = document.querySelectorAll(".counter");
const observerTimer = new IntersectionObserver((entries, observerTimer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      let el = entry.target;
      let target = parseInt(el.getAttribute("data-target"));
      animateCounter(el, target);
      observerTimer.unobserve(el); // Останавливаем наблюдение после старта
    }
  });
}, { threshold: 0.5 }); // 50% видимости

counters.forEach(counter => observerTimer.observe(counter));