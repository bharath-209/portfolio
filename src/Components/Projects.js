import React from 'react';
import ProjectBox from './ProjectBox';
import notepad from '../images/notepad.png';
import anime from '../images/anime.png';
import password from '../images/password.png';
import digitalclock from '../images/digitalclock.png';
import crud from '../images/crud.png';
import portfolio from '../images/portfolio.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={digitalclock} projectName="DigitalClock" />
        <ProjectBox projectPhoto={notepad} projectName="NotePad" />
        <ProjectBox projectPhoto={anime} projectName="AnimePage" />
        <ProjectBox projectPhoto={password} projectName="Password" />
        <ProjectBox projectPhoto={crud} projectName="CRUDoperation" />
        <ProjectBox projectPhoto={portfolio} projectName="Portfolio" />
      </div>
    </div>
  )
}

export default Projects