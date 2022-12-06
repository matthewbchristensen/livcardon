import React from "react";

const ExpandableNav = ({ CollapsedView, ExpandedItems, IsExpanded, ToggleCollapse}) => {
  return (
    <div>
      <div 
        className="pointer" 
        role="button" 
        tabIndex={0} 
        onClick={ToggleCollapse} 
        onKeyPress={ToggleCollapse}
      >
        { CollapsedView }
      </div>
      { IsExpanded ? <div>{ExpandedItems}</div> : false }

    </div>
  );
};

export default ExpandableNav;