function BitwiseOne(strArr) {
  var result = []
  for(var i=0;i<strArr[0].length;i++){
    result.push(+strArr[0].charAt(i) || +strArr[1].charAt(i))
  }
  return result.join("")
}
   
// keep this function call here 
BitwiseOne(readline());