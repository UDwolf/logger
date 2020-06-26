const express = require('express');
const router = express.Router();

// @route   GET api/groups
// @desc    Get all group members
// @access  private

router.get('/', (req, res) => {
  res.send('Get all group members...');
});

// @route   POST api/groups
// @desc    Add new group members
// @access  public

router.post('/', (req, res) => {
  res.send('Add new group members...');
});

// @route   DELETE api/groups/:id
// @desc    Delete group members
// @access  private

router.delete('/:id', (req, res) => {
  res.send('Delete group members...');
});

// @route   UPDATE api/groups/:id
// @desc    update group members
// @access  private

router.put('/:id', (req, res) => {
  res.send('update group members...');
});

module.exports = router;
