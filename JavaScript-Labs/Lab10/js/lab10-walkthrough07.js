$(function () {
  $("figure img").on("mouseenter", function (event) {
    const src = $(this).attr("src").replace("/small/", "/medium/");
    const preview = $("<div>", {id: "preview"}).append(
      $("<img>", {src, alt: this.alt}), $("<p>").text(this.alt)
    ).css({position: "absolute", pointerEvents: "none", top: event.pageY - 10, left: event.pageX + 25});
    $(this).addClass("gray");
    preview.hide().appendTo("body").fadeIn(350);
  }).on("mousemove", event => {
    $("#preview").css({top: event.pageY - 10, left: event.pageX + 25});
  }).on("mouseleave", function () {
    $(this).removeClass("gray");
    $("#preview").remove();
  });
});
