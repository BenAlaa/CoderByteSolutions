function CharacterRemoval(strArr) { 

  let arr1=strArr.slice(0,1);
  let arr2= strArr.slice(1)[0].split(",");
  let word= arr1[0].split("");
  let j=0;
  let results=[];
  while ( j < arr2.length){
    let k=0, l =0,remove=0;
    let arr3= arr2[j].split("");
    while(arr3.length && l<word.length){
      if(word[l] == arr3[0]){
        l++;
        arr3.shift();
      }
      else {
        l++;
        remove++;
      }
    }
    while(l<word.length && !arr3.length){
      remove++;
      l++;
    }
    if(!arr3.length){
      results.push(remove);
    }
    
    j++;
  }
  if(results.length === 0){
    return -1;
  }
  // code goes here  
  return Math.min(...results); 

}
   
// keep this function call here 
console.log(CharacterRemoval(readline()));


































function CharacterRemoval(strArr) { 

  let arr1=strArr.slice(0,1);
  let arr2= strArr.slice(1)[0].split(",");
  let word= arr1[0].split("");
  let j=0;
  let results=[];
  while ( j < arr2.length){
    let k=0, l =0,remove=0;
    let arr3= arr2[j].split("");
    while(arr3.length && l<word.length){
      if(word[l] == arr3[0]){
        l++;
        arr3.shift();
      }
      else {
        l++;
        remove++;
      }
    }
    while(l<word.length && !arr3.length){
      remove++;
      l++;
    }
    if(!arr3.length){
      results.push(remove);
    }
    
    j++;
  }
  if(results.length === 0){
    return -1;
  }
  // code goes here  
  return Math.min(...results); 

}
   
// keep this function call here 
console.log(CharacterRemoval(readline()));





































// see if str1 includes every letter in str2
function includes(str1, str2) {
  if (str1.length < str2) return false;
  
  // the index of current letter on str2
  var cursor = 0;
  for (var i = 0; i < str1.length; i++) {
      if (str1[i] === str2[cursor]) {
          cursor++;
      }
  }
  
  return cursor === str2.length;
}

function CharacterRemoval(strArr) { 
  var wrongWord = strArr[0];
  var dictionary = strArr[1].split(',');

  var minRemoveCount = Number.MAX_SAFE_INTEGER;
  for (var word of dictionary) {
      if (includes(wrongWord, word)) {
          // word can be found in this string
          var removeCount = wrongWord.length - word.length;
          if (removeCount < minRemoveCount) {
              minRemoveCount = removeCount;
          }
      }
  }

  return minRemoveCount === Number.MAX_SAFE_INTEGER ? -1 : minRemoveCount;
}
 
// keep this function call here 
CharacterRemoval(readline());



































function CharacterRemoval(strArr) { 

  // It's like a simplified version of edit distance
  
  let word = strArr.shift();
  
  strArr = strArr[0].split(',');
  
  let minDeletions = Number.MAX_SAFE_INTEGER;
  
  strArr.forEach(dict => {
      let edist = editDistance(word, dict);
      
      if (edist !== -1) {
          minDeletions = Math.min(minDeletions, edist);
      }
  });
  
  return (minDeletions === Number.MAX_SAFE_INTEGER) ? -1 : minDeletions;
}


// Edit Distance using WagnerÃ¢â¬âFischer algorithm
// https://en.wikipedia.org/wiki/Wagner%E2%80%93Fischer_algorithm
// return -1 if not possible using only deletions,
// otherwise return the number of deletions required
function editDistance(wordA, wordB) {
  let matrix = [];
  
  // Initailize blank 2D array
  for (let row = 0; row <= wordA.length; row++) {
      let r = [];
      for (let col = 0; col <= wordB.length; col++) {
          r.push('');
      }
      matrix.push(r);
  }
  
  matrix[0][0] = 0;
  
  // Populate 1...n edit distance from ÃÂµ vertically (deletes)
  for (let i = 1; i <= wordA.length; i++) {
      matrix[i][0] = i;
  }
  
  // Populate 1...n edit distance from ÃÂµ horizontally (insertions)
  for (let i = 1; i <= wordB.length; i++) {
      matrix[0][i] = i;
  }
  
  // Iterate over rest of matrix starting at (1,1)
  for (let row = 1; row <= wordA.length; row++) {
      for (let col = 1; col <= wordB.length; col++) {
          if (wordA[row - 1] === wordB[col - 1]) {
              // Equal, no change
              matrix[row][col] = matrix[row - 1][col - 1];
          } else {
              // Usually there would be a Math.min() function here
              matrix[row][col] = matrix[row - 1][col] + 1; // deletion, also using 1 for cost function
              // insertion
              // substition
          }
      }
  }

  let edist = matrix[wordA.length][wordB.length]
 
  return (edist > wordA.length) ? -1 : edist;
}
 
// keep this function call here 
CharacterRemoval(readline());