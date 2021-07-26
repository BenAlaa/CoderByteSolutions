function SnakeCase(str) { 

  let words = str.match(/\w+/g);
  return words.map(word=> word.toLowerCase()).join('_');
  
}
 
// keep this function call here 
SnakeCase(readline());