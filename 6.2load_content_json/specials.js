function addHtmlToDiv($day_list, $div) {
  var $previous_color;
  // clear div and remove previous color classes
  $div.empty();
  $div.removeClass($previous_color);
  //3 use the value the user selected in the select to look up information about the special in the JSON response.
  var $day = $day_list[$("select option:selected").val().toLowerCase()];
  //4 Add some HTML about the special to the target div
  $("<h2></h2>").text($day.title).appendTo($div);
  $("<p></p>").text($day.text).appendTo($div);
  $("<img></img>").attr("src", $day.image.substring(1)).appendTo($div);
  $div.addClass($day.color);
  $previous_color = $day.color;
  //5 remove the submit button
  $("#specials li.buttons").remove();
}

$(document).ready(function() {
  //1 Append a target div after the form that's inside the #specials element
  var $div = $("<div></div>").insertAfter("#specials form");
  var changed = false, $jsonText, $day_list;

  //2  Bind to the change event of the select element
  $("select").bind("change", function () {
    if (!changed) {
      $.ajax ( {// send an Ajax request to specials.json on selection change
        url : "specials.json",
        type : "GET",
        dataType : "json",
        success : function (specials) {
          $jsonText = JSON.stringify(specials);
          $day_list = JSON.parse($jsonText);
          addHtmlToDiv($day_list, $div);
        }
      });
    changed = true;
    } else {
      addHtmlToDiv($day_list, $div);
    }
  });
});
