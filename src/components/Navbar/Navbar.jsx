import { useState } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">MAGIC MOMENTZ</div>
      
      {/* Hamburger Icon */}
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
      </div>

      {/* Nav Links with Animation */}
      <motion.ul 
        className={`nav-links ${isOpen ? 'active' : ''}`}
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'tween', ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
      >
        <li><a href="#stories" onClick={() => setIsOpen(false)}>Stories</a></li>
        <li><a href="#film" onClick={() => setIsOpen(false)}>Film</a></li>
        <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
      </motion.ul>
    </nav>
  );
};

export default Navbar;