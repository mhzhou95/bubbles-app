const router = require('express').Router();
const User = require('../models/users.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// @description: register user
// @route: POST api/users
// @acces : Public
router.post('/', async (req, res) => {
  let email = req.body.email;
  let username = req.body.username;
  let password = req.body.password;
  let newUser = new User({ email, username, password });

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);
    await newUser.save();

    //  create payload for jwt web token
    const payload = {
      user: {
        id: newUser.id
      }
    }
    // create web token with expiration
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 36000 }, (err, token) => {
      if (err) throw err;
      res.json({ token })
    })
  } catch (err) {
    res.status(400).json('Error: ' + err.message)
  }
});

module.exports = router;
