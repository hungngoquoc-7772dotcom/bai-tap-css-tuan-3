$(function () {
  const message = $("#msgArea");
  message.val("My class is " + message.attr("class"));
  $("#first").html("<h2>New Title</h2>");
  $("button").css({backgroundColor: "red", color: "white"});
  $("body").css("background-color", "ivory");
  $(".center-icons").addClass("selected");
});
