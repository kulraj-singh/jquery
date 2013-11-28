$(document).ready(function() {
  var list_current, list_next, list_first, list_siblings;

  //1 Select all of the image elements on the page; log each image's alt attribute.
  $("img").each(function() {
    console.log( "1 : alt attribute of the image element: " + $(this).attr("alt"));
  });

  //2 Select the search input text box, then traverse up to the form and add a class to the form.
  $("label[for='q']").parent("#search").addClass("blue");

  //3 Select the list item inside #myList that has a class of "current" and remove that class from it;
  //add a class of "current" to the next list item.
  $list_current = $("#myList li.current").removeClass("current");

  console.log("3: class of " + $list_current.text() + " after class removal: " + $list_current.attr("class"));
  $list_next = $list_current.next("li").attr("class","current");
  console.log("class added to " + $list_next.text() + ": " + $list_next.attr("class"));

  //4 Select the select element inside #specials; traverse your way to the submit button.
  $("#specials select").closest("ul").find("input").addClass("green");

  //5 Select the first list item in the #slideshow element; add the class "current" to it,
  // and then add a class of "disabled" to its sibling elements.
  $list_first = $("#slideshow li:first").addClass("current");
  console.log("5: class of list item 1: " + $list_first.attr("class"));
  $list_siblings = $list_first.siblings();
  $list_siblings.addClass("disabled");
  console.log("class of sibling 1: " + $list_first.next("li").attr("class"));
  console.log("class of sibling 2: " + $list_siblings.eq(1).attr("class"));
});
