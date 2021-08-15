function safe(qx, qy, x, y) {
  if (qx == x && qy == y) return true // Queen takes king
  if (qx == x) return false;
  if (qy == y) return false;
  if (Math.abs(qx - x) == Math.abs(qy - y)) return false;
  return true;
}

function validMove(x, y) {
  if (x < 1 || x > 8) return false;
  if (y < 1 || y > 8) return false;
  return true;
}

function QueenCheck(strArr) {

  var coords = strArr.join(",").match(/d/g);
  var qx = parseInt(coords[0]);
  var qy = parseInt(coords[1]);
  var kx = parseInt(coords[2]);
  var ky = parseInt(coords[3]);

  if (safe(qx, qy, kx, ky)) return -1;

  var options = 0;

  if (validMove(kx+0, ky+1) && safe(qx, qy, kx+0, ky+1)) options++;
  if (validMove(kx+1, ky+1) && safe(qx, qy, kx+1, ky+1)) options++;
  if (validMove(kx+1, ky+0) && safe(qx, qy, kx+1, ky+0)) options++;
  if (validMove(kx+1, ky-1) && safe(qx, qy, kx+1, ky-1)) options++;
  if (validMove(kx+0, ky-1) && safe(qx, qy, kx+0, ky-1)) options++;
  if (validMove(kx-1, ky-1) && safe(qx, qy, kx-1, ky-1)) options++;
  if (validMove(kx-1, ky+0) && safe(qx, qy, kx-1, ky+0)) options++;
  if (validMove(kx-1, ky+1) && safe(qx, qy, kx-1, ky+1)) options++;

  return options;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
QueenCheck(readline());







































function QueenCheck(strArr) { 

  const BOARD_WIDTH = 8;
  const BOARD_HEIGHT = 8;

  let queenX = parseInt(strArr[0][1]) - 1;
  let queenY = parseInt(strArr[0][3]) - 1;
  
  let kingX = parseInt(strArr[1][1]) - 1;
  let kingY = parseInt(strArr[1][3]) - 1;
  
  /* Debug
  let board = Array(BOARD_HEIGHT).fill(0).map(() => Array(BOARD_WIDTH).fill(0));
  board[queenY][queenX] = 1;
  board[kingY][kingX] = 2;
  getValidMoves(kingX, kingY).forEach(move => board[move[1]][move[0]] = 3);
  console.log(board);
  //*/

  
  let moves = getValidMoves(kingX, kingY).filter(move => {
      return canCaptureQueen(queenX, queenY, move[0], move[1])
          || !isChecked(queenX, queenY, move[0], move[1]); 
  });
  
  return (isChecked(queenX, queenY, kingX, kingY)) ? moves.length : -1;
  

  
  
  
  function getValidMoves(kingX, kingY) {
      let directions = [
          [0, -1],  // North
          [0, 1],   // South
          [1, 0],   // East
          [-1, 0],  // West
          [1, -1],  // NE
          [1, 1],   // SE
          [-1, 1],  // SW
          [-1, -1], // NW
      ];
      
      let goodDirections = directions.filter(direction => {
          return coordsValid(kingX + direction[0], kingY + direction[1])
      });
      
      let moves = goodDirections.map(direction => {
          return [kingX + direction[0], kingY + direction[1]];
      });
      return moves;
  }
  
  
  function coordsValid(posX, posY) {
      return posX >= 0 
          && posY >= 0
          && posX < BOARD_WIDTH
          && posY < BOARD_HEIGHT;
  }
  
  
  function isChecked(queenX, queenY, kingX, kingY) {
      return queenX === kingX 
          || queenY === kingY 
          || Math.abs(queenX - kingX) === Math.abs(queenY - kingY);
  }
  
  
  function canCaptureQueen(queenX, queenY, kingX, kingY) {
      return queenX === kingX && queenY === kingY;
  }
  
  
  function adjacentToQueen(queenX, queenY, kingX, kingY) {
      return Math.abs(queenX - kingX) <= 1
          && Math.abs(queenY - kingY) <= 1;
  }
}
 
// keep this function call here 
QueenCheck(readline());









































function QueenCheck(strArr) {
  function parse(strArr) {
    
    function clean(str){
      var rawpos = str.slice(1,-1).split(",");
      var piece = {};
      piece.x = Number(rawpos[0]);
      piece.y = Number(rawpos[1]);
      return piece;
    }
    
    var rawqueen = strArr[0],
		rawking  = strArr[1];
    	pieces = {
        	"queen": {},
          	"king": {}
        };
    	pieces.queen = clean(rawqueen);
		pieces.king = clean(rawking);
    return pieces;
  }
  
  function spaces(queen, king) {
    
    function check(queen, kx, ky){
      if (queen.x === kx && queen.y === ky){
      	return 1;
      }else if(kx < 1 || kx > 8 || ky < 1 || ky > 8 || queen.x === kx || queen.y === ky){
        return 0;
      } else if(Math.abs(queen.x - kx) === Math.abs(queen.y - ky)){
        return 0;
      } else {
        return 1;
      }
    }
    
    function incheck(queen, king){
      return (queen.x === king.x || queen.y === king.y ||
      		 Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y));
    }
    
    if(incheck(queen, king)){
        return	check(queen, king.x-1, king.y-1) + 
      			check(queen, king.x-0, king.y-1) + 
      			check(queen, king.x+1, king.y-1) + 
      			check(queen, king.x+1, king.y+0) + 
      			check(queen, king.x+1, king.y+1) + 
      			check(queen, king.x+0, king.y+1) + 
      			check(queen, king.x-1, king.y+1) + 
      			check(queen, king.x-1, king.y+0);
    }else{
		return -1;
    }
  }
  
  var pieces = parse(strArr);
  return spaces(pieces.queen, pieces.king);
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
QueenCheck(readline());






































function QueenCheck(strArr) {
  //[x1,y1,x2,y2] where (x1,y1) is queen pos, and (x2,y2) is king pos
  var pos = strArr.join("").split(")(").join(",").match(/d/g);
  var x1 = Number(pos[0]);
  var y1 = Number(pos[1]);
  var x2 = Number(pos[2]);
  var y2 = Number(pos[3]);
  var countSpace = 0;
  var possibleSpace = [];
  function underAttack (coord) {
      var x_pos = coord[0],y_pos = coord[1];
      return (x_pos==x1 || y_pos == y1 || y_pos == x_pos + (y1-x1) || y_pos == (y1+x1)-x_pos) 
  }

  function onBoard (coord) {
      var x_pos = coord[0],y_pos = coord[1];
      return x_pos > 0 && x_pos <= 8 && y_pos >0 && y_pos<=8;
  }
  if (underAttack([x2,y2])) {
      //Count number of moves available
      possibleSpace = [[x2+1,y2],[x2+1,y2+1],[x2+1,y2-1],[x2-1,y2],[x2,y2+1],[x2,y2-1],[x2-1,y2+1],[x2-1,y2-1]];
      for (var i in possibleSpace) {
          if (onBoard(possibleSpace[i]) && !underAttack(possibleSpace[i])) countSpace++;
          else if (possibleSpace[i][0]==x1 && possibleSpace[i][1]==y1) countSpace++;
      }
      return countSpace;
  }
  else return -1;
}
QueenCheck(readline());