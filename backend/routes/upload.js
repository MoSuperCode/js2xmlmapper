const express = require("express");
const multer = require("multer");
const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).send("Datei erfolgreich hochgeladen.");
});
module.exports = router;
