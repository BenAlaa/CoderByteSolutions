function WaveSorting(arr) {
  //thinking about it, the desired result will be possible so long as we don't have any one number
  //more times than other numbers to break it up
  
  //get the total number of numbers
  let length = arr.length;
  
  //get the number of entries for each number
  let countObj = {};
  arr.forEach(val => {
      if (!countObj[val]) {
          countObj[val] = 1;
      } else {
          countObj[val]++;
      }
  });
  
  //make an array of our results, so we can find the max
  let countArr = [];
  for (let key in countObj) {
      countArr.push(countObj[key]);
  }
  
  //find the max - don't need to use apply() any more!
  let maxCount = Math.max(...countArr);

  return maxCount > length/2 ? false : true;

}
 
// keep this function call here 
WaveSorting(readline());