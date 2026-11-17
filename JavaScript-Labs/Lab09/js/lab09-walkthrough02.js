const first = document.getElementById("first");
console.log(first.firstChild, first.firstChild.nextSibling, first.parentNode);
for (const node of document.getElementById("stories").childNodes) {
  console.log(node.nodeName, node.nodeType);
  if (node.nodeType === Node.ELEMENT_NODE) node.style.backgroundColor = "#ffe393";
}
