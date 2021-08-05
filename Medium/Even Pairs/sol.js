function EvenPairs(str) { 
  var output = false
for(var y = 0; y < str.length - 1; y++) {
    if(!isNaN(str[y]) && str[y] % 2 === 0) {
        for(var x = y+1; x < str.length; x++) {
            if(isNaN(str[x])) {
                break;
            }
            else if(str[x] % 2 === 0) {
                output = true
            }
        }
    }
}
return output
}
 
// keep this function call here 
EvenPairs(readline());






















function EvenPairs(str) { 

  return str.split(/\D/gi).some(e => e % 2 === 0 && e.toString().length > 1); 
         
}
   
// keep this function call here 
EvenPairs(readline());






























function EvenPairs(str) { 
  for (var i = 0; i < str.length; i++) {
      if (str[i] % 2 === 0 && str[i+1] % 2 === 0) {
          return "true";
      } else if (str[i] % 2 === 0 && str.slice(i+1, i+3) % 2 === 0) {
          return "true";
      }
  }
  return "false"    ;   
}

EvenPairs(readline());



















function EvenPairs(str) { 
  var digits=str.split(/\D+/);
  for (i=0; i<digits.length; i++) {
      var count=0;
      for (j=0; j<digits[i].toString().length; j++) {
          if (parseFloat(digits[i].toString().charAt(j))%2===0) count++;
      }
      if (count>=2) return true;
  }
  return false;
}
   
// keep this function call here 
EvenPairs(readline());

