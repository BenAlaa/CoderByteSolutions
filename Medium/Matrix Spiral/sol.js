function MatrixSpiral(strArr) { 
  var matrix = [];
  strArr.forEach((item) => {
    matrix.push(JSON.parse(item));
  });
  return spiral(matrix, 1, []).join(","); 
}

function spiral(matrix, stage, rtn) {
  if (matrix.length > 0) {
    if (stage == 1) {
      rtn = rtn.concat(matrix[0]);
      matrix = matrix.slice(1);
      return spiral(matrix, 2, rtn);
    } else if (stage === 2) {
      rtn = rtn.concat(lastColumn(matrix));
      matrix = removeLastColumn(matrix);
      return spiral(matrix, 3, rtn);
    } else if (stage === 3) {
      rtn = rtn.concat(matrix[matrix.length - 1].reverse());
      matrix = matrix.slice(0, matrix.length - 1);
      return spiral(matrix, 4, rtn);
    } else {
      rtn = rtn.concat(firstColumn(matrix).reverse());
      matrix = removeFirstColumn(matrix);
      return spiral(matrix, 1, rtn);
    }
  } else {
    return rtn;
  }
}

function lastColumn(matrix) {
  var rtn = [];
  for (var i=0; i<matrix.length; i++) {
    var len = matrix[i].length;
    rtn.push(matrix[i][len - 1]);
  }
  return rtn;
}

function removeLastColumn(matrix) {
  for (var i=0; i<matrix.length; i++) {
    var len = matrix[i].length;
    matrix[i] = matrix[i].slice(0, len - 1);
  }
  return matrix;
}

function firstColumn(matrix) {
  var rtn = [];
  for (var i=0; i<matrix.length; i++) {
    var len = matrix[i].length;
    rtn.push(matrix[i][0]);
  }
  return rtn;
}

function removeFirstColumn(matrix) {
  for (var i=0; i<matrix.length; i++) {
    var len = matrix[i].length;
    matrix[i] = matrix[i].slice(1);
  }
  return matrix;
}
   
// keep this function call here 
console.log(MatrixSpiral(readline()));

































function MatrixSpiral(strArr) {
  let matrix = strArr.map(val => val.match(/\d+/g).map(val => Number(val)));
  let height = matrix.length;
  let width = matrix[0].length;
  if (height == 1 || width == 1) return CreateString(matrix);
  let directions = { 0: "right", 1: "down", 2: "left", 3: "up" };
  let index = 0;
  let direction = directions[index];
  let current = [0, 0];
  let snake = [matrix[current[0]][current[1]]];
  let previousPoints = [current];

  while (true) {
      let newPoint = GetNextSpot(current, direction);
      if (!IsWithinMatrix(newPoint, matrix) || IsPreviousPoint(newPoint, previousPoints)) {
          index = (index + 1) % 4;
          direction = directions[index];
          newPoint = GetNextSpot(current, direction);
      }
      snake.push(matrix[newPoint[0]][newPoint[1]]);
      current = newPoint;
      previousPoints.push(newPoint);
      if (previousPoints.length == (width * height)) {
          return CreateString(snake);
      }
  }

  function GetNextSpot(current, direction) {
      switch (direction) {
          case "right": return [current[0], current[1] + 1];
          case "down": return [current[0] + 1, current[1]];
          case "left": return [current[0], current[1] - 1];
          case "up": return [current[0] - 1, current[1]];
      }
  }

  function IsWithinMatrix(point, matrix) {
      if (0 <= point[0] && point[0] < height && 0 <= point[1] && point[1] < width) {
          return true;
      }
      return false;
  }

  function IsPreviousPoint(point, previousPoints) {
      for (i = 0; i < previousPoints.length; i++) {
          if (point[0] == previousPoints[i][0] && point[1] == previousPoints[i][1]) {
              return true;
          }
      }
      return false;
  }

  function CreateString(points) {
      let str = "";
      for (i = 0; i < points.length; i++) {
          str += points[i] + ","
      }
      return str.slice(0, str.length - 1);
  }
}
// keep this function call here 
console.log(MatrixSpiral(readline()));




































function MatrixSpiral(strArr) { 

  const matrix = strArr.map(JSON.parse);

  const gen = matrixGenerator(matrix);

  const results = [];

  for (let element of gen) {
      results.push(element);
  }

  return results.join(',');
}

function* matrixGenerator(matrix) {
  // RIGHT 0 -> DOWN 1 -> LEFT 2 -> UP 3
  const DIRECTIONS = [
      [1, 0], // RIGHT
      [0, 1], // DOWN
      [-1, 0], // LEFT
      [0, -1] // UP
  ];

  const visited = Array(matrix.length)
      .fill(0)
      .map(row => Array(matrix[0].length).fill(0));

  const totalElements = matrix.length * matrix[0].length;

  let posX = 0;
  let posY = 0;

  let vector = 0; // index of DIRECTIONS

  yield matrix[posY][posX];
  visited[posY][posX] = 1;

  for (let i = 1; i < totalElements; i++) {
      for (let j = 0; j < DIRECTIONS.length; j++) {
          let testX = posX + DIRECTIONS[vector][0];
          let testY = posY + DIRECTIONS[vector][1];

          if (
              testX < visited[0].length &&
              testY < visited.length &&
              visited[testY][testX] === 0
          ) {
              // Good!
              posX = testX;
              posY = testY;
              visited[posY][posX] = 1;
              break;
          }
          // Try next direction
          vector = (vector + 1) % 4;
      }

      yield matrix[posY][posX];
  }
}
 
// keep this function call here 
MatrixSpiral(readline());




