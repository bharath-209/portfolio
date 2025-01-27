import React from 'react';
import Lottie from  "lottie-react";
import home from "../LottieFiles/home.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import home2 from "../LottieFiles/home2.json";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>Bharath Gutti</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={home} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            I love the process of changing a raw idea into a website or a product 
            that impacts lives. 
            I want to do work that challenges me as a developer & work that I can 
            be proud of.<br /><br />
            I am fluent in <b>Frontend</b> and know a bit of <b>Java</b> and am working on a few 
            projects in the <b>React</b> .<br />
            I plan to learn <b>Next.js</b>, <b>PowerBI,ML</b> and<b> Typescript</b> in the near future. <br /><br />
            {/* Also, I love <b>Cricket</b> <CiMusicNote1 style={{ scale: "1.5", rotate: "15deg" }} /> <CiHeadphones style={{ scale: "1.5", rotate: "15deg" }} />   */}
          </p>
        </div>
        <Tilt>
        <Lottie 
          className="illustration" 
          animationData={home2} 
          loop={true} 
        />
        </Tilt>
      </div>
    </div>
  )
}

export default Home