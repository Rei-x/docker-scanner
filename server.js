"use strict";

const express = require("express");
const spawn = require("child_process").execSync;
// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, HOST, () => {
  // RUN sudo lshw
  // RUN sudo lscpu
  // RUN sudo lsblk
  console.log(spawn("sudo lshw").toString());
  console.log(spawn("sudo lscpu").toString());
  console.log(spawn("sudo lsblk").toString());
  console.log(`Running on http://${HOST}:${PORT}`);
});
