function StepWalking(num) { 
  var q = [0, 1];
  for (var i = 0; i < num; i++) {
    q = [q[1], q[1] + q[0]];
  }
  return q[1];
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
StepWalking(readline());





















function StepWalking(stairCount) { 

  let res = [];
  RFindPermutations(0, 0, stairCount, [], res);
  
  // code goes here  
  return res.length; 

}

function RFindPermutations(stepsTravelled, stepsToTake, stairCount, stepPermutation, results){
  if(stepsToTake > 0){
    stepsTravelled += stepsToTake;
    stepPermutation.push(stepsToTake);
  }
  if(stairCount - stepsTravelled >= 2){
      RFindPermutations(stepsTravelled, 1, stairCount, stepPermutation.slice(), results);
      RFindPermutations(stepsTravelled, 2, stairCount, stepPermutation.slice(), results);
  }else if(stairCount - stepsTravelled == 1){
      RFindPermutations(stepsTravelled, 1, stairCount, stepPermutation.slice(), results);
  }else{
    results.push(stepPermutation);
  }
}


// keep this function call here 
console.log(StepWalking(readline()));

































function StepWalking(num) { 

  // code goes here  
  options = Math.pow(2, num-1);
  //console.log(options)

  // 0 -> 1 step
  // 1 -> 2 steps
  validSteps = ['0'.repeat(num)];

  for (i=1; i< options; i++) {
    variant = i.toString(2).padStart(num-1, '0').split('');
    steps = 0;
    for (j = 0; j<variant.length; j++) {
      if (variant[j] === '0')
        steps++;
      else 
        steps += 2

      // console.log(steps);
      
      if (steps === num) {
        v = variant.slice(0,j+1).join('');
        if (!validSteps.includes(v))
          validSteps.push(v)
        break;
      }
        
    }
    //console.log(i, variant, steps);
  }

  //console.log(validSteps)

  return validSteps.length; 

}
   
// keep this function call here 
console.log(StepWalking(readline()));


































function StepWalking(num) { 
  if (num === 1) { return 1; }
   if (num === 2) { return 2; }
   
   // for all N > 2, we add the previous (N - 1) + (N - 2) steps to get
   // an answer recursively
  StepWalking(num - 1) + StepWalking(num - 2)
   return (StepWalking(num - 1) + StepWalking(num - 2));
     
 
 
 }
 
 
 
 // keep this function call here 
 console.log(StepWalking(readline()));
