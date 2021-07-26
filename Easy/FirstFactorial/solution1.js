function FirstFactorial(num) { 
  return (num === 1 ? 1 : num * FirstFactorial(num - 1));
}
 
// keep this function call here 
FirstFactorial(readline());