import React from "react";

function XmlPreview({ xml }) {
  return (
    <div className="xml-preview" style={{ whiteSpace: "pre-wrap" }}>
      {xml ? <pre>{xml}</pre> : "Upload and convert JSON to preview XML"}
    </div>
  );
}

export default XmlPreview;
