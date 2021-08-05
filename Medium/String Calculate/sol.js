//-------------------------------------
// eval() is for the weak!
//-------------------------------------

function StringCalculate(str) {
  const RULE_ANY_NUMBER = /[0-9]/g;
  const RULE_ANY_OPERATOR = /[\^\*\/\+\-]/g;
  const RULE_ONLY_NUMBERS = /^[0-9]*$/;

  // apparently this doesn't implement String.replaceAll :(
  const stringReplaceAll = (text, target, sub) => {
    while (true) {
      const after = text.replace(target, sub);

      if (text === after) {
        return text;
      }

      // continue replacing
      text = after;
    }
  };

  LOGGING && console.log('>> raw', str);

  // use a single-character operator for the exponents
  const carrotedText = stringReplaceAll(str, '**', '^');

  // set adjacent quantities to multiply
  let roughText = stringReplaceAll(carrotedText, ')(', ')*(');

  // set quantities adjacent to numbers to multiply, e.g. "5(2)" becomes "5*(2)"
  for (let i = 0; i < roughText.length; ++i) {
    if (roughText[i] === ')') {
      if (i < roughText.length - 1) {
        if (roughText[i + 1].match(RULE_ANY_NUMBER) !== null) {
          const before = roughText.slice(0, i + 1);
          roughText = before + '*' + roughText.slice(i + 1);
          ++i;
        }
      }

      continue;
    }

    if (roughText[i] === '(') {
      if (i > 0) {
        if (roughText[i - 1].match(RULE_ANY_NUMBER) !== null) {
          const after = roughText.slice(i);
          roughText = roughText.slice(0, i) + '*' + after;
          ++i;
        }
      }

      continue;
    }
  }

  // wrap the entire thing in a global scope
  const baseText = '(' + roughText + ')';

  LOGGING && console.log('parsed', baseText);

  // first we sort out the paren quantities.

  const scopeTree = [];

  let keyCursor = 0;

  let currentScope = null; // root

  for (let i = 0; i < baseText.length; ++i) {
    const char = baseText[i];

    if (char === '(') {
      if (keyCursor > 26) {
        throw new Error('too many scopes: ' + keyCursor); // let's hope the tests are sane
      }

      const newKey = String.fromCharCode('A'.charCodeAt(0) + keyCursor);

      ++keyCursor;

      const newNode = {
        key: newKey,
        parent: currentScope,
        text: ''
      };

      // we're creating a child quantity; insert its 'variable' (really
      // just a placeholder), using {"A", "B", "C"...}
      if (currentScope !== null) {
        currentScope.text += newKey;
      }

      scopeTree.push(newNode);

      currentScope = newNode;

      continue;
    }

    if (char === ')') {
      currentScope = currentScope.parent;

      if (currentScope === null) {
        // back to the root; tree complete
        break;
      }

      continue;
    }

    currentScope.text += char;
  }

  LOGGING && scopeTree.forEach(v => console.log(v.parent === null ? 'r' : v.parent.key, '>>', v.key, v.text));

  const opAdd = '+';
  const opDivide = '/';
  const opExponent = '^';
  const opMultiply = '*';
  const opSubtract = '-';

  const checkNumber = (text) => {
    //NOTE: i.e. String is only digits; no parens or operators, with the exception
    //		of a leading dash for negatives.

    if (checkNonNegativeInteger(text)) {
      return true;
    }

    if (checkNegativeInteger(text)) {
      return true;
    }

    return false;
  };

  const checkNegativeInteger = (text) => {
    //NOTE: We permit "-0" and "-05"

    if (text.length < 2) {
      return false;
    }

    const minus = text[0];

    if (minus !== '-') {
      return false;
    }

    const digits = text.slice(1).match(RULE_ONLY_NUMBERS);

    const negativeInt = (digits !== null);

    return negativeInt;
  };

  const checkNonNegativeInteger = (text) => {
    //NOTE: We permit "0" and "05"

    const digits = text.slice(0).match(RULE_ONLY_NUMBERS);

    return digits !== null;
  };

  // helper to reduce a string of arithmetic ("A op B op C ...") to its ultimate value
  const resolveTerm = (text) => {
    LOGGING && console.log('resolving', text);

    // replace any double negatives, which jam up our subtraction step
    while (true) {
      const textPre = text;
      text = text.replace('--', '+');
      if (textPre === text) {
        break;
      }

      LOGGING && console.log('subbed double negative', text);
    }

    if (checkNumber(text)) {
      // simple value; nothing to do but cast
      return parseInt(text);
    }

    // Helper: take (at least) two strings; get the final number in string 0 and
    // the first number in string 1; parse and save unused text along the way.
    const gatherTerms = (pieces, resultsInfo) => {
      console.assert(pieces.length >= 2);

      const numberChunks = [];

      // presume there is an operator between the first two numbers

      const readPiece = (piece, modeFirst) => {
        if (checkNumber(piece)) {
          numberChunks.push(parseInt(piece));
          return;
        }

        resultsInfo.clean = false;

        const matches = piece.match(RULE_ANY_OPERATOR);

        if (matches === null) {
          throw new Error('failed to read number; unexpected operator: ' + piece + '; mode: ' + modeFirst);
        }

        const splitted = modeFirst
          ? piece.split(matches.pop()).pop()
          : piece.split(matches.shift()).shift();

        if (modeFirst) {
          resultsInfo.remainingPre += piece.slice(0, piece.length - splitted.length)
        }
        else {
          resultsInfo.remainingPost += piece.slice(splitted.length);
        }

        numberChunks.push(parseInt(splitted));
      };

      // parse the first (then second) piece of this string
      readPiece(pieces[0], true);
      readPiece(pieces[1], false);

      return numberChunks;
    };

    const package = { clean: true, remainingPre: '', remainingPost: '' };

    let reduction = 0;

    // Helper: if we find a given operator, process its first occurence
    const attemptProcessOperator = (op, callbackReduce) => {
      let split = text.split(op);

      // if a subtraction has a negative first term, special-case it
      if (op === opSubtract && text[0] === op) {
        split = text.slice(1).split(op);
        split[0] = op + split[0];
      }

      if (split.length <= 1) {
        return false;
      }

      const nums = gatherTerms(split, package);

      reduction = callbackReduce(nums);

      if (split.length > 2) {
        // there are remaining operands, e.g. "2+3+5" becomes "5+5"

        package.clean = false;

        // drop the two we just processed
        split.shift();
        split.shift();

        // bundle the rest into a new string
        package.remainingPost += op + split.join(op);
      }

      return true;
    };

    let operated = false;

    // process one operator per pass, in order of precedence (PEMDAS yo)

    if (attemptProcessOperator(opExponent, x => x.reduce((a, b) => Math.pow(a, b)))) {
      operated = true;
    }

    // no exponents; try to multiply or divide, from left to right
    if (!operated) {
      let firstMultiply = text.indexOf(opMultiply);
      let firstDivide = text.indexOf(opDivide);

      // max out those that found nothing
      firstMultiply = firstMultiply === -1 ? Number.MAX_SAFE_INTEGER : firstMultiply;
      firstDivide = firstDivide === -1 ? Number.MAX_SAFE_INTEGER : firstDivide;

      if (firstMultiply <= firstDivide) {
        if (attemptProcessOperator(opMultiply, x => x.reduce((a, b) => a * b))) {
          operated = true;
        }
        else if (attemptProcessOperator(opDivide, x => x.reduce((a, b) => a / b))) {
          operated = true;
        }
      }
      else {
        if (attemptProcessOperator(opDivide, x => x.reduce((a, b) => a / b))) {
          operated = true;
        }
        else if (attemptProcessOperator(opMultiply, x => x.reduce((a, b) => a * b))) {
          operated = true;
        }
      }
    }

    // no multiply or divide; try to add or subtract, from left to right
    if (!operated) {
      let firstAdd = text.indexOf(opAdd);

      //NOTE: For subtraction, we search from index 1, because the first term may be
      //		negative, e.g. "-8-5". That should perform an operation on the set
      //		of operands {-8, 5} for -13, but if we searched from zero, it would pass
      //		in {<empty>, 8}, producing NaN.
      let firstSubtract = text.indexOf(opSubtract, 1);

      // max out those that found nothing
      firstAdd = firstAdd === -1 ? Number.MAX_SAFE_INTEGER : firstAdd;
      firstSubtract = firstSubtract === -1 ? Number.MAX_SAFE_INTEGER : firstSubtract;

      if (firstAdd <= firstSubtract) {
        if (attemptProcessOperator(opAdd, x => x.reduce((a, b) => a + b))) {
          operated = true;
        }
        else if (attemptProcessOperator(opSubtract, x => x.reduce((a, b) => a - b))) {
          operated = true;
        }
      }
      else {
        if (attemptProcessOperator(opSubtract, x => x.reduce((a, b) => a - b))) {
          operated = true;
        }
        else if (attemptProcessOperator(opAdd, x => x.reduce((a, b) => a + b))) {
          operated = true;
        }
      }
    }

    if (!operated) {
      throw new Error('resolution failed; no operator found: ' + text);
    }

    if (package.clean) {
      // send back the quotient of these terms
      return reduction;
    }

    const nextText = package.remainingPre + reduction + package.remainingPost;

    // recurse until we have a bare number
    return resolveTerm(nextText);
  };

  let finalValue = 0;

  // now solve the parens from the top of the stack down
  while (scopeTree.length > 0) {
    const top = scopeTree.pop();

    // sanity check
    if (top.text.match(/[()]/g) !== null) {
      throw new Error('parens found; unable to resolve term');
    }

    const value = resolveTerm(top.text, 0);

    // sanity check
    if (!checkNumber(String(value))) {
      throw new Error('resolver produced a non-number (or non-int): ' + value);
    }

    if (top.parent === null) {
      // root; we're done
      finalValue = value;
      break;
    }

    const scope = top.parent;

    const newText = scope.text.replace(top.key, value);

    LOGGING && console.log('placeholder filled', scope.text, '->', newText);

    scope.text = newText;

    finalValue = value;
  }

  return finalValue;
}


const LOGGING = false;


// keep this function call here 
console.log(StringCalculate(readline()));

























































function StringCalculate(str) {
  const OPERATORS = {
    '**': { value: '**', type: 'operator', priority: 1000, fn: (a, b) => Math.pow(a, b) },
    '*': { value: '*', type: 'operator', priority: 100, fn: (a, b) => a * b },
    '/': { value: '/', type: 'operator', priority: 100, fn: (a, b) => a / b },
    '+': { value: '+', type: 'operator', priority: 10, fn: (a, b) => a + b },
    '-': { value: '-', type: 'operator', priority: 10, fn: (a, b) => a - b }
  };

  const tokens = tokenizer(str);
  const res = parseExpression();
  return res.value;
  
  function nextToken() {
    const token = tokens.next();
    if (token.done) {
      return 'END';
    }
    return token.value;
  }

  function parseExpression(depth = 0) {
    let state = 'NUMBER';
    let buffer = [];

    while (true) {
      const token = nextToken();

      // console.log(`${depth} ${state} ${token}`);

      if (typeof token === 'number') {
        switch (state) {
          case 'OP':
            // implicit multiplication
            buffer.push({ ...OPERATORS['*'] });
            // fall thru

          case 'NUMBER':
            buffer.push({ type: 'constant', value: token });
            state = 'OP';
            break;
          
          default:
            throw new Error(`Not expecting number in state ${state}`);
        }
      } else if (token === '(') {
        switch (state) {
          case 'OP':
            // implicit multiplication
            buffer.push({ ...OPERATORS['*'] });
            // fall thru

          case 'NUMBER':
            const subExpression = parseExpression(depth + 1);
            // we should now be positioned after the corresponding closing ')'
            buffer.push(subExpression);
            state = 'OP';
            break;
        }
      } else if (token === ')') {
        if (depth === 0) {
          throw new Error(`Extra closing parenthesis`);
        }
        break;
      } else if (token === 'END') {
        if (depth > 0) {
          throw new Error(`Preliminary expression end, still awaiting closing parenthesis`);
        }
        break;
      } else {
        switch (state) {
          case 'NUMBER':
            throw new Error(`Expression cannot NUMBER with an operator ${token}`);
          
          case 'OP':
            buffer.push({ ...OPERATORS[token] });
            state = 'NUMBER';
            break;
        }
      }
    }

    if (state === 'NUMBER') {
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
      const maximumPriority = buffer.map(i => i.priority || 0).reduce((acc, i) => Math.max(acc, i), 0);

      for (let i = 0; i < buffer.length; i ++) {
        const item = buffer[i];

        if (item.priority === maximumPriority) {
          const result = item.fn(buffer[i-1].value, buffer[i+1].value);
          // console.log(`${depth} REDUCE '${buffer[i-1].value} ${item.value} ${buffer[i+1].value} = ${result}'`);

          buffer.splice(i-1, 3, { type: 'constant', value: result });
          i = i - 2;
        }
      }
    }

    // console.log(`${depth} EXIT ${buffer[0].value}`);

    return buffer[0];
  }
}

function* tokenizer(str) {
  let expectingNumber = true;

  for (let i = 0; i < str.length; i ++) {
    switch (str.charAt(i)) {
      case '(':
      case ')':
      case '+':
      case '/':
        yield str.charAt(i);
        expectingNumber = true;
        break;

      case '*':
        if (str.charAt(i+1) === '*') {
          yield '**';
          i ++;
        } else {
          yield '*';
        }
        expectingNumber = true;
        break;
      
      case '-':
        if (expectingNumber && !isNaN(parseInt(str.charAt(i+1), 10))) {
          const m = str.substr(i).match(/^(-\d+)/);
          yield parseInt(m[1], 10);
          i += m[1].length - 1;
          expectingNumber = false;
        } else {
          yield '-';
          expectingNumber = true;
        }
        break;

      default:
        const m = str.substr(i).match(/^(\d+)/);
        if (!m) {
          throw new Error(`Unparseable token at ...${str.substr(i)}`);
        }
        yield parseInt(m[1], 10);
        i += m[1].length - 1;
        expectingNumber = false;
        break;
    }
  }
}
   
// keep this function call here 
StringCalculate(readline());






































function StringCalculate(str) {
  const OPERATORS = {
    '**': { value: '**', type: 'operator', priority: 1000, fn: (a, b) => Math.pow(a, b) },
    '*': { value: '*', type: 'operator', priority: 100, fn: (a, b) => a * b },
    '/': { value: '/', type: 'operator', priority: 100, fn: (a, b) => a / b },
    '+': { value: '+', type: 'operator', priority: 10, fn: (a, b) => a + b },
    '-': { value: '-', type: 'operator', priority: 10, fn: (a, b) => a - b }
  };

  const tokens = tokenizer(str);
  const res = parseExpression();
  return res.value;
  
  function nextToken() {
    const token = tokens.next();
    if (token.done) {
      return 'END';
    }
    return token.value;
  }

  function parseExpression(depth = 0) {
    let state = 'NUMBER';
    let buffer = [];

    while (true) {
      const token = nextToken();

      // console.log(`${depth} ${state} ${token}`);

      if (typeof token === 'number') {
        switch (state) {
          case 'OP':
            // implicit multiplication
            buffer.push({ ...OPERATORS['*'] });
            // fall thru

          case 'NUMBER':
            buffer.push({ type: 'constant', value: token });
            state = 'OP';
            break;
          
          default:
            throw new Error(`Not expecting number in state ${state}`);
        }
      } else if (token === '(') {
        switch (state) {
          case 'OP':
            // implicit multiplication
            buffer.push({ ...OPERATORS['*'] });
            // fall thru

          case 'NUMBER':
            const subExpression = parseExpression(depth + 1);
            // we should now be positioned after the corresponding closing ')'
            buffer.push(subExpression);
            state = 'OP';
            break;
        }
      } else if (token === ')') {
        if (depth === 0) {
          throw new Error(`Extra closing parenthesis`);
        }
        break;
      } else if (token === 'END') {
        if (depth > 0) {
          throw new Error(`Preliminary expression end, still awaiting closing parenthesis`);
        }
        break;
      } else {
        switch (state) {
          case 'NUMBER':
            throw new Error(`Expression cannot NUMBER with an operator ${token}`);
          
          case 'OP':
            buffer.push({ ...OPERATORS[token] });
            state = 'NUMBER';
            break;
        }
      }
    }

    if (state === 'NUMBER') {
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
      const maximumPriority = buffer.map(i => i.priority || 0).reduce((acc, i) => Math.max(acc, i), 0);

      for (let i = 0; i < buffer.length; i ++) {
        const item = buffer[i];

        if (item.priority === maximumPriority) {
          const result = item.fn(buffer[i-1].value, buffer[i+1].value);
          // console.log(`${depth} REDUCE '${buffer[i-1].value} ${item.value} ${buffer[i+1].value} = ${result}'`);

          buffer.splice(i-1, 3, { type: 'constant', value: result });
          i = i - 2;
        }
      }
    }

    // console.log(`${depth} EXIT ${buffer[0].value}`);

    return buffer[0];
  }
}

function* tokenizer(str) {
  let expectingNumber = true;

  for (let i = 0; i < str.length; i ++) {
    switch (str.charAt(i)) {
      case '(':
      case ')':
      case '+':
      case '/':
        yield str.charAt(i);
        expectingNumber = true;
        break;

      case '*':
        if (str.charAt(i+1) === '*') {
          yield '**';
          i ++;
        } else {
          yield '*';
        }
        expectingNumber = true;
        break;
      
      case '-':
        if (expectingNumber && !isNaN(parseInt(str.charAt(i+1), 10))) {
          const m = str.substr(i).match(/^(-\d+)/);
          yield parseInt(m[1], 10);
          i += m[1].length - 1;
          expectingNumber = false;
        } else {
          yield '-';
          expectingNumber = true;
        }
        break;

      default:
        const m = str.substr(i).match(/^(\d+)/);
        if (!m) {
          throw new Error(`Unparseable token at ...${str.substr(i)}`);
        }
        yield parseInt(m[1], 10);
        i += m[1].length - 1;
        expectingNumber = false;
        break;
    }
  }
}
   
// keep this function call here 
StringCalculate(readline());







































function StringCalculate(str) { 
  let output = eval(str);

  // code goes here  
  return output; 

}
   
// keep this function call here 
console.log(StringCalculate(readline()));

































function StringCalculate(str) { 

  return eval(str.replace(/(\d|\))\(/g, '$1*('));
  
  }
     
  // keep this function call here 
  console.log(StringCalculate(readline()));



































  function StringCalculate(str) { 
    str = str.replace(")(", ")*(");
    str = str.replace(/(?<=\d)\(/g, "*(");
    return eval(str); 
         
}
   
// keep this function call here 
StringCalculate(readline());
  
