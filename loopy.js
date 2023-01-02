function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}

function buildTriangle(length) {
  var triangle = "";
  for (var k = 1; k <= length; k++) {
    triangle += makeLine(k);
  }
  return triangle;
}
console.log(buildTriangle(10));
