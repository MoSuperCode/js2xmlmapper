import React, { useState } from "react";

function Upload({ setFile, file, setJson, setXml }) {
  // Assuming setXml is passed as a prop
  function handleChange(event) {
    const file = event.target.files[0];
    setFile(file);
    if (file && file.type === "application/json") {
      const reader = new FileReader();
      reader.onload = (e) => {
        setJson(e.target.result); // Sets the JSON content in state
      };
      reader.readAsText(file);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await fetch("http://localhost:8000/api/upload", {
          method: "POST",
          body: formData,
        });
        if (response.ok) {
          const xmlData = await response.text(); // Assuming the response is text/xml
          setXml(xmlData); // Update the state with the received XML data
          console.log("Upload erfolgreich.");
        } else {
          console.log("Fehler beim Uploaden der Datei.");
        }
      } catch (error) {
        console.error("Fehler beim Senden der Datei", error);
      }
    }
  }

  return (
    <form
      style={{ width: "500px" }}
      className="container mt-5"
      onSubmit={handleSubmit}
    >
      <div className="mb-3">
        <input
          id="json"
          type="file"
          className="form-control btn-primary btn"
          onChange={handleChange}
        />
        <input type="submit" className="form-control btn-secondary btn" />
      </div>
    </form>
  );
}

export default Upload;
