
0
function StringMerge(str) {
  let [first, second] = str.split('*').map(word => word.split(''));
  return first.map((char,k) => {
     return char += second[k];
  }).join('');
}
StringMerge(readline());