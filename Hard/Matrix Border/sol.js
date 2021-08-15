function MatrixBorder(strArr) { 

  // code goes here  
  let swaps = 0

  if(strArr[0].indexOf("0") !== -1) {
    swaps++
  }
  if(strArr[strArr.length-1].indexOf("0") !== -1) {
    swaps++
  }
  if(strArr.some(it => it[1] === "0")) {
    swaps++
  }
  if(strArr.some(it => it[it.length-2] === "0")) {
    swaps++
  }

  return swaps
}
   
// keep this function call here 
console.log(MatrixBorder(readline()));






































function MatrixBorder(strArr) { 

  // code goes here  
  let swaps = 0

  if(strArr[0].indexOf("0") !== -1) {
    swaps++
  }
  if(strArr[strArr.length-1].indexOf("0") !== -1) {
    swaps++
  }
  if(strArr.some(it => it[1] === "0")) {
    swaps++
  }
  if(strArr.some(it => it[it.length-2] === "0")) {
    swaps++
  }

  return swaps
}
   
// keep this function call here 
console.log(MatrixBorder(readline()));



































function swapRows(matrix, row1, row2) {
  var newMatrix = matrix.map(rowArr => rowArr.slice());
  var temp = newMatrix[row1];
  newMatrix[row1] = newMatrix[row2];
  newMatrix[row2] = temp;
  return newMatrix;
}

function swapColumns(matrix, col1, col2) {
  var newMatrix = matrix.map(rowArr => rowArr.slice());
  for (var row of newMatrix) {
      var temp = row[col1];
      row[col1] = row[col2];
      row[col2] = temp;
  }
  return newMatrix;
}

// check if the matrix has all 1's on the edges and all 0's inside
function check(matrix) {
  // check top and bottom rows if they are all 1's
  if (matrix[0].filter(num => num !== 1).length !== 0) return false;
  if (matrix[matrix.length - 1].filter(num => num !== 1).length !== 0) return false;
  // check left edge and right edge columns too
  if (matrix.map(rowArr => rowArr[0]).filter(num => num !== 1).length !== 0) return false;
  if (matrix.map(rowArr => rowArr[matrix[0].length - 1]).filter(num => num !== 1).length !== 0) return false;
  
  // check inner numbers if they are all 0's
  var innerMatrix = matrix.slice(1, matrix.length - 1).map(innerRowArr => innerRowArr.slice(1, innerRowArr.length - 1));
  for (row of innerMatrix) {
      if (row.filter(num => num !== 0).length !== 0) return false;
  }
  // all checks passed
  return true;
}

function MatrixBorder(strArr) { 
  var matrix = strArr.map(rowStr => rowStr.match(/\d+/g).map(Number));
  var matrixSize = matrix.length;
  var currentMatrices = [matrix];
  var numSwaps = 0;
  //var newMatrix = swapColumns(matrix, 0, 1);
  //newMatrix = swapRows(newMatrix, 0, 1);
  //return check(newMatrix);
  
  do {
      var nextMatrices = [];
      // check for every current possible case
      for (var currentMatrix of currentMatrices) {
          if (check(currentMatrix)) return numSwaps;
      }
      
      // since we don't have it yet, prepare for the next round
      for (var currentMatrix of currentMatrices) {
          // generate all possible row and column swaps
          for (var i = 0; i < matrixSize; i++) {
              for (var j = i + 1; j < matrixSize; j++) {
                  nextMatrices.push(swapRows(currentMatrix, i, j)); 
                  nextMatrices.push(swapColumns(currentMatrix, i, j)); 
              }
          }
      }
      currentMatrices = nextMatrices;
      numSwaps++;
  } while(numSwaps < matrixSize * 2);
  
  // can't be done
  return -1;
}
 
// keep this function call here 
MatrixBorder(readline());