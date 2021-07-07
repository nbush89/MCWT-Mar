const express = require("express");
const pool = require("./connections");
const students = express.Router();
const studentList = [
  {
    firstName: 'Luke',
    lastName: 'Skywalker'
  },
  {
    firstName: 'Darth',
    lastName: 'Vader'
  },
  {
    firstName: 'Obi Wan',
    lastName: 'Kinobi'
  },
]
// respond with "Hello Class!" at URI: /students
async function getTable(req, res){
  const firstName = "Luke"
  const lastName = 'Vader'
  try {
    // const results = await pool.query(
    //   //`select * from students WHERE "first-name"=$1 OR "last-name"=$2`,
    //   `select * from students`,
    //   [firstName, lastName]
    //   ) 
    const results = await pool.query(
        `select * from students`,
        ) 
    res.json(results.rows);
  } catch (error) {
    console.log(error);
    res.json('ERROR');
  }
}
students.get("/", (req, res) => {
  
    getTable(req, res);
  });
students.get("/:id", async (req, res) => {
  let id = req.params.id;
  let results = await pool.query('SELECT * FROM students WHERE id=$1',[id])
  res.json(results.rows);
});
  // accept POST request at URI: /students
  students.post("/", async (req, res) => {
    let results = await pool.query(`INSERT INTO students ("first-name", "last-name") VALUES ($1, $2)`,[req.body.firstName, req.body.lastName])
    res.status(201).json(results.rows);
  });
  
  // accept PUT request at URI: /students
  students.put("/:id", async (req, res) => {
    let updatedStudent = req.body;
    let results = await pool.query('UPDATE students SET "first-name"=$1 WHERE id=$2',[req.body.firstName, req.params.id])
    res.json(results)
  });
  
  // accept DELETE request at URI: /students
  students.delete("/:id", async (req, res) => {
    let results = await pool.query('DELETE FROM students WHERE id=$1',[req.params.id])
    res.json("Deleting a student..");
  });

  module.exports = students;