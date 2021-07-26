function LetterChanges(str) { 
  str = str.replace(/[a-zA-Z]/g, function(ch) {
    if (ch === 'z') return 'a';
    else if (ch === 'Z') return 'A';
    else return String.fromCharCode(ch.charCodeAt(0) + 1);
  });
 
  return str.replace(/[aeiou]/g, function(ch) {
    return ch.toUpperCase();
  });
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterChanges(readline());