function DistinctCharacters(str) { 
  let chars = new Set(str)
  return chars.size >= 10 ? 'true' : 'false'
}
DistinctCharacters(readline());