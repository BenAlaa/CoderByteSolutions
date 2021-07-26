function ClosestEnemyII(strArr) { 
  let index;
  const enemies = [];
  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < strArr.length; j++) {
      if (strArr[i][j] === '1') {
        index = [i, j];
      }
      if (strArr[i][j] === '2') {
        enemies.push([i, j])
      }
    }
  }
  if (enemies.length === 0) { return 0; }
  let shortestDistance = strArr.length + 1;
  for (let k = 0; k < enemies.length; k++) {
    const i = enemies[k][0];
    const j = enemies[k][1];
    // try without wrapping
    if (Math.abs(index[0] - i) + Math.abs(index[1] - j) < shortestDistance) {
      shortestDistance = Math.abs(index[0] - i) + Math.abs(index[1] - j)
    }
    // try wrapping i
    if (Math.abs(index[0] - (i - strArr.length + 1)) + Math.abs(index[1] - j) + 1 < shortestDistance) {
      shortestDistance = Math.abs(index[0] - (i - strArr.length + 1)) + Math.abs(index[1] - j) + 1
    }
    // try wrapping j
    if (Math.abs(index[0] - i) + Math.abs(index[1] - (j - strArr.length + 1)) + 1 < shortestDistance) {
      shortestDistance = Math.abs(index[0] - i) + Math.abs(index[1] - (j - strArr.length + 1)) + 1
    }
    // try wrapping both
    if (Math.abs(index[0] - (i - strArr.length + 1)) + Math.abs(index[1] - (j - strArr.length + 1)) + 2 < shortestDistance) {
      shortestDistance = Math.abs(index[0] - (i - strArr.length + 1)) + Math.abs(index[1] - (j - strArr.length + 1)) + 2
    }
  }
  return shortestDistance;
}
// keep this function call here 
ClosestEnemyII(readline());