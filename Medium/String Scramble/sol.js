function StringScramble(str1,str2) { 
  var word = str2.split('');
    var mix = str1.split('');
    var cnt = 0;
    outer:
    for(var i=0;i<word.length;i++){
      inner:
      for(var j=0;j<mix.length;j++){
        if(word[i]==mix[j]){
          cnt+=1;
          mix.splice(j, 1);
          break inner;
        } 
      } 
      if(cnt==0){
        break outer;
      } 
    } 
          
    // code goes here  
    return cnt==word.length ? true:false; 
           
  }
     
  // keep this function call here 
  // to see how to enter arguments in JavaScript scroll down
  StringScramble(readline());



















  function StringScramble(str1,str2) {
    if (str2.length>str1.length) {
        return "false";
    }
    if (main(str1, str2)==="false") {
        return main(str2, str1);
    } else {
        return "true";
    }
  }
  function replaceFirst(str, letter) {
      for (let i=0; i<str.length; i++) {
          if (str.charAt(i)===letter) {
              str=str.substr(0, i)+str.substr(i+1);
              break;
          }
      }
      return str;
  }
  function main(str1, str2) {
      for (i=0; i<str1.length; i++) {
        if (str2.indexOf(str1.charAt(i))!==-1) {
            str2=replaceFirst(str2, str1.charAt(i));
        } else {
            return "false";
        }
    }
    return "true";
  }
  // keep this function call here 
  StringScramble(readline());
























  function StringScramble(str1,str2) { 

    for (let i=0; i<str2.length; i++) {
        let char = str2.charAt(i)
        if (str1.indexOf(str2.charAt(i)) !== -1) {
            let index = str1.indexOf(str2.charAt(i));
            str1 = str1.substring(0,index) + str1.substring(index+1);
        } else {
            return false;
        }
    } 
    return true; 
           
  }
     
  // keep this function call here 
  StringScramble(readline());