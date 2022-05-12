$(document).ready(() => {
  $('.menuOpen').click(() => {
    $('.menu-wrapper').addClass('active')
  })

  $('.menuClose').click(() => {
    $('.menu-wrapper').removeClass('active')
  })
})

$(document).scroll(() => {
  $('.navbar').toggleClass(
    'active',
    $(this).scrollTop() > $('.navbar').height()
  )
})

var swiper = new Swiper('.mySwiperHome', {
  slidesPerView: 'auto',
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 2000,
  },
})

var swiper = new Swiper('.mySwiperProduct', {
  slidesPerView: 'auto',
  spaceBetween: 24,
  navigation: {
    nextEl: '.bxs-chevron-right-circle',
    prevEl: '.bxs-chevron-left-circle',
  },
})
