function OneDecremented(num) { 
  const numStr = num.toString();
  var count = 0;
  for (let i = 1; i < numStr.length; i++) {
    if (numStr[i] == numStr[i-1] - 1) count++;
  }
  return count;
}
OneDecremented(readline());