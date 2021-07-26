import React from 'react';
import ReactDOM from 'react-dom';

function DataList(props) {
  const people = props.data
  return (
    <div>
      <h2>code goes here</h2>
      

        {
          people.map((person) => {
            return (
              <div>
                <span>{person.name}</span> <span>{person.age}</span>
              </div>
            )
            

          })
        }
      

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