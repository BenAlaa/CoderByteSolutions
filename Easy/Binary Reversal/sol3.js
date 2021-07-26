function BinaryReversal(str) { 
  var n = +str;
  var binary = n.toString(2);
  binary = binary.split('').reverse();
  while(binary.length % 8 !== 0){
      binary.push('0');
  }
  binary = binary.join('');
  return String(Number.parseInt(binary,2));
  
}
 
// keep this function call here 
BinaryReversal(readline());