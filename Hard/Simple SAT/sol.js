function SimpleSAT(str) { 

  let variables = str.replace(/[()&|~]/g, ' ').split(/\s+/);
  if (variables[0] === '') {
  	variables = variables.slice(1)
  }
  if (variables[variables.length - 1] === '') {
  	variables = variables.slice(0, variables.length - 1);
  }
  variables = [...(new Set(variables))]
  let possible = possibilities(variables.length);

  str = str.replace(/[|&~]/g, function (txt) {
  	if (txt === '&') { return '&&' }
    else if (txt === '|') { return '||' }
    else if (txt === '~') { return '!'}
    else { return '' }
  })
  
  for (let p of possible) {
  	let reg = new RegExp(variables.join('|'), 'g');
    let attempt = str.replace(reg, function (txt) {
    	return '' + p[variables.indexOf(txt)];
    }) 
    if (eval(attempt) === true) {
    	return 'yes'
    }
  }
  return 'no'; 
         
}

function possibilities(count) {
	if (count === 0) {
  	return [[]];
  }
  
  let result = possibilities(count - 1);
  let newResult = [];
  result.forEach(function (r) {
  	newResult.push([...r, true], [...r, false]);
  })
  return newResult
}
   
// keep this function call here 
SimpleSAT(readline());








































function SimpleSAT(str) { 

  let variables = str.replace(/[()&|~]/g, ' ').split(/\s+/);
  if (variables[0] === '') {
  	variables = variables.slice(1)
  }
  if (variables[variables.length - 1] === '') {
  	variables = variables.slice(0, variables.length - 1);
  }
  variables = [...(new Set(variables))]
  let possible = possibilities(variables.length);

  str = str.replace(/[|&~]/g, function (txt) {
  	if (txt === '&') { return '&&' }
    else if (txt === '|') { return '||' }
    else if (txt === '~') { return '!'}
    else { return '' }
  })
  
  for (let p of possible) {
  	let reg = new RegExp(variables.join('|'), 'g');
    let attempt = str.replace(reg, function (txt) {
    	return '' + p[variables.indexOf(txt)];
    }) 
    if (eval(attempt) === true) {
    	return 'yes'
    }
  }
  return 'no'; 
         
}

function possibilities(count) {
	if (count === 0) {
  	return [[]];
  }
  
  let result = possibilities(count - 1);
  let newResult = [];
  result.forEach(function (r) {
  	newResult.push([...r, true], [...r, false]);
  })
  return newResult
}
   
// keep this function call here 
SimpleSAT(readline());







































const OPERATORS = {
  '&': { value: '&', type: 'operator', fn: (a, b) => a && b },
  '|': { value: '|', type: 'operator', fn: (a, b) => a || b },
  '(': { value: '(', type: 'operator' },
  ')': { value: ')', type: 'operator' },
};

function SimpleSAT(str) {
  const tokens = tokenizer(str);
  const res = parseExpression();
  return guessExpression() ? 'yes' : 'no';

  function guessExpression() {
    for (let attempt = 0; attempt < (1 << 5); attempt ++) {
      if (res.fn(variables)) {
        return true;
      }

      function variables(i) {
        return !!(attempt & (1 << i));
      }
    }

    return false;
  }
  
  function nextToken() {
    const token = tokens.next();
    if (token.done) {
      return { type: 'end', value: 'END' };
    }
    return token.value;
  }

  function parseExpression(depth = 0) {
    let state = 'VARIABLE';
    let buffer = [];

    while (true) {
      const token = nextToken();

      // console.log(`${depth} ${state} ${token.value}`);

      if (token.type === 'function') {
        if (state === 'OP') {
          throw new Error(`Expecting operation`);
        }

        buffer.push(token);
        state = 'OP';
      } else if (token.value === '(') {
        if (state === 'OP') {
          throw new Error(`Expecting operation`);
        }

        const subExpression = parseExpression(depth + 1);
        // we should now be positioned after the corresponding closing ')'
        buffer.push(subExpression);
        state = 'OP';
      } else if (token.value === ')') {
        if (depth === 0) {
          throw new Error(`Extra closing parenthesis`);
        }
        break;
      } else if (token.value === 'END') {
        if (depth > 0) {
          throw new Error(`Preliminary expression end, still awaiting closing parenthesis`);
        }
        break;
      } else {
        if (state === 'VARIABLE') {
          throw new Error(`Expecting variable`);
        }

        buffer.push(token);
        state = 'VARIABLE';
      }
    }

    if (state === 'VARIABLE') {
      if (buffer.length === 0) {
        throw new Error(`Empty expression`);
      } else {
        throw new Error(`Expression cannot end in operator`);
      }
    }

    // console.log(`${depth} EVAL '${buffer.map(b => b.value).join(' ')}'`);

    // buffer now contains sequence of CONSTANT OPERATOR CONSTANT OPERATOR .... NUMBER
    // evaluate them according to priority
    while (buffer.length !== 1) {
      const op = buffer[1];
      const left = buffer[0];
      const right = buffer[2];
      const fn = (variables) => op.fn(left.fn(variables), right.fn(variables));
      const value = `(${left.value} ${op.value} ${right.value})`;

      // console.log(`${depth} REDUCE ${value}`);

      buffer.splice(0, 3, { type: 'function', value, fn });
    }

    // console.log(`${depth} EXIT ${buffer[0].value}`);

    return buffer[0];
  }
}

function* tokenizer(str) {
  for (let i = 0; i < str.length; i ++) {
    switch (str.charAt(i)) {
      case '(':
      case ')':
      case '&':
      case '|':
        yield { ...OPERATORS[str.charAt(i)] };
        break;

      case '~':
      {
        const variableIndex = 'abcde'.indexOf(str.charAt(i+1));
        if (variableIndex === -1) {
          throw new Error(`~ must be succeeded by variable`);
        }
        yield { type: 'function', value: '~' + variableIndex, fn: (variables) => !variables(variableIndex) };
        i = i + 1;
        break;
      }

      default:
      {
        const variableIndex = 'abcde'.indexOf(str.charAt(i)); 
        if (variableIndex === -1) {
          throw new Error(`~ must be succeeded by variable`);
        }
        yield { type: 'function', value: variableIndex, fn: (variables) => variables(variableIndex) };
        break;
      }
    }
  }
}

   
// keep this function call here 
SimpleSAT(readline());













































function SimpleSAT(str) {
  allletters=str.match(/[a-z]+/g);
  letters=[];
  for(x=0;x<allletters.length;x++){
      if(letters.indexOf(allletters[x])===-1){
          letters.push(allletters[x])
      }
  }
  
  total=Math.pow(2,letters.length)
  outcome=outcomes(letters)

  function outcomes(arr){
      var powers=[];
      for (var i = 0; i < total; i++) {
          var tempSet = [];
          var num = i.toString(2);
          while (num.length < arr.length) { num = '0' + num; }
          for (var b = 0; b < num.length; b++) {
              if (num[b] === '1') { tempSet.push(1); }
              else{tempSet.push(0)}
          }
          powers.push(tempSet);
      }
      return powers
  }
  

  for(i=0;i<outcome.length;i++){
      temp=str;
      for(j=0;j<letters.length;j++){
          while(temp.indexOf(letters[j])>-1){
                          temp=temp.replace(letters[j],outcome[i][j])
          }
      }
      if(eval(temp)){return "yes"}
  }
  return "no"
}
 
// keep this function call here 
SimpleSAT(readline());