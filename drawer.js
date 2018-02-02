// Alternative:
//
// $("[toggle-drawer]").on("click", function() {
//   toggleDrawer($(this).attr("toggle-drawer"));
// })

$( ".people" ).on( "click", function() {
  toggleDrawer("#drawer-1");
  toggleOpacityDrawer();
  toggleBodyOverflow();
});

$( ".fuji" ).on( "click", function() {
  toggleDrawer("#drawer-3");
  toggleOpacityDrawer();
  toggleBodyOverflow();
});

$( ".islands" ).on( "click", function() {
  toggleDrawer("#drawer-2");
  toggleOpacityDrawer();
  toggleBodyOverflow();
});


$(".opacity-drawer").on("click", function() {
  hideAllDrawers();
  toggleOpacityDrawer();
  toggleBodyOverflow();
});

function toggleBodyOverflow() {
  var currentValue = $("body").css("overflow");

  if (currentValue === "hidden") {
    $("body").css("overflow", "auto");
  } else {
    $("body").css("overflow", "hidden");
  }
}

function toggleOpacityDrawer() {
  $(".opacity-drawer").stop().fadeToggle();
}
function toggleDrawer(whichDrawer) {
  $(whichDrawer).toggleClass( "drawer-closed" );
}

function hideAllDrawers() {
  $(".drawer").addClass("drawer-closed");
}

