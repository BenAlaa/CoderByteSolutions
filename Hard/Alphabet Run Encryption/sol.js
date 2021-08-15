function AlphabetRunEncryption(str) {
  var a = 'a';
  var z = 'z';
  var R = 'R';
  var L = 'L';
  var S = 'S';
  var N = 'N';

  var res = "";

  for (var i = str.length - 1; i >= 0; i--) {
      var c = str[i];
      var iStart = i;
      var nextLetter, previousLetter;
      if (c == N) {
          previousLetter = nextLetter = str[i - 1];
          i--;
      } else if (c == S) {
          previousLetter = str[i - 1];
          nextLetter = str[i - 2];
          i -= 2;
      } else if (c == L || c == R) {
          var l = str[i - 1].charCodeAt(0);
          var before = String.fromCharCode(l + (c == R ? -1 : 1));
          var after = String.fromCharCode(l + (c == R ? 1 : -1));
          previousLetter = after;
          nextLetter = before;
          i--;
      } else {
          var first = c.charCodeAt(0);
          var previous = first;
          i--;
          var next = str[i].charCodeAt(0);
          var direction = previous - next;
          while (i > 0 && previous - next == direction) {
              previous = next;
              i--;
              next = str[i].charCodeAt(0);
          }
          if (i>0)
          i++
          if (previous - next != direction)
              next = previous;
          previousLetter = String.fromCharCode(first + direction);
          nextLetter = String.fromCharCode(next - direction);
      }

      if (iStart == str.length - 1)
          res += previousLetter;
      res += nextLetter;
  }
  
  // code goes here  
  return res.split('').reverse().join('');;

}
 
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
AlphabetRunEncryption(readline());







































function AlphabetRunEncryption(str) {

  var preppedStr = prepString(str);
  console.log('ps', preppedStr);
  var preppedArr = preppedStr.split(',');

  evalArr = preppedArr.map(function(val) {
      if (/S/.test(val)) {
          console.log('t0');
          return consec(val);
      } else if (/N/.test(val)) {
          return repeater(val);
      } else if (/R/.test(val)) {
          return skipUp(val);
      } else if (/L/.test(val)) {
          return skipDown(val);
      } else if (val[0] < val[1]) {
          return stringUp(val);
      } else if (val[0] > val[1]) {
          return stringDown(val);
      }
  });


  var init = evalArr[0][0];

  evalArr = evalArr.map(function(val) {
      return val[1];
  });

  evalArr = evalArr.reduce(function(val1, val2) {
      return val1 + val2;
  })
  return (init + evalArr);
}



//========================= helpers ==================================
//this function takes the given input format and delimits it with commas into workable
//chunks
function prepString(str) {
  var newStr = str.replace(/wN/g, ',$&,');
  newStr = newStr.replace(/wwS/g, ',$&,');
  newStr = newStr.replace(/w[RL]/g, ',$&,');
  newStr = newStr.replace(/,,/g, ',');
  var len = newStr.length;
  for (var i = 0; i < len - 2; i++) {
      if (adjTest(newStr[i], newStr[i + 1])) {
          console.log('hit', newStr[i], newStr[i + 1]);
          newStr = newStr.replace(newStr.slice(0, i + 1), newStr.slice(0, i + 1) + ',');
          console.log('newStr', newStr);
          len++;
          i++;
     }
  }
  newStr = newStr.replace(/^,|,$/g, '');
  return newStr;
}


//this tests two chars to see if they are adjacent - returns true if repeat or a skip
function adjTest(char1, char2) {
  num1 = char1.charCodeAt(0);
  num2 = char2.charCodeAt(0);
  return Math.abs(num1 - num2) === 0 || Math.abs(num1 - num2) === 2;
}

//this takes a repeating letter pattern and returns the proper array;
function repeater(str) {
  var arr = str.match(/(w)N/);
  return [arr[1], arr[1]];
}

//this handles consecutive letters
function consec(str) {
  var arr = str.match(/(w)(w)S/);
  return [arr[1], arr[2]];
}

//this handles a xR situation
function skipUp(str) {
  var arr = str.match(/(w)R/);
  return [String.fromCharCode(arr[1].charCodeAt(0) - 1), String.fromCharCode(arr[1].charCodeAt(0) + 1)];
}

//this handles a xL situation
function skipDown(str) {
  var arr =str.match(/(w)L/);
  return [String.fromCharCode(arr[1].charCodeAt(0) + 1), String.fromCharCode(arr[1].charCodeAt(0) - 1)];
}

function stringUp(val) {
  var firstChar = String.fromCharCode(val.charCodeAt(0) - 1);
  var secondChar = String.fromCharCode(val.charCodeAt(val.length - 1) + 1);
  return [firstChar, secondChar];
}

function stringDown(val) {
  var firstChar = String.fromCharCode(val.charCodeAt(0) + 1);
  var secondChar = String.fromCharCode(val.charCodeAt(val.length - 1) - 1);
  return [firstChar, secondChar];
}
 
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
AlphabetRunEncryption(readline());