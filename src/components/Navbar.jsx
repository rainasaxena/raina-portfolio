import React from 'react'
import './../styles/Navbar.scss';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll=()=>{
     setSticky(window.scrollY>0)
     console.log(window.scrollY);
    }
 
    window.addEventListener('scroll', handleScroll)
    
    return () => window.removeEventListener('scroll',handleScroll)
 
   })

  return (
    <nav className={`${sticky? 'sticky' : ''}`}>
    <div id='nav-container'>
        <div className="nav-lists">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/#about-container">ABOUT</a></li>
                <li><a href="/#skill-container-left">SKILLS</a></li>
                <li><a href="about.asp">About</a></li>
            </ul>
        </div>
    </div>
    </nav>
  )
}

export default Navbar