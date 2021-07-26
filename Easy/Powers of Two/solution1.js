function PowersofTwo(num) {
  while(num > 2) {
    num = num / 2;
  }
  return num === 2;
}
   
// keep this function call here 
PowersofTwo(readline());