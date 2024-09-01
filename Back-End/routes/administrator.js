const express = require('express');
const administratorController = require('../controllers/administrator.js');

const router = express.Router();

router.post('/createAdministrator', administratorController.createUser);

router.get('/getAdministrator/:id', administratorController.getUser);

router.get('/getAllAdministrators', administratorController.getAllUsers);

router.patch('/updateAdministrator', administratorController.updateUser);

router.delete('/deleteAdministrator', administratorController.deleteUser)

module.exports = router;