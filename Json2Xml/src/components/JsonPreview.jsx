import React from "react";
import DraggableWrapper from "./DraggableWrapper"; // Import the DraggableWrapper component

function JsonPreview({ json }) {
  const jsonObject = json ? JSON.parse(json) : {};

  const renderJson = (obj) => {
    return Object.entries(obj).map(([key, value], index) => (
      <DraggableWrapper key={index} data={`${key}: ${value}`}>
        <div>
          {key}: {JSON.stringify(value)}
        </div>
      </DraggableWrapper>
    ));
  };

  return (
    <div>{json ? renderJson(jsonObject) : "Upload JSON Data for preview"}</div>
  );
}

export default JsonPreview;
