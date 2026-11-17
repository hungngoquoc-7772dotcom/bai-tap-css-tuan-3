window.addEventListener("load", () => {
  const form = document.getElementById("sampleForm");
  const message = document.getElementById("errors");
  form.addEventListener("submit", event => {
    event.preventDefault();
    const fields = [...form.querySelectorAll('input[type="text"], input[type="password"]')];
    const empty = fields.filter(field => !field.value.trim());
    message.className = "visible";
    message.textContent = empty.length ? "The following fields can’t be empty: " + empty.map(field => field.id).join(", ") : "Thông tin hợp lệ.";
  });
});
