function FizzBuzz(num) { 
  let strArr = []
  for (let i = 1; i <= num; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
          strArr.push('FizzBuzz')
      }
      else if (i % 3 === 0) {
          strArr.push('Fizz')
      }
      else if (i % 5 === 0) {
          strArr.push('Buzz')
      }
      else {
          strArr.push(i)
      }
  }
  return strArr.join(' ')
}
 
// keep this function call here 
FizzBuzz(readline());