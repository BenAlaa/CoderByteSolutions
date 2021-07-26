import React from 'react';
import ReactDOM from 'react-dom';

function DataList(props) {
  const { data } = props;
  let info = data.map(person => {
    return ( 
      <>
      <span> { person.name } </span>
      <span> { person.age } </span>
    </>

    );
  })
  return (
      <div>
      <h2>code goes here</h2>
          {info}
      </div>
    );
}


const data = [
  { name: 'Daniel', age: 25 },
  { name: 'John', age: 24 },
  { name: 'Jen', age: 31 },
];

ReactDOM.render(
  <DataList data={ data } />,
  document.getElementById('root')
);