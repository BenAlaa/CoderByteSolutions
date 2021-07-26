function BinaryReversal(str) { 
  var arr = Number(str).toString(2).split("")
  while(arr.length % 8 !== 0){
      arr.unshift("0")
  }
  return parseInt(arr.reverse().join(""), 2);

}
 
// keep this function call here 
BinaryReversal(readline());