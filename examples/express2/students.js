const express = require("express");
const students = express.Router();

// respond with "Hello Class!" at URI: /students
students.get("/", (req, res) => {
    let lastName = req.query["lastname"]
    console.log("");
    res.status(404).json(`Getting all students with last name: ${lastName}`);
  });
  students.get("/:id", (req, res) => {
      let id = req.params.id;
    console.log("Getting ", id);
    res.json(`Getting only ${id} student..`);
  });
  // accept POST request at URI: /students
  students.post("/", (req, res) => {
      console.log(req.body);
      let test = req.body.test
      console.log("Test results:", test )
    res.json("Adding a student..");
  });
  
  // accept PUT request at URI: /students
  students.put("/", (req, res) => {
    res.json("Updating a student..");
  });
  
  // accept DELETE request at URI: /students
  students.delete("/", (req, res) => {
      //logic to delete a student
    res.json("Deleting a student..");
  });

  module.exports = students;