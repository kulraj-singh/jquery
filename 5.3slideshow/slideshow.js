function createNavigationArea($slideshow) {
  var $navigation_area = $("<ul id='navigation_area'></ul>").insertAfter($slideshow);
  $("<li id='number_images' >number of images </li>").appendTo($navigation_area);
  $("<li id='which_image' > which image?</li>").appendTo($navigation_area);
  $("<ul><li></li></ul>").appendTo($navigation_area.children("li"));

  // write the number of items
  $("#number_images li").append($("#slideshow li").length);
}

function slideshow(i) {
  $("#slideshow li:nth-child(" + i + ")").fadeIn(function () {
    $("#which_image li").text($(this).children("img").attr("alt"));
    $(this).delay(2000);
    $(this).fadeOut(function () {
      i = (i == $("#slideshow li").length) ? 1 : i + 1;
      slideshow(i);
    });
  });
}

$(document).ready(function() {
  //1  Move the #slideshow element to the top of the body.
  var $slideshow = $("#slideshow");
  $slideshow.insertBefore("#header");

  $("#slideshow li").hide();
  createNavigationArea($slideshow);

  slideshow(1);//start from first element
});
