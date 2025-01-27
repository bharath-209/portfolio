import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Bharath Gutti</h4>
      <h4>Copyright &copy; 2024 BG</h4>
      <div className='footerLinks'>
        <a href="https://github.com/bharath-209" target='blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/bharath-gutti" target='blank'><FaLinkedin/></a>
        <a href='mailTo:bharathgutti1999@gmail.com' target='blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer

