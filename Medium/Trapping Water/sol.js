function TrappingWater(arr) {
  let area = 0;
  for (let i = 1, m = Math.max(...arr); i < m + 1; i ++) {
    for (let i2 = 0, gate = false; i2 < arr.length; i2 ++) {
      let freeSpace = arr[i2] < i;
      
      if (!freeSpace)
        gate = true;
      else if (gate)
        area ++;
    }
  }
  return area;
}

// keep this function call here 
console.log(TrappingWater(readline()));




























function TrappingWater(arr) {
  let max = Math.max(...arr)
  let water = 0
  for ( let h = max ; h > 0 ; h-- ){
    let layer = []
    for ( let i = 0 ; i < arr.length ; i++ ){
      if ( arr[i] >= h ) layer.push(i) 
    }
    for ( let i = 1 ; i < layer.length ; i++ ){
      water += layer[i] - layer[i-1] - 1
    }
  }
  return water; 
}
   
// keep this function call here 
console.log(TrappingWater(readline()));



































function TrappingWater(arr) {
  let leftBuilding = arr[0];
  let stack = [];
  let sum = 0;
  let index = 1;
  let leng = arr.length;
  if(leng < 2) {
    return 0;
  }
  while (index < leng) {
    let currentBuilding = arr[index];
    if (currentBuilding >= leftBuilding) {
      stack.push(0);
      leftBuilding = currentBuilding;
    } else {
      stack.push(leftBuilding - currentBuilding);
    }
    index++;
  }
  let maxWater = 0;
  let currentSum = 0;
  while(stack.length > 0) {
    let entry = stack.shift();
    if (entry === 0) {
      if(currentSum > maxWater) {
        maxWater = currentSum;
      }
    } else {
      currentSum += entry;
    }
  }
  return maxWater;

}
   
// keep this function call here 
console.log(TrappingWater(readline()));































function TrappingWater(arr) { 

  let maxArea = 0;

  for (let a = 0; a < arr.length; a++) {
      for (let b = a + 1; b < arr.length; b++) {
          const maxHeight = Math.min(arr[a], arr[b]);

          // area ignoring in between buildings
          let area = (b - a - 1) * maxHeight;

          // now subtract smaller buildings in between
          for (let i = a + 1; i < b; i++) {
              const missingWater = arr[i] > maxHeight ? maxHeight : arr[i];
              area -= missingWater;
          }

          if (area > maxArea) {
              maxArea = area;
          }
      }
  }

  return maxArea;
}
 
// keep this function call here 
TrappingWater(readline());
