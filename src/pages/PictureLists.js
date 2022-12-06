import React from "react";
import { useLocation } from "react-router-dom";

const PictureLists = () => {
  const location = useLocation();

  return (
    <div>
      <img 
        src={ "/photos/" + location.state.project?.listOfWork[location.state.pageNumber]} 
        alt={location.state.project.projectName + "-" + (location.state.pageNumber + 1)}
      />
    </div>
  );
};

export default PictureLists;

{/* <h1>{location.state.project?.projectName}</h1> */}
//location.state.project.projectName + "-" + (location.state.pageNumber + 1)