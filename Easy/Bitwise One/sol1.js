function BitwiseOne(strArr) { 
  var newStr = ''
  var string1 = strArr[0];
  var string2 = strArr[1];
  
  for (var i = 0; i < string1.length; i++) {
      if (string1[i] === '0' && string2[i] === '0') {
          newStr += '0'
      } else {
          newStr += '1'
      }
  }
  return newStr;
}
 
// keep this function call here 
BitwiseOne(readline());