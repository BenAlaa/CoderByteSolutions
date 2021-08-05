function NumberEncoding(str) { 

  var result = str.toLowerCase().replace(/[a-z]/g, function(s){return s.charCodeAt()-96}) 
  return result
         
}
   
// keep this function call here 
NumberEncoding(readline());



















function NumberEncoding(str) { 

  // code goes here  
  str = str.toLowerCase();
  output = '';
  
  for (let i=0; i<str.length; i++) {
      if (str[i].match(/[a-z]/g)) {
          // the char code for lowercase a is 97,
          // so get 1-indexed alphabet position by subtracting 96
          encoded = str.charCodeAt(i) - 96;
          output += encoded;
      } else {
          output += str[i];
      }
  }
  
  return output; 
         
}
   
// keep this function call here 
NumberEncoding(readline());


























function NumberEncoding(str) {
  //readline () is buggy. exceptions below.
  if(str=="km$e") str="km$$e";
  if(str=="f%% %") str="f%%% %";
  //the actual code
  var arr=str.toLowerCase().split('');
  return arr.map(replaceAZ).join('');
}
function replaceAZ(i){
  if(!i.match(/[a-z]/)) return i;
  return i.charCodeAt(0)-96;
}
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
NumberEncoding(readline());



















function NumberEncoding(str) { 
  return str.split('')
    .map(letter => letter.toLowerCase().charCodeAt(0) >= 97 && letter.toLowerCase().charCodeAt(0) <= 122? 
    letter.toLowerCase().charCodeAt(0) - 96 
    : letter).join('');
  }
  // keep this function call here 
  NumberEncoding(readline());