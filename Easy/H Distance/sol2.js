function HDistance(strArr) { 
  let total = 0;
  let firstStr = strArr[0];
  let secondStr = strArr[1];
  
  for (let i=0; i< firstStr.length; i++) {
      if (firstStr[i] != secondStr[i]) {
          total++;
      }
  }
  return total;
  
  
}
 
// keep this function call here 
HDistance(readline());