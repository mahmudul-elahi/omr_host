$(function () {
  $('.slider-container').slick({
    slidesToShow: 1,
    infinite: true,
    prevArrow:
      '<div class="arrow-left arrow"><i class="fa-solid fa-angle-left"></i></div>',
    nextArrow:
      '<div class="arrow-right arrow"><i class="fa-solid fa-angle-right"></i></div>',
    asNavFor: '.banner-nav',
  })

  $('.testimonial-slider').slick({
    slidesToShow: 3,
    infinite: true,
    prevArrow:
      '<div class="arrow-left arrow"><i class="fa-solid fa-solid fa-left-long"></i></div>',
    nextArrow:
      '<div class="arrow-right arrow"><i class="fa-solid fa-solid fa-right-long"></i></div>',
    asNavFor: '.banner-nav',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  })

  $('.banner-nav').on('init', function () {
    $('.slick-center').prev().addClass('prev-div')
  })

  $('.banner-nav')
    .slick({
      slidesToShow: 5,
      infinite: true,
      arrows: false,
      asNavFor: '.slider-container',
      centerMode: true,
      centerPadding: '0px',
    })
    .on('afterChange', function () {
      $('.slick-center').prev().addClass('prev-div')
    })
    .on('beforeChange', function () {
      $('.item.slick-slide').removeClass('prev-div')
    })

  $('.counter').counterUp({
    delay: 10,
    time: 10000,
  })
})
