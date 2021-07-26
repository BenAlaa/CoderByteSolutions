function StarRating(str) { 

  let a = Math.round(Number(str) * 2);
  let full = (a - (a % 2)) / 2;
  let half = a % 2;
  let empty = 5 - full - half;
  let s = 'full '.repeat(full) + 'half '.repeat(half) + 'empty '.repeat(empty);
  return s.trim(); 
         
}
   
// keep this function call here 
StarRating(readline());