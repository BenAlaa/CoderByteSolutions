function LongestMatrixPath(strArr) { 
  const memo = {};
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  const ymax = strArr.length;
  const xmax = strArr[0].length;

  const dfs = (arr,x,y,memo) => {
    let max = 0;
    let key = x.toString()+y.toString();
    if(key in memo) return memo[key];
    for(const dir of dirs){
      let newx = x + dir[0];
      let newy = y + dir[1];
      if(newx >= xmax || newx < 0 || newy >= ymax || newy < 0) continue;
      if(arr[newy][newx] <= arr[y][x]) continue;

      let len = 1 + dfs(arr, newx, newy, memo);
      max = Math.max(max, len);
    }
    memo[key] = max;
    return max;
  }

  let max = 0;
  for(let i=0; i<ymax; i++){
    for(let j=0; j<xmax; j++){
      let len = dfs(strArr, j, i, memo);
      max = Math.max(max, len);
    }
  }
  // code goes here  
  return max; 

}
   
// keep this function call here 
console.log(LongestMatrixPath(readline()));
































function LongestMatrixPath(strArr) { 
  const findLongestPath = (coords, strArr, count = 0) => {
    debugger;
    const y = parseInt(coords[0]);
    const x = parseInt(coords[1]);
    let num = parseInt(strArr[y][x]);
    if (x < strArr[0].length - 1) {
      if (parseInt(strArr[y][x + 1]) > num) {
        count++;
        findLongestPath([y, x + 1], strArr, count);
        count--;
      }
    } //left
    if (x > 0) {
      if (parseInt(strArr[y][x - 1]) > num) {
        count++;
        findLongestPath([y, x - 1], strArr, count);
        count--;
      }
    } //right
    if (y < strArr.length - 1 && y >= 0) {
      if (parseInt(strArr[y + 1][x]) > num) {
        count++;
        findLongestPath([y + 1, x], strArr, count);
        count--;
      }
    } //down
    if (y > 0 && y < strArr.length) {
      if (parseInt(strArr[y - 1][x]) > num) {
        count++;
        findLongestPath([y - 1, x], strArr, count);
        count--;
      }
    } //up

    if (count > maximum) {
      maximum = count;
    }
    return count;
  };
  let maximum = 0;
  // console.log(findLongestPath('23', strArr));
  let max = 0;
  const hash = {};
  for (let i = 0; i < strArr[0].length; i++) {
    for (let j = 0; j < strArr.length; j++) {
      let coords = `${j}${i}`;
      let temp = findLongestPath(coords, strArr);
      if (temp > max) {
        max = temp;
      }
    }
  }
  return maximum;

}
   
// keep this function call here 
console.log(LongestMatrixPath(readline()));





























function LongestMatrixPath(strArr) { 
  const memo = {};
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  const ymax = strArr.length;
  const xmax = strArr[0].length;

  const dfs = (arr,x,y,memo) => {
    let max = 0;
    let key = x.toString()+y.toString();
    if(key in memo) return memo[key];
    for(const dir of dirs){
      let newx = x + dir[0];
      let newy = y + dir[1];
      if(newx >= xmax || newx < 0 || newy >= ymax || newy < 0) continue;
      if(arr[newy][newx] <= arr[y][x]) continue;

      let len = 1 + dfs(arr, newx, newy, memo);
      max = Math.max(max, len);
    }
    memo[key] = max;
    return max;
  }

  let max = 0;
  for(let i=0; i<ymax; i++){
    for(let j=0; j<xmax; j++){
      let len = dfs(strArr, j, i, memo);
      max = Math.max(max, len);
    }
  }
  // code goes here  
  return max; 

}
   
// keep this function call here 
console.log(LongestMatrixPath(readline()));






































function LongestMatrixPath(strArr) { 

  // code goes here  
 const memo = {};
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  const ymax = strArr.length;
  const xmax = strArr[0].length;

  const dfs = (arr,x,y,memo) => {
    let max = 0;
    let key = x.toString()+y.toString();
    if(key in memo) return memo[key];
    for(const dir of dirs){
      let newx = x + dir[0];
      let newy = y + dir[1];
      if(newx >= xmax || newx < 0 || newy >= ymax || newy < 0) continue;
      if(arr[newy][newx] <= arr[y][x]) continue;

      let len = 1 + dfs(arr, newx, newy, memo);
      max = Math.max(max, len);
    }
    memo[key] = max;
    return max;
  }

  let max = 0;
  for(let i=0; i<ymax; i++){
    for(let j=0; j<xmax; j++){
      let len = dfs(strArr, j, i, memo);
      max = Math.max(max, len);
    }
  }
  // code goes here  
  return max; 

}
   
// keep this function call here 
console.log(LongestMatrixPath(readline()));