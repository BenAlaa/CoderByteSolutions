function RectangleArea(strArr) { 
  var x = 0, y = 0;
  strArr = strArr.join('');
  var yCoords = strArr.match(/s(-)[0-9]|s[0-9]/g);
  var xCoords = strArr.match(/[0-9]s|(-)[0-9]s/g);
  for (var i = 0; i < yCoords.length - 1; i++) {
      if (yCoords[i] != yCoords[i+1]) {
          y = Math.abs(yCoords[i] - yCoords[i+1]);
      }
      if (xCoords[i] != xCoords[i+1]) {
          x = Math.abs(xCoords[i] - xCoords[i+1]);
      }
  }
  return x*y;
}
RectangleArea(readline());