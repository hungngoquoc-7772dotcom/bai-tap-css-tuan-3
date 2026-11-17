const days = ["Mon", "Tues", "Wed", "Thur", "Fri"];
days.push("Sat");
days.unshift("Sun");
let html = "<table border='1'><tr>";
for (const day of days) html += "<th>" + (day.length > 3 ? "<em>" + day + "</em>" : day) + "</th>";
html += "</tr>";
for (let first = 1; first <= 30; first += 7) {
  html += "<tr>";
  for (let day = first; day < first + 7; day++) html += "<td>" + (day <= 30 ? day : "") + "</td>";
  html += "</tr>";
}
document.write(html + "</table>");
