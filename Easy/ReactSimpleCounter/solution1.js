import React, { useState } from 'react';
import ReactDOM from 'react-dom';

export const Counter = (props) => {
  const [count, setCount ] = useState(0)

  return (
    <div id="mainArea">
      button count: <span>{count}</span>
      <button id="mainButton" onClick={() => {setCount(count + 1)}}>Increase</button>
    </div>
  );

}

ReactDOM.render(
  <Counter />,
  document.getElementById('root')
);