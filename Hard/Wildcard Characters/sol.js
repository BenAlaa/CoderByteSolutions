function WildcardCharacters(str) { 

  const pair = str.split(' ');
  const patterns = pair[0];
  const matchString = pair[1];

  const regexPatterns = ['^'];

  for (let i = 0, n = 1; i < patterns.length; i++) {
      if (patterns[i] === '+') {
          regexPatterns.push('[a-z]');
      } else if (patterns[i] === '*') {
          
          let repeat = 0;
          if (i + 1 < patterns.length && str[i + 1] === '{') {
              // Custom length
              repeat = Number(str[i + 2]) - 1;
              i = i + 3;
          } else {
              // Default length 3
              repeat = 2;
          }

          regexPatterns.push('([a-z])\\' + n++ + '{' + repeat + '}');
      }
  }
  regexPatterns.push('$');

  const result = new RegExp(regexPatterns.join(''), 'i');
  return String(result.test(matchString));
       
}
 
// keep this function call here 
WildcardCharacters(readline());





































function WildcardCharacters(str) {
  const pair = str.split(' ');
  const patterns = pair[0];
  const matchString = pair[1];

  const regexPatterns = ['^'];

  for (let i = 0, n = 1; i < patterns.length; i++) {
    if (patterns[i] === '+') {
      regexPatterns.push('[a-z]');
    } else if (patterns[i] === '*') {
      let repeat = 0;
      if (i + 1 < patterns.length && str[i + 1] === '{') {
        // Custom length
        repeat = Number(str[i + 2]) - 1;
        i = i + 3;
      } else {
        // Default length 3
        repeat = 2;
      }

      regexPatterns.push('([a-z])\\' + n++ + '{' + repeat + '}');
    }
  }
  regexPatterns.push('$');

  const result = new RegExp(regexPatterns.join(''), 'i');
  return String(result.test(matchString));
}
   
// keep this function call here 
WildcardCharacters(readline());









































function WildcardCharacters(str) { 
  var wildcard = str.split(" ")[0];
  var string = str.split(" ")[1];
  var index = 0;
  var match = true;
  for (var i=0; i<wildcard.length; i++) {
      if (wildcard[i] === "+") {
          if (!/[a-z]{1}/ig.test(string[index])) {
              match = false;
          }
          index++;
      }
      if (wildcard[i] === "*") {
          var repeatLen = 3;
          if (wildcard[i + 1] === "{") {
              repeatLen = parseInt(wildcard[i + 2]);
          } 
          if (string.slice(index, index + repeatLen) !== asterisk(string[index], repeatLen)) {
              match = false;
          }
          index += repeatLen;
      }
  }
  if (index !== string.length) {
      match = false;
  }
  return match;
       
}

function asterisk(char, len) {
  var string = char;
  for (var i=1; i<len; i++) {
      string += char;
  }
  return string;
}
 
// keep this function call here 
WildcardCharacters(readline());