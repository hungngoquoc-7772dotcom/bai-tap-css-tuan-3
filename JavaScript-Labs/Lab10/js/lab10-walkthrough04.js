$(function () {
  $(".panel").on("mousemove", event => {
    $("#message").text("x=" + event.pageX + " y=" + event.pageY);
  }).on("mouseleave", () => {
    $("#message").text("Goodbye!");
  }).on("click", () => {
    $(".panel").off("mousemove");
    $("#message").text("Stopped move reporting");
  });
});
