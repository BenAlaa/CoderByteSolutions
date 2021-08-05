function FoodDistribution(arr) {
	let treats = arr.shift();
	let myArray = arr.slice(0);
	let arrMin = arr.sort((val1, val2) => val2 - val1).pop()
	let len = myArray.length;

	//check to see if we have enough treats to get everybody to the current best level
	let testCount = myArray.reduce((val1, val2) => {
		return val1 + val2 - arrMin;
	}, 0);
	if (testCount <= treats) {
		return 0;
	}

	let valQuantArr = objectify(myArray);

	for (let i = 1; i < 25; i++) {
		let arrayLen = valQuantArr.length;
		let resp = flattenMid(valQuantArr, treats, i);
		valQuantArr = resp[0];
		arrayLen = valQuantArr.length;
		treats = resp[1];
		while (valQuantArr[0].quant <= i && valQuantArr[0].value > valQuantArr[1].value && treats >= i) {
			if (valQuantArr[0].quant <= treats) {
				valQuantArr[0].value--;
				treats -= valQuantArr[0].quant;
				valQuantArr = objectify(valQuantArr);
				arrayLen = valQuantArr.length;
			}
		}

		while (valQuantArr[arrayLen - 1].quant <= i && valQuantArr[arrayLen - 1].value > valQuantArr[arrayLen - 2].value && treats >= i) {
			if (valQuantArr[arrayLen - 1].quant <= treats) {
				valQuantArr[arrayLen - 1].value--;
				treats -= valQuantArr[arrayLen - 1].quant;
				valQuantArr = objectify(valQuantArr);
				arrayLen = valQuantArr.length;
			}
		}
	}

	let count = 0;
	for (let i = 0, len = valQuantArr.length; i < len - 1; i++) {
		count += Math.abs(valQuantArr[i].value - valQuantArr[i + 1].value);
	}
	return count;
}

//-----------------helpers-----------------------
flattenMid = (arr, treats, q) => {
	let index = 0;
	while (treats > 0 && index > -1) {
		index = arr.findIndex((val, ind) => {
			return val.quant <= q && ind >= 1 && ind < arr.length - 1 && val.value > arr[ind - 1].value && val.value > arr[ind + 1].value;
		});
		if (index >= 0) {
			arr[index].value --;
			treats -= q;
		}
	}
	return [objectify(arr), treats];
}

//turns an array into an object with the value equal to the number, and the
//quant being the number of times it occurs in a row
objectify = (array) => {
	//if it is the array of numbers
	if (typeof array[0] === 'number') {
		let target = [];
		let counter = 0;
		for (let i = 0, len = array.length; i < len; i++) {
			let val = array[i];
			counter++;
			if (array[i] === array[i + 1]) {
				continue;
			} else {
				target.push({
					value: array[i],
					quant: counter
				});
				counter = 0;
			}
		}
		return target;
	} else {
		//if it is an array of objects, turn it into an array of numbers, and
		//then run it through the objectify method
		let targetArray = [];
		array.forEach (val => {
			while (val.quant) {
				targetArray.push (val.value);
				val.quant--;
			}
		});
		return objectify(targetArray);
	}
};

   
// keep this function call here 
FoodDistribution(readline());



































function FoodDistribution(arr) {
  let food = arr.shift();

  // return pattern of array (-1, 0, +1)
  arr.gle = function () {
      let diffs = [ ];
      this.forEach((x, i, arr) => {
          let y = arr[i + 1] - x;
          diffs.push(y < 0 ? -1 : (y > 0 ? 1 : 0));
      });
      diffs.pop();
      return diffs;
  };

  // return length & index of shortest peak sequence in array
  arr.nextPeak = function () {
      let seq = this.gle();
      let i = -1, j,
          foundAt = -1,
          min = food + 1;

      while (~(i = seq.indexOf( 1, i + 1)) &&
             ~(j = seq.indexOf(-1, i + 1)) && (min > j - i)) {
          foundAt = i + 1;
          min = j - i;
      }
      return ~foundAt ? {index: foundAt, len: min} : false;
  };

  // find the closest -1 to left or +1 to right
  arr.nextEnd = function () {
      let seq = this.gle();
      let sl = seq.length;
      for (let i = 0; i < food; i++) {
          if (seq[i] < 0)
              return {index: 0, len: i + 1};
          if (seq[sl - i - 1] > 0)
              return {index: sl - i, len: i + 1};
      }
      return false;
  };

  // the net of all neighbor differences
  arr.diffSum = function () {
      return this.reduce((sum, x, i, a) => {
          if (++i === a.length) return sum;
          return sum + Math.abs(x - a[i]);
      }, 0);
  };

  while (arr.nextPeak() || arr.nextEnd()) {
      let peak = arr.nextPeak();
      let end = arr.nextEnd(), next;

      if (peak && end) {
          next = (peak.len > end.len * 2) ? end : peak;
      } else {
          next = peak || end;
      }

      for (let i = next.index; i < next.index + next.len; i++) {
          arr[i] -= 1;
          food -= 1;
      }
  }

  return arr.diffSum();
}

FoodDistribution(readline());

































/**
 * Calculate the difference between adjacent numbers in an array. The result is an
 * array of n - 1 items. A positive item means the first number is bigger, and
 * negative item means the second number is bigger.
 *
 * Example: differences([5,3,1,2,1]) -> [2,2,-1,1]
 */
 function differences(array) {
  const diffs = [];

  for (let i = 0; i < array.length - 1; i++) {
    diffs.push(Math.abs(array[i] - array[i + 1]));
  }

  return diffs;
}

/* Sum the values in an array */
function sum(array) {
  return  array.reduce((p, c) => p + c, 0);
}

function smallestDifference(p, c) {
  return sum(differences(c)) < sum(differences(p)) ? c : p;
}

function FoodDistribution(arr) {
  let [sandwiches, ...hungers] = arr;
  let diffs = differences(hungers);

  while (sandwiches > 0 && sum(diffs) > 0) {
    const possibles = [];

    for (let i = 0; i < hungers.length; i++) {
      let temp = [...hungers];
      temp[i]--;
      possibles.push(temp);
    }

    hungers = possibles.reduce(smallestDifference);

    sandwiches--;

    // We recalculate the differences array since the levels of hunger have changed
    diffs = differences(hungers);
  }

  return sum(diffs);

}
   
// keep this function call here 
FoodDistribution(readline());
































function FoodDistribution(arr) { 

  let sand = arr[0];
  let len = arr.length;
  
  let diff = 1;
  
  while(diff > 0 && sand > 0){
      for(let i=2; i<len; i++){
          if(sand > 0 && arr[i] > arr[i-1]){
              if(arr[i] - arr[i-1] < sand){
                  sand -= arr[i] - arr[i-1];
                  arr[i] = arr[i-1];
              }else{
                  arr[i] -= sand;
                  sand =0;
              }
          }
      }
      
      for(let i=2; i<len; i++){
          if(sand > 0 && arr[i-1] > arr[i]){
              if(arr[i-1] - arr[i]){
                  sand -= arr[i-1] - arr[i];
                  arr[i-1] = arr[i];
              }else{
                  arr[i-1] -= sand;
                  sand =0;
              }
          }
      }
  
  diff = 0;
  
      for(let i = 2; i < len; i++){
          diff += Math.abs(parseInt(arr[i] - arr[i-1]));
      }
  }
return diff;
  
}
 
// keep this function call here 
FoodDistribution(readline());


