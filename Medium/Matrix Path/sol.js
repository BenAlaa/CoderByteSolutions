function MatrixPath(strArr) { 
  let matrix = strArr.map( item => item.split(''));
     let totalRows = matrix.length - 1, totalCols = matrix[0].length - 1;
 
     if (matrix[0][0] === '0') {
         return 'not possible';
     } else {
         let path = findPath([{path: [[0,0]], matrix: matrix}]);
         if (path) {
             return true;
         } else if (!path) {
             let zeroIndexes = [];
             matrix.forEach( (item, i) => {
                 item.forEach( (subitem, j) => {
                     if (subitem === "0")zeroIndexes.push([i,j])
                 })
             })
             let counter = 0;
             for (let i = 0; i < zeroIndexes.length; i++) {
                 let row = zeroIndexes[i][0];
                 let col = zeroIndexes[i][1];
                 let tempMatrix = [];
                 for (let j = 0; j < matrix.length; j ++) {
                         tempMatrix[j] = [...matrix[j]];
                 }
                 tempMatrix[row][col] = "1";
                 let path = findPath([{path: [[0,0]], matrix: tempMatrix}]);
                 if(path)counter ++;
             }
             return counter > 0 ? counter : "not possible";
         }
     }
 
     function findPath(arr) {
         arr = arr || [];
         let paths = [];
         let deadEnd = true;
         for (let i = 0; i < arr.length; i++) {
             let current = arr[i].path;
             let matrix = arr[i].matrix;               
             let [tempRow, tempCol] = current[current.length - 1];
             
             if (tempRow === totalRows && tempCol === totalCols) {
                 return true;
             }
             // up
             if ( tempRow >= 1) {
                 if (matrix[tempRow - 1][tempCol] === '1' && !checkForDups(current, tempRow - 1, tempCol) ) {
                     let newPath = [...current, [tempRow - 1, tempCol]];
                     deadEnd = false;
                     paths.push({path: newPath, matrix})
                 } 
             } 
             //right
             if (tempCol < totalCols) {
                 if (matrix[tempRow][tempCol + 1] === '1'  && !checkForDups(current, tempRow, tempCol + 1)) {
                     let newPath = [...current, [tempRow, tempCol + 1]];
                     deadEnd = false;
                     paths.push({path: newPath, matrix: matrix})
                 } 
             } 
             //down
             if ( tempRow < totalRows) {
                 if (matrix[tempRow + 1][tempCol] === '1'  && !checkForDups(current, tempRow + 1, tempCol)) {
                     let newPath = [...current, [tempRow + 1, tempCol]];
                     deadEnd = false;
                     paths.push({path: newPath, matrix: matrix})
                 } 
             } 
             //left
             if ( tempCol >= 1){
                 if (matrix[tempRow][tempCol - 1] === '1' && !checkForDups(current, tempRow, tempCol - 1 )) {
                     let newPath = [...current, [tempRow, tempCol - 1]];
                     deadEnd = false;
                     paths.push({path: newPath, matrix: matrix})
                 } 
             }  
         }
         return deadEnd ? false : findPath(paths) ; 
     }
  
     function checkForDups(arr, row, col) {
         for (let i = 0; i < arr.length; i++) {
             if (arr[i][0] === row && arr[i][1] === col) {
                 return true;
             }
         }
         return false;
     }
 }
    
 // keep this function call here 
 console.log(MatrixPath(readline()));





























 function MatrixPath(strArr) { // 0 = up, 1 = down, 2 = left, 3 = right
  let count = [], visited = [];
   for (var i=0; i<strArr.length; i++) {
     for (var j=0; j<strArr[i].length; j++) {
       var row = strArr[i];
       if ((row[j - 1] === "1" || row[j + 1] === "1") && row[j] === "0") {
         strArr[i] = row.substr(0, j) + "2" + row.substr(j + 1);
       }
     }
   }
   findPath(strArr, 0, 0, -1, count, visited);
   if (count.length === 0) {
     return "not possible";
   } else if (count.indexOf(-1) !== -1) {
     return "true";
   } else {
     return count.length;
   }
 }
 
 function findPath(arr, i, j, changed, count, visited) {
   if (arr[i][j] === "0") {
     return;
   }
   if (arr[i][j] === "2") {
     if (changed !== -1) {
       return;
     } else {
       changed = i + "," + j;
     }
   }
   if (i === arr.length - 1 && j === arr[i].length - 1) {
     if (count.indexOf(changed) === -1) {
       return count.push(changed);
     }
   }
   if (visited[i + "," + j] === changed) {
     return;
   } else {
     visited[i + "," + j] = changed;
   }
   if (i !== 0) {
     findPath(arr, i - 1, j, changed, count, visited);
   }
   if (i !== arr.length - 1) {
     findPath(arr, i + 1, j, changed, count, visited);
   }
   if (j !== 0) {
     findPath(arr, i, j - 1, changed, count, visited)
   }
   if (j !== arr[i].length - 1) {
     findPath(arr, i, j + 1, changed, count, visited);
   }
 }
 



































 function strToMatrix(strArr) {
  const rows = strArr.length;
  const cols = strArr[0].length;
  const cells = strArr.map((row) => row.split(''));
  const matrix = [];
  matrix.rows = rows;
  matrix.cols = cols;
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const value = cells[row][col];
      if (!matrix[row]) matrix[row] = [];
      matrix[row].push(value);
    }
  }
  return matrix;
}

function reachableCells(matrix, current) {
  const reachable = [];
  const { row, col } = current;
  if (row > 0 && matrix[row - 1][col] === '1') {
    reachable.push({ row: row - 1, col });
  }
  if (row < matrix.rows - 1 && matrix[row + 1][col] === '1') {
    reachable.push({ row: row + 1, col });
  }
  if (col > 0 && matrix[row][col - 1] === '1') {
    reachable.push({ row, col: col - 1 });
  }
  if (col < matrix.cols - 1 && matrix[row][col + 1] === '1') {
    reachable.push({ row, col: col + 1 });
  }
  return reachable;
}

function pathIncludesCell(path, cell) {
  const found = path.filter((pcell) => (
    cell.row === pcell.row && cell.col === pcell.col
  ));
  return found.length;
}

function traverse(matrix, currentPath) {
  const current = currentPath[currentPath.length - 1];
  const reachable = reachableCells(matrix, current);
  for (let i = 0; i < reachable.length; i += 1) {
    const cell = reachable[i];
    if (cell.row === matrix.rows - 1 && cell.col === matrix.cols - 1) {
      return true;
    }
    if (!pathIncludesCell(currentPath, cell)) {
      const newPath = [...currentPath, cell];
      const reachedEnd = traverse(matrix, newPath);
      if (reachedEnd) return true;
    }
  }
  return false;
}

function getNChooseM(matrix, m) {
  if (m === 0) return [];

  const inArray = [];
  for (let row = 0; row < matrix.rows; row += 1) {
    for (let col = 0; col < matrix.cols; col += 1) {
      if (matrix[row][col] === '0') {
        inArray.push({ row, col });
      }
    }
  }

  const choices = [];
  for (let i = 0; i < inArray.length; i += 1) {
    const choice = inArray[i];
    const outArray = inArray.slice(0, i).concat(inArray.slice(i + 1));

    const result = getNChooseM(outArray, m - 1);
    if (result.length) {
      const combined = result.map((r) => [choice].concat(r));
      choices.push(...combined);
    } else {
      choices.push([choice]);
    }
  }
  return choices;
}

function cloneMatrix(matrix) {
  const clone = JSON.parse(JSON.stringify(matrix));
  clone.rows = matrix.rows;
  clone.cols = matrix.cols;
  return clone;
}

function MatrixPath(strArr) {
  const matrix = strToMatrix(strArr);
  const start = { row: 0, col: 0 };
  const size = matrix.rows * matrix.cols;

  if (traverse(matrix, [start])) return 'true';

  let count = 0;
  const choiceArr = getNChooseM(matrix, 1);
  for (let choiceIndex = 0; choiceIndex < choiceArr.length; choiceIndex += 1) {
    const choiceTuple = choiceArr[choiceIndex];
    const clone = cloneMatrix(matrix);
    for (let idx = 0; idx < choiceTuple.length; idx += 1) {
      const cell = choiceTuple[idx];
      clone[cell.row][cell.col] = '1';
    }
    if (traverse(clone, [start])) {
      count += 1;
    }
  }

  return count ? count.toString() : 'not possible';
}

// keep this function call here
console.log(MatrixPath(readline()));



































function strToMatrix(strArr) {
  const rows = strArr.length;
  const cols = strArr[0].length;
  const cells = strArr.map((row) => row.split(''));
  const matrix = [];
  matrix.rows = rows;
  matrix.cols = cols;
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      const value = cells[row][col];
      if (!matrix[row]) matrix[row] = [];
      matrix[row].push(value);
    }
  }
  return matrix;
}

function reachableCells(matrix, current) {
  const reachable = [];
  const { row, col } = current;
  if (row > 0 && matrix[row - 1][col] === '1') {
    reachable.push({ row: row - 1, col });
  }
  if (row < matrix.rows - 1 && matrix[row + 1][col] === '1') {
    reachable.push({ row: row + 1, col });
  }
  if (col > 0 && matrix[row][col - 1] === '1') {
    reachable.push({ row, col: col - 1 });
  }
  if (col < matrix.cols - 1 && matrix[row][col + 1] === '1') {
    reachable.push({ row, col: col + 1 });
  }
  return reachable;
}

function pathIncludesCell(path, cell) {
  const found = path.filter((pcell) => (
    cell.row === pcell.row && cell.col === pcell.col
  ));
  return found.length;
}

function traverse(matrix, currentPath) {
  const current = currentPath[currentPath.length - 1];
  const reachable = reachableCells(matrix, current);
  for (let i = 0; i < reachable.length; i += 1) {
    const cell = reachable[i];
    if (cell.row === matrix.rows - 1 && cell.col === matrix.cols - 1) {
      return true;
    }
    if (!pathIncludesCell(currentPath, cell)) {
      const newPath = [...currentPath, cell];
      const reachedEnd = traverse(matrix, newPath);
      if (reachedEnd) return true;
    }
  }
  return false;
}

function getNChooseM(matrix, m) {
  if (m === 0) return [];

  const inArray = [];
  for (let row = 0; row < matrix.rows; row += 1) {
    for (let col = 0; col < matrix.cols; col += 1) {
      if (matrix[row][col] === '0') {
        inArray.push({ row, col });
      }
    }
  }

  const choices = [];
  for (let i = 0; i < inArray.length; i += 1) {
    const choice = inArray[i];
    const outArray = inArray.slice(0, i).concat(inArray.slice(i + 1));

    const result = getNChooseM(outArray, m - 1);
    if (result.length) {
      const combined = result.map((r) => [choice].concat(r));
      choices.push(...combined);
    } else {
      choices.push([choice]);
    }
  }
  return choices;
}

function cloneMatrix(matrix) {
  const clone = JSON.parse(JSON.stringify(matrix));
  clone.rows = matrix.rows;
  clone.cols = matrix.cols;
  return clone;
}

function MatrixPath(strArr) {
  const matrix = strToMatrix(strArr);
  const start = { row: 0, col: 0 };
  const size = matrix.rows * matrix.cols;

  if (traverse(matrix, [start])) return 'true';

  let count = 0;
  const choiceArr = getNChooseM(matrix, 1);
  for (let choiceIndex = 0; choiceIndex < choiceArr.length; choiceIndex += 1) {
    const choiceTuple = choiceArr[choiceIndex];
    const clone = cloneMatrix(matrix);
    for (let idx = 0; idx < choiceTuple.length; idx += 1) {
      const cell = choiceTuple[idx];
      clone[cell.row][cell.col] = '1';
    }
    if (traverse(clone, [start])) {
      count += 1;
    }
  }

  return count ? count.toString() : 'not possible';
}

// keep this function call here
console.log(MatrixPath(readline()));











































var count = [], visited = [];

function MatrixPath(strArr) { // 0 = up, 1 = down, 2 = left, 3 = right
  for (var i=0; i<strArr.length; i++) {
    for (var j=0; j<strArr[i].length; j++) {
      var row = strArr[i];
      if ((row[j - 1] === "1" || row[j + 1] === "1") && row[j] === "0") {
        strArr[i] = row.substr(0, j) + "2" + row.substr(j + 1);
      }
    }
  }
  findPath(strArr, 0, 0, -1);
  if (count.length === 0) {
    return "not possible";
  } else if (count.indexOf(-1) !== -1) {
    return "true";
  } else {
    return count.length;
  }
}

function findPath(arr, i, j, changed) {
  if (arr[i][j] === "0") {
    return;
  }
  if (arr[i][j] === "2") {
    if (changed !== -1) {
      return;
    } else {
      changed = i + "," + j;
    }
  }
  if (i === arr.length - 1 && j === arr[i].length - 1) {
    if (count.indexOf(changed) === -1) {
      return count.push(changed);
    }
  }
  if (visited[i + "," + j] === changed) {
    return;
  } else {
    visited[i + "," + j] = changed;
  }
  if (i !== 0) {
    findPath(arr, i - 1, j, changed);
  }
  if (i !== arr.length - 1) {
    findPath(arr, i + 1, j, changed);
  }
  if (j !== 0) {
    findPath(arr, i, j - 1, changed)
  }
  if (j !== arr[i].length - 1) {
    findPath(arr, i, j + 1, changed);
  }
}

console.log(MatrixPath(readline()));