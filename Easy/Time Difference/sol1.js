function TimeDifference(arr){
  let times = [];
  let newarr = arr.map(val =>{
      let matches = val.match(/^(\d+):(\d+)([ap]m)$/);
      let hours = parseInt(matches[1], 10);
      let mins = parseInt(matches[2], 10);
      let mm = matches[3];
      if(mm === 'am' && hours === 12){
          hours = 0;
      }
      if(mm === 'pm' && hours !== 12){
          hours += 12; 
      }
      return (hours * 60 + mins)
  }).sort((a,b)=>{return a-b});
  newarr.push(newarr[0]+24*60);
  
  for(let i=0; i<newarr.length-1; i++){
      times.push(newarr[i+1]-newarr[i]);
  }
  return Math.min.apply(null, times);
}

 
// keep this function call here 
TimeDifference(readline());