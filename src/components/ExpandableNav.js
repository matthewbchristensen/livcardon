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
      <div className={ IsExpanded ? "expand-animation expanded" : "collapse-animation collapsed"}>{ExpandedItems}</div>

    </div>
  );
};

export default ExpandableNav;