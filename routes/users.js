const express = require('express');
const router = express.Router();

// @route   POST api/users
// @desc    Register new USER
// @access  public

router.post('/', (req, res) => {
  res.send('Register New USER...');
});

module.exports = router;
