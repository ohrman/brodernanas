import React from 'react';
import './Header.css'; // Import the stylesheet


const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          {/* Ensure that the href attributes match the section IDs exactly */}
          <li><a href="#About">About</a></li>  {/* Corrected to match the ID case */}
          <li><a href="#Contact">Contact Us</a></li>  {/* Corrected and made unique */}
          <li><a href="#">Home</a></li>  {/* Corrected to match the ID case */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
