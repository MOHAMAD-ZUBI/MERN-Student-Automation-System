const express = require('express');
const router = express.Router();

const { TestBot } = require('../Controllers/ChatbotController');

router.post('/test', TestBot);

module.exports = router;