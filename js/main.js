// $(function() {
  // ボタンがクリックされた場合
  // $('.header-nav-list-li-link').on('mouseenter', function(){
  //   $(this).animate({
  //     opacity: 0.5
  //   })
  //   $(this).css('border-bottom','1px');
  //   });
  // });


  $('.header-nav-list-li-link').hover(
    function() {
      $(this).animate({
            opacity: 0.5}),
      $(this).css(
        'border-bottom', ' 1px solid #fff'
      );
    },
    function() {
      $(this).animate({
            opacity: 1}),
      $(this).css(
        'border-bottom', ' none'
      );
    }
  );

  // $('.header-nav-list-li-link').hover(
  //   function() {
  //     $(this).animate({
  //           opacity: 0.5
  //          }
  //     ),
  //     $(this).animate({
  //       opacity: 1
  //      }
  //     ),
     
  //     $(this).css('border-bottom', ' 1px solid #fff'),
  //     $(this).css('border-bottom', 'none');
  //   }
  // );