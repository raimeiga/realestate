
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
    arrows: false,
  });  
});


// $(document).ready(function() {
//   $(window).scroll(function() {
//     var scrollDistance = $(window).scrollTop();
//     var aboutOffset = $('#about').offset().top;

//     // #aboutまでスクロールしたら特定のCSSを適用する
//     if (scrollDistance >= aboutOffset) {
//       $('#about').css({
//         'background-color': 'lightblue',
//         'color': 'black',
//         'font-size': '20px'
//       });
//     } else {
//       // スクロール位置が#aboutより上の場合はCSSをリセットする（例えば、元のスタイルに戻す）
//       $('#about').css({
//         'background-color': '',
//         'color': '',
//         'font-size': ''
//       });
//     }
//   });
// });

// $(document).ready(function() {

  $(window).scroll(function() {
    var scrollValue = $(window).scrollTop();
    var aboutOffset = $('#about').offset().top;

    // #aboutまでスクロールしたら特定のCSSを適用する
    if (scrollValue >= aboutOffset) {
      $('.header-name, .header-nav-btn').css({
        'color': '#000',        
      });
      // $('.back-btn').css({
      //   'display': 'inline',        
      // });

    } else {
      // スクロール位置が#aboutより上の場合はCSSをリセットする
      $('.header-name, .header-nav-btn').css({
        'color': '#fff',       
      });
      // $('.back-btn').css({
      //   'display': 'none',       
      // });
    }
  });


  $(window).scroll(function() {
    var scrollValue = $(window).scrollTop();
    var mvOffset = $('.mv').offset().top;

    // .mvまでスクロールしたら特定のCSSを適用する
    if (scrollValue > mvOffset) {
      $('.back-btn').css({
       'display': 'inline',        
      });           
      
    } else {
      // スクロール位置が.mvより上の場合はCSSをリセットする
      $('.back-btn').css({
        'display': 'none',       
      });
    }
  });








  // $(window).on('scroll',function(){
  //   const scrollValue = document.scrollingElement.scrollTop;
  //   // 画面スクロール量が600px以上なら,戻るボタンを表示
  //   if (scrollValue >= 600) {
  //     $(".sp-back-btn").css('display', 'inline');
  //   }
  //   // 画面のスクロール量が600px未満なら,戻るボタンを非表示
  //   else {
  //     $(".sp-back-btn").css('display', 'none');
  //   }
  
  // });

  
// $(window).on('scroll',function(){
//   const scrollValue = document.scrollingElement.scrollTop;
//   // 画面スクロール量が800px以上なら,戻るボタンを表示
//   if (scrollValue >= 800) {
//     $(".back-btn").css('display', 'inline');
//   }
//   // 画面のスクロール量が800px未満なら,戻るボタンを非表示
//   else {
//     $(".back-btn").css('display', 'none');
//   }

//   // 画面スクロール量が800px以上なら,文字色を黒
//   if (scrollValue >= 800) {
//     $(".header-name,.header-nav-btn").css('color', '#000');
//   }
//   // 画面のスクロール量が800px未満なら,文字色を白
//   else {
//     $(".header-name,.header-nav-btn").css('color', '#fff');
//   } 
// });

// ↑ を書いたときの基盤（ ↓ ）
// $(document).ready(function() {
//   var backBtn = $('#back-btn');

//   $(window).scroll(function() {
//     var scrollValue = $(document).scrollTop();

//     if (scrollValue >= 500) {
//       backBtn.css('display', 'inline');
//     } else {
//       backBtn.css('display', 'none');
//     }
//   });
// });








