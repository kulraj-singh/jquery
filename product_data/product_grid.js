var product_array, filtered_by_other_type = false;

function countTickedCheckboxes(div_id) {
  var count_ticked_checkboxes = 0;
  $(div_id + " input[type='checkbox']").each( function () {
    if ($(this).prop("checked")) {
      count_ticked_checkboxes += 1;
    }
  });
  return count_ticked_checkboxes;
}

function filterByAttribute(checkbox) {
  var selected_indexes = [], id = checkbox.filter(":checked").attr("id");
  $(product_array).each( function () {
    if (this[checkbox.attr("class")] == id) {
      selected_indexes.push(true);
    } else {
      selected_indexes.push(false);
    }
  });
  return selected_indexes;
}

function updateSelectedImages(selected_indexes, selected_by_attribute) {
  for (var i = 0 ; i < product_array.length; i += 1) {
      selected_by_attribute[i] |= selected_indexes[i];
    }
  return selected_by_attribute;
}

function getImageFromJson(current_product) {
  return $("img[src='images/" + current_product.url + "']");
}

function setArraySelection () {
  var selected_by_attribute = [];
  for (var i = 0 ; i < product_array.length; i += 1) {
    selected_by_attribute[i] = 1;
  }
  return selected_by_attribute;
}

function selectByAttribute(div_id, selected) {
  $(div_id + " input").each( function () {
    selected_indexes = filterByAttribute($(this));
    selected = updateSelectedImages(selected_indexes, selected);
  });
  if (countTickedCheckboxes(div_id) == 0) {
    selected = setArraySelection();
  }
  return selected;
}

function filterImages() {
  var selected_by_brand = [], selected_by_color = [], i = 0;
  selected_by_brand = selectByAttribute("#brand", selected_by_brand);
  selected_by_color = selectByAttribute("#color", selected_by_color);
  $(product_array).each( function () {
    image = getImageFromJson(this);
    if (selected_by_brand[i] && selected_by_color[i]) {
      image.removeClass("hidden");
      // filter by available radio button
      if ($("#available").prop("checked") && this.sold_out == 1) {
        image.addClass("hidden");
      }
    }
    i += 1;
  });
}

$(document).ready(function() {
  var product_string;
  var $checkboxes = $("input[type='checkbox']").attr("checked", false);
  // initially all radio button should be checked and all items should show
  $("#all").prop("checked", true);

  product_string = $.ajax ( {
    url : "product_grid.json",
    type : "GET",
    async: false,
    dataType : "json",
    success : function (data) {
      product_array = data;
    }
  });

  for (var i = 1; i <= product_array.length; i += 1) {
    $("#products").append("<img src='images/" + i + ".jpg'/>");
  }

  $("#toggle input:radio, input[type='checkbox']").bind("click", function () {
    $("img").addClass("hidden");
    filterImages();
  });
});
