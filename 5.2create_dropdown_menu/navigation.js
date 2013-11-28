$(document).ready(function() {
  $("#nav > li").hover(function () {
    //show the submenu items
    $(this).children("ul").addClass("hover");
  },
  function () {
    //hide the submenu items
    $(this).children("ul").removeClass("hover");
  });
});
