function ChangingSequence(arr) { 
  let increasing, answer;
  if (arr[1] > arr[0]) {
      increasing = true;
  }
  else {
      increasing = false;
  }
  for (let i = 1; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1] && increasing) {
          answer = i;
          break;
      }
      else if (arr[i] < arr[i + 1] && !increasing) {
          answer = i;
          break;
      }
  }
  return answer || -1;
}
 
// keep this function call here 
ChangingSequence(readline());