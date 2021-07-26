function ChangingSequence(arr) { 
  var pos = 0;
  for(i = 0; i < arr.length-2; i++){
      if (arr[i] < arr[i+1] && arr[i+1] > arr[i+2]) { pos = i+1}
      if (arr[i] > arr[i+1] && arr[i+1] < arr[i+2]) { pos = i+1}
  }
  if (pos > 0){return pos} else {return -1}
  }
     
  // keep this function call here 
  ChangingSequence(readline());