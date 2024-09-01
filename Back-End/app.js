const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }))

const db = require("./db");

const userRoute = require('./routes/user')
const patientRoute = require('./routes/patient')
const reportRoute = require('./routes/report')
const administratorRoute = require('./routes/administrator')


app.get("/", (req,res) => {
  console.log("Request received");
  res.send("Listening, Breast Cancer Classifier and Portal - Server");
})

app.use("/user", userRoute);
app.use("/patient", patientRoute)
app.use("/report", reportRoute)
app.use("/administrator", administratorRoute)

app.listen(3000, () => {
  console.log("Server is up");
})
