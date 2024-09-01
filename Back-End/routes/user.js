const express = require('express');
const userController = require('../controllers/user.js');

const router = express.Router();

router.post('/createUser', userController.createUser);

router.get('/getUser/:id', userController.getUser);

router.get('/getAllUsers', userController.getAllUsers);

router.patch('/updateUser', userController.updateUser);

router.delete('/deleteUser', userController.deleteUser)

module.exports = router;