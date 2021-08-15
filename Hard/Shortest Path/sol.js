function ShortestPath(strArr) {
    
  // create an object representation of the nodes and paths
  var objectRep = getObjectRep(strArr)

  // get starting node, end node
  var start = strArr[1]
  var end = strArr[parseInt(strArr[0])]
  
  //define variable to hold the result
  var result = []
  
  // get shortest path
  traversePath(objectRep, start,end)
  
  
  
  
  function traversePath(objectRep, start, end){
      //traversePath uses a breadth-first approach to find the shortest path
      
      //queu holds all nodes that still need to be evaluated in the correct order according to breadth first
      var queu = [start]
      
      // visited holds all visited nodes to prevent going circular
      var visited = []
      
      //this would loop infinitely, since queu == true, but it has return statements to stop execution and jump out of the whole function directly
      while(queu){
          
          // if queu is empty, there is no more node to explore
          if (queu.length === 0)
              return
          
          //if queu contains the end node, we can start backtracing to get the whole path. this path will be in reverse order
          if (queu.indexOf(end) !== -1){
              
              //add end node to result
              result.push(end)
              
              //restart path traversing with the parent (== currentNode) of the current end node as new end node
              traversePath(objectRep, start, currentNode)
              
              // when all recursion is done, we have reached the start again and can return
              return
          }
          
          // get the first node from queu
          var currentNode = String(queu.splice(0,1))
          
          //add the currently evaluated node to visited
          visited.push(currentNode)
          
          //loop through the array containg all neighbors of the current node and add them to queu as long as they are not already visited or already in the queu array
          objectRep[currentNode].forEach(function(node){
              if (queu.indexOf(node) === -1 && visited.indexOf(node) === -1)
                  queu.push(node)
          })
      }
  }

  function getObjectRep(strArr) {
      // getObjectRep returns an object with a property for each node. the name will be the name of the node and the value an array containing all neighbor nodes
      
      //get number of nodes
      var numberOfPoints = parseInt(strArr[0], 10)
      
      //get length of array
      var len = strArr.length
      
      // define empty object to be filled with nodes
      var obj = {}
      
      // loop over all  nodes
      for (var i = 1; i <= numberOfPoints; i++) {
          
          // empty array to hold neighbor nodes of current node
          var endPoints = []
          
          //loop over all paths defined in the array
          for (var j = 1 + numberOfPoints; j < len; j++) {
              
              // if path doesn't start/end at current node, continue
              if (strArr[j].indexOf(strArr[i]) === -1)
                  continue
              
              // if current node is start of current path, add the part after "-" to the endpoints array
              if (strArr[j].indexOf(strArr[i]) < strArr[j].indexOf("-"))
                  endPoints.push(strArr[j].substring(strArr[j].indexOf("-") + 1))
              
              //if current node is end of current path, add part before "-" to the endpoints array
              else
                  endPoints.push(strArr[j].substring(0, strArr[j].indexOf("-")))
          }
          
          // add current node as property to the object
          obj[strArr[i]] = endPoints
      }
      return obj
  }
  
  // return properly formatted result
  return result.length !== 0 ? result.reverse().join("-") : -1

}
 
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ShortestPath(readline());































































function ShortestPath(strArr) {
	var graphArr = makeGraph(strArr);
	return shortest(graphArr);
}

function makeGraph(strArr){
	var numnodes = Number(strArr[0]);
	var graph = {};
    var source = strArr[1], dest = strArr[numnodes];
	for(var i = 1; i <= numnodes; i++){
		graph[strArr[i]] = [];
	}
	var edge, head, tail;
	for(var i = numnodes + 1; i < strArr.length; i++){
      edge = strArr[i].split("-");
      head = edge[0];
      tail = edge[1];
      
      graph[head].push(tail);
      graph[tail].push(head);
	}
	return [graph, source, dest];
}

function shortest(graphArr){
	var graph = graphArr[0], source = graphArr[1], dest = graphArr[2];
	var queue = [];
	var dist = {};
	dist[source] = 0;
	var prev = {};
	prev[source] = undefined;
	for(var node in graph){
		if(node !== source){
			dist[node] = 99999999;
			prev[node] = undefined;
		}
		queue.push(node);
	}
	var u;
	while(queue.length > 0){
		if(u === undefined){
			u = source;
		}else{
			u = vertexMinDist(dist, queue);
			// for(var item = 0; item < u.length; item++){
			// 	print("" + item + ": " + u[item]);
			// }
		}
		var neighbors = graph[u];
		var uin = queue.indexOf(u);
		queue.splice(uin, 1);
		for(var v in neighbors){
			var alt = dist[u] + 1;
			if (alt < dist[neighbors[v]]){
				dist[neighbors[v]] = alt;
				prev[neighbors[v]] = u;
			}
		}
	}
	//return prev;
	var ans = "" + dest;
	var prevnode = prev[dest];
		while(prevnode !== source && prevnode !== undefined){
		ans = prevnode + "-" + ans;
		prevnode = prev[prevnode];
	}
	if (prevnode === undefined)
		return -1;
	else{
		ans = source + "-" + ans;
		return ans;
	}
}

function vertexMinDist(dist, queue){
	var mindist = 99999;
	var minnode;
	for(var u = 0; u < queue.length; u++){
		if(dist[queue[u]] < mindist){
			mindist = dist[queue[u]];
			minnode = queue[u];
		}
	}
	return minnode;
}

// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ShortestPath(readline());



















































function ShortestPath(strArr) { 
  var nodes = strArr.splice(0,parseInt(strArr.shift())),
      nodeIndex = {}, //key-value pairs: {nodeName: nodeObject}
      i, 
      pathArr, //Used to split the path into an array of two strings
      firstNode,
      lastNode,
      path,
      pathStr = '';
  for (i = nodes.length - 1; i >= 0; i--) {
    nodeIndex[nodes[i]] = new Node(nodes[i]);
  }
  firstNode = nodeIndex[nodes[0]];
  lastNode = nodeIndex[nodes[nodes.length - 1]];
  
  for (i = strArr.length - 1; i >= 0; i--) {
    pathArr = strArr[i].split('-');
    nodeIndex[pathArr[0]].addNext(nodeIndex[pathArr[1]]);
  }
  
  i = 1;
  while (i <= strArr.length) {
    if (path = firstNode.pathToNode(lastNode,i++)) {
      //pathStr = firstNode.name;
      for (i in path) {
        pathStr += '-' + path[i].name;
      }
      return pathStr.slice(1);
    }
  }
  return -1;
}

function Node(name) {
  this.name = name;
  this.next = [];
}

Node.prototype.addNext = function(node) {
  this.next.push(node);
  node.next.push(this);
}

Node.prototype.pathToNode = function(node,stepLimit) {
  if (this === node)
    return [this];
  if (stepLimit === 0)
    return false;
  
  var path;
  for (var i in this.next) {
    path = this.next[i].pathToNode(node, stepLimit - 1);
    if (path) //We got an array - path found!
      return [this].concat(path);
  }
  return false;
}

// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ShortestPath(readline());