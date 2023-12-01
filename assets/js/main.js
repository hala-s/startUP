const navbar=document.querySelector(".navbar");
const headerContent=document.querySelector(".header .image-banner");
const contacttit=document.querySelector(".contact-tit");
const contactnav=document.querySelector(".contact-nav");
const aboutTit=document.querySelector(".aboutTit");
const aboutNav=document.querySelector(".aboutNav");
const proTit=document.querySelector(".proTit");
const shopNav=document.querySelector(".shopNav");
navbar.style.transition = '0.4s background-color'
const loding=document.querySelector(".preloader");
const scrollToTop=document.querySelector(".scroll-to-top");
const boxesSection=document.querySelector('.boxes');
window.addEventListener('scroll', function(){
    if( window.scrollY > headerContent.offsetTop){
        navbar.style.backgroundColor="#fff";

    }else{
        navbar.style.backgroundColor="transparent";

    }
    if( window.scrollY > boxesSection.offsetTop){
        scrollToTop.classList.remove('opacity-0' ,'invisible');

    }else{
        scrollToTop.classList.add('opacity-0' ,'invisible');
    }
});
window.addEventListener('scroll', function(){
    if( window.scrollY > contacttit.offsetTop){
        contactnav.style.backgroundColor="#fff";

    }else{
        contactnav.style.backgroundColor="transparent";

    }
  
});
window.addEventListener('scroll', function(){
    if( window.scrollY > aboutTit.offsetTop){
        aboutNav.style.backgroundColor="#fff";

    }else{
        aboutNav.style.backgroundColor="transparent";

    }
  
});
window.addEventListener('scroll', function(){
    if( window.scrollY > proTit.offsetTop){
        shopNav.style.backgroundColor="#fff";

    }else{
        shopNav.style.backgroundColor="transparent";

    }
  
});
window.addEventListener('load', function(){
    setTimeout(function(){
        loding.classList.add('opacity-0','invisible');
        document.body.style.overflow="auto";
    },2000)
});
scrollToTop.addEventListener('click', function(){
    window.scroll({
        top:0,
        behavior: 'smooth',
    })
});









$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items:5,
        margin:10,
        autoplay:true,
        loop:true,
        responsiveClass:true,
        responsive:{
            300:{
                items:1

            },
            700:{
                items:2
            },
            900:{
                items:5
            }
        }
    });
  });

  $('.works-slides').owlCarousel({
    loop: true,
    nav: false,
    rtl: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin:30,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1500: {
            items: 4
        }
    }
});
 $('.user-carousel').owlCarousel({
         loop: true,
    nav: false,
   rtl: true,
   dots: false,
   autoplayHoverPause: true,
   autoplay: true,
    margin:30,
    items:1
 });

 
$('.counter').counterUp({
       delay: 10,
        time: 1000
 });

 $('.slider-single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    adaptiveHeight: true,
    infinite: false,
   useTransform: true,
    speed: 400,
    cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
});

$('.slider-nav')
    .on('init', function(event, slick) {
        $('.slider-nav .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
        slidesToShow:3,
        slidesToScroll: 2,
        dots: false,
        focusOnSelect: false,
        infinite: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
            }
        }, {
            breakpoint: 640,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
           }
        }, {
            breakpoint: 420,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
       }
        }]
    });

$('.slider-single').on('afterChange', function(event, slick, currentSlide) {
    $('.slider-nav').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider-nav .slick-slide.is-active').removeClass('is-active');
    $(currrentNavSlideElem).addClass('is-active');
});

$('.slider-nav').on('click', '.slick-slide', function(event) {
    event.preventDefault();
    var goToSingleSlide = $(this).data('slick-index');

    $('.slider-single').slick('slickGoTo', goToSingleSlide);
});