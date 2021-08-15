function rotate(shape){
  let rows = shape.length
  let cols = shape[0].length
  let rotated = []

  for(let c=0; c<cols; c++) {
    rotated[c] = []
    for(let r=0; r<rows; r++) {
      rotated[c][r] = shape[rows-1-r][c]
    }
  }
  return rotated
} 

function rotations(shape) {
  return [1,2,3].reduce((acc,it) => {
    acc[it] = rotate(acc[it-1])
    return acc
  }, [shape])
}

function toString(shape) {
  return shape
    .reduce((str, it) => str + it.map(it => it === 1 ? "1" : " ")
    .join("") + "\n", "")
}

let shapes = {
  I: [[1, 1, 1, 1]],
  J: [[1, 1, 1], [0, 0, 1]],
  L: [[1, 1, 1], [1, 0, 0]],
  O: [[1,1],[1,1]],
  S: [[0, 1, 1], [1, 1, 0]],
  T: [[1, 1, 1], [0, 1, 0]],
  Z: [[1, 1, 0], [0, 1, 1]],
}

function fits(shape, board, row, col) {
  return shape.every((it, r) => it.every((el, c) => 
    el === 0 || (board[c + col] < (row - r + shape.length))
  ))
}


function filledRows(shape, board, rowNo, colNo) {
  return shape.filter((row, r) => {
    //console.log(`Row no: ${rowNo - r - 1 + shape.length}`)
    return board.every((col,c) => {
      //console.log(`Col: ${col}`) 
      //console.log(`Shape: ${row[c-colNo]}`) 
      return (col > (rowNo - r - 1 + shape.length)) || (row[c-colNo] === 1)
    })
  }).length
}

function TetrisMove(strArr) { 

  let [shape, ...board] = strArr
  shape = shapes[shape]
  board = board.map(it => parseInt(it))

  let filled = 0
  board.forEach((_,col) => 
    rotations(shape).forEach((s,r) => {
        let row = board[col] + 1
        while(row >= 0 && fits(s,board,row,col)) {
          //console.log(`FIT col:${col} row:${row} rotation: ${r}`)
          filled = Math.max(filled, filledRows(s, board, row, col))
          row--
        }
    })
  )

  return filled
}

// keep this function call here 
console.log(TetrisMove(readline()));










































function rotate(shape){
  let rows = shape.length
  let cols = shape[0].length
  let rotated = []

  for(let c=0; c<cols; c++) {
    rotated[c] = []
    for(let r=0; r<rows; r++) {
      rotated[c][r] = shape[rows-1-r][c]
    }
  }
  return rotated
} 

function rotations(shape) {
  return [1,2,3].reduce((acc,it) => {
    acc[it] = rotate(acc[it-1])
    return acc
  }, [shape])
}

function toString(shape) {
  return shape
    .reduce((str, it) => str + it.map(it => it === 1 ? "1" : " ")
    .join("") + "\n", "")
}

let shapes = {
  I: [[1, 1, 1, 1]],
  J: [[1, 1, 1], [0, 0, 1]],
  L: [[1, 1, 1], [1, 0, 0]],
  O: [[1,1],[1,1]],
  S: [[0, 1, 1], [1, 1, 0]],
  T: [[1, 1, 1], [0, 1, 0]],
  Z: [[1, 1, 0], [0, 1, 1]],
}

function fits(shape, board, row, col) {
  return shape.every((it, r) => it.every((el, c) => 
    el === 0 || (board[c + col] < (row - r + shape.length))
  ))
}


function filledRows(shape, board, rowNo, colNo) {
  return shape.filter((row, r) => {
    //console.log(`Row no: ${rowNo - r - 1 + shape.length}`)
    return board.every((col,c) => {
      //console.log(`Col: ${col}`) 
      //console.log(`Shape: ${row[c-colNo]}`) 
      return (col > (rowNo - r - 1 + shape.length)) || (row[c-colNo] === 1)
    })
  }).length
}

function TetrisMove(strArr) { 

  let [shape, ...board] = strArr
  shape = shapes[shape]
  board = board.map(it => parseInt(it))

  let filled = 0
  board.forEach((_,col) => 
    rotations(shape).forEach((s,r) => {
        let row = board[col] + 1
        while(row >= 0 && fits(s,board,row,col)) {
          //console.log(`FIT col:${col} row:${row} rotation: ${r}`)
          filled = Math.max(filled, filledRows(s, board, row, col))
          row--
        }
    })
  )

  return filled
}

// keep this function call here 
console.log(TetrisMove(readline()));







































// board: { x: boolean[10][12], c: number }

function parseBoard(columnHeights) {
  const board = [];
  const rowCounts = [];

  for (let row = 0; row < 10; row ++) {
      const line = [];
      let rowCount = 0;
      for (let col = 0; col < 12; col ++) {
          const occupied = 10 - columnHeights[col] <= row;
          line.push(occupied ? 'X' : ' ');
          if (occupied) {
              rowCount ++;
          }
      }
      board.push(line);
      rowCounts.push(rowCount);
  }

  return { x: board, c: rowCounts };
}

function printBoard(board) {
  let s = '';
  for (let row = 0; row < 10; row ++) {
      for (let col = 0; col < 12; col ++) {
          s += board.x[row][col];
      }
      s = s + ' ' + board.c[row];
      s = s + '\n';
  }
  return s;
}

function placePiece(board, shape, srow, scol, mul, swap) {
  board = JSON.parse(JSON.stringify(board));
  for (let i = 0; i < shape.length; i ++) {
      const row = srow + shape[i][swap ? 1 : 0] * (swap ? -mul : mul);
      const col = scol + shape[i][swap ? 0 : 1] * (swap ? mul : mul);
      if (row < 0 || row >= 10 || col < 0 || col >= 12 || board.x[row][col] !== ' ') {
          return false;
      }
      board.x[row][col] = 'O';
      board.c[row] ++;
  }
  return board;
}

function countFullRows(board) {
  return board.c.filter(rc => rc === 12).length;
}

function TetrisMove(strArr) {
  const pieceShape = {
      'I': [[0,0], [1,0], [2,0], [3,0]],
      'J': [[0,0], [1,0], [2,0], [2,-1]],
      'L': [[0,0], [1,0], [2,0], [2,1]],
      'O': [[0,0], [1,0], [0,1], [1,1]],
      'S': [[0,0], [1,0], [1,1], [2,1]],
      'T': [[0,0], [1,0], [2,0], [1,1]],
      'Z': [[0,0], [1,0], [1,-1], [2,-1]]
  }[strArr[0]];
  strArr = strArr.slice(1);
  strArr = strArr.map(i => parseInt(i, 10));

  const board = parseBoard(strArr);
  let bestSoFar = -1;

  for (let row = 0; row < 10; row ++) {
      for (let col = 0; col < 12; col ++) {
          for (let mul of [-1, 1]) {
              for (let swap of [true, false]) {
                  const afterBoard = placePiece(board, pieceShape, row, col, mul, swap);
                  if (afterBoard) {
                      const fullRows = countFullRows(afterBoard);
                      if (fullRows > bestSoFar) {
                          bestSoFar = fullRows;
                      }
                  }
              }
          }
      }
  }

  return bestSoFar;
}

 
// keep this function call here 
TetrisMove(readline());