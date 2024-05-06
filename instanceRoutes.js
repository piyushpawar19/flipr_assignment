// instanceRoutes.js

const express = require('express');
const router = express.Router();
const instanceController = require('../controllers/instanceController');

router.get('/instances', instanceController.getAllInstances);
router.post('/instances', instanceController.addInstance);
router.delete('/instances/:id', instanceController.removeInstance);

module.exports = router;
