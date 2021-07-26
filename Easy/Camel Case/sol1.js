function CamelCase(str) { 
  var arr = str.toLowerCase().split(/W/);
  return arr[0] + (arr.slice(1).map(item => item[0].toUpperCase() + item.slice(1))).join('');
}
CamelCase(readline());