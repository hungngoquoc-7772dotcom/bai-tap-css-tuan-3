const wrapped = new String("Test");
const literal = "Test";
document.write([ "typeof wrapped: " + typeof wrapped, "typeof literal: " + typeof literal,
  "wrapped == literal: " + (wrapped == literal), "wrapped === literal: " + (wrapped === literal),
  "Hai String object bằng nhau: " + (wrapped === new String("Test")), new Date(),
  "Math.PI: " + Math.PI, "Math.sqrt(4): " + Math.sqrt(4), "Math.random(): " + Math.random() ].join("<br>"));
