import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/images/logo.png';
import './style.css';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => setIsOpen((isOpen) => !isOpen);

  return (
    <div className='headerBox'>
      <div className='container'>
        <div className='headerContent'>
          <Link className='logoImg' to='/'>
            <img src={logo} alt='logo' />
          </Link>

          <nav className='navigation'>
            <div onClick={toggleHamburger} className='hamburger menu'>
              <div className='line1'></div>
              <div className='line2'></div>
              <div className='line3'></div>
            </div>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
              <li className={isOpen ? 'fade' : ''}>
                <a href='/#'>Page 1</a>
              </li>
              <li className={isOpen ? 'fade' : ''}>
                <a href='/#'>Page 2</a>
              </li>
              <li className={isOpen ? 'fade' : ''}>
                <a href='/#'>Page 3</a>
              </li>
              <li className={isOpen ? 'fade' : ''}>
                <a href='/#'>Page 4</a>
              </li>
              <li className={isOpen ? 'fade' : ''}>
                <a href='/#'>Page 5</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
