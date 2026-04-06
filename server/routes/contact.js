const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST /api/contact  — save a new message
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'All fields are required.' });
    }

    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRe.test(email)) {
      return res.status(400).json({ success: false, error: 'Invalid email address.' });
    }

    const contact = await Contact.create({ name, email, message });
    res.status(201).json({ success: true, message: 'Message received! I will get back to you soon.', contact });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET /api/contact  — list all messages (protected in production)
router.get('/', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, messages });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
