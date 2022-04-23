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
//contact slider
$('.contact-slider').slick({
    dots:true,
    arrows:false,
    slidesToShow: 10,
    slidesToScroll: 10,
})
// mix
let mixer = mixitup('.gallery__inner',{
    animation: {
        effectsIn: 'fade translateY(-100%)'
    },
    load: {
        filter: '.bedroom'
    }
});