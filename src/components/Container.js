import React from "react";

function Container({
  header,
  children,
  textPosition = "", // possible values: left, right, center >>Styling for the text
  direction = "horizontal", // possible values: vertical, horizontal >>Image orientation on page
  contentPosition = "center", // possible values: left, right, center
}) {
  return (
    <div className={`container ${textPosition}`}> 
      {header ? <h2>{header}</h2> : null}

      <div className={`container-children ${direction} ${contentPosition}`}>
        {children}
      </div>
    </div>
  );
}

export default Container;
