$(function () {
  $("input").attr("checked", false);

  $("td.item").bind("click", function() {
    $("td.item, td.rating").removeClass("blue");
    $(this).addClass("blue");
  });

  $("td.rating").bind("click", function () {
    var $selected_rating = $(this);
    $("td.item.blue").each(function () {
      var $item = $(this).attr("id");
      $("td.rating").removeClass("blue");
      $("input[name='" + $item + "'][value='" + $selected_rating.attr("id") + "']").attr("checked", true);
      $selected_rating.addClass("blue");
    });
  });

  $("input:radio").bind("click", function (event) {
    $("td.item, td.rating").removeClass("blue");
    $("#" + $(this).attr("name") + "," + "#" + $(this).attr("value")).addClass("blue");
  });
});
