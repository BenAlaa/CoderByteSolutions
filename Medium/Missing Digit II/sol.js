function MissingDigitII(str) { 

  const parts = str.split(' = ');

  const expression = parts[0];

  const result = parts[1];

  const qIndex = result.indexOf("?");

  for (let i=0; i<10; i++) {

    const outcome = eval(expression.replace("?", i)).toString();

    let valid = true;

    for (let j=0; j<result.length; j++) {

      if (qIndex !== j && outcome[j] !== result[j]) {
          
          valid = false;

      }

    }

    if (valid) {

      return i + " " + outcome[qIndex];

    }

  }

}
   
// keep this function call here 
console.log(MissingDigitII(readline()));
































function MissingDigitII(str) { 

  // code goes here  
  for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
      let expression = str.replace(/[\?]/, i).replace(/[\?]/, j);
      let parts = expression.split('=');
      if (eval(parts[0]) === eval(parts[1])) {
          return i + ' ' + j;
      }
    }
  }
  return -1;
}
   
// keep this function call here 
console.log(MissingDigitII(readline()));

































function MissingDigitII(str) {
  const formulaParts = str.split('=').map(i => i.trim());

  for (let i=0; i<10; i++) {
      const leftPart = formulaParts[0].replace('?', i);
      for (let j=0; j<10; j++) {
          const rightPart = formulaParts[1].replace('?', j);
          if (eval(leftPart) === parseInt(rightPart)) {
              return [i, j].join(' ');
          }
      }
  }
}
 
// keep this function call here 
console.log(MissingDigitII(readline()));
































function MissingDigitII(str) { 
  let evalStr = str.replace(/\=/, '===');

  for (let i = 0; i < 100; i ++) {
    let v = i >= 10 ? i.toString() : `0${i}`;
    let toEval = evalStr.replace(/\?/, v[0]).replace(/\?/, v[1]);
    if (eval(toEval))
      return `${v[0]} ${v[1]}`
  }
}
   
// keep this function call here 
console.log(MissingDigitII(readline()));
