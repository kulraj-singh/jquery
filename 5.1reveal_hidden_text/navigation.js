$(document).ready(function() {
  $("#blog h3").bind("click", function (event) {
    $this = $(this);
    //prevent link from opening
    event.preventDefault();
    //2 slide up any other currently showing excerpt paragraphs
    $("#blog p:visible").slideUp(1000);
    //1 slide down the excerpt paragraph related to the clicked link
    $this.parent().children("p.excerpt").slideDown(1000);
  });
});
