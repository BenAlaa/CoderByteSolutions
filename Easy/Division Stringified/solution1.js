function DivisionStringified(num1,num2) { 
  let result = Math.round(num1/num2);
  
 result = result.toLocaleString();
  
  return result;
}
   
// keep this function call here 
DivisionStringified(readline());