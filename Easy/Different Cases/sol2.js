function DifferentCases(str) { 

  let words = str.match(/(\w+)/g);
  let r = "";

  for (let i = 0; i < words.length; i++) {
      let word = words[i].toLowerCase();
      word = word.charAt(0).toUpperCase() + word.slice(1);
      r += word;
  }

  return r; 
}
 
// keep this function call here 
DifferentCases(readline());