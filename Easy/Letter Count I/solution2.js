function LetterCountI(str) { 
  //find number of repeated letters for each word
      //get a count for each letter in a word
          //if that word appears more than once
          //number of repeats++
  //get words from a string by splitting on the spaces
  //iterate through each word and plug that word into helper function
      //compare number of repeats to highest number of repeats word
  //return most repeated
  var mostRepeatedWord;
  var words = str.split(' ');
  for (var i = 0; i < words.length; i++) {
      var word = words[i];
      if (mostRepeatedWord === undefined || numRepeats(word) > numRepeats(mostRepeatedWord)) {
          mostRepeatedWord = word
      }
  }
  
  if (numRepeats(mostRepeatedWord) === 0) {
      return -1
  } else return mostRepeatedWord
}
 
function numRepeats(word) {
  var repeats = 0;
  var letters = word.split('');
  var letterCount = {};
  for (var i = 0; i < letters.length; i++) {
      var letter = letters[i];
      letterCount[letter] = letterCount[letter] + 1 || 1
  }
  for (var letter in letterCount) {
      if (letterCount[letter] > 1) {
          repeats++;
      }
  }
  return repeats;
}   
// keep this function call here 
LetterCountI(readline());