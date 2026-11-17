const image = document.getElementById("mainImage");
const button = document.getElementById("testButton");
const content = document.getElementById("content");
let timer;
image.addEventListener("mouseover", () => { image.className = "makeItGray"; });
image.addEventListener("mouseout", () => { image.className = "makeItNormal"; });
button.addEventListener("click", () => {
  clearTimeout(timer);
  if (button.textContent.trim() === "Hide") {
    button.textContent = "Show";
    content.className = "makeItDisappear";
    timer = setTimeout(() => { content.style.display = "none"; }, 1000);
  } else {
    button.textContent = "Hide";
    content.style.display = "block";
    timer = setTimeout(() => { content.className = "makeItNormal"; }, 50);
  }
});
