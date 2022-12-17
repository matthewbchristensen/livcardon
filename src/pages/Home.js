import React from "react";
import PictureFiles from "../projects.json";

const Home = () => {
  return (
    <img 
      src={ process.env.PUBLIC_URL + "/photos/" + PictureFiles.homePage["front-picture"]} 
      alt={ process.env.PUBLIC_URL + "/photos/" + PictureFiles.homePage["front-picture"]}
    />
  );
};

export default Home;