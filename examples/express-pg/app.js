// require the Express module
const express = require("express");
const students = require('./students');
// creates an instance of an Express server
const app = express();
// define the port
const port = 3000;
app.use(express.json());
app.use('/students',students);
  
// run the server
app.listen(port, () => console.log(`Listening on port: ${port}.`));