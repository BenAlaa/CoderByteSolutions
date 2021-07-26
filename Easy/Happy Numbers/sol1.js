function getDigits(num) {
  return num.toString().split('').map(char => parseInt(char, 10));
}

function HappyNumbers(num) { 
  let happy = num;

  while (happy > 9) {
    happy = getDigits(happy).reduce((prev, next) => {
      return prev + Math.pow(next, 2);
    }, 0)
  }

  return happy === 1; 
}
   
// keep this function call here 
console.log(HappyNumbers(readline()));