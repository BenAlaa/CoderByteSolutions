function SnakeCase(str) { 
  str = str.toLowerCase();
  return str.replace(/\W/g,'_');
}
 
// keep this function call here 
SnakeCase(readline());