function CountingAnagrams(str) { 

  // code goes here
  var arr = [...new Set(str.split(" "))];
  arr = arr.map(str => str.split('').sort().join(''))
  var uniquearr = [...new Set(arr)];
  return arr.length - uniquearr.length; 

}
   
// keep this function call here 
console.log(CountingAnagrams(readline()));





























function CountingAnagrams(str) { 
  const words = str.split(" ")
  const sortedWords = words.map((word) => word.split("").sort().join(""));

  const anagrams = {};
  sortedWords.forEach((word, i) => {
    if (!anagrams[word]) anagrams[word] = new Set();
    anagrams[word].add(words[i]);
  });

  return Object.values(anagrams).reduce((total, current) => total + current.size - 1, 0);
}
   
// keep this function call here 
console.log(CountingAnagrams(readline()));







































function CountingAnagrams(str) { 
  const words = str.split(" ")
  const sortedWords = words.map((word) => word.split("").sort().join(""));

  const anagrams = {};
  sortedWords.forEach((word, i) => {
    if (!anagrams[word]) anagrams[word] = new Set();
    anagrams[word].add(words[i]);
  });

  return Object.values(anagrams).reduce((total, current) => total + current.size - 1, 0);
}
   
// keep this function call here 
console.log(CountingAnagrams(readline()));





































function permute(arr) {
  let count = Array(arr.length).fill(0);
  const results = [arr.slice()];
  let i = 0;
  while (i < arr.length) {
    if (count[i] < i) {
      if (i % 2 === 0) {
        const temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
      } else {
        const temp = arr[count[i]];
        arr[count[i]] = arr[i];
        arr[i] = temp;
      }
      results.push(arr.slice());
      count[i]++;
      i = 0;
    } else {
      count[i] = 0;
      i++;
    }
  }
  return results;
}

function calcAnagrams(word) {
  const arr = word.split("");
  let permutations = permute(arr);
  permutations = permutations.map(p => p.join(""));
  return Array.from(new Set(permutations));
}

function CountingAnagrams(str) {
  const wordSet = new Set(str.split(" "));
  let wordArr = Array.from(wordSet);
  let count = 0;
  wordArr.forEach(word=>{
    wordSet.delete(word);
    const anagrams = calcAnagrams(word);
    anagrams.forEach(gram=>{
      if(wordSet.has(gram)){
        count += 1;
        wordSet.delete(gram)
      }
    })
  })
  return count;
}
   
// keep this function call here 
console.log(CountingAnagrams(readline()));