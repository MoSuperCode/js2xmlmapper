import { useState } from "react";
import "./App.css";
import Upload from "./components/Upload";
import JsonPreview from "./components/JsonPreview";
import XmlPreview from "./components/XmlPreview";

function App() {
  const [file, setFile] = useState(null);
  const [json, setJson] = useState(null);
  const [xml, setXml] = useState(null);
  return (
    <>
      <h1>JSON 2 XML</h1>
      <Upload setFile={setFile} file={file} setJson={setJson} setXml={setXml} />
      <div
        style={{
          width: "800px",
          display: "flex",
          justifyContent: "space-between",
        }}
        className="container"
      >
        <JsonPreview
          json={json}
          style={{ whiteSpace: "pre-line", boxSizing: "border-box" }}
        />
        <XmlPreview
          setXml={setXml}
          xml={xml}
          style={{ whiteSpace: "pre-wrap", boxSizing: "border-box" }}
        />
      </div>
    </>
  );
}

export default App;
