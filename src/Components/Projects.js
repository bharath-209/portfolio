import React from 'react';
import ProjectBox from './ProjectBox';
import notepad from '../images/notepad.png';
import Invoice from '../images/Invoice.png';
// import password from '../images/password.png';
import login from '../images/login.png';
import Reports from '../images/Reports.png';
import portfolio from '../images/portfolio.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={login} projectName="Login_Page" />
        <ProjectBox projectPhoto={notepad} projectName="NotePad" />
        <ProjectBox projectPhoto={Invoice} projectName="Invoice_Generation" />
        {/* <ProjectBox projectPhoto={password} projectName="Password" /> */}
        <ProjectBox projectPhoto={Reports} projectName="Reports_Generation" />
        <ProjectBox projectPhoto={portfolio} projectName="Portfolio" />
      </div>
    </div>
  )
}

export default Projects