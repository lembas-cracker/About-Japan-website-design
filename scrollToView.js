//Drawer-1
$('[scroll-to]').click(function () {
  var whereToScroll = $(this).attr('scroll-to');
  var titleOffset = $(whereToScroll).offset().top;
  var drawerOffset = $(".drawer").offset().top;

  $('.drawer').animate({
    scrollTop: titleOffset - drawerOffset
  })
});
