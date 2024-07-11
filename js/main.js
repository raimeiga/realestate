

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



  // カルーセル
  $('.mv-slick').slick({
    autoplay: true,  //自動再生
    dots: true,      //ドットインジケーター
    infinite: true,
    autoplaySpeed: 50,  //自動再生の切り替え速度
    arrows: false,  //左右矢印
  });