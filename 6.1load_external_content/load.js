$(document).ready(function() {
  var $blog_headlines  = $("#blog h3");
  //1 Create a target div after the headline for each blog post and 
  $("<div></div>").insertAfter($blog_headlines);
  // store a reference to it on the headline element using $.fn.data
  $.each($blog_headlines, function () {
    $(this).data("target_div", $(this).next());
  });

  //2 Bind a click event to the headline
  $blog_headlines.bind("click", function (event) {
    event.preventDefault();

    // extract the id from link
    var link = $(this).children("a").attr("href");
    var regex_for_id = /#[^.]+$/;
    var id = link.match(regex_for_id);
    // use the $.fn.load method to load the appropriate content from blog.html into the target div
    $(this).data("target_div").load("blog.html" + " " + id);
  });
});
