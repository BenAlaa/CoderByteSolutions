function BoggleSolver(strArr) {
  const [string, words] = strArr
  const matrix = string.split(", ").map(row => row.split(""))

  const cloneArray = (array) => array.map(row => [...row])

  const search = (array, remaining, x, y) => {
    if (!remaining.length) return true
    const newArray = cloneArray(array)
    newArray[x][y] = 0

    const newRemaining = remaining.slice(1)
    const target = remaining[0]
    for (let i = x - 1; i <= x + 1; i++) {
      for (let j = y - 1; j <= y + 1; j++) {
        if (!newArray[i]) continue
        if (newArray[i][j] === target && search(newArray, newRemaining, i, j)) return true
      }
    }
  }

  const wordSearch = (word) => {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        if (matrix[i][j] === word[0] && search(matrix, word.slice(1), i, j)) return true
      }
    }
  }
  const fails = []
  for (let word of words.split(",")) {
    if (!wordSearch(word)) {
      fails.push(word)
    }
  }
  return fails.length ? fails.join(",") : true
}
   
// keep this function call here 
console.log(BoggleSolver(readline()));





































function BoggleSolver(strArr) { 
  let haystack = [];
let letters = strArr[0].replace(/\s/g, '').split(',');
let letterObj = {};
for (let i = 0; i < 4; i++) {
   let str = letters[i];
   let tempArr = str.split('');
   tempArr.forEach((letter, index) => {
       if (!letterObj[letter]) {
           letterObj[letter] = [[i, index]]
       } else {
           letterObj[letter].push([i, index]);
       }
   })
   haystack.push(tempArr);
}
let needles = strArr[1].replace(/\s/g, '').split(',');
let solutions = [];
for (let i = 0; i < needles.length; i++) {
   let word = needles[i]
   let letter = word[0]; 
   let startingLocations = letterObj[letter];
   let solution;

   if (!startingLocations) {
       break;
   }
   for (let j = 0; j < startingLocations.length; j++) {
       let item = startingLocations[j];
      
       solution = findPath(item, word, [item], word.length)
       let result = solution.find( array => array.length === word.length)
     
       if (result) {
           solutions.push(word)
           break;
       }
   }
}
let missing = needles.filter( item => !solutions.includes(item) ).join(',') 
return missing ? missing : true;

function findPath(startingPoint, workingWord, path, targetLength, returnArray, visitedSpaces) {

   returnArray = returnArray || [];
   visitedSpaces = visitedSpaces || [];

   // console.log('word to find: ', workingWord)
   workingWord = workingWord.slice(1);
   //  console.log('find', workingWord,'starting at', startingPoint)
   let row = startingPoint[0];
   let col = startingPoint[1];
    let up = row > 0 ? haystack[row - 1][col] : undefined;
    let down = row < 3 ? haystack[row + 1][col]  : undefined;
    let right = col < 3 ? haystack[row][col + 1] : undefined;
    let left = col > 0 ? haystack[row][col - 1] : undefined;
    let upLeft = col > 0 && row > 0 ? haystack[row - 1][col - 1] : undefined;
    let upRight = col < 3 && row > 0 ? haystack[row - 1][col + 1] : undefined;
    let downLeft = col > 0 && row < 3 ? haystack[row + 1][col - 1] : undefined;
    let downRight = col < 3 && row < 3 ? haystack[row + 1][col + 1] : undefined;
   // console.log(up, upRight, right, downRight, down, downLeft, left, upLeft)

   let l = workingWord[0];

   if (path.length === targetLength) {
       returnArray.push(path)
       return returnArray
   }

   function test(row, col){
       let string = JSON.stringify([row,col])
       if (!visitedSpaces.includes(string)) {
           visitedSpaces.push(string)
            let temp = [...path, [row,col]]
           if (path.length === targetLength) {
               returnArray.push(temp)
           }
           findPath([row,col], workingWord, temp, targetLength, returnArray, visitedSpaces)
       }
   }

  
   if (l === up) {
       test(row - 1,col)
   } 
   if (l === right) {
       test(row,col + 1)
   } 
   if (l === down) {
       test(row + 1,col)
   } 
   if (l === left) {
       test(row,col - 1)
   } 
   if (l === upLeft) {
       test(row - 1,col - 1)
   } 
   if (l === upRight) {
       test(row - 1,col + 1)
   } 
   if (l === downLeft) {
       test(row + 1,col - 1)
   } 
   if (l === downRight) {
       test(row + 1,col + 1)
   } 
   return returnArray;
   }
}

// keep this function call here 
console.log(BoggleSolver(readline()));





































function BoggleSolver(strArr) {
  const [string, words] = strArr
  const matrix = string.split(", ").map(row => row.split(""))

  const cloneArray = (array) => array.map(row => [...row])

  const search = (array, remaining, x, y) => {
    if (!remaining.length) return true
    const newArray = cloneArray(array)
    newArray[x][y] = 0

    const newRemaining = remaining.slice(1)
    const target = remaining[0]
    for (let i = x - 1; i <= x + 1; i++) {
      for (let j = y - 1; j <= y + 1; j++) {
        if (!newArray[i]) continue
        if (newArray[i][j] === target && search(newArray, newRemaining, i, j)) return true
      }
    }
  }

  const wordSearch = (word) => {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        if (matrix[i][j] === word[0] && search(matrix, word.slice(1), i, j)) return true
      }
    }
  }
  const fails = []
  for (let word of words.split(",")) {
    if (!wordSearch(word)) {
      fails.push(word)
    }
  }
  return fails.length ? fails.join(",") : true
}

// keep this function call here 
console.log(BoggleSolver(readline()));



































function BoggleSolver(strArr) { 

  // code goes here  
  let matrix = strArr[0].split(", ").map((row) => row.split(""));
  matrix = matrix.concat([matrix[0]]);
  const words = strArr[1].split(",");
  const missingWords = [];

  for (let i=0; i<words.length; i++) {
    const word = words[i];
    let exists = false;
    for (let j=0; j<matrix.length; j++) {
      for (let k=0; k<matrix.length; k++) {
        if (matrix[j][k] === word[0]) {
          exists = exists || Exists(copy(matrix), word.slice(1), j, k);
        }
      }
    }
    if (!exists) {
      missingWords.push(word);
    }
  }

  if (missingWords.length === 0) {
    return true;
  } else {
    return missingWords.join(",");
  }
}

function copy(array) {
  if (Array.isArray(array)) {
    return array.map(copy).slice();
  } else {
    return array;
  }
}

function Exists(matrix, wordFragment, i, j) {
  matrix[i][j] = null;
  if (wordFragment.length === 0) {
    return true;
  } else {
    let exists = false;
    for (let k=0; k<matrix.length; k++) {
      for (let l=0; l<matrix.length; l++) {
        if (Math.abs(k - i) <= 1 && Math.abs(l - j) <= 1 && matrix[k][l] === wordFragment[0]) {
          exists = exists || Exists(copy(matrix), wordFragment.slice(1), k, l);
        }
      }
    }
    return exists;
  }
}
   
// keep this function call here 
console.log(BoggleSolver(readline()));
