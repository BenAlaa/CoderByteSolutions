function BasicRomanNumerals(str) { 
  //make array of values
  var values = str.match(/[a-z]/gi).map(function(letter){
      if (letter === 'I'){
          return 1;
      } if (letter === 'V'){
          return 5;
      } if (letter === 'X') {
          return 10;
      } if (letter === 'L') {
          return 50;
      } if (letter === 'C') {
          return 100;
      } if (letter === 'D') {
          return 500;
      } if (letter === 'M') {
          return 1000;
      }
  }).reverse();
  //sum going backwards; if next val < previous, subtract it
  var value = values.reduce(function(acc, val, i){
      if (i !== 0 && val < values[i - 1]) {
          return acc - val;
      } else {
          return acc + val;
      }
  });
  // code goes here  
  return value; 
         
}
   
// keep this function call here 
BasicRomanNumerals(readline());