function BinaryReversal(str) { 
  var num = Number(str);
  var newBin=[];
  
  while (num > 0) {
      newBin.push(num%2);
      num = Math.floor(num/2)
  }
  while (newBin.length%8 !==0) {
      newBin.push(0)
  }
  var ans=0, orgBin = newBin.join("").split("").reverse();
   
  for (var i=0; i<newBin.length; i++) {
      if (parseInt(orgBin[i])!==0) {
          ans+= Math.pow(2,i)
      }
  }
  return ans
  }
  // keep this function call here 
  BinaryReversal(readline());