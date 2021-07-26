function AdditivePersistence(num) {
  var counter = 0;

  while (num > 9) {
    num = sumDigits(num);
    counter++;
  }
  return counter;
}

function sumDigits(num) {
  return num.toString().split('').reduce(function(sum, number) {
    return sum + Number(number);
  }, 0);
}
   
// keep this function call here 
AdditivePersistence(readline());