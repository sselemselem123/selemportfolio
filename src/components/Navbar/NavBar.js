import React from 'react'
import './Navbar.css';
function NavBar() {
  return (
    <div className='body'>
      <div className='left'>
        <div className='name'>MY PROFTOLIO</div>
      </div>

      <div className='right'>
        <div className='list'>
          <ul style={{ listStyleType: 'none' }}>
            <li>About Me</li>
            <li>Education</li>
            <li>Project</li>
            <li>Skills</li>
          </ul>
        </div>
        <button className='button'>Contact Me</button>
      </div>
    </div>

  );
}
export default NavBar
