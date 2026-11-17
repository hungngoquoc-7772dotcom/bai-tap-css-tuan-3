$(function () {
  const image = $("<img>", {src: "images/art/thumbs/13030.jpg", alt: "Tranh minh họa"});
  const panel = $(".panel");
  image.insertBefore(panel);
  $("#position").on("change", function () {
    const method = this.value;
    if (["before", "after", "prepend", "append"].includes(method)) panel[method](image);
    else if (["prependTo", "appendTo", "insertBefore"].includes(method)) image[method](panel);
  });
});
