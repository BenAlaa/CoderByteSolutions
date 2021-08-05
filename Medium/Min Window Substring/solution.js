function MinWindowSubstring(strArr) {
	let str = strArr[0];
	let needle = strArr[1].split('');

	//start with the smallest possible substrings, then go up
	for (let i = needle.length, len = str.length; i <= len; i++ ) {
		for (j = 0; j <= len - i; j++) {
			let mySlice = str.substr(j, i);
			if (isContained(mySlice)) {
				return mySlice;
			}
		}
	}
	return 'Not in string';

// ---------------------- helpers -----------------------------
	//isContained checks to see if all the chars in the needle are in the given string
	function isContained(str) {
		let arr = str.split('');
		for (let i = 0, len = needle.length; i < len; i++) {
			let place = arr.findIndex(val => {
				return val === needle[i]
			});
			if (place === -1) {
				return false;
			} else {
				arr.splice(place, 1);
			}
		}
		return true;
	}
}
   
// keep this function call here 
MinWindowSubstring(readline());






function MinWindowSubstring(arr) {
  var str1 = arr[0], str2 = arr[1], min = Infinity, output;
  
  for (var i = 0; i < str1.length; i++) {
    for (var j = i+1; j <= str1.length; j++) {
      var slice = str1.slice(i, j);   
      if (slice.length < min && scramble(slice, str2)) {
        output = slice;
        min = slice.length;
      }
    }
  }
  
  return output;
}  

function scramble(str1, str2) {
  function obj(str) {
    return str. split("").reduce(function(prev, curr) {
      prev[curr] ? prev[curr]++ : prev[curr] = 1;
      return prev;
    }, {});
  }
  
  var charCount1 = obj(str1), charCount2 = obj(str2);
  
  return Object.keys(charCount2).reduce(function(prev, curr) {
    return Math.min(prev, charCount1[curr]/charCount2[curr] || 0);
  }, Infinity) >= 1;
}


// keep this function call here 
MinWindowSubstring(readline());


















function MinWindowSubstring(strArr) { 
  /*
  Steps:
  1) aqcuire all substrings and store in an array
  2) filter out only those substrings that contain all the letters in string K
  3) sort by length increasing
  4) return the first element
  */
  
  var n = strArr[0];
  var k = strArr[1];
  var allSubstrings = [];
  
  for (var i = 0; i < n.length; i++) {
      for (var j = 0; j < n.length; j++) {
          var holder = n.substring(i, n.length - j);
          allSubstrings.push(holder);
      }
  }
  
  allSubstrings = allSubstrings
  .filter(element => hasKLetters(element, k))
  .filter(element => hasSameAmountOfLetters(element, k))
  .sort(increasingLength);
  
  return allSubstrings[0]
}

function hasKLetters(str1, str2) {
    var result = true;
    for (var x = 0; x < str2.length; x++) {
        var char = new RegExp(str2[x], 'g');
        if (char.test(str1) === false) {
            result = false;
        }
    }
    return result;
}

function hasSameAmountOfLetters(str1, str2) {
    var result = true;
    for (var i = 0; i < str2.length; i++) {
        var char = new RegExp(str2[i], 'g');
        if (str2.match(char).length > str1.match(char).length) {
            result = false;
        }
    }
    return result;
}
   
function increasingLength(str1, str2) {
    if (str1.length > str2.length) {
        return 1;
    } else if (str1.length === str2.length) {
        return 0;
    } else {
        return -1;
    }
}   
// keep this function call here 
MinWindowSubstring(readline());