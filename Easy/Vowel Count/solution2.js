
function VowelCount(str) { 
  vowels = ["a", "e", "i", "o", "u"]
  str = str.toLowerCase() 
  num_vowels = 0
  for (i = 0; i < str.length; i ++) {
  	if (vowels.includes(str[i])) {
  	  num_vowels += 1	
  	}
  }
 return num_vowels 
}
// keep this function call here 
VowelCount(readline());