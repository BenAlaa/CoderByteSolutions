function HappyNumbers(num) {
  const converge = (num) => {
    const array = num.toString().split("")
    return array.reduce((a, b) => a + b ** 2, 0)
  }

  while (num > 9) {
    num = converge(num)
  }
  return num === 1
}

// keep this function call here 
console.log(HappyNumbers(readline()));