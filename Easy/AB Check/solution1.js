function ABCheck(str) {
  return /a...b|b...a/.test(str);
}
   
// keep this function call here 
ABCheck(readline());