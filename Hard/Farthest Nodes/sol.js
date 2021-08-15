function FarthestNodes(strArr) { 
  let graph = new Map();
  let connections = strArr.map(c => c.split('-'));

  for (let [id1, id2] of connections) {
    if (!graph.has(id1))
      graph.set(id1, new Node(id1));
    if (!graph.has(id2))
      graph.set(id2, new Node(id2));
    
    graph.get(id1).add(graph.get(id2));
    graph.get(id2).add(graph.get(id1));
  }

  const getLongestPaths = (paths) => {
    let next = [];
    
    for (let path of paths) {
      let lastNode = path[path.length - 1];

      for (let edge of lastNode.edges)
        if (!path.includes(edge))
          next.push(path.concat(edge));
    }

    return next.length === 0 ? paths : getLongestPaths(next);
  }

  let longest = 0;
  for (let origin of graph.values()) {
    let longestPath = getLongestPaths([[origin]])[0].length;
    if (longestPath > longest)
      longest = longestPath;
  }
  return longest - 1;
}

class Node {
  constructor(id) {
    this.id = id;
    this.edges = [];
  }

  add(node) {
    if (!this.edges.includes(node))
      this.edges.push(node);
  }
}
   
// keep this function call here 
console.log(FarthestNodes(readline()));







































function FarthestNodes(strArr) { 

  const nodeKeys = new Set(strArr.join('-').split('-'));

  const map = new Map();

  // Initialize empty nodes
  nodeKeys.forEach(key => {
      map.set(key, new Node(key));
  });

  // Connect nodes
  strArr.forEach(connection => {
      const [nodeA, nodeB] = connection.split('-');
      map.get(nodeA).addEdge(map.get(nodeB));
      map.get(nodeB).addEdge(map.get(nodeA));
  });

  // Try each node as a start node
  let longestPath = 0;
  map.forEach(node => {
      const path = node.getFarthestPath();
      if (path.length > longestPath) {
          longestPath = path.length;
      }
  });

  return longestPath - 1;
}

function Node(key) {
  this.key = key;
  this.edges = [];
}

Node.prototype.addEdge = function(node) {
  this.edges.push(node);
};

Node.prototype.getFarthestPath = function(visited = []) {
  if (visited.includes(this.key)) {
      return visited;
  }

  visited = visited.slice();
  visited.push(this.key);

  const selfAndChildren = [];

  this.edges.forEach(edge => {
      const child = edge.getFarthestPath(visited);
      selfAndChildren.push(child);
  });

  if (selfAndChildren.length === 0) {
      return visited;
  }

  // Select longest of child paths to return
  selfAndChildren.sort((a, b) => b.length - a.length);
  return selfAndChildren[0];
};
 
// keep this function call here 
FarthestNodes(readline());







































function FarthestNodes(strArr) { 
  let nodes = strArr.map(pair => pair.match(/[A-Za-z]/g));
  let obj = {};
  for (i = 0; i < nodes.length; i++) {
    let start = nodes[i][0];
    let end = nodes[i][1];
    obj[start] ? obj[start].push(end) : obj[start] = [end];
    obj[end] ? obj[end].push(start) : obj[end] = [start];
  }

  let keys = Object.keys(obj);
  let oldRoutes = [];

  let newRoutes = oldRoutes;
  do {
    if (!oldRoutes.length) {
      keys.forEach(val => oldRoutes.push(val));
    }
    for (k = 0; k < oldRoutes.length; k++) {
      let route = oldRoutes[k];
      let a = route.slice(-1);
      for (l = 0; l < obj[a].length; l++) {
        let b = obj[a][l];
        if (!route.includes(b)) {
          newRoutes.push(route.concat(b));
        }
      }
      if (newRoutes.length > oldRoutes.length) {
        newRoutes.splice(k, 1);
      }
    }
  } while (newRoutes.length > oldRoutes.length);
  return newRoutes.sort((a, b) => b.length - a.length)[0].length - 1;
}
   
// keep this function call here 
FarthestNodes(readline());











































function FarthestNodes(strArr) { 
  let obj = {};
  for (let i = 0; i < strArr.length; i++) {
    let key = strArr[i][0];
    let val = strArr[i][2];
    if (obj[key]) {
        obj[key].push(val);
    } else {
        obj[key] = [val];
    }
  }
  for (let i = 0; i < strArr.length; i++) {
    let key = strArr[i][2];
    let val = strArr[i][0];
    if (obj[key]) {
        obj[key].push(val);
    } else {
        obj[key] = [val];
    }
  }
  let maxDepth = 0;
  let dive = function(node, depth, trav) {
      depth++;
      if (depth > maxDepth) {
          maxDepth = depth;
      }
      for (let j = 0; j < obj[node].length; j++) {
        if (trav.indexOf(obj[node][j]) < 0) dive(obj[node][j], depth, trav.concat([obj[node][j]]));
      }
  }
  for (let num in obj) {
     dive(num, -1, [num])
  }
  return maxDepth; 
         
}
   
// keep this function call here 
FarthestNodes(readline());









































function FarthestNodes(strArr) { 
  // map letters to each node so we create exactly one node
  // for each letter in the graph
  let graph = new Map();
  for (let pair of strArr) {
      let letters = pair.split("-");
      let firstLetter = letters[0];
      let secondLetter = letters[1];
      if (!graph.has(firstLetter)) {
          graph.set(firstLetter, new Node(firstLetter));
      }
      if (!graph.has(secondLetter)) {
          graph.set(secondLetter, new Node(secondLetter));
      }
      // add the path for the two nodes to each other
      graph.get(firstLetter).addNeighbour(graph.get(secondLetter));
  }
  
  let letters = Array.from(graph.keys());

  // again no marks for efficiency so consider all
  // starting nodes to create a path
  let longestPath = 0;
  for (let letter of letters) {
      let startingNode = graph.get(letter);
      longestPath = Math.max(
          longestPath,
          explore(startingNode, 0, null));
  }
  
  // code goes here  
  return longestPath; 
}

class Node {
  constructor(letter) {
      this.value = letter;
      this.neighbours = new Set();
  }
  
  /*
   * Creates an bi directed path between
   * this node and the other node.
   */
  addNeighbour(node) {
      this.neighbours.add(node);
      node.neighbours.add(this);
  }
}

/*
* Recursively explores from this node, increasing
* the path length with every recursive call, and
* tracking the previous node visited to prevent
* backtracking.
*/
function explore(node, path, previous) {
  if ((node.neighbours.size === 1)
          && (node.neighbours.keys().next().value === previous)) {
      // finished exploring, hit end of a path
      return path;
  }
  let bestPath = 0;
  for (let neighbour of node.neighbours) {
      // The graph contains no cycles so ignoring
      // the node we just came from is sufficient
      // to avoid an infinite exploration loop
      if (neighbour !== previous) {
          bestPath = Math.max(
              bestPath,
              explore(neighbour, path + 1, node));
      }
  }
  return bestPath;
}

// keep this function call here 
FarthestNodes(readline());