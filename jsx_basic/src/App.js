import React from 'react';

function App() {
  return (
    <div>
      <h1 className="heading">Hello, World!</h1>
      <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
        <li>four</li>
      </ul>
      <p>your lucky No is {Math.floor(Math.random() * 101)}</p>
    </div>
  );
}

export default App;