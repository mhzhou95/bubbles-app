const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/users.model');
const auth = require('../middleware/auth');

// @description: get logged in user
// @route: GET api/auth
// @acces : Private
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @description:  login and auth user and get login token
// @route: POST api/auth
// @acces : Public
router.post('/', async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid Credentials ' })
    }
    // bcrypt validation
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid Crendentials ' })
    }
    //  create payload for jwt web token
    const payload = {
      user: {
        id: user.id,
        username: user.username
      }
    }
    // create web token with expiration
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: 36000 }, (err, token) => {
      if (err) throw err;
      res.json({ token })
    })
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error ')
  }
});

module.exports = router;
