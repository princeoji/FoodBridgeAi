const express = require('express');
const signup = express.Router();
const path = require('path');

const db = require('../utils/mysql.js');

signup.get('/signup',(req, res)=>{
  res.sendFile(path.join(__dirname,'../views','signup.html'));
})

signup.get('/login',(req, res)=>{
  res.sendFile(path.join(__dirname,'../views','login.html'));
})

signup.post('/signup',(req, res)=>{
  const { organisationName, organisationType, number, email, capacity, password } = req.body;
  const sql = `
    INSERT INTO user (name, organisation_type, number, email, capacity, password)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  db.query(sql, [organisationName, organisationType, number, email, capacity, password], (err, result) => {

    if (err) {
      console.log(err);
      return res.status(500).send("Database error");
    }

    console.log("Data saved:", result);
    res.send("Your details saved successfully");

  });

})

signup.post('/login',(req, res)=>{
  res.send("Login submitted");
})

module.exports = signup;
