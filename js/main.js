
// // ヘッダーの動き
// $(function(){
// $('.header-nav-btn').hover(
//   function() {
//       $(this).animate({
//             opacity: 0.5,}),
//       $(this).css(
//        'border-bottom', 'solid 1px #fff'
//       )
//     },
//     function() {
//       $(this).animate({
//             opacity: 1}),
//       $(this).css(
//         'border-bottom', 'none'
//       )
//     }
//   );
// });


// メインビジュアルのスライド

// $(function(){
//   // スライダー
//   $('.mv-image').slick({
//     autoplay: true,  //自動再生
//     dots: true,      //ドットインジケーター
//     infinite: true,
//     autoplaySpeed: 3000,  //自動再生の切り替え速度
//     slidesToShow: 3,
//     arrows: true,  //左右矢印
//   });

// });


$(function() {
  $(".mv-slider").slick({
    autoplay: true,  //自動再生
    autoplaySpeed: 5000,
  });
});

