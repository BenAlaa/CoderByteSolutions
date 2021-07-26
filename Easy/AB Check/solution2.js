function ABCheck(str) {
  var letters = str.toLowerCase().split('');
  var substrings = [];
  for (var i = 0; i < letters.length; i++) {
    if (letters[i] === 'a') {
      for (var j = (i+1); j < letters.length; j++) {
        if (letters[j] === 'b') {
          substrings.push(str.slice((i+1), j));
        }
      }
    } else if (letters[i] === 'b') {
      for (var j = (i+1); j < letters.length; j++) {
        if (letters[j] === 'a') {
          substrings.push(str.slice((i+1),j));
        }
      }
    }
  }

  var characterCheck = substrings.filter(function(x){ return x.length === 3; });
  return characterCheck.length !== 0 ? true : false;
}
   
// keep this function call here 
ABCheck(readline());