window.addEventListener("load", () => {
  const item = document.getElementById("div1");
  document.getElementById("result").textContent = "Loaded: " + item.textContent;
  console.log(item);
});
