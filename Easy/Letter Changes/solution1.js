function LetterChanges(str) { 
  var newStr = '';
  for (var i=0; i < str.length; i++) {
    var newChar;
    if (str[i] >= 'a' && str[i] <= 'z') {
      var charCode = str.charCodeAt(i);
      charCode+=1;
      if (charCode > 122) charCode = 97;
      newChar = String.fromCharCode(charCode);
    } else {
      newChar = str[i];
    }
    if (['a','e','i','o','u'].indexOf(newChar) > -1) {
      newChar = newChar.toUpperCase();
    }
    newStr += newChar;
  }
  // code goes here  
  return newStr; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterChanges(readline());