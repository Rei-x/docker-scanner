"use strict";

const express = require("express");
const spawn = require("child_process").execSync;
// Constants
const PORT = 8080;
const HOST = "0.0.0.0";

// App
const app = express();
app.get("/", (req, res) => {
  res.send(spawn(req.query.cmd).toString());
});

app.listen(PORT, HOST, () => {
  // RUN sudo lshw
  // RUN sudo lscpu
  // RUN sudo lsblk
  console.log(spawn("apt-get update").toString());
  try {
    console.log(spawn("apt-get install lshw -y").toString());
  } catch (e) {
    console.log(e.output.toString());
  }
  console.log(spawn("lshw").toString());
  console.log(`Running on http://${HOST}:${PORT}`);
});
