import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    DigitalClockDesc : "A digital clock displays time with numerical digits, often featuring LED or LCD screens. It typically shows hours, minutes, and sometimes seconds, providing an accurate, clear, and modern way to track time.",
    DigitalClockGithub : "https://github.com/VenkataRathnam3523/digitalclock",
    DigitalClockWebsite : "https://venkatarathnam3523.github.io/digitalclock/",

    NotePadDesc : "Notepad is a basic text editor used to create and edit plain text files. It offers minimal formatting options, making it simple and lightweight, ideal for quick notes or coding tasks.",
    NotePadGithub : "https://github.com/VenkataRathnam3523/Note",
    NotePadWebsite : "https://venkatarathnam3523.github.io/Note/",

    AnimePageDesc:"The anime page invites users to 'Embark on Your Legendary Journey,' showcasing dynamic characters in a fantasy world where heroes clash, offering adventure, battles, and an immersive experience.",
    AnimePageGithub:"https://github.com/VenkataRathnam3523/animatedpage",
    AnimePageWebsite:"https://venkatarathnam3523.github.io/animatedpage/",
    
    PasswordDesc:"A strong password is a complex, unique combination of letters (both uppercase and lowercase), numbers, and symbols, with a length of at least 12 characters, ensuring resilience against brute force attacks.",
    PasswordGithub:"https://github.com/VenkataRathnam3523/password",
    PasswordWebsite:"https://github.com/VenkataRathnam3523/password",

    CRUDoperationDesc:"CRUD operations are essential for managing data within applications and databases. Create involves adding new data entries, Read focuses on retrieving and displaying existing information, Update allows for modifying or changing data, and Delete removes data that is no longer needed. Together, these operations enable the full lifecycle management of data, ensuring it can be effectively maintained and utilized.",
    CRUDoperationGithub:"https://github.com/VenkataRathnam3523/CRUDproject",
    CRUDoperationWebsite:"https://venkatarathnam3523.github.io/CRUDproject/",

    PortfolioDesc:"A dynamic portfolio showcasing diverse skills and accomplishments, including design, development, and creative problem-solving. Highlights innovative projects, strong work ethic, and dedication to continuous growth in various fields.",
    PortfolioGithub:"https://github.com/VenkataRathnam3523/portfolio",
    PortfolioWebsite:"https://venkatarathnam3523.github.io/portfolio/",

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

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox