//import Web Framework "Express"
const express = require("express");
//create an object by invoking Express
const app = express();
//define a port and create a webserver
const port = process.env.PORT || 3000;
app.listen(port);

//import callback functions from controller.js
const {
  queryRecords,
  createRecord,
  updateRecord,
  deleteRecord
} = require("./controller");

//read json file and assign to a variable

//import fs module
const fs = require("fs");

//GET query
app.get("/api/sakes", queryRecords);

app.use(express.static("public"));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//POST
app.post("/api/sakes", createRecord);

//PUT
app.put("/api/sakes/:id", updateRecord);

//Delete
app.delete("/api/sakes/:id", deleteRecord);
