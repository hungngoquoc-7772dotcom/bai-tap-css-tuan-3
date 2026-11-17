$(function () {
  $("#consume").on("click", () => {
    $.getJSON("data/cities.json", cities => {
      const list = $("<ul>");
      $.each(cities, (_, city) => list.append($("<li>").text(city.name)));
      $("#results").empty().append(list);
    }).fail(() => $("#results").text("Không tải được danh sách thành phố."));
  });
});
