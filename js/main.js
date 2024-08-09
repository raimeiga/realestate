
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
      // フワッと表示する	$('.back-btn').css({
      $('.back-btn').fadeIn(500); // 400ミリ秒で表示           
     } else {
      // スクロール位置が.mvより上の場合はフワッと非表示にする	// スクロール位置が.mvより上の場合はCSSをリセットする
     $('.back-btn').fadeOut(500); // 400ミリ秒で非表示
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

  
  // ------モーダル-------

 $(function () {
  $(".modal-open-01").click(
    function() {
      $(".modal-area-01").show()
    }
  );
  $(".modal-close").click(
    function() {
      $(".modal-area-01").hide()
    }
  );
 });

 $(function () {
  $(".modal-open-02").click(
    function() {
      $(".modal-area-02").show()
    }
  );
  $(".modal-close").click(
    function() {
      $(".modal-area-02").hide()
    }
  );
 });

 $(function () {
  $(".modal-open-03").click(
    function() {
      $(".modal-area-03").show()
    }
  );
  $(".modal-close").click(
    function() {
      $(".modal-area-03").hide()
    }
  );
 });

 $(function () {
  $(".modal-open-04").click(
    function() {
      $(".modal-area-04").show()
    }
  );
  $(".modal-close").click(
    function() {
      $(".modal-area-04").hide()
    }
  );
 });

// ------ハンバーガーメニュー-------
// toggle=表示と非表示を切り替えるメソッド
// 300=0.3秒で表示・非表示を切り替える

$(function () {
  $("#hamburger-block").click( 
    function() {
      $(".ham-menu").toggle(300)
     
    }
  );
});


// ハンバーガーメニュー内のメニュークリックすると、
// 3秒後にメニューはfadeout。removeだと消えたまま、復活しない。
$(function () {
  $(".ham-menu-btn").click( 
    function() {
      $(".ham-menu").fadeOut(300);
    });
});



