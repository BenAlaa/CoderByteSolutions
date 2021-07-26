function ConsonantCount(str) { 
  const cons = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
  let counter = 0;
  let split = str.split('');
  for (i = 0; i < split.length; i++) {
    if (cons.includes(split[i])) {
      counter++
    }
  }
  return counter;
}
   
// keep this function call here 
console.log(ConsonantCount(readline()));