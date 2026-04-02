const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  // Normally you'd validate user credentials here
  const user = { id: 1, name: 'Anjali' };

  const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
});

module.exports = router;
