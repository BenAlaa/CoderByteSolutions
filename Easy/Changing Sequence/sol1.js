function ChangingSequence(arr) { 

  for (i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1] || arr[i] < arr[i - 1] && arr[i] < arr[i + 1] )
      return i
  }
  return -1
}

   
// keep this function call here 
ChangingSequence(readline());