function ProductDigits(num) { 
  
  var holder = []

  for (i = 1; i <= num; i++) {
    if (num % i === 0) { holder.push((i.toString() + (num / i).toString()).length) }
  }
  return Math.min(...holder)
}
   
// keep this function call here 
ProductDigits(readline());