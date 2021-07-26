function CorrectPath(str) {
  var x = 0, //start x coord
      y = 0, //start y coord
      missingLetters = [],
      unknowns = str.match(/\W/g);

  //tallies current number of x and y movements
  for (var i=0; i<str.length; i++) {
      switch (str[i]) {
          case 'd': 
              y += 1;
              break;
          case 'u':
              y -= 1;
              break;
          case 'l':
              x -= 1;
              break;
          case 'r':
              x += 1;
              break;
      }
  }
     
  function addX() {
     while(x !== 4) {
         if (x > 4) {
             x--;
             missingLetters.push('l');
         } else {
             x++;
             missingLetters.push('r');
         }
     } 
  }
  
  function addY() {
      while (y !== 4) {
          if (y > 4) {
              y--;
              missingLetters.push('u');
          } else {
              y++;
              missingLetters.push('d');
          }
      }
  }
  
  if (x > y) { addX(); addY(); }
  //
  if (y >= x) { addY(); addX(); }
  
  while (missingLetters.length < unknowns.length) {
      var pos = missingLetters.length - 1;
      if (missingLetters[pos] === 'r') {x += 1; missingLetters.push('r'); addX()}
      if (missingLetters[pos] === 'l') {x -= 1; missingLetters.push('l'); addX()}
      if (missingLetters[pos] === 'd') {y += 1; missingLetters.push('d'); addY()}
      if (missingLetters[pos] === 'u') {y -= 1; missingLetters.push('u'); addY()}
  }
  
  var newStr = str.split('');
  for (var j=0; j<str.length; j++) {
      newStr[j] === '?' ? newStr[j] = missingLetters.shift() : 'null';
  }
  return newStr.join('');
}
 
// keep this function call here 
CorrectPath(readline());