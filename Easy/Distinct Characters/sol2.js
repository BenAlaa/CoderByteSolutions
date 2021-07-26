function DistinctCharacters(str) { 
  return (str.split('').sort().join('').replace(/(.)(\1+)/g, '$1').length >= 10) ? 'true' : 'false';
}
DistinctCharacters(readline());