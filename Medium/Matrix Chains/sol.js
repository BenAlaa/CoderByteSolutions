function MatrixChains(arr) {
  let sum = 0
  while (arr.length > 2) {

    let minValue = Infinity
    let minIndex
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < minValue && (i < arr.length - 2 || i > 1)) {
        minValue = arr[i]
        minIndex = i
      }
    }
    if (minIndex < arr.length - 2) {
      sum += arr[minIndex] * arr[minIndex + 1] * arr[minIndex + 2]
      arr.splice(minIndex + 1, 1)
    } else {
      sum += arr[minIndex - 2] * arr[minIndex - 1] * arr[minIndex]
      arr.splice(minIndex - 1, 1)
    }

  }
  return sum
}

// keep this function call here 
console.log(MatrixChains(readline()));


































function MatrixChains(arr) {
  let sum = 0
  while (arr.length > 2) {

    let minValue = Infinity
    let minIndex
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < minValue && (i < arr.length - 2 || i > 1)) {
        minValue = arr[i]
        minIndex = i
      }
    }
    if (minIndex < arr.length - 2) {
      sum += arr[minIndex] * arr[minIndex + 1] * arr[minIndex + 2]
      arr.splice(minIndex + 1, 1)
    } else {
      sum += arr[minIndex - 2] * arr[minIndex - 1] * arr[minIndex]
      arr.splice(minIndex - 1, 1)
    }

  }
  return sum
}

// keep this function call here 
console.log(MatrixChains(readline()));
























function MatrixChains(arr) { 
  //I WATCHED VIDEOS, READ WEB SITES AND LOOKED AT EXAMPLE ANSWERD TO COME UP WITH THIS - DO NOT BE IMPRESSED BY ME
  let matrix = generateMatrix(arr);
    return matrix;


    function generateMatrix(arr) {
        let matrix = [...Array(arr.length)].map(x=>Array(arr.length).fill(0));


        for (let i = 1; i < arr.length; i++) {
            matrix[i][i] = 0;
        }
        for (let l = 2; l < arr.length; l++) {
            for (let i = 1; i < arr.length - l + 1; i++) {
                    let j = i+l-1; 
                    if(j === arr.length) continue; 
                    matrix[i][j] = Number.MAX_SAFE_INTEGER; 
                    let temp = []
                    for (let k = i; k <= j -1; k++) {
                        let calculations = matrix[i][k] + matrix[k + 1][j] + (arr[i-1] * arr[k] * arr[j])
                        temp.push(calculations)
                    }
                    let min = Math.min(...temp);
                    matrix[i][j] = temp.length > 0 ? Math.min(...temp) : 'X'
                
            }
        }
        return matrix[1][arr.length-1];
    }
}
   
// keep this function call here 
console.log(MatrixChains(readline()));