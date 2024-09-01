const express = require('express')
const reportController = require('../controllers/report')

const router = express.Router()

router.post('/createReport', reportController.createUser);

router.get('/getReport/:id', reportController.getUser);

router.get('/getAllReports', reportController.getAllUsers);

router.patch('/updateReport', reportController.updateUser);

router.delete('/deleteReport', reportController.deleteUser)

module.exports = router;