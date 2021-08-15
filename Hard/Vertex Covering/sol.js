function VertexCovering(strArr) { 
  const markedVertices = strArr[2].replace(/^\(|\)$/g, '').split(',').reduce((acc, v) => ({ ...acc, [v]: true }), {});
  const missedEdges = strArr[1].replace(/^\(|\)$/g, '').split(',')
      .map(edge => edge.split('-'))
      .filter(edge => !markedVertices[edge[0]] && !markedVertices[edge[1]]);

  return missedEdges.length === 0 ? 'yes' : ('(' + missedEdges.map(edge => `${edge[0]}-${edge[1]}`).join(',') + ')');
}

 
// keep this function call here 
VertexCovering(readline());


























function VertexCovering(strArr) { 

  let [, edges, vertices] = strArr;

  edges = edges.substr(1, edges.length - 2).split(',');
  vertices = vertices.substr(1, vertices.length - 2).split(',');

  const missingEdges = edges.filter(edge => {
      return !vertices.some(vertice => {
          if (vertice === '') {
              return false;
          }
          return edge.includes(vertice);
      });
  });

  if (missingEdges.length === 0) {
      return 'yes';
  }

  return `(${missingEdges.join(',')})`;
}
 
// keep this function call here 
VertexCovering(readline());






























function VertexCovering(strArr) { 
  const markedVertices = strArr[2].replace(/^\(|\)$/g, '').split(',').reduce((acc, v) => ({ ...acc, [v]: true }), {});
  const missedEdges = strArr[1].replace(/^\(|\)$/g, '').split(',')
      .map(edge => edge.split('-'))
      .filter(edge => !markedVertices[edge[0]] && !markedVertices[edge[1]]);

  return missedEdges.length === 0 ? 'yes' : ('(' + missedEdges.map(edge => `${edge[0]}-${edge[1]}`).join(',') + ')');
}

 
// keep this function call here 
VertexCovering(readline());
