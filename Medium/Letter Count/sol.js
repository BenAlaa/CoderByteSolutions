function LetterCount(str) { 

  var letMap = {};
 var words = str.split(' ');
 var maxCount = 0;
 for(var i=0;i<words.length;i++){
   var letMap = {};
   for(var j=0;j<words[i].length;j++){
     letMap[words[i][j]] = letMap[words[i][j]] + 1 || 1;
     if(letMap[words[i][j]] > maxCount){
       maxCount = letMap[words[i][j]];
       var maxWord = words[i];
     }
   }
 }
 if(maxCount === 1) return -1
 return maxWord;
        
}
  
// keep this function call here 
LetterCount(readline());














function LetterCount(str) {
  const strArr = str.split(' ');
  let result = -1;
  let highestRepeat = 0;
  for (let i = 0; i < strArr.length; i++) {
    let word = strArr[i].toLowerCase();
    let counter = 0;
    let letters = {};
    for (let j = 0; j < word.length; j++) {
      console.log(word)
      for (let k = 0; k < word.length; k++) {
        if (k === j) { continue; }
        if (word[k] === word[j]) {
          counter++;
        }
      }
      if (counter > highestRepeat) {
        highestRepeat = counter;
        result = strArr[i];
      }
    }
  }
  // code goes here  
  return result; 
}
   
// keep this function call here 
LetterCount(readline());

EmperorDuny received 10 points | Run code





























function LetterCount(str) { 
  var words = str.split(' ');
  var mostRepeated;
  
  for (var i = 0; i < words.length; i++) {
      var word = words[i];
      if (mostRepeated === undefined || numRepeats(word) > numRepeats(mostRepeated)) {
          mostRepeated = word;
      }
  }
 
  if (numRepeats(mostRepeated) === 0) {
    return -1 
  } else {
    return mostRepeated
  }
       
}

function numRepeats(word) {
  var letterCount = {};
  var letters = word.toLowerCase().split('');
  
  for (var i = 0; i < letters.length; i++) {
      var letter = letters[i];
      letterCount[letter] = letterCount[letter]+1 || 1
  }
  
  var repeats = Object.keys(letterCount).filter( function(letter) {
    
      return letterCount[letter] > 1;
  })
  return repeats.length
  
} 
 
// keep this function call here 
LetterCount(readline());
