window.addEventListener("load", () => {
  for (const box of document.querySelectorAll(".movingDiv")) {
    box.addEventListener("mouseover", event => {
      console.log(event, event.target);
      document.getElementById("result").textContent = "Triggered by " + event.target.id;
    });
  }
});
