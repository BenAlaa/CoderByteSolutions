function MovingMedian(arr) {
  let window = arr.shift();
  let counter = 0;
  let array1 = []
  let result = []

  for (let i = 0; i < arr.length; i++) {
    array1.push(arr[i])
    counter ++
    if (counter > window) {
      array1.shift()
    }
    result.push(median(array1))
  }
  // code goes here  
  function median (array) {
    let array2 = array.slice()
    array2.sort(function(a,b) {return a-b})
    if(array2.length%2==0){
      return (array2[array2.length/2-1]+array2[array2.length/2])/2
    } else {
      return array2[(array2.length-1)/2]
    }
  }
  return result.join(',');
}

// keep this function call here 
console.log(MovingMedian(readline()));