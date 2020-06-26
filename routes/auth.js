const express = require('express');
const router = express.Router();

// @route   GET api/auth
// @desc    Get current logged in USER
// @access  private

router.get('/', (req, res) => {
  res.send('Get current logged in USER...');
});

// @route   POST api/auth
// @desc    Logged in USER
// @access  public

router.post('/', (req, res) => {
  res.send('Logged in USER...');
});

module.exports = router;
