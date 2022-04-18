$('.header__btn').on('click', function(){
    $('.rightside-menu').removeClass('rightside-menu--close')
});
$('.rightside-menu__close').on('click', function(){
    $('.rightside-menu').addClass('rightside-menu--close')
});
// Слайдер top
$('.top__slider').slick({
    // infinite: true,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    dots:true,
    arrows:false,
    fade:true,
    autoplay:true,
});