function newIdx(arr, currPos, dir) {

  let offset = arr[currPos];
  if (dir === "LEFT") offset *= -1;
  let newPos = currPos + offset;
  if (newPos < 0) {
    newPos += Math.ceil(-newPos / arr.length) * arr.length;
  }
  //console.log(`currPos = ${currPos}, offset = ${offset}, newPos = ${newPos}\n`);
  return newPos % arr.length;
}

function findShortestPath(arr, dest, visited, currIdx, stepsSoFar) {
  
  //console.log(`currIdx = ${currIdx}`);

  //If we have reached the destination, then return number of 
  //steps taken
  if (currIdx === dest) {
    //console.log(`arrived`);
    return stepsSoFar;
  }

  //Check if we've been here before
  if (visited[currIdx]) {
    //console.log(`dead end`);
    return -1;
  }

  //Clone visit history and mark that we have visited this index
  visited = [...visited];
  visited[currIdx] = true;

  //Go left and check shortest path
  let leftShortestPath = findShortestPath(arr, dest, visited, 
                            newIdx(arr, currIdx, "LEFT"), stepsSoFar + 1);
  let rightShortestPath = findShortestPath(arr, dest, visited, 
                            newIdx(arr, currIdx, "RIGHT"), stepsSoFar + 1);
  
  if (leftShortestPath === -1) return rightShortestPath;
  if (rightShortestPath === -1) return leftShortestPath;
  return (Math.min(leftShortestPath, rightShortestPath));

}

function ArrayJumping(arr) { 

  // Find largest num and its position
  let largestNum = Number.NEGATIVE_INFINITY;
  let largestIdx = -1;
  arr.forEach(
    (val, idx) => {
      if (val > largestNum) {
        largestNum = val;
        largestIdx = idx;
      }
    }
  )

  //See if we can jump out and back
  let visited = new Array(arr.length).fill(false);
  let leftPath = findShortestPath(arr, largestIdx, visited,
                    newIdx(arr, largestIdx, "LEFT"), 1);  
  let rightPath = findShortestPath(arr, largestIdx, visited,
                    newIdx(arr, largestIdx, "RIGHT"), 1);
  if (leftPath === -1) return rightPath;
  if (rightPath === -1) return leftPath;
  return Math.min(leftPath, rightPath);

}
   
// keep this function call here 
console.log(ArrayJumping(readline()));







































function newIdx(arr, currPos, dir) {

  let offset = arr[currPos];
  if (dir === "LEFT") offset *= -1;
  let newPos = currPos + offset;
  if (newPos < 0) {
    newPos += Math.ceil(-newPos / arr.length) * arr.length;
  }
  //console.log(`currPos = ${currPos}, offset = ${offset}, newPos = ${newPos}\n`);
  return newPos % arr.length;
}

function findShortestPath(arr, dest, visited, currIdx, stepsSoFar) {
  
  //console.log(`currIdx = ${currIdx}`);

  //If we have reached the destination, then return number of 
  //steps taken
  if (currIdx === dest) {
    //console.log(`arrived`);
    return stepsSoFar;
  }

  //Check if we've been here before
  if (visited[currIdx]) {
    //console.log(`dead end`);
    return -1;
  }

  //Clone visit history and mark that we have visited this index
  visited = [...visited];
  visited[currIdx] = true;

  //Go left and check shortest path
  let leftShortestPath = findShortestPath(arr, dest, visited, 
                            newIdx(arr, currIdx, "LEFT"), stepsSoFar + 1);
  let rightShortestPath = findShortestPath(arr, dest, visited, 
                            newIdx(arr, currIdx, "RIGHT"), stepsSoFar + 1);
  
  if (leftShortestPath === -1) return rightShortestPath;
  if (rightShortestPath === -1) return leftShortestPath;
  return (Math.min(leftShortestPath, rightShortestPath));

}

function ArrayJumping(arr) { 

  // Find largest num and its position
  let largestNum = Number.NEGATIVE_INFINITY;
  let largestIdx = -1;
  arr.forEach(
    (val, idx) => {
      if (val > largestNum) {
        largestNum = val;
        largestIdx = idx;
      }
    }
  )

  //See if we can jump out and back
  let visited = new Array(arr.length).fill(false);
  let leftPath = findShortestPath(arr, largestIdx, visited,
                    newIdx(arr, largestIdx, "LEFT"), 1);  
  let rightPath = findShortestPath(arr, largestIdx, visited,
                    newIdx(arr, largestIdx, "RIGHT"), 1);
  if (leftPath === -1) return rightPath;
  if (rightPath === -1) return leftPath;
  return Math.min(leftPath, rightPath);

}
   
// keep this function call here 
console.log(ArrayJumping(readline()));








































function getNextItemIndex(currentIndex, direction, arr) {
  const arrLen = arr.length;

  let i = currentIndex;
  let jumpCount=arr[currentIndex]

  if (direction === 'R') {
      for (;jumpCount>0; jumpCount--) {
          i++;
          if (i === arrLen) {
              i = 0;
          }
      }
  } else {
      for (;jumpCount>0; jumpCount--) {
          i--;
          if (i === -1) {
              i = arrLen - 1;
          }
      }
  }

  return i;
}

function ArrayJumping(arr) {
  const indexMaxItem = arr.indexOf(Math.max(...arr));
  const queue = [[indexMaxItem, 0]];
  const traversedDirections = [];

  while (queue.length) {
      const currentIndexData = queue.shift();

      for (let direction of ['R', 'L']) {
          let traversedVal = currentIndexData[0] + '_' + direction;
          let res = null;

          if (traversedDirections.indexOf(traversedVal) === -1) {
              res = getNextItemIndex(currentIndexData[0], direction, arr);
              if (res === indexMaxItem) {
                  return currentIndexData[1]+1;
              }
              traversedDirections.push(traversedVal);
              queue.push([res, currentIndexData[1]+1]);
          }
      }
  }

  return -1;
}
 
// keep this function call here 
console.log(ArrayJumping(readline()));