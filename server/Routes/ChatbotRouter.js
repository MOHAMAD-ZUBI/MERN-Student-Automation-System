const express = require('express');
const router = express.Router();

const { TestBot, sendMessage } = require('../Controllers/ChatbotController');

router.post('/test', TestBot);
router.post("/newChat", sendMessage)

module.exports = router;