import React, { useState, useEffect } from 'react';
import { BsDownload } from "react-icons/bs";
import pdf from "../Resume.pdf";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const Resume = () => {
  const [wid, setWid] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWid(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const getPageScale = () => {
    if (wid < 700) {
      return wid > 475 ? 0.9 : 0.6; 
    } else {
      return 1.6; 
    }
  };

  return (
    <div className='ResumePage'>
      <Document file={pdf} className="resumeview">
        <Page pageNumber={1} scale={getPageScale()} />
      </Document>

      <a href={pdf} target='_blank' rel="noopener noreferrer" download="Devansh's Resume">
        <button className='downloadCV' type='button'>
          <h3><BsDownload />&nbsp; Download CV</h3>
        </button>
      </a>
    </div>
  );
}

export default Resume;
