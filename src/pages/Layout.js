import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import ExpandableNav from "../components/ExpandableNav";
import ProjectPageSelector from "../components/ProjectPageSelector";
import PictureFiles from "../projects.json";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const [projectsAreExpanded, toggleCollapse] = useState(false);
  const [selectedWork, changeSelectedWork] = useState(0);
  const location = useLocation();
  var projectsCollapsed = <div className="menu-link top-level-nav">PROJECTS</div>;

  var expandedItems = <ul className="bottom-level-nav-list">
    { PictureFiles.projects.map((p) => 
      <li key={ p.projectName }>
        <Link 
          key={p.projectName + "-01"} 
          to={"/" + p.projectName.replace(" ", "-")} 
          state={{ pageNumber: 0, project: p }} 
          className="menu-link bottom-level-nav" 
        >
          <span
            onClick={() => changeSelectedWork(0)}
            onKeyPress={() => changeSelectedWork(0)}
            role="button"
            tabIndex={0}
          >
            { p.projectName }
          </span>
        </Link>
      </li>
    )}
  </ul>;

  return (
    <div className="full-screen-layout">
      <nav>
        <ul>
          <li>
            <Link to="/" className="menu-link home-nav"><h1>OLIVIA CARDON</h1></Link>
          </li>
          <li>
            <ExpandableNav CollapsedView={projectsCollapsed} ExpandedItems={expandedItems} IsExpanded={projectsAreExpanded} ToggleCollapse={() => toggleCollapse(!projectsAreExpanded)}></ExpandableNav>
          </li>
          <li>
            <Link to="/contact" className="menu-link top-level-nav">ABOUT/CV</Link>
          </li>
        </ul>
        {
          location.state?.project.listOfWork?.length > 0 
            ? 
            <div className="project-page-selector-container">
              <ProjectPageSelector 
                numberOfPages={location.state.project?.listOfWork?.length} 
                pageNumber={selectedWork} 
                project={location.state.project}
                changePageNumber={changeSelectedWork}
              ></ProjectPageSelector>
            </div> 
            : false
        }
      </nav>
      <div className="content">
        <Outlet/>
      </div>
    </div>
  );
};

export default Layout;