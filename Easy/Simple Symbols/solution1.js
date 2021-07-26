function SimpleSymbols(str) {
  let reWrongSequence = /([^+]|^)[a-z]|[a-z]([^+]|$)/i;
  return !reWrongSequence.test(str);
}
   
// keep this function call here 
SimpleSymbols(readline());