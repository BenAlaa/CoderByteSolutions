function EightQueens(strArr) {
  const regexp = /\((\d+),(\d+)\)/
  const queens = strArr.map(queen => {
      const result = regexp.exec(queen)
      const column = +result[1]
      const row = +result[2]
      return { column, row }
  })
  return queens.reduce((attacker, queen) => {
      return attacker || canAttack(queen, queens)
  }, false) || true
}

function canAttack(queen, queens) {
  return queens.reduce((canAttack, other) => {
      return canAttack || compare(queen, other)
  }, false) ? `(${queen.column},${queen.row})` : false
}

function compare(a, b) {
  return a !== b && (a.column === b.column || a.row === b.row || Math.abs((a.column - b.column) / (a.row - b.row) === 1))
}
 
// keep this function call here 
EightQueens(readline());


































function EightQueens(queens) { 
    
  function parseQueen(queen) {
      var arr = queen.replace(/[\(\)]/g, "").split(",");
      return {
          x: parseInt(arr[0]),
          y: parseInt(arr[1]),
          name: queen
      }
  }

  for (b = 0; b < queens.length; b++) {
      queens[b] = parseQueen(queens[b]);
      for (a = 0; a < b; a++) {
          if (queens[a].x == queens[b].x ||
              queens[a].y == queens[b].y ||
              Math.abs(queens[a].y - queens[b].y) == Math.abs(queens[a].x - queens[b].x)) {
              return queens[a].name;
          }
      }
  }

  return true;
  
}
 
// keep this function call here 
EightQueens(readline());





































function Vector(pos) {
  this.x = pos.x;
  this.y = pos.y;
  this.add = function add(vec) {
      return new Vector({x: this.x + vec.x, y: this.y + vec.y});
  }
  this.multiply = function multiply(num) {
      return new Vector({x: this.x * num, y: this.y * num});
  }
}

function Queen(pos, board) {
  this.attackVectors = [[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1],[0,-1],[1,-1]].map(function(pos) {return new Vector({x: pos[0], y: pos[1]})});
  this.pos = pos;
  this.board = board;
  board.addPiece(this);
  this.checkDirection = function checkDirection(directionNum) {
      var hits = [];
      for (var i = 1;i <= this.board.size;i++) {
          var scaledAttackVector = this.attackVectors[directionNum].multiply(i);
          var checkPos = this.pos.add(scaledAttackVector);
          if (checkPos.x < 0 || checkPos.x > 7 || checkPos.y < 0 || checkPos.y > 7) {
              hits.push(0);
              break;
          }
          var cell = this.board.squares[checkPos.x][checkPos.y];
          hits.push(cell);
      }
      //console.log(hits);
      hits = hits.filter(function(hit) {return hit != 0});
      return hits;
  }
}

function ChessBoard(size) {
  this.pieces = [];
  this.size = size;
  this.squares = Array(size).fill(null).map(function() {return Array(size).fill(0)})
  //console.log("squares", this.squares);
  this.addPiece = function addPiece(piece) {
      this.squares[piece.pos.x][piece.pos.y] = piece;
  }
}

function EightQueens(strArr) { 

  // parse array
  strArr = strArr.map(function(pos) {return new Vector({x: parseInt(pos.charAt(1)) - 1, y: parseInt(pos.charAt(3)) - 1});})
  
  var chessBoard = new ChessBoard(8);
  var queens = strArr.map(function(pos) {return new Queen(pos, chessBoard);})
  
  for (var i = 0; i < queens.length - 1; i++) {
      var queen = queens[i];
      for (var j = 0; j < queen.attackVectors.length - 1;j++) {
          var hits = queen.checkDirection(j);
          //console.log(hits);
  
          if (hits.length) {
              return "(" + (queen.pos.x + 1) + "," + (queen.pos.y + 1) + ")";
          }
      }
  }
  return true;


       
}
 
// keep this function call here 
EightQueens(readline());







































function EightQueens(strArr) {
  //fix up the data
  let newArr = strArr.map(val => {
    return JSON.parse(val
      .replace(/\(/g, '[')
      .replace(/\)/g, ']')
    )
  });

  newArr = newArr.map(val => {
    return val.concat(val[1] - val[0], val[1] + val[0]);
  });

  for (let i = 0, len = newArr.length; i < len; i++) {
    for (let j = 0; j < 4; j++) {
      let target = newArr[i][j];
      if (newArr.filter(val => {
        return val[j] === target;
      }).length > 1) {
        return `(${newArr[i].slice(0,2)})`
      }
    }
  }

  return true;
}
// keep this function call here 
EightQueens(readline());


























function EightQueens(strArr) { 

  let firstMatch = null;
  let matches = strArr.some(function(loc, index) {
      if (canAttack(strArr, loc[1], loc[3])) {
          firstMatch = index;
          return true;
      }
  });

  if (matches) {
      return strArr[firstMatch];
  }
  return 'true';


  function canAttack(strArr, x, y) {
      return strArr.some(function(loc){
          let coords = loc.substr(1, loc.length-2).split(',');
          // Check for same piece
          if (coords[0] === x && coords[1] === y) {
              return false;
          }
          // Check for horizontal moves
          if (coords[0] === x) {
              return true;
          }
          // Check for vertical moves
          if (coords[1] === y) {
              return true;
          }
          // Check for diagonal moves
          if (Math.abs(coords[0] - x) === Math.abs(coords[1] - y)) {
              return true;
          }
          return false;
      });
  
  }
       
}
 
// keep this function call here 
EightQueens(readline());

