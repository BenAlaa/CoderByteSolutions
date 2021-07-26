function BasicRomanNumerals(str) { 
  var roman = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000};
  var number = 0;

  for (let i = 0; i <= str.length - 1; i++){
      if (roman[str[i + 1]] > roman[str[i]]){
          number += roman[str[i + 1]] - roman[str[i]];
          i += 1;
      }
      else {
          number += roman[str[i]];
      }
  }
  
  return number;
}
 
// keep this function call here 
BasicRomanNumerals(readline());