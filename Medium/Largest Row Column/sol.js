function LargestRowColumn(strArr) {
  const originalMatrix = strArr.map(row => row.split(""))
  const clone = (matrix) => matrix.map(row => [...row])
  let largest = 0
  let pos = ""

  const search = (row, col, matrix, sum, length) => {
    sum += +matrix[row][col]
    if (length === 3) {
      const coords = sum.toString().padStart(2, "0")
      try {
        const target = +originalMatrix[coords[0]][coords[1]]
        if (target && +coords > largest) {
          largest = +coords
          pos = sum.toString()
        }
      } catch (e) { }

    }
    const newMatrix = clone(matrix)
    newMatrix[row][col] = false
    for (let i = row - 1; i <= row + 1; i++) {
      for (let j = col - 1; j <= col + 1; j++) {
        if (Math.abs(row - i) + Math.abs(col - j) !== 1) continue
        if (!newMatrix[i] || !newMatrix[i][j]) continue
        search(i, j, newMatrix, sum, length + 1)
      }
    }
  }

  for (let i = 0; i < originalMatrix.length; i++) {
    for (let j = 0; j < originalMatrix[0].length; j++) {
      search(i, j, originalMatrix, 0, 1)
    }
  }

  return pos
}

// keep this function call here 
console.log(LargestRowColumn(readline()));





























function LargestRowColumn(strArr) { 
  const maxRow = strArr.length -1;
  const maxCol = strArr[0].length - 1;
  const dirs = [[1,0],[-1,0], [0, 1], [0, -1]];
  let largest = -Infinity;

  for (let i = 0; i < strArr.length; i++){
    for (let j = 0; j < strArr[0].length; j++){
      const pos = [i, j]
      const num = parseInt(strArr[i][j]);

      dfs(pos, num);
    }
  }

  return largest;
  
  function dfs(currPos, sum, prevPos, count=2){
    // console.log(currPos, sum, prevPos, count)
    if (count === 0){
      if (inBound(sum)){
        largest = largest < sum ? sum : largest;
      }
      return;
    }

    dirs.forEach((dir) => {
      const [dx, dy] = dir;
      const [nx, ny] = [currPos[0] + dx, currPos[1] + dy];
      if (nx > maxRow || ny > maxCol || nx < 0 || ny < 0) return;
      if (prevPos !== undefined && (prevPos[0] === nx && prevPos[1] === ny) ) return;
      const num = parseInt(strArr[nx][ny])
      return dfs([nx, ny], sum + num, currPos, count - 1);
    })
  }

  function inBound(num){
    let row, col;
    
    if (num > 9){
      col = num % 10;
      row = (num - col) / 10
    } else {
      row = 0;
      col = num;
    }
    // console.log(maxRow, row, maxCol, col)
    return maxRow >= row && maxCol >= col
  }

}
   
// keep this function call here 
console.log(LargestRowColumn(readline()));































function LargestRowColumn(strArr) {
	let height = strArr.length;
	let width = strArr[0].length;
	let helpers = helperMethods();

	//modify the strArr to an array of row arrays
	let newArr = helpers.reviseArr(strArr);

	let allSums = [];

	for (let i = 0; i < height; i++) {
		for (let j = 0; j < width; j++) {
			allSums.push(...helpers.createSums([i, j]));
		}
	}

	allSums = helpers.uniqArr(allSums).sort((val1, val2) => {return val1 - val2});

	//create an array of sums, converted into array positions
	let convertedSums = helpers.convertSums(allSums);

	//remove all points that don't exist on the grid
	let qualifyingSums = convertedSums.filter(val => {
		return parseInt(val[0], 10) < height && parseInt(val[1], 10) < width;
	});

	return parseInt(qualifyingSums.pop().join(''));

}

function helperMethods() {
	return {
		arr: [],

		//return an array stripped of all duplicate elements
		uniqArr(arr) {
			let mySet = new Set(arr);
			return Array.from(mySet);
		},

		//convert arr into an array of arrays containing integers
		reviseArr(arr) {
			let newArr = [];
			arr.forEach(val => {
				newArr.push(val.split('').map(val => {
					return parseInt(val, 10);
				}));
			});
			return this.arr = newArr;
		},

		//input a point, and get all valid adjacent points
		getPoints(point) {
			return [
				[point[0] + 1, point[1]],
				[point[0] - 1, point[1]],
				[point[0], point[1] + 1],
				[point[0], point[1] - 1]
			].filter(val => {
				return val[0] >= 0 && val[0] < this.arr.length && val[1] >= 0 && val[1] < this.arr[0].length;
			})
		},

		//given a point, return a sorted array of values obtained by
		//adding numbers at adjacent points
		createSums(point) {
			let nextPoints = this.getPoints(point);
			let holder = [];
			nextPoints.forEach(val => {
				termPoints = this.getPoints(val).filter(val2 => {
					return (val2[0] !== point[0] || val2[1] !== point[1]);
				});
				termPoints.forEach(val3 => {
					holder.push(this.arr[point[0]][point[1]] + this.arr[val[0]][val[1]] + this.arr[val3[0]][val3[1]]);
				});
			});
			return this.uniqArr(holder).sort((val1, val2) => { return val1 - val2});
		},

		convertSums(sums) {
			return sums.map(val => {
				let str = val.toString();
				return str.length === 1 ? '0' + str : str;
			}).map(val => {
				return [val[0], val[1]];
			});
		}
	}
}
   
// keep this function call here 
LargestRowColumn(readline());
