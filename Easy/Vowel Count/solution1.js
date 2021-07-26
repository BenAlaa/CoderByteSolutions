function VowelCount(str) { 
  return str.match(/[aeiou]/ig)!==null?str.match(/[aeiou]/ig).length:0; 
}
VowelCount(readline());