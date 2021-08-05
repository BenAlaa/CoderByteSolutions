function OffBinary(strArr) { 

  // code goes here  
  d = Number(strArr[0]);
  bgiven = strArr[1];
  arrgiven = bgiven.split("");
  n = arrgiven.length;
  counter = 0;
  for (place = 0; place<n; place++){
    intpart = d%2;
    counter += (intpart != Number(arrgiven.pop()))?1:0;
    d -= intpart;
    d /= 2;
  };
  return counter; 

}
   
// keep this function call here 
console.log(OffBinary(readline()));




























function OffBinary(strArr) { 

  let decimal    = strArr[0];
  let binaryArr  = strArr[1].split('');
  
  let decToBin = Number(decimal).toString(2);
  
  let count = 0;
  
  decToBin.split('').forEach(function(val,index){
      if (val !== binaryArr[index]) {
          count++;
      }
  });
  
  return count;
}
 
// keep this function call here 
OffBinary(readline());































function OffBinary(strArray){
  let firstItem = Number(strArray[0]);
  let secondItem = strArray[1].split("");
  let convertBinary = parseInt(firstItem, 10).toString(2);
  let splitArray = convertBinary.split("");
  let notEqualArray = [];
      for(let i=0; i<splitArray.length; i++){
          if(secondItem[i] != splitArray[i]){
              notEqualArray.push(secondItem[i]);
          }
      }
      return notEqualArray.length; 
}

 
// keep this function call here 
OffBinary(readline());




























function OffBinary(strArr) { 
  // convert first number to binary
  const num1 = Number(strArr[0]).toString(2);
  let diffs = 0;
  
  // compare each digit and add up discrepancies
  for (i = 0; i < num1.length; i++) {
    if (num1[i] != strArr[1][i]) {
      diffs++;
    }
  }

  return diffs;
}
   
// keep this function call here 
OffBinary(readline());

