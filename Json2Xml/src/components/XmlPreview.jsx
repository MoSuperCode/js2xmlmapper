import React from "react";

function XmlPreview({ xml, setXml }) {
  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    // Append the dragged data to the XML or insert it at a specific point
    setXml((prevXml) => `${prevXml}\n${data}`);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Necessary to allow dropping
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{ height: "100%", border: "1px dashed #000", padding: "10px" }}
    >
      {xml || "Drop JSON values here to add them to the XML preview"}
    </div>
  );
}

export default XmlPreview;
