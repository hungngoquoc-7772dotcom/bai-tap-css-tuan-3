window.addEventListener("load", () => {
  for (const field of document.querySelectorAll('input[type="text"], input[type="password"]')) {
    field.addEventListener("focus", () => { field.style.backgroundColor = "#FFE393"; });
    field.addEventListener("blur", () => { field.style.backgroundColor = "white"; });
  }
});
