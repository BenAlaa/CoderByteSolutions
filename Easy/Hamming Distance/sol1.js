function HammingDistance(strArr) {
  var hammingDistance = 0;
  var firstWord = strArr[0].split('');
  var secondWord = strArr[1].split('');
  firstWord.forEach(function(char, i) {
    if (char !== secondWord[i]) {
      hammingDistance++;
    }
  });
  return hammingDistance;
}
   
// keep this function call here 
HammingDistance(readline());