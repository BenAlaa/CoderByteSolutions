function CaesarCipher(str,num) { 

  str = str.split('').map(function(s){
      s = s.charCodeAt();
      if ((s > 64 && s < 91) || (s > 96 && s < 123)) {
        s = s+num; 
          if ((s > 90 && s < 97) || s > 122) { 
            s -= 26 
          }
      }
      return String.fromCharCode(s)})
   
   return str.join('')
         
}
   
// keep this function call here 
CaesarCipher(readline());











function CaesarCipher(str,num) { 
  let low = /[A-Z]/g;
  let up = /[a-z]/g;
 let symbol = /[^A-Za-z]/g
 let lower = 'abcdefghijklmnopqrstuvwxyz';
 let upper = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase();
 let copy = str.split('');
 
 let index = copy.map((letter,k) => {
   if(letter.match(symbol)) {
    return letter;
   } else {
     return (lower.indexOf(letter) === -1) ? upper.indexOf(letter) : lower.indexOf(letter)
   }
 });
 
 let result = copy.map((char,j) => {
   if(char.match(symbol)) {
    return char;
   } else {
     return (lower.indexOf(char) === -1) ? upper[index[j] + num] : lower[index[j] + num];
   }
 });
 
 return result.join('')
  
}
   
// keep this function call here 
CaesarCipher(readline());



















function CaesarCipher(str,num) {
  return str.split('').map(function(char) {
    return isLetter(char) ? cipheredChar(char, num) : char;
  }).join('');
}

function isLetter(char) {
  return /[a-zA-Z]/.test(char);
}

function cipheredChar(char, num) {
  var code = char.charCodeAt() + num;

  if (/[A-Z]/.test(char)) {
    var difference = code - 90;
    if (difference > 0) {
      var result = 64 + difference;
      return String.fromCharCode(result);
    } else {
      return String.fromCharCode(code);
    }
  }
  
  if (/[a-z]/.test(char)) {
    var difference = code - 122;
    if (difference > 0) {
      var result = 96 + difference;
      return String.fromCharCode(result);
    } else {
      return String.fromCharCode(code);
    }
  }
}
   
// keep this function call here 
CaesarCipher(readline());

am




















function CaesarCipher(str,num) { 
  var res='';
  var n;
  var c;
  var low=false;
  
   for(var i=0;i<str.length;i++){
     c=str.charCodeAt(i);
      if(c>=65&&c<=90){
        c+=32;
        low=true;
      }
  
      if(c + num>122){
        n = String.fromCharCode(96+(c-122)+num);
      } 
      else if(c>=97 && c<=122){
        n=String.fromCharCode(c+num);
      }
     else if(c==32){
       n = " ";
     }
     else{
       n = str.charAt(i);
     }
      
      if(low==true){
        n=n.toUpperCase();
        low=false;
      } 
      res+=n;
    } 
  
    // code goes here  
  
    return res;
           
  }
     
  // keep this function call here 
  // to see how to enter arguments in JavaScript scroll down
  CaesarCipher(readline());
  
  richardgorst received 10 points | Run code