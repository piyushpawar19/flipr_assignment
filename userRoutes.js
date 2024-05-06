// userRoutes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);
router.put('/users/:id/password', userController.updateUserPassword);
router.delete('/users/:id', userController.removeUser);
router.put('/users/:id/assign-database', userController.assignUserToDatabase);
router.put('/users/:id/revoke-access', userController.revokeUserAccess);

module.exports = router;
