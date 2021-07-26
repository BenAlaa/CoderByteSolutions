function GroupTotals(strArr) { 
  var totals = {};
  
  totals = strArr
    .map(s => s.split(/:/))
    .map(s => [s[0], parseInt(s[1])])
    .reduce((acc, s) => (acc[s[0]] = (acc[s[0]] || 0) + s[1], acc), {});
    
  var ret = Object.keys(totals)
    .sort()
    .filter(k => totals[k] !== 0)
    .map(k => `${k}:${totals[k]}`)
    .join(',');
  
  return ret; 
         
}
   
// keep this function call here 
GroupTotals(readline());