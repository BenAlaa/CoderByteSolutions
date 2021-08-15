function SudokuQuadrantChecker(strArr) {
  const errorSet = [];

  const checkForSame = function(arr) {
      valuesLogged = [], 
      errPositions = [];

    for(let i = 0; i < arr.length; i++) {
      const duplicate = (arr[i] === 'x') ? 
        -1: 
        valuesLogged.indexOf(arr[i]);

      if(duplicate > -1) {

        if(errPositions.indexOf(duplicate) < 0) {
              errPositions.push(duplicate);
        }
        errPositions.push(i); 
      }

      valuesLogged.push(arr[i])
    }

    return errPositions;
  },
  checkRows = function(arr) {
    for(let i = 0; i < arr.length; i++) {
      errorSpots = checkForSame(arr[i]);
      errorSpots.forEach(spot => {
        const badCell = findCell([spot, i]);
        if(errorSet.indexOf(badCell) < 0) {
          errorSet.push(badCell);
        }
      }); 
    }
  }, 
  checkColumns = function(arr) {
    for(let i = 0; i < arr.length; i++) {
      const newColumn = [];

      for(let j = 0; j < arr[i].length; j++) {
        newColumn.push(arr[j][i]);
      }

      errorSpots = checkForSame(newColumn);
      errorSpots.forEach(spot => {
        const badCell = findCell([i, spot]);
        
        if(errorSet.indexOf(badCell) < 0) {
          errorSet.push(badCell);
        }

      }); 
    }

  },
  checkCells = function(arr) {
    const cells = [];
    let i;

    for(i = 0; i < arr.length; i++) {
      for(j = 0; j < arr.length; j++) {
        const value = arr[i][j], 
          cell = findCell([i, j]);

          if(!cells[cell - 1]) {
            cells[cell - 1] = [];
          }
          cells[cell - 1].push(value);
      };
    }      

    for(i = 0; i < cells.length; i++) {
      const checkCellValue = checkForSame(cells[i]);

      if(checkCellValue.length > 0) {
        const suspectCell = i+1;

        if(errorSet.indexOf(suspectCell) < 0) {
          errorSet.push(suspectCell);
        }
      }
    }
  },
  findCell = function(pos) {
    const horizontal = pos[0],
      vertical = pos[1],
      // @TODO abstract this more so we can do this dynamically.
      breakpoints = [
        '2',
        '2',
        '2',
        '5',
        '5',
        '5',
        '8',
        '8',
        '8'
      ],
      cells = {
      2 : {
        2: 1,
        5: 4,
        8: 7
      },
      5: {
        2: 2,
        5: 5,
        8: 8
      },
      8: {
        2: 3,
        5: 6,
        8: 9
      }
    },
    cellBlock = cells[breakpoints[horizontal]];
    cell = cellBlock[breakpoints[vertical]];

    return cell;
  }, 
  cleanStrArr = function(strings) {
    let newArray = [];

    for(let i = 0; i < strings.length; i++) {
      const newString = strings[i].replace('(','').replace(')','');
      newArray.push(newString.split(','));
    }

    return newArray;
  }

const cleanedArray = cleanStrArr(strArr);

checkRows(cleanedArray);
checkColumns(cleanedArray);
checkCells(cleanedArray);

if(errorSet.length === 0) {
  return 'legal'
}

const sortedErrorSet = errorSet.sort();

// code goes here  
return sortedErrorSet.join(','); 

}
 
// keep this function call here 
console.log(SudokuQuadrantChecker(readline()));



















































function SudokuQuadrantChecker(strArr) { 

  let board = strArr.map(row => row.substr(1, row.length - 2).split(','));

  let errors = {};

  for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[0].length; col++) {
          // Ignore x
          if (board[row][col] === 'x') {
              continue;
          }

          let quadrant = Math.floor(row / 3) * 3 + Math.floor(col / 3) + 1;

          // Check Row
          for (let i = 0; i < board.length; i++) {
              if (i !== col) {
                  // Not testing itself
                  if (board[row][i] === board[row][col]) {
                      errors[quadrant] = 1;
                  }
              }
          }

          // Check Col
          for (let i = 0; i < board[0].length; i++) {
              if (i !== row) {
                  // Not testing itself
                  if (board[i][col] === board[row][col]) {
                      errors[quadrant] = 1;
                  }
              }
          }

          // Check Box
          for (let r = 0; r < 3; r++) {
              for (let c = 0; c < 3; c++) {
                  let rowQuadrant = Math.floor(row / 3);
                  let colQuadrant = Math.floor(col / 3);

                  if (
                      board[row][col] ===
                      board[rowQuadrant * 3 + r][colQuadrant * 3 + c]
                  ) {
                      if (
                          row !== rowQuadrant * 3 + r &&
                          col !== colQuadrant * 3 + c
                      ) {
                          errors[quadrant] = 1;
                      }
                  }
              }
          }
      }
  }

  if (Object.keys(errors).length === 0) {
      return 'legal';
  }

  return Object.keys(errors).join(',');
}
 
// keep this function call here 
SudokuQuadrantChecker(readline());




















































function SudokuQuadrantChecker(strArr) { 

  arr = strArr.reduce((matrix, row) => {
    matrix.push(row.split(',').map(item => +item.trim().replace('(', '').replace(')', '') || 0));
    return matrix;
  }, []);
  // console.log(strArr);
  const result = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      num = arr[i][j];
      if (!num) continue;
      for (let k = j + 1; k < 9; k++) {
        if (arr[i][k] === num) {
          let index = Math.floor(i / 3) * 3 + Math.floor(k / 3) + 1;
          let indexOriginal = Math.floor(i / 3) * 3 + Math.floor(j / 3) + 1;
          if (!result.includes(index)) result.push(index);
          if (!result.includes(indexOriginal)) result.push(indexOriginal);

        }
      }
      for (let k = i + 1; k < 9; k++) {
        if (arr[k][j] === num) {
          let index = Math.floor(k / 3) * 3 + Math.floor(j / 3) + 1;
          let indexOriginal = Math.floor(i / 3) * 3 + Math.floor(j / 3) + 1;
          if (!result.includes(index)) result.push(index);
          if (!result.includes(indexOriginal)) result.push(indexOriginal);
        }
      }

      for (let k = (i % 3) * 3 + j % 3 + 1, row = Math.floor(i / 3), col = Math.floor(j / 3); k < 9; k++) {
        if (arr[row * 3 + Math.floor(k / 3)][col * 3 + Math.floor(k % 3)] === num) {
          let index = row + col + 1;
          let indexOriginal = Math.floor(i / 3) * 3 + Math.floor(j / 3) + 1;
          if (!result.includes(index)) result.push(index);
          if (!result.includes(indexOriginal)) result.push(indexOriginal);
        }
      }
    }
  }

  if (!result.length) return 'legal';
  return result.sort().join(',');
         
}
   
// keep this function call here 
SudokuQuadrantChecker(readline());