function WeightedPath(strArr) { 
  var num   = strArr.shift()*1;
  var nodes = strArr.splice(0,num);
  var start = nodes[0];
  var end   = nodes[nodes.length-1];
  for (var i = 0; i < strArr.length; i++) {
   strArr[i] = strArr[i].split("|") 
  }
  var shortest = {}
  shortest.length = Infinity;
  var leastW = Infinity;
  
  function recurse(path, linksLeft, wLength) {
    var wLength = wLength || 0;
    if (path[0] === path[path.length-1] && path.length > 1) { return }
    if (path[path.length-1] === end && wLength < leastW) { 
        shortest = path;
      	leastW   = wLength;
        return
    }
  	if (linksLeft.length === 0) {
    	if (path[path.length-1] === end && wLength<leastW) {
        	shortest = path;
          	leastW   = wLength
        }
      	return;
    }
    for (var i = 0; i < linksLeft.length; i++) {
    	if (linksLeft[i][0] === path[path.length-1]) {
        	var newPath = path.slice();
          	//newPath.push(linksLeft[i][0])
            newPath.push(linksLeft[i][1])
            var newWLength   = wLength*1+linksLeft[i][2]*1 
            var newLinksLeft = linksLeft.slice()
            newLinksLeft.splice(i,1)
            recurse(newPath, newLinksLeft, newWLength)
        }
      	if (linksLeft[i][1] === path[path.length-1]) {
        	var newPath = path.slice();
          	//newPath.push(linksLeft[i][1])
            newPath.push(linksLeft[i][0])
            var newWLength   = wLength*1 + linksLeft[i][2]*1
            var newLinksLeft = linksLeft.slice()
            newLinksLeft.splice(i,1)
            recurse(newPath, newLinksLeft, newWLength)
        }
    }
  }
  
  recurse([start], strArr)
  //return leastW
  // code goes here  
  return shortest.length<Infinity ? shortest.join("-") : -1;      
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
WeightedPath(readline());
























































function WeightedPath(strArr) { 

  // code goes here  
  var NumNodes = strArr[0]*1;
  var Node = new Array;
  var Network = new Array;
  var Routes = new Array;
  var MinLength = (NumNodes * 2);
  var MinCost = 99999999;
  var Shortest = -1;
  var fromindex = -1;
  var toindex = -1;
  var from = "";
  var to = "";
// initialise network
  for (f=0; f<NumNodes; f++) {
    Network[f]=[];
    for (t=0; t<NumNodes; t++) {
      Network[f][t] = 0;
    }
  }
// Load nodes names, and get first and last indices - first always 0
  for (n=0; n<NumNodes; n++) { Node[n] = strArr[n+1] }
  var first = 0;
  var last = NumNodes-1;
// shorten array to just the connections
  strArr.splice(0,NumNodes+1);
// for each connection, add an entry into the network table 
// to refelct both directions, with a weighting of 1  
  for (p=0; p<strArr.length; p++) {
// Get the node names for each connection    
    from = strArr[p].split("|")[0];
    to = strArr[p].split("|")[1];
    for (f=0;f<NumNodes; f++) {
// find the index for each nod ein the connection      
      if (Node[f] == from) {fromindex = f};
      if (Node[f] == to) {toindex = f};
    }
// update both directions in the network table    
    Network[fromindex][toindex] = strArr[p].split("|")[2]*1;
    Network[toindex][fromindex] = strArr[p].split("|")[2]*1;
  }
//  Now find all paths from the first node  
  GetPaths(0,Network,Routes,"0"); 
//  return log;
//  return Routes;
  for (r=0;r<Routes.length;r++) {
    if ((Routes[r].slice(0,1) != first) || (Routes[r].slice(-1) != last)) {Routes.splice(r--,1)}
  }
  for (r=0;r<Routes.length;r++) {
    var cost = 0;
    var stops = Routes[r].split("-");
    for (i=0;i<stops.length-1; i++) { cost += Network[stops[i]][stops[i+1]] }
    if (cost < MinCost) {
      MinCost = cost;
      Shortest = r;
    }
  }
  if (Shortest == -1) {return -1}
  var temp=Routes[Shortest].split("-");
  var ans=Node[temp[0]];
  for (i=1;i<temp.length; i++) { ans = ans + "-" + Node[temp[i]] }
  return ans;
}

function GetPaths(fromnode,net,routes,routestr) {
  log.push("GetPaths called with parms: "+fromnode+", net, routes= "+routes+" and "+routestr);
  var locroutestr = routestr;
  for (var p=0;p<net[fromnode].length;p++) {
    routestr = locroutestr;
    log.push("checking "+fromnode+","+p+" against routestr "+routestr);
// Look for all routes from this node    
    if ((net[fromnode][p] != 0) && (routestr.search(p.toString()) == -1)) { 
// OK, found an unvisited node on this route
        log.push("adding "+p+" to routestr");
// add it to the route        
        routestr = routestr + "-" + p.toString();
// Find paths from this node
        GetPaths(p,net,routes,routestr); 
    }
    log.push("finished "+fromnode+","+p);
  }
  routes.push(routestr);
  log.push("finished looking for parm = "+fromnode);
  return;
}
var log = new Array;
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
WeightedPath(readline());












































function WeightedPath(strArr) { 
  var noOfNodes = Number(strArr[0]);
  var nodes = [];
  for (var i=1;i<=noOfNodes;i++) {
      nodes.push(strArr[i]);
  }
  
  var graph = {};
  
  for (var i=noOfNodes+1;i<strArr.length;i++) {
      var path = strArr[i].split("|");
      var start = path[0];
      var end = path[1];
      var weight= Number(path[2]);
      
      if (graph[start] === undefined) {
          graph[start] = [];
      }
      
      graph[start].push([end,weight]);
      
      if (graph[end] === undefined) {
          graph[end] = [];
      }
      
      graph[end].push([start,weight]);
  }
  
  var shortest = [[-1], Number.MAX_VALUE];
  var search = [];
  search.push([[nodes[0]],0]);
  
  while (search.length > 0) {
      var cur = search.pop();
      var curPath = cur[0];
      var curWeight = cur[1];
      
      var curLastNode = curPath[curPath.length-1];
      var possiblePaths = graph[curLastNode];
      
      if (possiblePaths !== undefined) {
          for (var i=0;i<possiblePaths.length;i++) {
              var nextNode = possiblePaths[i][0];
              var nextWeight = possiblePaths[i][1];
              
              if (curPath.indexOf(nextNode) > -1) {
                  continue;
              }
              
              var newPath = curPath.slice();
              newPath.push(nextNode);
              var newWeight = curWeight + nextWeight;
              if (nextNode === nodes[noOfNodes-1]) {
                  if (newWeight < shortest[1]) {
                      shortest = [newPath, newWeight];
                  }
              }
              else {
                  search.push([newPath, newWeight]);
              }
          }
      }
  }
  return shortest[0].join("-");
}

 
// keep this function call here 
WeightedPath(readline());