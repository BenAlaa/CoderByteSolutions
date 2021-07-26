function PowersofTwo(num) {
  if (num === 2) { return true; }
  if (num % 2 !== 0) { return false; }
  return PowersofTwo(num/2);
}
   
// keep this function call here 
PowersofTwo(readline());