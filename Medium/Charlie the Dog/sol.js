function arrPermutations(permutation) {
  const length = permutation.length;
  const result = [permutation.slice()];
  const c = new Array(length).fill(0);
  let i = 1, k, p;

  while (i < length) {
      if (c[i] < i) {
          k = i % 2 && c[i];
          p = permutation[i];
          permutation[i] = permutation[k];
          permutation[k] = p;
          ++c[i];
          i = 1;
          result.push(permutation.slice());
      } else {
          c[i] = 0;
          ++i;
      }
  }
  return result;
}

function getStepsBetweenCells(cell1, cell2) {
  return Math.abs(cell2[0] - cell1[0]) + Math.abs(cell2[1] - cell1[1]);
}

function getPathLen(dogCoords, foods, homeCoords) {
  let currentCell = dogCoords;
  let sumSteps = 0;

  for (let i=0, foodLen=foods.length; i<foodLen; i++) {
      const nextCell = foods[i];
      const cellDistance = getStepsBetweenCells(nextCell, currentCell);

      sumSteps += cellDistance;
      currentCell = nextCell;
  }
  sumSteps += getStepsBetweenCells(currentCell, homeCoords);

  return sumSteps;
}

function CharlietheDog(strArr) {
  const ROWS_LENGTH = 4;
  const COLUMNS_LENGTH = 4;
  const food = [];
  let homeCoords, dogCoords;

  for (let i=0; i<ROWS_LENGTH; i++) {
      for (let j=0; j<COLUMNS_LENGTH; j++) {
          switch (strArr[i][j]) {
              case 'H':
                  homeCoords = [i, j];
                  break;
              case 'C':
                  dogCoords = [i, j];
                  break;
              case 'F':
                  food.push([i, j]);
                  break;
          }
      }
  }

  const allPossibleFoodPaths = arrPermutations(food);
  let minPathLen = null;

  for (let i=0, pathLen=allPossibleFoodPaths.length; i<pathLen; i++) {
      const currentPathLen = getPathLen(dogCoords, allPossibleFoodPaths[i], homeCoords);
      if (! minPathLen || minPathLen > currentPathLen) {
          minPathLen = currentPathLen;
      }
  }

  return minPathLen;
}
 
// keep this function call here 
console.log(CharlietheDog(readline()));








































// http://en.wikipedia.org/wiki/Heap%27s_algorithm
function arrPermutations(permutation) {
  const length = permutation.length;
  const result = [permutation.slice()];
  const c = new Array(length).fill(0);
  let i = 1, k, p;

  while (i < length) {
      if (c[i] < i) {
          k = i % 2 && c[i];
          p = permutation[i];
          permutation[i] = permutation[k];
          permutation[k] = p;
          ++c[i];
          i = 1;
          result.push(permutation.slice());
      } else {
          c[i] = 0;
          ++i;
      }
  }
  return result;
}

function getStepsBetweenCells(cell1, cell2) {
  return Math.abs(cell2[0] - cell1[0]) + Math.abs(cell2[1] - cell1[1]);
}

function getPathLen(dogCoords, foods, homeCoords) {
  let currentCell = dogCoords;
  let sumSteps = 0;

  for (let i=0, foodLen=foods.length; i<foodLen; i++) {
      const nextCell = foods[i];
      const cellDistance = getStepsBetweenCells(nextCell, currentCell);

      sumSteps += cellDistance;
      currentCell = nextCell;
  }
  sumSteps += getStepsBetweenCells(currentCell, homeCoords);

  return sumSteps;
}

function CharlietheDog(strArr) {
  const ROWS_LENGTH = 4;
  const COLUMNS_LENGTH = 4;
  const food = [];
  let homeCoords, dogCoords;

  for (let i=0; i<ROWS_LENGTH; i++) {
      for (let j=0; j<COLUMNS_LENGTH; j++) {
          switch (strArr[i][j]) {
              case 'H':
                  homeCoords = [i, j];
                  break;
              case 'C':
                  dogCoords = [i, j];
                  break;
              case 'F':
                  food.push([i, j]);
                  break;
          }
      }
  }

  const allPossibleFoodPaths = arrPermutations(food);
  let minPathLen = null;

  for (let i=0, pathLen=allPossibleFoodPaths.length; i<pathLen; i++) {
      const currentPathLen = getPathLen(dogCoords, allPossibleFoodPaths[i], homeCoords);
      if (! minPathLen || minPathLen > currentPathLen) {
          minPathLen = currentPathLen;
      }
  }

  return minPathLen;
}
 
// keep this function call here 
console.log(CharlietheDog(readline()));







































function CharlietheDog(strArr) {

  let food = []
  let current;
  let home;
  let possibleMoves = []
  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < strArr.length; j++) {
      if (strArr[i][j] === 'F') food.push([i, j])
      else if (strArr[i][j] === 'C') current = [i, j]
      else if (strArr[i][j] === 'H') home = [i, j]
    }
  }

  search(food, current, 0)
  // console.log(possibleMoves)
  return Math.min(...possibleMoves)

  function search(remainingFood, position, moves) {
    // console.log(position, moves)
    if (remainingFood.length > 0) {
      for (let i = 0; i < remainingFood.length; i++) {
      // for (let i = 0; i < 1; i++) {
        let target = remainingFood[i]
        let dist = distance(position, target)
        let newRemainingFood = remainingFood.slice()
        newRemainingFood.splice(i, 1)
        search(newRemainingFood, target, dist + moves)
      }
    } else possibleMoves.push(moves + distance(position, home))
  }

  function distance(current, target) {
    let x = Math.abs(current[0] - target[0])
    let y = Math.abs(current[1] - target[1])
    return x + y
  }

}

// keep this function call here 
console.log(CharlietheDog(readline()));
