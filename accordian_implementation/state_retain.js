function getClickedItem() {
  var $url = $(location).attr("href");
  return $url.split("?")[1];
}

$(function () {
  var $clicked_item = getClickedItem();
  var $links = $("a");

  $.each($links, function () {
    //add information of clicked item to url
    $(this).attr("href",$(this).attr("href") + "?" + $(this).attr("id"));
    // highlight clicked item and display its parent lists
    if ($clicked_item == $(this).attr("id")) {
      $(this).addClass("clicked");
      // add active class to anchor tag pertaining to parent ul of clicked node
      $("#" + $(this).attr("name")).addClass("active");
    }
  });
});
