$(document).ready(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");
  });

  $(document).on("click", ".anchor", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr("href"),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;

    //анимируем переход на расстояние - top за 500 мс
    $("body,html").animate({ scrollTop: top }, 1000);
  });

  $(".team-slider").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendArrows: ".slider-container",
    prevArrow: '<button class="prev slider-btn">Prev</button>',
    nextArrow: '<button class="next slider-btn">Next</button>',
    appendDots: ".container-step-point",
    dotsClass: "step-point",
    responsive: [
      {
        // breakpoint: 1024,
        // settings: {
        //   slidesToShow: 3,
        //   slidesToScroll: 3,
        //   infinite: true,
        //   dots: true
        // }
      },
      {
        // breakpoint: 600,
        // settings: {
        //   slidesToShow: 2,
        //   slidesToScroll: 2
        // }
      },
      {
        // breakpoint: 480,
        // settings: {
        //   slidesToShow: 1,
        //   slidesToScroll: 1
        // }
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  $(document).on("click", ".menu__item-link", function () {
    $(".menu__item-link").removeClass("menu__item-link--active");
    $(this).addClass("menu__item-link--active");
  });
});
