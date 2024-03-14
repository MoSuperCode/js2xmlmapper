import React from "react";

function XmlPreview({ xml }) {
  return (
    <>{xml ? <pre>{xml}</pre> : "Upload and convert JSON to preview XML"}</>
  );
}

export default XmlPreview;
