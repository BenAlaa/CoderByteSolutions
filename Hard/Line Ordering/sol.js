function extractItems(arr) {
  const people = new Set();
  for (let i = 0; i < arr.length; i++) {
    const rule = arr[i];
    const trueRule = rule.replace('<','<')
    const p1 = trueRule.substr(0, 1);
    const p2 = trueRule.substr(2, 1);
    people.add(p1);
    people.add(p2);
  }
  return Array.from(people);
}

function permute(arr) {
  if (arr.length <= 0) {
    return [];
  }
  if (arr.length === 1) {
    return arr;
  }
  if (arr.length === 2) {
    return [
      [arr[0], arr[1]],
      [arr[1], arr[0]]
    ];
  }

  let totalPermutes = [];

  for (let i = 0; i < arr.length; i++) {
    const clone = [...arr];
    const single = clone.splice(i, 1);
    const subPermutes = permute(clone);
    const permutes = subPermutes.map(sub => single.concat(sub));
    totalPermutes = totalPermutes.concat(permutes);
  }
  return totalPermutes;
}

function checkRule(rule, sequence) {
  const trueRule = rule.replace('<','<')
  let first, second;
  const order = trueRule.substr(1, 1);
  if (order === ">") {
    first = trueRule.substr(0, 1);
    second = trueRule.substr(2, 1);
  } else {
    first = trueRule.substr(2, 1);
    second = trueRule.substr(0, 1);
  }
  // console.log('first',first,'second',second,trueRule)
  let i1 = sequence.indexOf(first);
  let i2 = sequence.indexOf(second);

  return i1 < i2;
}

function LineOrdering(strArr) {
  // code goes here
  const items = extractItems(strArr);
  const permutations = permute(items);
  let count = 0;
  permutations.forEach(p => {
    let safe = true;
    strArr.forEach(r => {
      const result = checkRule(r, p);
      if (result) {
        safe = false;
      }
    });
    if(safe === true){
      //console.log(p)
      count += 1
    }
  });
  return count;
}
   
// keep this function call here 
console.log(LineOrdering(readline()));







































function LineOrdering(strArr) { 

  // Unique people
  const people = Array.from(new Set(strArr.join(',').match(/[A-Z]+/g)));

  // Brute-force all permutations
  const peoplePermutations = permute(people);
  const validPermutations = [];

  peoplePermutations.forEach(permutation => {
      const permutationValid = relationsPossible(permutation, strArr);
      if (permutationValid) {
          validPermutations.push(permutation);
      }
  });

  return validPermutations.length;
}

function relationsPossible(people, relations) {
  for (let i = 0; i < relations.length; i++) {
      let [personA, relationship, personB] = relations[i].split('');

      // Switch everything to A > B
      if (relationship === '<') {
          [personB, personA] = [personA, personB];
      }

      const indexPersonA = people.indexOf(personA);
      const indexPersonB = people.indexOf(personB);

      if (indexPersonA <= indexPersonB) {
          return false;
      }
  }
  return true;
}

// https://en.wikipedia.org/wiki/Heap's_algorithm
// Iterative
function permute(arr) {
  let count = Array(arr.length).fill(0);

  const results = [arr.slice()];

  let i = 0;
  while (i < arr.length) {
      if (count[i] < i) {
          if (i % 2 === 0) {
              const temp = arr[0];
              arr[0] = arr[i];
              arr[i] = temp;
          } else {
              const temp = arr[count[i]];
              arr[count[i]] = arr[i];
              arr[i] = temp;
          }
          results.push(arr.slice());
          count[i]++;
          i = 0;
      } else {
          count[i] = 0;
          i++;
      }
  }
  return results;
}
 
// keep this function call here 
LineOrdering(readline());






































function LineOrdering(strArr) {

  /*
     CoderBytes sends HTML entities in the data.

     Probably explains why nobody completes the last challenge.
   */
  const rules = [...strArr].map(rule => {
     return rule.replace(/</gi, '<').replace(/>/gi, '>');
  });

  function getPermutations(people) {

     if (people.length === 1) return [people];

     let results = [];

     /*
        I'm running out of time but I would optimise the code here
        So if the person and personLeft[0] dont obey the rules
        we can CONTINUE the loop.
      */

     for (let i = 0; i < people.length; i++) {
        const person = people[i];
        const peopleLeft = people.substring(0, i) + people.substring(i + 1);

        let innerPermutations = getPermutations(peopleLeft);
        for (let ii = 0; ii < innerPermutations.length; ii++) {
           results.push(person + innerPermutations[ii]);
        }

     }

     return results;

  }

  function filterOutRuleBreakers(permutation) {
     return rules.every(rule => {
        if (rule[1] === '>') return permutation.indexOf(rule[0]) < permutation.indexOf(rule[2]);
        return permutation.indexOf(rule[0]) > permutation.indexOf(rule[2]);
     });
  }

  const people = [...rules].reduce((people,rule) => {
     if (people.indexOf(rule[0]) === -1) people.push(rule[0]);
     if (people.indexOf(rule[2]) === -1) people.push(rule[2]);
     return people;
  }, []);

  return getPermutations(people.join('')).filter(filterOutRuleBreakers).length;

}
  
// keep this function call here 
LineOrdering(readline());









































function LineOrdering(strArr) { 
  const chars = {};
  const rules = [];

  strArr.forEach(val => {
      chars[val[0]] = true;
      chars[val[2]] = true;
      
      if (val[1] === '>') {
          rules.push(val[0] + val[2]);
      } else if (val[1] === '<') {
          rules.push(val[2] + val[0]);
      }
  });
  
  const charsStr = Object.keys(chars).sort().join('');
  
  const allPerms = getPerms(charsStr);
  
  // check lines
  let total = 0;
  allPerms.forEach(onePerm => {
      let hasError = false;
      for (let i = 0; i < rules.length && !hasError; i++) {
          const oneRule = rules[i];
          if (onePerm[oneRule[1]] > onePerm[oneRule[0]]) {
              hasError = true;
              break;
          }
      }
      if (!hasError) {
          total = total + 1;
      }
  });
  
  return total;
}

const permsMap = {};

function getPerms(charsStr) {
  if (charsStr.length === 1) return [{ [charsStr]: 0 }];
  if (charsStr.length === 2) return [
      { [charsStr[0]]: 0, [charsStr[1]]: 1 },
      { [charsStr[1]]: 0, [charsStr[0]]: 1 },
  ];
  
  if (permsMap[charsStr]) return permsMap[charsStr];
  
  let combinedResult = [];
  
  for (let i = 0; i < charsStr.length; i++) {
      const lastChar = charsStr[i];
      const subCharsStr = charsStr.substr(0, i) + charsStr.substr(i + 1);
      const subPerms = getPerms(subCharsStr).map(obj => Object.assign({ [lastChar]: subCharsStr.length }, obj));
      combinedResult = combinedResult.concat(subPerms);
  }
  
  permsMap[charsStr] = combinedResult;
  
  return combinedResult;
}
 
// keep this function call here 
LineOrdering(readline());