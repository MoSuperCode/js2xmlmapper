import React from "react";

const DraggableWrapper = ({ children, onDragEnd, data }) => {
  const handleDragStart = (e) => {
    // Use the dataTransfer object to store the data being dragged
    e.dataTransfer.setData("text/plain", data);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Necessary to allow dropping
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={onDragEnd}
      style={{ cursor: "grab" }}
    >
      {children}
    </div>
  );
};

export default DraggableWrapper;
