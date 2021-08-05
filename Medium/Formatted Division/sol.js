function FormattedDivision(num1,num2) { 
  var division = (num1/num2).toFixed(4);
  division = division.toString();
  var newString = "";

  count = -5;
  for (var i = division.length-1; i >= 0; i--) {
    if (count > 0 && count % 3 === 0) {
      newString = newString + ",";
      }
    newString += division[i];
    count += 1;
    }
  finalString = "";
  for (var i = newString.length-1; i >= 0; i--) {
    finalString += newString[i]
  }
  return finalString
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FormattedDivision(readline());















function FormattedDivision(num1,num2) { 
  var rtn="";
  var result=(num1/num2).toFixed(4).toString();
  for (i=0; i<result.length; i++) {
      rtn+=result.charAt(i);
      if ((result.length-i-6)%3===0 && i<result.indexOf(".")-1) {
          rtn+=",";
      }
  }
  return rtn.split("").join("");
  
}
 
// keep this function call here 
FormattedDivision(readline());





















function FormattedDivision(num1,num2) { 

  let decimal = ((num1 / num2)%1).toFixed(4);
  decimal = decimal.toString().substring(1);
  let integer = Math.trunc(num1 / num2).toLocaleString();
  
  return integer+decimal;
         
}
   
// keep this function call here 
FormattedDivision(readline());