import React from 'react'; 
import { FaReact, FaGitAlt, FaGithub, FaFigma, FaBootstrap, FaCss3Alt} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import {SiPostman,  SiMysql} from "react-icons/si";
import { DiJava } from "react-icons/di";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa6";

const Skills = ({ skill }) => {
    const icon = {
        Java:<DiJava />,
        MySql:<SiMysql />,
        SpringBoot:<BiLogoSpringBoot />,
        HTML:<FaHtml5/>,
        CSS:< FaCss3Alt/>,
        Postman: <SiPostman />,
        React: <FaReact />,
        Javascript: <DiJavascript1 />,
        Git: <FaGitAlt />,
        Github: <FaGithub />,
        Figma: <FaFigma />,
        Bootstrap: <FaBootstrap />,
    };
    
    return (
        <div title={skill} className='SkillBox'>
            {icon[skill]}
        </div>
    );
}

export default Skills;
