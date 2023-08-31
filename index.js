const dbconnect = require('./dbcon')
const express = require("express");
const app = express();
const sql = require("mssql");
const cors = require('cors');
app.use(cors());


app.use(express.json());



app.post("/api/Signup", async (req, res) => {
    const data = req.body;
  try {
    const pool = await dbconnect

    // await pool.request().query(`
      
    //   CREATE TABLE empdata (
    //     id INT PRIMARY KEY,
    //     name VARCHAR(255),
    //     Designation VARCHAR(255),
    //     email VARCHAR(255),
    //     password VARCHAR(255),
    //     mobile VARCHAR(255)
    //   )
    // `);

    await pool.request().query(`
      INSERT INTO empdata (id, name, Designation, email, password, mobile)
      VALUES (${data.id}, '${data.name}', '${data.Designation}', '${data.email}', '${data.password}', '${data.mobile}')
    `);
    res.json({message:"created"})

    // res.status(200).send("User registered successfully");
  } catch (error) {
    console.error(error);
    // res.status(500).send("An error occurred");
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
