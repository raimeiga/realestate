

$('.header-nav-btn').hover(
  function() {
      $(this).animate({
            opacity: 0.5,}),
      $(this).css(
       'border-bottom', 'solid 1px #fff'
      )
    },
    function() {
      $(this).animate({
            opacity: 1}),
      $(this).css(
        'border-bottom', 'none'
      )
    }
  );


$(function(){
  // スライダー
  $('.mv-image-wrap').slick({
    autoplay: true,  //自動再生
    dots: true,      //ドットインジケーター
    infinite: true,
    autoplaySpeed: 5000,  //自動再生の切り替え速度
    slidesToShow: 3,
    arrows: true,  //左右矢印
  });

});


//   $(function () {
//     $(".mv-image-wrap").slick({
//         autoplay: true,
//         autoplaySpeed: 3000,
//         arrows: true,
//         dots: true,
//         slidesToShow: 3,
//         speed: 2000,
//     });
// });