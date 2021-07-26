function FirstFactorial(num) { 

  var fac = 1;
  for (var i = 2; i <= num; i++) {
    fac *= i;
  }
   
  return fac;
}
 
         

// keep this function call here 
FirstFactorial(readline());