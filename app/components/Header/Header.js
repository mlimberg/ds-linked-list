import React from 'react';
import './header-style';

const logStuff = () => {
  console.log("I was clicked!")
}

const Header = () => {
  return (
    <div className="Header">
      <h1>Header</h1>
      <button onClick={() => logStuff()} className="important-button">Click Me</button>
    </div>
  );
}

export default Header;
