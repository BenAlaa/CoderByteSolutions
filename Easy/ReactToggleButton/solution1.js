import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Toggle = () => {
  const [on, setOn] = useState(true);

  return (
    <button onClick={() => setOn(!on)}>{ on ? 'ON' : 'OFF' }</button>
  );
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);