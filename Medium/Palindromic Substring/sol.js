function isPalindrome(str) {
  var reversed = str.split('').reverse().join('');
  
  return str === reversed;
}

function findLongest(ar) {
  var max = ar[0];
  
  for (var i = 0; i < ar.length; i++) {
    if (max.length < ar[i].length) {
      max = ar[i];
    }
  }
  
  return max;
}

function PalindromicSubstring(str) { 
  var palindromes = [];
  
  for (var i = 0; i < str.length; i++) {
    var sub = str[i];
    
    for (var j = i + 1; j < str.length; j++) {
      sub += str[j];
      
      if (isPalindrome(sub) && sub.length > 2) {
        palindromes.push(sub);
      }
    }
  }
  
  if (palindromes.length === 0) {
    return 'none';
  } else {
    return findLongest(palindromes);
  }
}
   
// keep this function call here 
PalindromicSubstring(readline());







































function PalindromicSubstring(str) {
  var slice, max = 0, substring = "";
  for (var i = 0; i < str.length; i++) {
    for (var j = i + 1; j <= str.length; j++) {
      slice = str.slice(i, j);
      if (slice.isPalindrome() && slice.length > max) { 
        max = slice.length;
        substring = slice;
      }
    }
  }
  return max > 2 ? substring : "none";
}

String.prototype.isPalindrome = function() {
  var rev = this.split("").reverse().join("");
  return rev == this;
}
   
// keep this function call here 
PalindromicSubstring(readline());






























function PalindromicSubstring(str) { 
  /*
  Input: string of lowercase letters
  Output: string - longest palindromic substring of the input, or 'none'
  Notes: 1) gather all possible substrings 2) test if they are palindromes and 3) return the longest
  
  Steps:
  1) declare a palindromes variable as an empty array
  2) loop over str
    3) loop over str again
    4) get str.substring(i, str.length - j) and store in palindromes
  5) filter out palindromes to only get those substrings that are palindromes
  6) sort by length decreasing
  7) return the first element in palindromes
  */
  
  var palindromes = [];
  var length = str.length;
  
  for (var i = 0; i < length; i++) {
      for (var j = 0; j < length; j++) {
          palindromes.push(str.substring(i, length - j));
      }
  }
  
  palindromes = palindromes.filter(isPalindrome);
  palindromes.sort(decreasingLengths);
  
  if (palindromes[0] === undefined) {
      return 'none';
  } else if (palindromes[0].length === 2 || palindromes[0].length === 1) {
      return 'none';
  } else {
      return palindromes[0];
  }
}

function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
   
function decreasingLengths(str1, str2) {
    if (str1.length > str2.length) {
        return -1;
    } else if (str1.length === str2.length) {
        return 0
    } else {
        return 1;
    }
}   
// keep this function call here 
PalindromicSubstring(readline());

































function isPalindrome(str) {
  return str === str.split("").reverse().join(""); 
}

function PalindromicSubstring(str) { 
var longest = ""
  
for (var i = 0; i < str.length; i++) {
    for (var j = i + 1; j < str.length; j++) {
        var substr = str.slice(i, j + 1);
        
        if (isPalindrome(substr) && substr.length > longest.length) {
            longest = substr;
        }
    }
}

if (longest.length <= 2 ) { return "none"}; 
       return longest;
}
// keep this function call here 
PalindromicSubstring(readline());
