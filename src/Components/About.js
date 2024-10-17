import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import about from '../LottieFiles/about.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Bharath Gutti</b> and I am from Chirala, India.
            I'm a <b>Frontend developer</b>  with a <b>Bachelor of Technology in Mechanical Engineering</b>. <br/><br/>
            I have done an internship as a <b>software developer</b> at Anarghya Communication Pvt. Ltd. which is a fintech startup.
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
            {/* Apart from coding In addition to coding, I enjoy gardening, cooking, and listening to music. */}
             I’m looking forward to new challenges and opportunities to further develop my career.
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={about} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        <Skills skill='HTML'/>
        <Skills skill='CSS'/>
        <Skills skill='React' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Javascript' />
        <Skills skill='Bootstrap'/>
        <Skills skill='MaterialUI'/>
      </div>
    </>
  )
}

export default About