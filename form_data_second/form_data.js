var id = 1, max_age = 0;

function removeColor(color) {
  $("tr").removeClass(color);
}

function clearColors() {
  removeColor("red");
  removeColor("green");
  removeColor("yellow");
}

function resetFilters() {
  // reset selectors and de highlight the rows
  $("input[name='gender_selector']").attr("checked", false);
  $("#age_selector").val("value");
  clearColors();
}

function generateCell($cell, $value, attributeName, fieldName) {
  $cell.append($value);
  $cell.addClass(fieldName);
  $cell.attr(attributeName, $value);
  return $cell;
}

function addRow() {
  // fetch the entered name, age and gender
  var $cell = [],
      $table = $("#table"),
      $name = $("#name").val(),
      $age = $("#age").val(),
      $gender = $("input[name='gender']:checked").attr("value"),
      $row = $("<tr class='data'></tr>").appendTo($table);
  for (i =0; i < 4; i += 1) {
    $cell[i] = $("<td></td>").appendTo($row);
  }
  // generate cells for the id, name, gender and age columns
  $cell[0].append(id);
  $cell[1].append($name);
  $cell[2] = generateCell($cell[2], $gender, "name", "gender");
  $cell[3] = generateCell($cell[3], $age, "data-age", "age");

  // update maximum age with every row entry
  max_age = max_age > parseInt($age, 10) ? max_age : $age;
  // auto increment the id
  id += 1;
}

function generateOptionString(age_limit, upper_age, age_limit, upper_age) {
  // store the lower age limit and upper age limit in data attributes in current option
  var optionString = "<option data-lower-age='" + age_limit
                   + "' data-upper-age='" + upper_age + "'>"
                   + age_limit + " to " + upper_age
                   + "</option>";
  return optionString;
}

function generateDropdownOptions() {
  var $age_selector = $("#age_selector");
  $age_selector.empty();
  $("<option value='select'>select</option>").appendTo($age_selector);
  // generate age groups with range = 10 upto the maximum age
  for (var age_limit = 1; age_limit < max_age; age_limit += 10) {
    var upper_age = age_limit + 9;
    var optionString = generateOptionString(age_limit, upper_age, age_limit, upper_age);
    $(optionString).appendTo($age_selector);
  }
}

function isEmpty(textbox_id) {
  return !$(textbox_id).val().trim();
}

function isUncheckedRadioButtons() {
  return !($("#male").attr("checked") || $("#female").attr("checked"));
}

function validate($form) {
  if (isEmpty("#name") || isEmpty("#age") || isUncheckedRadioButtons()) {
    alert("please enter your details");
    return false;
  }
  addRow();
  generateDropdownOptions();
  return false;
}

$(function(){
  $("input[type='radio']").attr("checked", false);

  // click event handler for the gender and age selectors
  $("#selection_form input[name='gender_selector'], #age_selector").bind("click", function() {
  $selected_gender = $("input[name='gender_selector']:checked");
  clearColors();
  // find minimum and maximum age in the selected age category
  $selected_option = $("#age_selector option:selected");
  $lower_age = parseInt($selected_option.attr("data-lower-age"), 10);
  $upper_age = parseInt($selected_option.attr("data-upper-age"), 10);
  
  //highlight the rows as per selection
  $("tr.data").each( function () {
    var $age = parseInt($(this).children("td.age").attr("data-age"), 10);
    // condition for only gender match
    if ($(this).children("td.gender").attr("name") == $selected_gender.attr("value")) {
      $(this).addClass("green");
      // condition for only age match
      if ($age >= $lower_age && $age <= $upper_age) {
        $(this).addClass("yellow");
      }
    } else {
      // condition for both gender and age match
      if ($age >= $lower_age && $age <= $upper_age) {
        $(this).addClass("red");
      }
    }
   });
  });
});
