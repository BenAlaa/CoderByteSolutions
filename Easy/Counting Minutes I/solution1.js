function CountingMinutesI(str) { 
  var firsttime=str.substr(0, str.indexOf("m")+1);
  var secondtime=str.substr(str.indexOf("m")+2, str.lastIndexOf("m")+1);
  if (firsttime.indexOf("pm")!==-1) firsttime=((parseFloat(firsttime.substr(0, firsttime.indexOf(":")))+12)*60)+parseFloat(firsttime.substr(firsttime.indexOf(":")+1, firsttime.indexOf("pm")-1));
  else firsttime=((parseFloat(firsttime.substr(0, firsttime.indexOf(":"))))*60)+parseFloat(firsttime.substr(firsttime.indexOf(":")+1, firsttime.indexOf("am")-1));
  
  if (secondtime.indexOf("pm")!==-1) secondtime=((parseFloat(secondtime.substr(0, secondtime.indexOf(":")))+12)*60)+parseFloat(secondtime.substr(secondtime.indexOf(":")+1, secondtime.indexOf("pm")-1));
  else secondtime=((parseFloat(secondtime.substr(0, secondtime.indexOf(":"))))*60)+parseFloat(secondtime.substr(secondtime.indexOf(":")+1, secondtime.indexOf("am")-1));
  return firsttime>secondtime?1440-(firsttime-secondtime):(secondtime-firsttime);
}
   
// keep this function call here 
CountingMinutesI(readline());