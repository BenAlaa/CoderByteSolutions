function Consecutive(arr) {
  return Math.abs(Math.max(...arr) - Math.min(...arr)) - arr.length + 1;
}
Consecutive(readline());










function Consecutive(arr) { 

  var min = Math.min(...arr), max = Math.max(...arr)
  var range = max - min + 1, len = arr.length
  
  return range - len
}
   
   
// keep this function call here 
Consecutive(readline());












function Consecutive(arr) { 

  var result = (Math.max(...arr)-Math.min(...arr))-1
  return arr.length > 2 ? result-(arr.length-2) : result
         
}
   
// keep this function call here 
Consecutive(readline());