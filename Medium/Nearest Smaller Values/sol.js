function NearestSmallerValues(arr) { 

  var smaller = [];
  
  for (var i = 0; i < arr.length; i++) {
      var triggered = false;
      for (var j = i - 1; j >= 0; j--) {
          if (arr[i] >= arr[j]) {
              smaller.push(arr[j]);
              triggered = true;
              break;
          } 
      }
      
      if (triggered !== true) {
          smaller.push(-1);
      }
  }
  
  return smaller.join(" ");
}
// keep this function call here 
NearestSmallerValues(readline());

























function NearestSmallerValues(arr) { 
  /*
  Input: arr of numbers
  Output: string - formatted new list according to the pattern, separated by spaces
  
  Steps:
  declare a results variable as an empty array
  1) loop over the input array
    2) on each loop, create a previousElements array made up of all the previous elements up to the current index
    3) reverse the previousElements array
    4) loop over previousElements
      5) if the current element is less than the current element in arr then add it into results
      6) if none are, then add in -1
  7) return results joined together by spaces
  */
  
  var results = [-1];
  
  for (var i = 1; i < arr.length; i++) {
      var previousElements = arr.slice(0, i).reverse();
      var num = arr[i];
      for (var j = 0; j < previousElements.length; j++) {
          if (previousElements[j] <= num) {
              results.push(previousElements[j]);
              break;
          }
      }
      if (results.length !== i + 1) {
          results.push(-1);
      }
  }
  
  return results.join(' ');
}
   
// keep this function call here 
NearestSmallerValues(readline());



























function NearestSmallerValues(arr) { 
  var smallerArr = [];
  
  for(var i = 0; i < arr.length; i++) {
      var foundSmaller = false;
      for(var j = i - 1; j >= 0; j--) {
          var ele = arr[i];
          var possSmaller = arr[j];
          if (possSmaller <= ele) {
              smallerArr.push(possSmaller);
              foundSmaller = true;
              break;
          }
      }
      if (!(foundSmaller)) {
          smallerArr.push(-1);
      }
  }
  return smallerArr.join(' ');
}
 
// keep this function call here 
NearestSmallerValues(readline());




























function NearestSmallerValues(arr) { 
  var smallerArr = [];
  var nearest;
  
  for (var i = arr.length - 1; i >= 0; i--) {
      var elem = arr[i];
      nearest = -1;
      
      for (var j = i - 1; j >= 0; j--) {
          var elem2 = arr[j];
          
          if (elem2 <= elem) {
              nearest = elem2;
              break;
          }
      }
      
      smallerArr.unshift(nearest);
      
      
  }


 // code goes here  
 return smallerArr.join(" "); 
        
}
  
// keep this function call here 
NearestSmallerValues(readline());





































function NearestSmallerValues(arr) { 
  var smallerValues = [-1];
  for (var i = 1; i < arr.length; i++) {
    for (var j = i - 1; j >= 0; j--) {
      var newval = arr[i];
      var index = i;
      if (arr[j] <= arr[i]) {
        newval = arr[j];
        index = j;
        smallerValues.push(arr[j]);
        break;
      }
    }
    if (newval === arr[i] && index === i) {
        smallerValues.push(-1);
    }
  }
  
  return smallerValues.join(" ");
}

// keep this function call here 
NearestSmallerValues(readline());