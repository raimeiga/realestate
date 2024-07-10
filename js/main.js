
$(".target").click(function() {
 $(this).css('color','red');
});

$(".target").hover(
 function() {
   $(this).text('ホバーされています')
 },
 function() {
   $(this).text('ホバーが解除されました');
 }
);
index.htm