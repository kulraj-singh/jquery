var $div_number = 1;

$(function() {
  $("#container").delegate("div","click", function () {
    // highlight the clicked div
    $(this).addClass("green");
    $(this).siblings().removeClass("green");
    //remove the last div if clicked
    if ($(this).is(":last-child")) {
      $(this).remove();
      $div_number -= 1;
    }
  });

  // add a div to the stack with an incremental number(starting from 1)
  $("button").live("click", function () {
    $("<div></div>").text($div_number).appendTo($("#container"));
    $div_number += 1;
  });
});
