import { useState } from "react";
import "./App.css";
import Upload from "./components/Upload";
import JsonPreview from "./components/JsonPreview";
import XmlPreview from "./components/XmlPreview";

function App() {
  const [file, setFile] = useState(null);
  const [json, setJson] = useState(null);
  return (
    <>
      <Upload setFile={setFile} file={file} setJson={setJson} />
      <div
        style={{
          width: "500px",
          display: "flex",
          justifyContent: "space-between",
        }}
        className="container"
      >
        <JsonPreview json={json} style={{ whiteSpace: "pre-line" }} />
        <XmlPreview />
      </div>
    </>
  );
}

export default App;