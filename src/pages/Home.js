import React from "react";
import PictureFiles from "../projects.json";

const Home = () => {
  return (
    <img 
      src={ "/photos/" + PictureFiles.homePage["front-picture"]} 
      alt={"/photos/" + PictureFiles.homePage["front-picture"]}
    />
  );
};

export default Home;