import React from 'react';
import './Header.css'; // Import the stylesheet

const Header: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header>
      <nav>
        <ul>
          <li><a href="#About">About</a></li>
          <li><a href="#Contact">Contact Us</a></li>
          <li><button onClick={scrollToTop} style={{background: 'none', border: 'none', color: 'blue', cursor: 'pointer'}}>Home</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
