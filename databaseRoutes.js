// databaseRoutes.js

const express = require('express');
const router = express.Router();
const databaseController = require('../controllers/databaseController');

router.get('/databases', databaseController.getAllDatabases);
router.post('/databases', databaseController.createDatabase);
router.delete('/databases/:id', databaseController.removeDatabase);

module.exports = router;
