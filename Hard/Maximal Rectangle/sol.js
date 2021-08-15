function MaximalRectangle(strArr) { 
  const matrixWidth = strArr[0].length;
  const matrixHeight = strArr.length;
  let max = 1;
  for (let width = 1; width <= matrixWidth; width++){
    for (let height = 1; height <= matrixHeight; height++){
      let currentArea = width*height;
      if (currentArea < max) {
        continue
      }
      for (let x = 0; x < matrixWidth - width+1; x++){
        for(let y = 0; y < matrixHeight - height+1; y++){
          let rows = strArr.slice(y, height+y)
          let currArr = [...rows.map((row) => row.slice(x, x+width))].join('').split('')
          if (currentArea > max && currArr.reduce((p, c) => parseInt(p, 10)+parseInt(c.split('').map(Number).reduce((p1, c1) => p1+c1), 10)) === currentArea){
            max = currentArea;
          }
      }
    }
  }
  }
  // code goes here  
  return max; 

}
   
// keep this function call here 
console.log(MaximalRectangle(readline()));










































function MaximalRectangle(strArr) { 
  const matrixWidth = strArr[0].length;
  const matrixHeight = strArr.length;
  let max = 1;
  for (let width = 1; width <= matrixWidth; width++){
    for (let height = 1; height <= matrixHeight; height++){
      let currentArea = width*height;
      if (currentArea < max) {
        continue
      }
      for (let x = 0; x < matrixWidth - width+1; x++){
        for(let y = 0; y < matrixHeight - height+1; y++){
          let rows = strArr.slice(y, height+y)
          let currArr = [...rows.map((row) => row.slice(x, x+width))].join('').split('')
          if (currentArea > max && currArr.reduce((p, c) => parseInt(p, 10)+parseInt(c.split('').map(Number).reduce((p1, c1) => p1+c1), 10)) === currentArea){
            max = currentArea;
          }
      }
    }
  }
  }
  // code goes here  
  return max; 

}
   
// keep this function call here 
console.log(MaximalRectangle(readline()));







































function MaximalRectangle(strArr) { 
  const matrixWidth = strArr[0].length;
  const matrixHeight = strArr.length;
  let max = 1;
  for (let width = 1; width <= matrixWidth; width++){
    for (let height = 1; height <= matrixHeight; height++){
      let currentArea = width*height;
      if (currentArea < max) {
        continue
      }
      for (let x = 0; x < matrixWidth - width+1; x++){
        for(let y = 0; y < matrixHeight - height+1; y++){
          let rows = strArr.slice(y, height+y)
          let currArr = [...rows.map((row) => row.slice(x, x+width))].join('').split('')
          if (currentArea > max && currArr.reduce((p, c) => parseInt(p, 10)+parseInt(c.split('').map(Number).reduce((p1, c1) => p1+c1), 10)) === currentArea){
            max = currentArea;
          }
      }
    }
  }
  }
  // code goes here  
  return max; 

}
   
// keep this function call here 
console.log(MaximalRectangle(readline()));