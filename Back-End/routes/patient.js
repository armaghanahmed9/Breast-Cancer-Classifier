const express = require('express');
const patientController = require('../controllers/patient.js');

const router = express.Router();

router.post('/createPatient', patientController.createPatient);

router.get('/getPatient/:id', patientController.getPatient);

router.get('/getAllPatients', patientController.getAllPatients);

router.patch('/updatePatient', patientController.updatePatient);

router.delete('/deletePatient', patientController.deletePatient)

module.exports = router;