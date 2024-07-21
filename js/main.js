
$(function() {
  $(".mv-slider").slick({
    autoplay: true,  //自動再生
    autoplaySpeed: 5000,
    arrows: false,
  });  

});

  $(window).scroll(function() {
    var scrollValue = $(window).scrollTop();
    var aboutOffset = $('#about').offset().top;

    // #aboutまでスクロールしたら特定のCSSを適用する
    if (scrollValue >= aboutOffset) {
      $('.header-name,.header-nav-btn').css({
        'color': '#000',        
      });   

    } else {
      // スクロール位置が#aboutより上の場合はCSSをリセットする
      $('.header-name,.header-nav-btn').css({
        'color': '#fff',       
      });    
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


// 各sectionに↓のclassを持たせてフワっと出現させる
// style.scssのjs-activeとコンビ
  $(function () {
    // ウィンドウがスクロールされるたびに実行される関数
    $(window).scroll(function () {
      // ".js-scroll"というクラスを持つすべての要素に対して処理を行う
      $(".js-scroll").each(function () {
        // 対象となる要素のページの上からの位置を取得
        var targetOffset = $(this).offset().top;
        // ウィンドウの高さを取得
        var windowHeight = $(window).height();
        // 現在のスクロール位置 + ウィンドウの高さを計算
        var scrollPosition = $(window).scrollTop() + windowHeight;
  
        // 現在のスクロール位置が対象となる要素の位置を超えた場合
        if (scrollPosition > targetOffset) {
          // 要素に"js-active"というクラスを追加
          $(this).addClass("js-active");
        }
      });
    });
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








