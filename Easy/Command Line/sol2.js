function CommandLine(str) {
  str = str.toLowerCase(); 
  str = str.replace(/ ([a-z]+)=/g, "|$1=");
  let cmdArr = str.split("|");
  let length = cmdArr.length;
  let retval = "";
  for (let i = 0; i < length; i++) {
      let foo = cmdArr[i].split("=");
      retval += foo[0].length + "=" + foo[1].length + " ";
  }
  return retval.substring(0, retval.length - 1); 
} 
// keep this function call here 
CommandLine(readline());