function SwitchSort(arr) { 
  // code goes here  

    var tmp=0, count=0; 

 var newarr = arr.slice(0);
 newarr.sort();
 for (var j=0 ; j < newarr.length; j++) {
   for (var k=j ; k < newarr.length; k++) {
      if ((newarr[j] == arr[k])&&(j != k)) {
        tmp = arr[j];
        arr[j] = arr[k];
        arr[k] = tmp;
        count++;
      }
    }    
  }
  return count;          
}   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SwitchSort(readline());


























function switchSort(arr) {
  var sorted = arr.slice(0).sort(function (a, b) {
          return a - b;
      }),
      counter = 0,
      k;

  arr.forEach(function (element, index, array) {
      if (element !== sorted[index]) {
          k = arr.indexOf(sorted[index]);
          array.splice(index, 1, sorted[index]);
          array.splice(k, 1, element);
          counter += 1;
      }
  });
  return counter;
}  

// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
switchSort(readline());



































function SwitchSort(arr) { 

  var testArrays = [];
  var alreadyTested = [];
  
  function transformArray(arrArg) {
    var newArray, swapPos, temp, arrString;
    for (var i = 0; i < arrArg.length; i++) {

      newArray = arrArg.slice();
      swapPos = i + newArray[i];
      if (swapPos >= newArray.length)
        swapPos = swapPos - newArray.length;
      temp = newArray[i];
      newArray[i] = newArray[swapPos];
      newArray[swapPos] = temp;
      arrString = newArray.join("");
      if (alreadyTested.indexOf(arrString) == -1) {
        alreadyTested.push(arrString);
        testArrays.push(newArray);
      }

      newArray = arrArg.slice();
      swapPos = i - newArray[i];
      if (swapPos < 0)
        swapPos = newArray.length + swapPos;
      temp = newArray[i];
      newArray[i] = newArray[swapPos];
      newArray[swapPos] = temp;
      arrString = newArray.join("");
      if (alreadyTested.indexOf(arrString) == -1) {
        alreadyTested.push(arrString);
        testArrays.push(newArray);
      }                
    }
   }
    
  // code goes here
  
  alreadyTested.push(arr.join(""));
  testArrays.push(arr);
  var goal = arr.slice().sort().join("");
  var swaps = 0;
  var start = 0;
  var stop = 1;
  while (alreadyTested.indexOf(goal) == -1) {
    for (var i = start; i < stop; i++)      
      transformArray(testArrays[i]);
    swaps++;
    start = stop;
    stop = alreadyTested.length;
  }
  return swaps; 
  
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SwitchSort(readline());



































function SwitchSort(arr) { 
	//¨C¦¸³£§ä¥Xarr¤¤³Ì¤p­È
	
	function getIndex(arr, value) {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] ===  value) {
				return i;
			}
		}
		
	}
	
	var value = 1;	//¨C¦¸¥[1
	var count = 0;
	while(value <= arr.length) {	
		var index = getIndex(arr, value);	//¨ú±o¦¹value¡A¥Ø«e¦barr¤¤ªº¦ì¸m
		var changeValue = arr[value-1];		//­n³Q¸m´«ªº­È
		//console.log("index: " + index);
		//console.log("value: " + value);
		//console.log("changeValue: " + changeValue);
		if (value != changeValue) {
			count++;
			arr[value-1] = value;
			arr[index] = changeValue;
		}
		value++;
	}
	//console.log(arr);
	console.log(count);
	return count;
	
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SwitchSort(readline());