function CityTraffic(strArr) { 
  const graph = makeGraph(strArr)
  
  return Object.keys(graph)
      .map(node => {
          const adjacentTraffic = graph[node]
              .map(adjacentNode => getTraffic(graph, adjacentNode, parseInt(node)))

          return `${node}:${Math.max(...adjacentTraffic)}`
      })
      .join(',')
}

function makeGraph (nodes) {
  const graph = {}

  nodes.forEach(node => {
      const [ key, adjacent ] = node.split(':')
      graph[parseInt(key)] = JSON.parse(adjacent)
  })
  
  return graph
}

function getTraffic (graph, node, parent = node) {
  const adjacentNodes = graph[node].filter(node => node !== parent)
  
  return adjacentNodes.reduce((sum, adjacentNode) => {
      return sum + getTraffic(graph, adjacentNode, node)
  }, node)
}
 
// keep this function call here 
CityTraffic(readline());




































function CityTraffic(strArr) { 
  const graph = makeGraph(strArr)
  
  return Object.keys(graph)
      .map(node => {
          const adjacentTraffic = graph[node]
              .map(adjacentNode => getTraffic(graph, adjacentNode, parseInt(node)))

          return `${node}:${Math.max(...adjacentTraffic)}`
      })
      .join(',')
}

function makeGraph (nodes) {
  const graph = {}

  nodes.forEach(node => {
      const [ key, adjacent ] = node.split(':')
      graph[parseInt(key)] = JSON.parse(adjacent)
  })
  
  return graph
}

function getTraffic (graph, node, parent = node) {
  const adjacentNodes = graph[node].filter(node => node !== parent)
  
  return adjacentNodes.reduce((sum, adjacentNode) => {
      return sum + getTraffic(graph, adjacentNode, node)
  }, node)
}
 
// keep this function call here 
CityTraffic(readline());








































function CityTraffic(strArr) { 
  const graph = makeGraph(strArr)
  
  return Object.keys(graph)
      .map(node => {
          const adjacentTraffic = graph[node]
              .map(adjacentNode => getTraffic(graph, adjacentNode, parseInt(node)))

          return `${node}:${Math.max(...adjacentTraffic)}`
      })
      .join(',')
}

function makeGraph (nodes) {
  const graph = {}

  nodes.forEach(node => {
      const [ key, adjacent ] = node.split(':')
      graph[parseInt(key)] = JSON.parse(adjacent)
  })
  
  return graph
}

function getTraffic (graph, node, parent = node) {
  const adjacentNodes = graph[node].filter(node => node !== parent)
  
  return adjacentNodes.reduce((sum, adjacentNode) => {
      return sum + getTraffic(graph, adjacentNode, node)
  }, node)
}
 
// keep this function call here 
CityTraffic(readline());