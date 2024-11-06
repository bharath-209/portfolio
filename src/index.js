import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />  
  </BrowserRouter>
);



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './index.css'; 
// import { BrowserRouter } from 'react-router-dom';
// import Footer from "./Components/Footer";
// import Home from './Components/Home';
// import About from './Components/About';
// import Projects from './Components/Projects';
// import Resume from "./Components/Resume";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <div id="home">
//       <Home />
//     </div>
//     <div id="about">
//       <About />
//     </div>
//     <div id="projects">
//       <Projects />
//     </div>
//     <div id="resume"> {/* ID for the Resume section */}
//       <Resume />
//     </div>
//     <App /> 
//     <Footer />
//   </BrowserRouter>
// );
