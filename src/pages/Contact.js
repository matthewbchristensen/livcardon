import React from "react";
import PictureFiles from "../projects.json";

const Contact = () => {
  return (
    <>
      <iframe 
        src={ "/photos/" + PictureFiles.aboutCv.resume} 
        title="Resume"
        className="pdf"
      >
      </iframe>
      <img 
        src={ "/photos/" + PictureFiles.aboutCv.portrait} 
        alt={"/photos/" + PictureFiles.aboutCv.portrait}
        className="pdf"
      />
      <p className="about-paragraph">{ PictureFiles.aboutCv.artistStatement }</p>
    </>
  );
};

export default Contact;


/*
<embed
        src={ "/photos/" + PictureFiles.aboutCv.resume} 
        type="application/pdf"
        frameBorder="0"
        className="pdf"
      ></embed>
      */