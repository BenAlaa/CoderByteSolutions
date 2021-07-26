function NumberReverse(str) { 

  // code goes here  
  let strArray = str.split(/\s+/);
  let len = strArray.length;
  let result = [];

  for(let i = 0; i < len ; i++) {
      result.unshift(strArray[i]);
  }
  return result.join(" "); 

}
   
// keep this function call here 
console.log(NumberReverse(readline()));