import React from "react";
import { Link } from "react-router-dom";

const ProjectPageSelector = ({ numberOfPages, pageNumber, project, changePageNumber}) => {
  var list = [];
  for (let i = 0; i < numberOfPages; i++) {
    list.push(i);
  }
  return <div>
    {list.map((num) => 
      <Link 
        key={ num } 
        to={"/" + project.projectName.replace(" ", "-")}
        state={{ pageNumber: num, project: project }} 
        className={ num == pageNumber ? "page-number-nav selected-number-nav menu-link": "page-number-nav menu-link"}
      >
        <span 
          onClick={() => changePageNumber(num)}
          onKeyPress={() => changePageNumber(num)}
          role="button"
          tabIndex={num}
        >
          { num+1 }
        </span>
      </Link>
    )}
  </div>;
};

export default ProjectPageSelector;

/*<span key={ num+1 } 
        className={ num == pageNumber ? "page-number-nav selected-number-nav": "page-number-nav"}
        onClick={() => changePageNumber(num)} 
        onKeyPress={() => changePageNumber(num)}
        role="button"
        tabIndex={0}
      >
        { num+1 }
      </span>*/