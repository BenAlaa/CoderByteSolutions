function DivisionStringified(num1,num2) { 
  var divided=(Math.round(num1/num2)).toString(), sub="";
  for (i=0; i<divided.length+1; i++) {
      sub+=divided.charAt(i);
      if ((i+1)%3===divided.length%3 && i!==divided.length-1) sub+=",";
  }
  return sub;
}
  
// keep this function call here 
DivisionStringified(readline());