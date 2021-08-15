function GasStation(strArr) { 
  
  var gasplus = [];
  var gasminus = [];
  
  for(i=1;i<strArr.length;i++){
    gasplus[i-1] = strArr[i].split(':')[0]*1;
    gasminus[i-1] = strArr[i].split(':')[1]*1;}
  
  function stationshift(arr){
    var gasplusshift
        gasplusshift = arr[0];  
        arr = arr.splice(1,arr.length-1).concat(arr[0]);
    return arr;}
  
  function yolo(arr){
    var count = 0;
    for(i=0;i<arr.length;i++){
      if(arr[i]<0){count++;}}
    if(count>0){return 0;}else{return 1;}}
      
  
  function swag(gasplus,gasminus){
    
    var totalgas = [];
    var gascount = 0;
    for (i=0;i<gasplus.length;i++){
      gascount += gasplus[i];
      gascount -=  gasminus[i];
      totalgas[i] = gascount;}
   
    return totalgas;  
    }
  
  var index=1;
  var indexcount=0;
  var t = gasplus;
  var y = gasminus;    
  var t = 0;
  var sol = [];
  var temp = [];
  
  for (t;t<gasplus.length;t++){
    temp = swag(gasplus,gasminus);
    sol[t] = yolo(temp);
    
    gasplus = stationshift(gasplus);
    gasminus = stationshift(gasminus);
  }
 
  var i = 0;
  var index = -1;
  for (i;i<sol.length;i++){
    if(sol[i]>0){index = i; break;}
  }
  
  if (index<0){
    return "impossible";}
  else {
    return index+1;}
     
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
GasStation(readline());
































function canCompleteTrip(stations, cur, goal, gas) {
  var gas = gas || 0; // First iteration.
  gas += stations[cur][0]; // Fuel up
  gas -= stations[cur][1]; // Travel
  if (gas < 0) return false; // Did we run out of gas?
  cur++; // We're now at the next station
  if (cur == stations.length) cur = 0; // Loop around to the beginning if we're past
  if (cur == goal) return true; // Yay, we made it!

  return canCompleteTrip(stations, cur, goal, gas);
}

function GasStation(strArr) { 

  strArr.shift();

  var stations = strArr.map(function(str){
    var nums = str.match(/d+/g);
    return [parseInt(nums[0]), parseInt(nums[1])];
  });

  for (var i = 0; i < stations.length; i++) {
     if (canCompleteTrip(stations, i, i)) return i + 1;
  };

  return "impossible";
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
GasStation(readline());






































function GasStation(strArr) { 
  var stations=parseInt(strArr[0]);
  
  for (var i=0;i<stations;i++)
  {
    var gas=0;
    for (var j=0;j<stations;j++)
    {
      var index=(i+j)%stations+1;
      var data=strArr[index].split(":");
      gas+=parseInt(data[0])-parseInt(data[1]);
      if (gas<0) break;
    }
    if (gas>=0)
    {
      return i+1;
    }
  }
  return "impossible";
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
GasStation(readline());


































function GasStation(strArr) { 

  var c = 1;
  while (c < strArr.length) {
    var gas = strArr[c].split(':')[0]*1 - strArr[c].split(':')[1]*1;
    var t = c + 1;
    if (t === strArr.length) {
      t = 1;
    }
    while (gas >= 0 && t !== c) {
      gas += strArr[t].split(':')[0]*1 - strArr[t].split(':')[1]*1;
      t++;
      if (t === strArr.length) {
        t = 1;
      }
    }
    if (t === c) {
      return t;
    }
    c++;
  }
  return 'impossible'; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
GasStation(readline());

















