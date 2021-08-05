function ArrayMinJumps(arr) { 

  // code goes here
  n = arr.length;
  if(n==1){return 0; };
  startnew = [0];
  steps = 0;
  while(steps<100){
    steps ++;
    start = startnew.slice();
    startnew = [];
    for(i of start){
      for (j=1; j<=arr[i]; j++){
        k = i+j;
        startnew.push(k);
        if(k>=n-1){return steps;};
      }
    }
  }  
  return -1; 

}
   
// keep this function call here 
console.log(ArrayMinJumps(readline()));





































function ArrayMinJumps(arr) {
  const len = arr.length;
  if(len === 1) {
    return 0;
  }
  const boolArray = new Array(len);
  for (let i = 0; i < len; i++) {
    const row = new Array(len).fill(false);
    const entry = arr[i];
    if (i === 0) {
      row.fill(true, 0, entry +1);
    } else {
      for(let j = i; j < len; j++ ) {
        row[j] = (boolArray[i - 1][j] || j-i <= entry);
      }
    }
    boolArray[i] = row;
  }
  let indexY = 0;
  let indexX = len -1;
  while(!boolArray[indexY][indexX]) {
    indexY++;
  }
  if (indexY === indexX) {
    return -1;
  }
  let jumps = 0;
  while (indexY > 0) {
    indexX = indexY;
    let row = boolArray[indexY]
    while ( indexY >= 0 && row[indexX]){
      indexY = indexY - 1;
      row = boolArray[indexY]
    }
    indexY++;
    jumps++;
  }
  jumps++;
  return jumps;
}
   
// keep this function call here 
console.log(ArrayMinJumps(readline()));

































function ArrayMinJumps(arr) { 
	var len=arr.length, T=[0];
	

  return T.length===len?T[len-1]:-1
}
   
// keep this function call here 
console.log(ArrayMinJumps(readline()));



































function ArrayMinJumps(arr) { 

  // Brute force

  // Generate combos
  let combos = [];
  for (let max = Math.pow(2, arr.length), i = max / 2; i < max; i++) {
      let combo = i.toString(2);
      // Pad
      while (combo.length < arr.length) {
          combo = '0' + combo;
      }
      combos.push(combo);
  }

  let goodCombos = [];
  for (let i = 0; i < combos.length; i++) {
      let combo = combos[i];

      let skips = 1;
      let goodCombo = true;
      for (let j = 0, last = 0; j < combo.length; j++) {
          if (combo[j] === '1') {
              if (j - last > skips) {
                  // fail
                  goodCombo = false;
                  break;
              }

              skips = arr[j];
              last = j;
          }
      }
      if (combo[combo.length - 1] !== '1') {
          // Must be able to get to the end
          goodCombo = false;
      }

      if (goodCombo) {
          goodCombos.push(combo);
      }
  }

  const numJumps = goodCombos
      .map(combo => {
          return combo
              .split('')
              .map(Number)
              .reduce((sum, value) => (sum += value), -1);
      })
      .sort((a, b) => a - b);

  if (numJumps.length === 0) {
      return -1;
  }

  return numJumps[0];
}
 
// keep this function call here 
ArrayMinJumps(readline());