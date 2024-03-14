const express = require("express");
const fs = require("fs");
const cors = require("cors");
const PORT = 8000;
const uploadRoute = require("./routes/upload");
const app = express();

app.use(cors());

app.use("/api", uploadRoute);

app.listen(PORT, () => {
  console.log("Server ready at Port: ", PORT);
});
