function DashInsertII(num) { 
	const resString = num.toString(10);
	return resString
		.replace(/([2468])(?=[2468])/g, '$1*')
		.replace(/([13579])(?=[13579])/g, '$1-');
}
   
// keep this function call here 
DashInsertII(readline());


















function DashInsertII(num) { 
  
  var numArr = num.toString().split('')

  for (i = 0; i < numArr.length - 1; i++) {
    var cur = numArr[i], next = numArr[i + 1]
    
    if (cur == 0 || next == 0) continue
    
    if (cur % 2 === 0 && next % 2 === 0)
      numArr[i] = cur + '*'
    else if (cur % 2 !== 0 && next % 2 !== 0)
      numArr[i] = cur + '-'
    
  }
  return numArr.join('')
}
   
// keep this function call here 
DashInsertII(readline());




















function DashInsertII(num) { 

  var arr = num.toString().split('').map(function(p){return parseInt(p)})
  var result = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0 && arr[i+1] !== 0 && arr[i] % 2 === 0 && arr[i+1] % 2 === 0) {
      result.push(arr[i],'*')
    }
    else if (i !== arr.length-1 && arr[i] % 2 !== 0 && arr[i+1] % 2 !== 0) {
      result.push(arr[i],'-')
    }
    else {
      result.push(arr[i])
    }
  }
  return result.join('') 
         
}
   
// keep this function call here 
DashInsertII(readline());