const express = require('express');
const router = express.Router();

// @route   GET api/loggs
// @desc    Get all loggs of group
// @access  private

router.get('/', (req, res) => {
  res.send('Get all loggs of group...');
});

// @route   POST api/loggs
// @desc    Add new loggs
// @access  public

router.post('/', (req, res) => {
  res.send('Add new Logg...');
});

// @route   DELETE api/loggs/:id
// @desc    Delete logg
// @access  private

router.delete('/:id', (req, res) => {
  res.send('Delete Logg...');
});

// @route   UPDATE api/loggs/:id
// @desc    update logg
// @access  private

router.put('/:id', (req, res) => {
  res.send('update logg...');
});

module.exports = router;
