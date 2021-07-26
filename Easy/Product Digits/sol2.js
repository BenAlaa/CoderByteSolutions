function ProductDigits(num) {
  var digits = '';
  var min = null;
  for(var i = 0; i <= num; i++){
      for(var j = 0; j <= num; j++){
          if(i * j === num){
              digits += i;
              digits += j;
              if(digits.length < min || min === null){
                  min = digits.length;
              }
          }
          digits = '';
      }
  }
return min; 
}
 
// keep this function call here 
ProductDigits(readline());