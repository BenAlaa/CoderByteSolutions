function LCS(strArr) { 

  // code goes here  ('
  let matrix = [];
  const [rows, cols] = [strArr[0].length + 1, strArr[1].length + 1]
  for (let i = 0; i < rows; i++) {
    let rows = [];
    for (let j = 0; j < cols; j++) {
      rows.push(0);
    }
    matrix.push(rows);
  }

  for (let i = 1; i < rows; i++) {
    
    for (let j = 1; j < cols; j++) {
      if (strArr[0][i-1] === strArr[1][j-1]) {
        matrix[i][j] = matrix[i-1][j-1] + 1;
      } else {
        matrix[i][j] = Math.max(matrix[i-1][j], matrix[i][j-1]);
      }
    }
  }
  return matrix[rows-1][cols-1];

}
   
// keep this function call here 
console.log(LCS(readline()));








































function LCS(strArr) {
  const [rows, cols] = [strArr[0].length+1, strArr[1].length+1];
  const matrix = [];

  for (let i=0; i<rows; i++) {
      const row = [];
      for (let j=0; j<cols; j++) {
          row.push(0);
      }
      matrix.push(row);
  }

  for (let i=1; i<rows; i++) {
      for (let j=1; j<cols; j++) {
          if (strArr[0][i-1] === strArr[1][j-1]) {
             matrix[i][j] = matrix[i-1][j-1] + 1;
          } else {
              matrix[i][j] = Math.max(matrix[i-1][j], matrix[i][j-1]);
          }
      }
  }

  return matrix[rows-1][cols-1];
}
 
// keep this function call here 
console.log(LCS(readline()));









































function LCS(strArr) {
  const [rows, cols] = [strArr[0].length+1, strArr[1].length+1];
  const matrix = [];

  for (let i=0; i<rows; i++) {
      const row = [];
      for (let j=0; j<cols; j++) {
          row.push(0);
      }
      matrix.push(row);
  }

  for (let i=1; i<rows; i++) {
      for (let j=1; j<cols; j++) {
          if (strArr[0][i-1] === strArr[1][j-1]) {
             matrix[i][j] = matrix[i-1][j-1] + 1;
          } else {
              matrix[i][j] = Math.max(matrix[i-1][j], matrix[i][j-1]);
          }
      }
  }

  return matrix[rows-1][cols-1];
}
 
// keep this function call here 
console.log(LCS(readline()));







































function LCS(strArr) {

  /// string1
  let string1 = strArr[0]
  let possibleWords = []
  let length = string1.length
  let comboLength = Math.pow(2, length)
  let comboArray = []
  for (let i = 0; i < comboLength; i++) {
    comboArray.push(i.toString(2).padStart(length, '0'))
  }

  for (let i = 0; i < comboArray.length; i++) {
    let word = []
    for (let j = 0; j < comboArray[0].length; j++) {
      if (comboArray[i][j] === '1') word.push(string1[j])
    }
    possibleWords.push(word.join(''))
  }
  possibleWords.sort((a, b) => b.length - a.length)
  // string2
  let string2 = strArr[1]
  let possibleWords2 = []
  let length2 = string2.length
  let comboLength2 = Math.pow(2, length2)
  let comboArray2 = []
  for (let i = 0; i < comboLength2; i++) {
    comboArray2.push(i.toString(2).padStart(length2, '0'))
  }

  for (let i = 0; i < comboArray2.length; i++) {
    let word = []
    for (let j = 0; j < comboArray2[0].length; j++) {
      if (comboArray2[i][j] === '1') word.push(string2[j])
    }
    possibleWords2.push(word.join(''))
  }
  possibleWords2.sort((a, b) => b.length - a.length)

// console.log(possibleWords, possibleWords2)
  for (let i = 0; i < possibleWords.length; i++) {
    // console.log(possibleWords[i])
    if (possibleWords2.includes(possibleWords[i])) return possibleWords[i].length
  }
}

// keep this function call here 
console.log(LCS(readline()));