import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div id='header'>
        <div className='title'>
          <h1>Bindaas Tomal</h1>
        </div>
        <div id='nav'>
          <Link to='/'>Home</Link>
          <Link to='/about'>Biography</Link>
          <Link to='/games'>Games</Link>
          <Link to='/members'>Members Area</Link>
          {/* <Link to='/contact'>Contact</Link>
          <Link to='/join'>Join</Link> */}
        </div>
      </div>
    </>
  );
}

export default Header;
