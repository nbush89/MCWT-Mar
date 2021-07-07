const { Pool } = require("pg");
const credentials = new Pool({
  user: "postgres",
  password: "Welcome1#",
  host: "localhost",
  port: 5432,
  database: "pg-example",
  ssl: false
});

module.exports = credentials;
