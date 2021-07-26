function GroupTotals(strArr) { 
  var holder = strArr.map(item => item.split(":"));  // spliting the array by using map method;
  var obj = {};
  var result = [];
  
  for (var i = 0; i < holder.length; i++){  // add ["X", "1"] key and value into dictionary;
      if (obj[holder[i][0]]){
          obj[holder[i][0]] += parseInt(holder[i][1]);
      }else{
          obj[holder[i][0]] = parseInt(holder[i][1]);
      }
  }
  var sortedKeys = Object.keys(obj).sort();  // sort the keys;
  
  for (var key of sortedKeys){  // filter out keys with 0 value;
      if (obj[key] !== 0){
          result.push(key + ":" + obj[key]);
      }
  }
  return result.join(",");
}
 
// keep this function call here 
GroupTotals(readline());