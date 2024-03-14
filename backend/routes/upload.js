const express = require("express");
const multer = require("multer");
const fs = require("fs");
const { convertJsonToXml } = require("../converters/js2xmlparser.js");
const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("file"), (req, res) => {
  fs.readFile(req.file.path, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return res.status(500).send("Error processing the file");
    }

    try {
      const jsonObject = JSON.parse(data);
      const xmlContent = convertJsonToXml(jsonObject);
      res.type("application/xml").send(xmlContent);
    } catch (error) {
      console.error("Error converting JSON to XML:", error);
      res.status(500).send("Error converting JSON to XML");
    }
  });
});

module.exports = router;
