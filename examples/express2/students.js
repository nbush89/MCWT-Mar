const express = require("express");
const students = express.Router();
const studentList = [
  {
    firstName: 'Luke',
    lastName: 'Skywalker'
  },
  {
    firstName: 'Darth',
    lastName: 'Varder'
  },
  {
    firstName: 'Obi Wan',
    lastName: 'Kinobi'
  },
]
// respond with "Hello Class!" at URI: /students
students.get("/", (req, res) => {
    let lastName = req.query.lastName
    
    let returnStudents = studentList;
    if(lastName){
      console.log(typeof lastName, lastName)
      returnStudents = studentList.filter((student)=>student.lastName.toLowerCase() === lastName.toLowerCase())
    }
    if(req.query.firstName){
      returnStudents = studentList.filter((student)=>student.firstName.toLowerCase() === req.query.firstName.toLowerCase())
    }
    res.json(returnStudents);
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
  students.put("/:id", (req, res) => {
    let updatedStudent = req.body;
    studentList[req.params.id] = {...studentList[req.params.id], ...updatedStudent};
    res.json(studentList[req.params.id])
  });
  
  // accept DELETE request at URI: /students
  students.delete("/", (req, res) => {
      //logic to delete a student
    res.json("Deleting a student..");
  });

  module.exports = students;