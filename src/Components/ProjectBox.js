import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    Login_PageDesc : "A simple and user-friendly login page with clear input fields and a prompt for new users to sign up.",
    Login_PageGithub : "https://github.com/bharath-209/login-page.git",
    Login_PageWebsite : " https://bharath-209.github.io/login-page/",

    NotePadDesc : "Notepad is a basic text editor used to create and edit plain text files. It offers minimal formatting options, making it simple and lightweight, ideal for quick notes or coding tasks.",
    NotePadGithub : "https://github.com/bharath-209/notes.git",
    NotePadWebsite : "https://bharath-209.github.io/notes/",

    Invoice_GenerationDesc:"The provided invoice page clearly outlines billing and shipping details, itemized products with prices, taxes, and total amount due, including a signature and terms for payment.",
    Invoice_GenerationGithub:"https://github.com/bharath-209/invoice-generation.git/",
    Invoice_GenerationWebsite:"https://bharath-209.github.io/invoice-generation/",
    

    Reports_GenerationDesc:"The above page is part of a Report Generation System for a law firm, displaying bank details filtered based on selected criteria such as bank name, branch, status, and date range. Users can open the filter drawer to apply or clear filters and view relevant bank information accordingly.",
    Reports_GenerationGithub:"https://github.com/bharath-209/report.git",
    Reports_GenerationWebsite:"https://bharath-209.github.io/report/",

    PortfolioDesc:"A dynamic portfolio showcasing diverse skills and accomplishments, including design, development, and creative problem-solving. Highlights innovative projects, strong work ethic, and dedication to continuous growth in various fields.",
    PortfolioGithub:"https://github.com/bharath-209/portfolio.git",
    PortfolioWebsite:"https://bharath-209.github.io/portfolio//",

  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox