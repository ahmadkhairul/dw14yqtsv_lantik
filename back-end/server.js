require("dotenv").config();
const express = require("express");
const app = express();
const routes = require("./routes");
const port = process.env.PORT;
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/api/v1", routes);
app.listen(port, () => {
  console.log("Server ON");
});
