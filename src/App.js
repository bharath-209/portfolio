// import { Route, Routes } from "react-router-dom";
// import { useEffect, useState } from "react";
// import Nav from './Components/Navbar';
// import Footer from "./Components/Footer";
// import Home from "./Components/Home";
// import About from "./Components/About";
// import Resume from "./Components/Resume";
// import Project from "./Components/Projects";
// import MoveToTop from "./Components/MoveToTop";
// import Lottie from  "lottie-react";
// import nightsky from "./LottieFiles/night-sky.json";
// import HashLoader from "react-spinners/HashLoader";



// function App() {
//   const[Loading,SetLoading]=useState(true);

//   useEffect(()=>{
//     SetLoading(true)

//     setTimeout(()=>{
//     SetLoading(false)}
//     ,1900)
//   },[])  
  
//   return (
//     <>
//       {Loading ? (
//       <div className="loader"> 
//         <HashLoader
//           color={'#9067C6'}
//           loading={true}
//           size={100}
//           aria-label="Loading Spinner"
//           data-testid="loader"
//         />
//       </div>
//       ):(
//       <div>
      
//       <Lottie className="bg" animationData={nightsky} loop={true} />  
//       <Lottie className="bgtwo" animationData={nightsky} loop={true} />   
//       <Lottie className="bgtemp" animationData={nightsky} loop={true} /> 

//       <Nav/>
//       <MoveToTop/>
//       <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path="/About" element={<About/>}/>
//         <Route path="/Project" element={<Project/>}/>
//         <Route path="/Resume" element={<Resume/>}/>
//       </Routes>
//       <Footer/>
//       </div>
//       )}  
//     </>
//   );
// }

// export default App;



import React, { useEffect, useState } from "react";
import Nav from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import Footer from "./Components/Footer";
import MoveToTop from "./Components/MoveToTop";
import Lottie from "lottie-react";
import nightsky from "./LottieFiles/night-sky.json";
import HashLoader from "react-spinners/HashLoader";

function App() {
  const [loading, setLoading] = useState(true);
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1900);
  }, []);

  const toggleResume = () => {
    setShowResume((prevShowResume) => {
      const newShowResume = !prevShowResume;
      
      // Scroll to Resume section if it's becoming visible
      if (newShowResume) {
        setTimeout(() => {
          document.getElementById("resume")?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 0);
      }
      
      return newShowResume;
    });
  };

  return (
    <>
      {loading ? (
        <div className="loader">
          <HashLoader
            color="#9067C6"
            loading={true}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          <Lottie className="bg" animationData={nightsky} loop={true} />
          <Nav onResumeClick={toggleResume} />
          <MoveToTop />

          <div id="home">
            <Home />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="projects">
            <Projects />
          </div>

          {showResume && (
            <div id="resume">
              <Resume />
            </div>
          )}

          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
