function MultiplicativePersistence(num) { 

  counter = 0
  
  function test(num) {
    
    var numArr = num.toString().split('').map(x => parseInt(x))
    var product = numArr.reduce((a, b) => a * b)
    
    if (numArr.length > 1) {
      num = product
      counter++
      test(num)
    }
  }
  test(num)
  return counter
}
   
// keep this function call here 
MultiplicativePersistence(readline());