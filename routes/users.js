const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

// @route   POST api/users
// @desc    Register new USER
// @access  public

router.post(
  '/',
  [
    // Validations
    check('fname', 'First Name is Required ...').not().isEmpty(),
    check('lname', 'Last Name is Required ...').not().isEmpty(),
    check('email', 'email is Required...').isEmail(),
    check('number', 'Number is Required...')
      .isNumeric()
      .isLength({ min: 10, max: 10 }),
    check('password', 'Password should br atleast 6 character long').isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fname, lname, email, number, password } = req.body;

    // check for Duplicate user
    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ msg: 'User Alredy Exists...' });
      }

      // Passing to Database
      user = new User({
        fname,
        lname,
        email,
        number,
        password,
      });

      // Encrypt password
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      // Save Data to Database
      await user.save();

      // Get User id for jsonWebToken
      const payload = { user: { id: user.id } };

      // Sign the web Token, and send payload
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 36000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error...');
    }
  }
);

module.exports = router;
