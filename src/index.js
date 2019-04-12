import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import { futimesSync } from 'fs';

const COLOR = { first: 'green', second: 'red' };

const NewCounter = function() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(COLOR.first);
  const [display, setDisplay] = useState(true);

  const toggleColor = function() {
    if (color === COLOR.first) {
      setColor(COLOR.second);
      return;
    }
    setColor(COLOR.first);
  };

  useEffect(() => {
    console.log('compounent updated');
  });

  return (
    <div>
      {console.log('I am rendering')}
      {display && <div style={{ color: color }}>the count is {count}</div>}
      <button onClick={() => setCount(count + 1)}>Incremnt</button>
      <button onClick={toggleColor}>change</button>
      <button onClick={() => setDisplay(!display)}>toggle display</button>
    </div>
  );
};

ReactDOM.render(<NewCounter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
