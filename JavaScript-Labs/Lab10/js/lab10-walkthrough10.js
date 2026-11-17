$(function () {
  function loadCities(url) {
    const result = $("#results").text("Đang tải…");
    $("#request-status").text("Đang gửi GET");
    $("#consume, #test-error").prop("disabled", true);
    $.ajax({url, method: "GET", dataType: "json"})
      .done(cities => {
        const list = $("<ul>");
        $.each(cities, (_, city) => list.append($("<li>").text(city.name)));
        result.empty().append(list);
        $("#request-status").text("Thành công: " + cities.length + " thành phố");
      })
      .fail((xhr, status) => {
        result.text("Không tải được dữ liệu. HTTP " + xhr.status + " (" + status + ").");
        $("#request-status").text("Yêu cầu thất bại");
      })
      .always(() => $("#consume, #test-error").prop("disabled", false));
  }
  $("#consume").on("click", () => loadCities("data/cities.json"));
  $("#test-error").on("click", () => loadCities("data/missing.json"));
});
