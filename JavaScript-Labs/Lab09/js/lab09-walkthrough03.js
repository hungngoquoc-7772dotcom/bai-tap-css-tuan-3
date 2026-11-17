const paragraph = document.createElement("p");
paragraph.appendChild(document.createTextNode("This is programmatically created"));
document.getElementById("first").appendChild(paragraph);
document.getElementById("iconList").removeChild(document.getElementById("deleteThisOne"));
