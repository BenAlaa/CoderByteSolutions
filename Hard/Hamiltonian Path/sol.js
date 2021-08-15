function HamiltonianPath(strArr) { 
  const verticeNames = strArr[0].replace(/^\(|\)$/g, '').split(',').reduce((acc, cur, idx) => ({ ...acc, [cur]: idx }), {});
  const verticeCount = strArr[0].replace(/^\(|\)$/g, '').split(',').length;
  const edges = createEdgeMatrix();

  strArr[1].replace(/^\(|\)$/g, '').split(',')
      .map(edge => edge.split('-').map(v => verticeNames[v]))
      .forEach(edge => {
          edges[edge[0]][edge[1]] = true;
          edges[edge[1]][edge[0]] = true;
      });

  const path = strArr[2].replace(/^\(|\)$/g, '').split(',');
  for (let i = 1; i < path.length; i ++) {
      const start = verticeNames[path[i-1]];
      const end = verticeNames[path[i]];
      if (!edges[start][end]) {
          return path[i-1];
      }
  }

  return "yes"; 

  function createEdgeMatrix() {
      const res = [];
      for (let i = 0; i < verticeCount; i ++) {
          const line = [];
          for (let j = 0; j < verticeCount; j ++) {
              line.push(false);
          }
          res.push(line);
      }
      return res;
  }
}
 
// keep this function call here 
HamiltonianPath(readline());




















































function HamiltonianPath(strArr) {

  var nodes = [];

  // set-up nodes associative array, with node objects
  strArr[0].match(/w+/g).forEach(function (e) {
      nodes[e] = {
          name: e,
          links: [],
          hasLink: function(n) {
              return this.links.indexOf(n) > -1;
          }
      };
  });

  // set-up network of node links
  var rgxLinks = /(w+)-(w+)/g,
      link;
  while (link = rgxLinks.exec(strArr[1])) {
      Object.keys(nodes).forEach(function (e, i) {
          if (e === link[1] || e === link[2]) {
              nodes[e].links.push(e === link[1] ? nodes[link[2]] : nodes[link[1]]);
          }
      });
  }

  // recursive function to find all valid sub-paths (start-end)
  function navigatePath(root, start, end, path, paths) {
      path = (path && path.slice(0)) || [start];
      paths = paths ? paths : [];
      var currentNode = path[path.length - 1];
      if (currentNode === end) {
          // destination found
          paths.push(path);
      } else {
          // keep on moving
          for (var i = 0, x = currentNode.links.length; i < x; i++) {
              var nextNode = currentNode.links[i];
              if ((path.indexOf(nextNode) === -1) && ((root.indexOf(nextNode) === -1) || nextNode === end)) {
                  // haven't been here before (or the end is in sight)
                  path.push(nextNode);
                  navigatePath(root, start, end, path, paths);
                  path.pop();
              }
          }
      }
      return paths.length ? paths.sort( function(a, b) { return a.length - b.length; }) : -1;
  }

  // run through root path to determine if it is a valid hamiltonian
  // if valid, returns an array with the first element true and the second is the rootPath
  // if not valid, returns an array with the first element false and the second element
  // is the last valid node along the path
  function isHamiltonian(rootPath) {
      
      for (var i=1, x=rootPath.length; i<x; i++) {
          
          // check for duplicate nodes along current root path
          if (rootPath.slice(0,i).indexOf(rootPath[i]) > -1)
              return [false, i-1];
          // if not an imediate neighbour, try to generate valid sub-paths
          if (!rootPath[i-1].hasLink(rootPath[i])) {
              var pathToNode = navigatePath(rootPath, rootPath[i-1], rootPath[i]);
              if (pathToNode !== -1) {
                  // splice in shortest sub-path
                  Array.prototype.splice.apply(rootPath, [i, 0].concat(pathToNode[0].slice(1,pathToNode[0].length-1)));
                  // update loop args
                  x = rootPath.length;
                  i += pathToNode[0].length;
              } else {
                  // no valid sub-paths found
                  return [false, rootPath[i-1]];
              }
          }
      }
      return [true, rootPath];
  }

  var hamiltonian = isHamiltonian(strArr[2].match(/w+/g).map( function(e) {
      return nodes[e];
  }));
  if (hamiltonian[0] === true) {
      return 'yes';
  } else {
      return hamiltonian[1].name;
  }
}
 
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
HamiltonianPath(readline());


















































function HamiltonianPath(strArr) { 

  // code goes here
  var vertex1 = new Array();
  var vertex2 = new Array();
  var points = new Array();
  var output = "yes";
  
  var currentString = strArr[1];
  
  for ( var i = 0; i < currentString.length; ++i )
  {
    if ( currentString[i] >= 'A' && currentString[i] <= 'Z' )
    {
     vertex1.push(currentString[i]);
      vertex2.push(currentString[i + 2]);
      i = i + 3;
    }
  }
  
  var currentString = strArr[2];
  
  for ( var i = 0; i < currentString.length; ++i )
  {
    if ( currentString[i] >= 'A' && currentString[i] <= 'Z' )
    {
     points.push(currentString[i]); 
    }
  }
  
  for ( var i = 0; i < points.length - 1; ++i )
  {
   var pathFound = false;
    
    for ( var j = 0; j < vertex1.length; ++j )
    {
     if ( ( points[i] == vertex1[j] && points[i + 1] == vertex2[j] ) ||
          ( points[i] == vertex2[j] && points[i + 1] == vertex1[j] ) )
     {
      pathFound = true;
       j = vertex1.length;
     }
    }
    
    if ( pathFound == false )
    {
      output = points[i];
      i = points.length; 
    }
  }
  
  return output; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
HamiltonianPath(readline());



























































function HamiltonianPath(strArr) {
  var paths = strArr[1];
  var vertices = strArr[2];
  var p1,p2;
  var arrPaths = paths.slice(1,paths.length-1).split(",");
  var arrVers = vertices.slice(1,vertices.length-1).split(",");
  
  for (i=0;i+1<arrVers.length;i++) {
    p1 = arrVers[i] + "-" + arrVers[i+1];
    p2 = arrVers[i+1] + "-" + arrVers[i];
    if (arrPaths.indexOf(p1)!=-1) continue;
    if (arrPaths.indexOf(p2)!=-1) continue;
    return arrVers[i];
  }
  
  return "yes"; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
HamiltonianPath(readline());