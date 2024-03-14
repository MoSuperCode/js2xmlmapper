import React from "react";

export default function JsonPreview({ json }) {
  let content;

  try {
    content = json ? (
      <pre>{JSON.stringify(JSON.parse(json), null, 2)}</pre>
    ) : (
      "Upload Json Data for preview"
    );
  } catch (e) {
    content = "Fehler beim Parsen des JSON-Inhalts";
  }

  return <>{content}</>;
}
