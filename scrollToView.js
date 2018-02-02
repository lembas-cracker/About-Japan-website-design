$('.click-handler-1').click(function () {
  var offset = $(this).offset();
  offset.top -= 500;
  $('.drawer').animate({
    scrollTop: offset.top,
});
});
$('.click-handler-2').click(function () {
  var offset = $(this).offset();
  offset.top += 180;

  $('.drawer').animate({
    scrollTop: offset.top,
});
});
$('.click-handler-3').click(function () {
  var offset = $(this).offset();
  offset.top += 800;

  $('.drawer').animate({
    scrollTop: offset.top,
});
});
$('.click-handler-4').click(function () {
  var offset = $(this).offset();
  offset.top += 1400;

  $('.drawer').animate({
    scrollTop: offset.top,
});
});
$('.click-handler-5').click(function () {
  var offset = $(this).offset();
  offset.top += 2350;

  $('.drawer').animate({
    scrollTop: offset.top,
});
});
$('.click-handler-6').click(function () {
  var offset = $(this).offset();
  offset.top += 3450;

  $('.drawer').animate({
    scrollTop: offset.top,
});
});
