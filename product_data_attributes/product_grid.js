function countTickedCheckboxes(div_id) {
  var count_ticked_checkboxes = 0;
  $(div_id + " input[type='checkbox']").each( function () {
    if ($(this).attr("checked")) {
      count_ticked_checkboxes += 1;
    }
  });
  return count_ticked_checkboxes;
}

function filter() {
  var selector_string = "", count_checked_brands, count_checked_colors;
  count_checked_brands = countTickedCheckboxes("#brand"), count_checked_colors = countTickedCheckboxes("#color");
  $("#brand input").each( function() {
    if ($(this).attr("checked") || count_checked_brands == 0) {
      var brand = $(this).attr("id");
      $("#color input").each( function() {
        if ($(this).attr("checked") || count_checked_colors == 0) {
          selector_string += "#products > div";
          if (count_checked_brands > 0) {
            selector_string += "[data-brand='" + brand + "']";
            
          }
          if (count_checked_colors > 0) {
            selector_string += "[data-color='" + $(this).attr("id") + "']";
            
          }
          if ($("#available").attr("checked")) {
            selector_string += "[data-sold-out=0]";
          }
          selector_string += ",";
        }
        if (count_checked_colors == 0) {
          return false;
        }
      });
    }
    if (count_checked_brands == 0) {
      return false;
    }
  });
  console.log(selector_string);
  $(selector_string).show();
}

$(document).ready(function() {
  $("input[type='checkbox']").attr("checked", false);
  $("#all").attr("checked", true);
  $("div > input").click(function() {
    $("#products > div").hide();
    filter();
  });
});
