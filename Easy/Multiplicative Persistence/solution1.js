function MultiplicativePersistence(num) {
  let count = 0;
  while(String(num).length > 1) {
    num = String(num).split('').reduce((a,b) => a * Number(b), 1);
    count++;
  }
  return count;
}
   
// keep this function call here 
MultiplicativePersistence(readline());