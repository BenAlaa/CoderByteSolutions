function LongestIncreasingSequence(array) {
  let permNum = Math.pow(2, array.length), ans=1;
  
  for (let i=1; i<permNum; i++) {
      let binary = i.toString(2);
      let temp = [];
          while(binary.length<array.length){
              binary = "0" + binary
          } 
      for (let j=0; j<binary.length; j++) {
          if (binary[j]==="1") {temp.push(array[j])}
      }   
      let len = isIncreasing(temp)
      if (len > ans) {ans = len}  //run temp through function that sees if it's increasing
  }  
  function isIncreasing(temp) {
      let increasing = true;
          for (let s=0; s<temp.length; s++) {
              if (temp[s]>=temp[s+1]) {
                  increasing = false;
              }
      } if (increasing) {return temp.length} else {return 0} 
  }
  return ans 
  }
  // keep this function call here 
  LongestIncreasingSequence(readline());
  
  /*function LongestIncreasingSequence(array) {
  
    // `LISLengths` will hold the length of the longest increasing sequence starting
    // from each of the positions in `array`. We will populate it backwards.
    let LISLengths = new Array(array.length);
   
    // Calculate if the length of the LIS of `array[idx]` (`LISLengths[idx]`)
    // is greater than max
    function getLISLength(max, idx) { 
      return Math.max(max, LISLengths[idx]);
    }
  let greaterIdxs = [];
    for (let i = array.length - 1; i >= 0; i--) {
  
      // `greaterIdxs` will hold the indexes of the numbers following `i` that are
      // greater than `array[i]`.
      //
      // E.g. for array = [10, 12, 4, 6, 100, 2, 56, 34, 79] and i = 3
      // greaterIdxs = [4, 6, 7, 8]-> indexes of 100, 56, 34, 79
      greaterIdxs = [];
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] > array[i]) {
          greaterIdxs.push(j);
        }
      }  
   
      if (greaterIdxs.length === 0) {
        LISLengths[i] = 1; 
      } else if (greaterIdxs.length === 1) {
        LISLengths[i] = 2;
      } else {
        LISLengths[i] = greaterIdxs.reduce(getLISLength,0) + 1;
      }//prev value = 0, currentVal = 1, currentInd = 0
       
    }
   /*at each i, you take stock of all the upcoming numbers that are bigger than array[i]
  and hold those indexes. Then you go back and look at each greater index and see what was the 
  biggest LISlength for that index. You pick the biggest one, add 1 to include the current
  array[i], and that becomes the greatest LIS for the current i.
  
  you're taking stock of the LIS length for each array[i] starting backwards, and then
  using that collection of lengths to determine which is the biggest length so far and
  adding to it, by getting the greater indexes at each array[i] and seeing which was the
  biggest LISlength between all those indexes.
  
  you're figuring out which of the greater indexes gives the most bang for your buck,
  and then using that buck.
  [ 1, 4, 6, 7, 8]
  
  [4, 3, 4, 3, 1, 3, 2, 2,1]
  */
    /*                                          //[ 1, 4, 6, 7, 8 ]
   return greaterIdxs.reduce(function  (max, idx) { 
      return Math.max(max, LISLengths[idx]);},0) 
      
      
      //for each greater index, they are looking back at how those indexes correlate
      //to LISLengths
      
      
    return Math.max(...LISLengths);
  }
     
  // keep this function call here 
  LongestIncreasingSequence(readline()); */
  














function LongestIncreasingSequence(arr) { 
    var sets = [[]]
    for(var i = 0; i < arr.length; i ++){
        for(var j = 0, len = sets.length; j < len; j++){
            if(sets[j].length === 0){
                sets.push(sets[j].concat(arr[i]))
            }
            else if(arr[i] > Math.max(...sets[j])){
                sets.push(sets[j].concat(arr[i]))
            }           
        }
    } 
    return Math.max(...sets.map(x => x.length))
}
   
// keep this function call here 
LongestIncreasingSequence(readline());





























function LongestIncreasingSequence(arr) { 
  var subSequences = [];
  for (var i = 0; i < arr.length; i++) {
    var holder = [arr[i]];
    for (var x = (i+1); x < arr.length; x++) {
      if (arr[x] > holder[holder.length-1]) {
        holder.push(arr[x]);
      } else if (arr[x] > holder[holder.length -2] && arr[x] < holder[holder.length-1]) {
        holder[holder.length-1] = arr[x];
      }
    }
    subSequences.push(holder);
  }
  var subSequenceLengths = subSequences.map(function(x){ return x.length; }).sort(function(x,y){ return x -y; });
  return subSequenceLengths.pop();
}
   
// keep this function call here 
LongestIncreasingSequence(readline());































function LongestIncreasingSequence(arr) { 

  // code goes here  
  function findLongestFromStart(start,arr){
      if(arr.length===0) return 1;
      
      let listLength=arr.map((elem,index)=>{
          if(elem>start){
              return 1+findLongestFromStart(arr[index],arr.slice(index+1));
          }
          return 1;
      });
      return Math.max(...listLength);
  }
  let maxLength=0;
  
  arr.forEach((elem,index)=>{
      let longest=findLongestFromStart(elem,arr.slice(index+1));
      
      if(longest>maxLength) maxLength=longest;
  }); 
  return maxLength;
         
}
   
// keep this function call here 
LongestIncreasingSequence(readline());











