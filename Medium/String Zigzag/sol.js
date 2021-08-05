function StringZigzag(strArr) {
  const [str, rowCount] = [...strArr];
  const zigzagArr = [];

  if (str.length <= rowCount) {
      return str;
  }

  for (let i=0, zigzagIndex = 0, down=true, strLen=str.length; i<strLen; i++) {
      if (! zigzagArr[zigzagIndex]) {
          zigzagArr[zigzagIndex] = [];
      }
      zigzagArr[zigzagIndex].push(str[i]);

      if (zigzagIndex === 0) {
          down = true;
      } else if (zigzagIndex === rowCount-1) {
          down = false;
      }

      if (down) {
          zigzagIndex++;
      } else {
          zigzagIndex--;
      }
  }

  return [].concat(...zigzagArr).join('');
}
 
// keep this function call here 
console.log(StringZigzag(readline()));




































function StringZigzag(strArr) { 
  const str = strArr[0];
  const rows = Number(strArr[1]);
  if (rows===1) {return str}
  const cycle = Number(rows-1);
  let zig = {};
  let res = ''; 
  let dir ='up';
  let i = 0;
  for (let i=0;i<rows;i++){
    zig[i]='';
  }

  while(i<str.length){
    let initialDir = dir;
    let rem = i%cycle;
    let full = i/cycle;
    dir = (changeDir(rem,full,initialDir))
    if (dir==='down'){
      zig[rem]=zig[rem]+str[i]
    } else {
      zig[cycle-rem]=zig[cycle-rem]+str[i]
    }
    i++
  }

  for(const row in zig){
    res+=zig[row]
  } 
  return res; 

}

function changeDir(rem,full,dir){
  let change = Number.isInteger(full,2)
  if (rem===0 && change) {
    return (dir==='up')? 'down': 'up';
  } else {
    return dir
  }
}
   
// keep this function call here 
console.log(StringZigzag(readline()));





































function StringZigzag(strArr) { 
  const str = strArr[0];
  const rows = Number(strArr[1]);
  if (rows===1) {return str}
  const cycle = Number(rows-1);
  let zig = {};
  let res = ''; 
  let dir ='up';
  let i = 0;
  for (let i=0;i<rows;i++){
    zig[i]='';
  }

  while(i<str.length){
    let initialDir = dir;
    let rem = i%cycle;
    let full = i/cycle;
    dir = (changeDir(rem,full,initialDir))
    if (dir==='down'){
      zig[rem]=zig[rem]+str[i]
    } else {
      zig[cycle-rem]=zig[cycle-rem]+str[i]
    }
    i++
  }

  for(const row in zig){
    res+=zig[row]
  } 
  return res; 

}

function changeDir(rem,full,dir){
  let change = Number.isInteger(full,2)
  if (rem===0 && change) {
    return (dir==='up')? 'down': 'up';
  } else {
    return dir
  }
}
   
// keep this function call here 
console.log(StringZigzag(readline()));



























const StringZigzag = strArr => {
  if (strArr[1] == "1") {
    return strArr[0];
  }

  let word = strArr[0].split('');
  let rows = parseInt(strArr[1]);
  let zigzag = [];

  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < word.length; j++) {
      row.push('');
    }
    zigzag.push(row);
  }

  for (let j = 0; j < word.length; j++) {
    let mod = j % (rows + (rows-2)); 
    if (mod >= rows) {
      mod = mod - (mod - (rows - 1)) * 2;
    }

    zigzag[mod][j] = word[j];
  }

  return zigzag.map(row => row.join('')).join('');
  
}
   
// keep this function call here 
console.log(StringZigzag(readline()));