$(function () {
  $("button").on("click", function () {
    $("#box").stop(true).css({left: 0, top: 0, opacity: 0.4, height: 100})
      .animate({left: Math.min(495, window.innerWidth - 160), opacity: 1, height: 50})
      .animate({top: 400, opacity: 0.2})
      .animate({height: 200}, 2000);
  });
});
