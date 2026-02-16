$(document).ready(function(){



   $(".toggle_btn").click(function(){
    $(this).toggleClass("toggle_active")
     $(".sidebar").toggleClass("sidebar_active");
  });
  
  
});

 $(document).ready(function(){
      $('.slider-img').slick({
          dots: false,
          arrows: false,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToShow: 1,
          slidesToScroll: 1,
          asNavFor: '.slider-ctn'
      });
      $('.slider-ctn').slick({
          dots: false,
          arrows: true,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000,
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow:'<button type="button" class="slick-prev"><i class="fa fa-angle-left"></button>',
          nextArrow:'<button type="button" class="slick-next"><i class="fa fa-angle-right"></button>',
          asNavFor: '.slider-img',
         
      });
  });

// $('.single-item').slick(
//   {
//   infinite: true,
//   slidesToShow: 6,
//   slidesToScroll: 2,
//   prevArrow:'<button type="button" class="slick-prev"><i class="fa-solid fa-arrow-left"></i></button>'
//   nextArrow:'<button type="button" class="slick-next">Next</button>'
//   }
// );