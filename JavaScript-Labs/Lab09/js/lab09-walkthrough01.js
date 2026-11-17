const message = document.getElementById("msgArea");
document.getElementById("pageTitle").textContent = "Even newer title";
const paragraphs = [...document.querySelectorAll("#first p")];
message.value = paragraphs.map(p => p.innerText).join("\n");
message.setAttribute("class", "hidden");
document.getElementById("features").style.backgroundColor = "green";
const result = document.createElement("p");
result.textContent = "Đã đọc " + paragraphs.length + " đoạn bằng querySelectorAll và đổi màu #features.";
document.body.appendChild(result);
