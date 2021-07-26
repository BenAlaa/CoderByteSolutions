function FizzBuzz(num) {
  let output = [];
  let str;
  
  for (let i = 1; i <= num; i++) {
      str = '';
      if (i % 3 === 0) {
          str += 'Fizz';
      }
      if (i % 5 === 0) {
          str += 'Buzz';
      }
      if (!str) {
          str = i;
      }
      output.push(str);
  }
  
  return output.join(' ');
}

FizzBuzz(readline());