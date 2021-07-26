function ExOh(str) {
  let exes = str.match(/x/g) || [];
  let oes  = str.match(/o/g) || [];

  return exes.length === oes.length;
}
   
// keep this function call here 
ExOh(readline());