function BinaryConverter(str) { 

  // easy built-in way
  return parseInt(str, 2);
  
  //for fun, to see if I could do it manually
  /*
  let decimal = 0;
  let strArr = str.split('').reverse(); // reverse the array since binary #s are stored right->left
  for (let i=0; i<strArr.length; i++) {
      if (strArr[i] == "1") {
          decimal += Math.pow(2, i);
      }
  }
   return decimal;   
   */
}
   
// keep this function call here 
BinaryConverter(readline());















function BinaryConverter(str) { 

  return parseInt(str, 2)
}
   
// keep this function call here 
BinaryConverter(readline());















