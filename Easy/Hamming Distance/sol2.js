function HammingDistance(strArr) {
  var count = 0;
  for(var i=0;i<strArr[0].length;i++){
    if(strArr[0].charAt(i) != strArr[1].charAt(i))count++
  }
  return count
}
   
// keep this function call here 
HammingDistance(readline());
