let minMoves = Infinity;

function alreadyVisited(cell, visitedCells) {
    return visitedCells.length
        && visitedCells.filter(i => i[0] === cell[0] && i[1] === cell[i]).length;
}

function isAllowed(cell, visitedCells) {
    return !alreadyVisited(cell, visitedCells)
        && cell[0] > 0 && cell[0] < 9
        && cell[1] > 0 && cell[1] < 9;
}

function getMovesCount(startPos, endPos, pathLen, visitedCells) {
    if (pathLen >= 9 || pathLen > minMoves) {
        return;
    }

    if (startPos.join('-') === endPos.join('-') && pathLen < minMoves) {
        minMoves = pathLen;
    }

    const allowedCells = [
        [startPos[0] - 1, startPos[1] - 2], // LeftUpVerticalG
        [startPos[0] - 2, startPos[1] - 1], // LeftUpHorizontalG
        [startPos[0] + 1, startPos[1] - 2], // RightUpVerticalG
        [startPos[0] + 2, startPos[1] - 1], // RightUpHorizontalG

        [startPos[0] - 1, startPos[1] + 2], // LeftBottomVerticalG
        [startPos[0] - 2, startPos[1] + 1], // LeftBottomHorizontalG
        [startPos[0] + 1, startPos[1] + 2], // RightBottomVerticalG
        [startPos[0] + 2, startPos[1] + 1], // RightBottomHorizontalG
    ].filter(i => isAllowed(i, visitedCells));

    if (! allowedCells.length) {
        return;
    }

    for (let allowedCell of allowedCells) {
        getMovesCount(
            allowedCell,
            endPos,
            pathLen+1,
            [...visitedCells].concat([allowedCell]));
    }
}

function QuickKnight(str) {
    const [startPos, endPos] = str
        .match(/\(\d \d\)/g)
        .map(i => i.replace(/[\(\)]/g, '').split(' ').map(i => parseInt(i)));

    getMovesCount(startPos, endPos, 0, [startPos]);

    return minMoves;
}
   
// keep this function call here 
console.log(QuickKnight(readline()));









































let minMoves = Infinity;

function alreadyVisited(cell, visitedCells) {
    return visitedCells.length
        && visitedCells.filter(i => i[0] === cell[0] && i[1] === cell[i]).length;
}

function isAllowed(cell, visitedCells) {
    return !alreadyVisited(cell, visitedCells)
        && cell[0] > 0 && cell[0] < 9
        && cell[1] > 0 && cell[1] < 9;
}

function getMovesCount(startPos, endPos, pathLen, visitedCells) {
    if (pathLen >= 9 || pathLen > minMoves) {
        return;
    }

    if (startPos.join('-') === endPos.join('-') && pathLen < minMoves) {
        minMoves = pathLen;
    }

    const allowedCells = [
        [startPos[0] - 1, startPos[1] - 2], // LeftUpVerticalG
        [startPos[0] - 2, startPos[1] - 1], // LeftUpHorizontalG
        [startPos[0] + 1, startPos[1] - 2], // RightUpVerticalG
        [startPos[0] + 2, startPos[1] - 1], // RightUpHorizontalG

        [startPos[0] - 1, startPos[1] + 2], // LeftBottomVerticalG
        [startPos[0] - 2, startPos[1] + 1], // LeftBottomHorizontalG
        [startPos[0] + 1, startPos[1] + 2], // RightBottomVerticalG
        [startPos[0] + 2, startPos[1] + 1], // RightBottomHorizontalG
    ].filter(i => isAllowed(i, visitedCells));

    if (! allowedCells.length) {
        return;
    }

    for (let allowedCell of allowedCells) {
        getMovesCount(
            allowedCell,
            endPos,
            pathLen+1,
            [...visitedCells].concat([allowedCell]));
    }
}

function QuickKnight(str) {
    const [startPos, endPos] = str
        .match(/\(\d \d\)/g)
        .map(i => i.replace(/[\(\)]/g, '').split(' ').map(i => parseInt(i)));

    getMovesCount(startPos, endPos, 0, [startPos]);

    return minMoves;
}
   
// keep this function call here 
console.log(QuickKnight(readline()));









































const moves = [
  [-1, -2], [-1, 2], [1, -2], [1, 2],
  [-2, -1], [2, -1], [-2, 1], [2, 1]
];

const board = [...new Array(8).keys()].map(() => [...new Array(8).keys()].map(i => -1));

const isValid = (x, y) => x >= 0 && y >= 0 && x < 8 && y < 8;

const updateBoardHeuristics = (ex, ey, value = 1000) => {
  if (isValid(ex, ey) && board[ex][ey] < value) {
    board[ex][ey] = value;
    moves.forEach(([nx, ny]) => updateBoardHeuristics(ex + nx, ey + ny, value / 2));
  }
}

const countLeastCostPath = (sx, sy) => {
  if (board[sx][sy] === 1000) return 0;

  const next = moves
    .map(([nx, ny]) => [sx + nx, sy + ny])
    .filter(move => isValid(...move))
    .sort(([ax, ay], [bx, by]) => board[bx][by] - board[ax][ay])[0];

  return 1 + countLeastCostPath(...next);
}

function QuickKnight(str) { 
  const matches = str.match(/\((\d) (\d)\)\((\d) (\d)\)/);
  const [sx, sy] = [parseInt(matches[1]) - 1, parseInt(matches[2]) - 1];
  const [ex, ey] = [parseInt(matches[3]) - 1, parseInt(matches[4]) - 1];

  updateBoardHeuristics(ex, ey);
  return countLeastCostPath(sx, sy);
}
   
// keep this function call here 
console.log(QuickKnight(readline()));








































function QuickKnight(str) { 
  function legal(x,y){return (x>0 && y>0 && x<=8 && y<=8); };
  xys = str.split(")(");
  xyi = xys[0].slice(1).split(" ");
  xi = [Number(xyi[0])];
  yi = [Number(xyi[1])];
  xyf = xys[1].slice(0,-1).split(" ");
  xf = Number(xyf[0]);
  yf = Number(xyf[1]); 
  dxs = [2,1,-1,-2,-2,-1,1,2];
  dys = [1,2,2,1,-1,-2,-2,-1];
  off1 = 0;
  off2 = 1;
  count = 0;
  while(true){
    count ++;
    for (i=off1; i<off2; i++){
      off1 = off2;
      for (j=0; j<8; j++){
        x = xi[i]+dxs[j];
        y = yi[i]+dys[j];
        if(x==xf && y==yf){return count; };
        if(legal(x,y)){
          xi.push(x);
          yi.push(y);
        };
      };
    };
    off2 = xi.length;
  };
}
   
// keep this function call here 
console.log(QuickKnight(readline()));