$(function () {

  $('.shop-filter__btn').on('click', function () {
    $('.shop-filter__btn').removeClass('shop-filter__btn--active');
    $(this).addClass('shop-filter__btn--active')
  });

  $('.button-list').on('click', function () {
    $('.product-item').addClass('product-item--active');
    $('.pagination').addClass('pagination--active');
  });

  $('.button-grid').on('click', function () {
    $('.product-item').removeClass('product-item--active');
    $('.pagination').removeClass('pagination--active');
  });

  $('.button-list').on('click', function () {
    $('.shop__items').addClass('shop__items--active');
  });

  $('.button-grid').on('click', function () {
    $('.shop__items').removeClass('shop__items--active');
  });

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    }
  });

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  })

  $(".star").rateYo({
    rating: 3.6,
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true
  });

  $(".star-shop").rateYo({
    rating: 3.6,
    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true
  });

  var mixer = mixitup('.product__inner');
  var mixer = mixitup('.design__inner');

})