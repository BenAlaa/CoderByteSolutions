function ThreeNumbers(str) { 
  var words = str.split(' ');
  var numbersOfWords = words.map(word => word.match(/\d+/g));
  
  for (var numbers of numbersOfWords) {
      var digits = numbers.join('');
      if (digits.length !== 3)
          return false;
          
      if (numbers.length !== numbers.filter(number => number.length < 3).length) 
          return false;

      if ((digits[0] === digits[1]) ||
          (digits[1] === digits[2]) ||
          (digits[2] === digits[0]))
          return false;
  }
  
  return true;
}
 
// keep this function call here 
ThreeNumbers(readline());