function LongestConsecutive(arr) { 
  var sorted = [... new Set(arr.sort(function(x,y) {
      return x > y;
  }))]; 
  var good = [];
  var count = 0;

  for(var i = 0, n = arr.length; i < n; i++) {
      if (sorted[i + 1] == sorted[i] + 1) {
          count++
      } else {
          good.push(count + 1);
          count = 0;
      }
  }
  
  return Math.max.apply(null, good);
         
}
   
// keep this function call here 
LongestConsecutive(readline());































function LongestConsecutive(arr) { 
  var count=1, max=0;
  arr = arr.sort(function(a, b){return a-b}).filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    });

  for (var i=0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1] - 1) {
            count++;
        } else {
            if(count > max)max=count;
            count=1;
        }
  }
  return max;       
}
LongestConsecutive(readline());
































function LongestConsecutive(arr) { 
  var sortedArray = arr.sort((a,b) => { return a - b});
  var longestConecutive = 1;
  var currentLongest = 1;
  
  for (var i = 0; i < sortedArray.length -1; i++) {
      
      if (sortedArray[i] == sortedArray[i+1])
        continue;
      
      if (sortedArray[i+1] - sortedArray[i] == 1) {
            currentLongest++;
      }
      else {
          currentLongest = 1;
      }
      
      if (currentLongest > longestConecutive) {
          longestConecutive = currentLongest;
      }
      

      
  }
  return longestConecutive;
}
   
// keep this function call here 
LongestConsecutive(readline());
































function LongestConsecutive(arr) { 
  var newArray = arr.sort(customSort);
  var largestConsecutive = 0;
  var consecutiveStreak = 1;
  while (newArray.length > 0) {
    console.log(newArray);
    if (newArray[1] - newArray[0] === 1) {
      consecutiveStreak++;
      newArray = newArray.slice(1)
    }
    else if (newArray[1] - newArray[0] === 0) {
      newArray.splice(1, 1);
    }

    else {
      if (consecutiveStreak > largestConsecutive) {
        largestConsecutive = consecutiveStreak;
      }
      consecutiveStreak = 1;
      newArray = newArray.slice(1);
    }
  }
  return largestConsecutive;
}

function customSort(a, b) {
  if (a > b) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  if (a === b) {
    return 0;
  }
}
   
// keep this function call here 
LongestConsecutive(readline());