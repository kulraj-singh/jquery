$(document).ready(function() {
    var count_hidden, count_alt;
    //1
    $("div.module").addClass("yellow");

    //2
    $("#myListItem").addClass("green");
    $("#myList li:nth-child(3)");
    $("#myList li").eq(2);
    // i think first method is best since we are directly matching by the id

    //3
    $("label[for='q']").addClass("blue");

    //4
    count_hidden = $(":hidden").length;
    console.log("hidden elements= " + count_hidden);

    //5
    count_alt = $("[alt]").length;
    console.log("elements with alt= " + count_alt);

    //6
    $("tr:odd").addClass("red");
    });
