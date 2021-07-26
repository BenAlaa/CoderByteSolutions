function AlphabetSoup(str) { 
  var letters = str.split('').sort((a,b)=> a > b );
  return letters.join('')
}
 
// keep this function call here 
AlphabetSoup(readline());