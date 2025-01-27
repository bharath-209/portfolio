import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";

const Nav = ({ onResumeClick }) => {
  const [navbarblur, setnavbarblur] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      setnavbarblur(window.scrollY >= 20);
    };

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const showMenu = () => {
    const bar = document.getElementsByClassName("bar");
    const ham = document.getElementsByClassName("NavbarLinks");
    bar[0].classList.toggle("barOne");
    bar[1].classList.toggle("barTwo");
    bar[2].classList.toggle("barThree");
    ham[0].classList.toggle("showNavbar");
  };

  const hideMenu = () => {
    const bar = document.getElementsByClassName("bar");
    const ham = document.getElementsByClassName("NavbarLinks");
    bar[0].classList.remove("barOne");
    bar[1].classList.remove("barTwo");
    bar[2].classList.remove("barThree");
    ham[0].classList.remove("showNavbar");
  };

  return (
    <nav className={navbarblur ? 'Navbar blur' : 'Navbar'}>
      <h1 title='Reload' onClick={() => window.location.reload(true)} className='Logo'>
        Bharath Gutti
      </h1>

      <div className='Hamburger' onClick={showMenu}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>

      <ul className='NavbarLinks'>
        <li onClick={hideMenu}>
          <ScrollLink to="home" spy={true} smooth={true} offset={-70} duration={100}>
            <AiOutlineHome /> Home
          </ScrollLink>
        </li>
        <li onClick={hideMenu}>
          <ScrollLink to="about" spy={true} smooth={true} offset={-70} duration={100}>
            <BsPerson /> About
          </ScrollLink>
        </li>
        <li onClick={hideMenu}>
          <ScrollLink to="projects" spy={true} smooth={true} offset={-70} duration={100}>
            <BsCodeSlash /> Project
          </ScrollLink>
        </li>
        {/* Call onResumeClick directly for the Resume link */}
        <ScrollLink to="resume" spy={true} smooth={true} offset={-70} duration={100}>
        <li onClick={() => { hideMenu(); onResumeClick(); }} >
          <CgFileDocument /> Resume
        </li>
        </ScrollLink>
      </ul>
    </nav>
  );
};

export default Nav;
