const router = require('express').Router();
const User = require('../models/users.model');
const Bubble = require('../models/bubbles.model');
const auth = require('../middleware/auth');

// bubbles require full crud

// @description: get all bubbles
// @route: GET api/bubbles
// @acces : public
router.get('/', async (req, res) => {
  try {
    const bubbles = await Bubble.find().sort({ createdAt: -1 });
    res.json(bubbles);

  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error')
  }
});
// @description:  create a new bubble
// @route: POST api/bubbles
// @acces : Private
router.post('/', auth, async (req, res) => {
  const message = req.body.message;

  try {
    const newBubble = new Bubble({
      user: req.user.id,
      username: req.user.username,
      message
    });
    const bubble = await newBubble.save();
    res.json(bubble);
  } catch (error) {
    res.status(500).send('Server Error')
  }
});
// @description: upvote a bubble
// @route: PUT api/bubbles/:id
// @acess : Public
router.put('/:id', async (req, res) => {
  const message = req.body.message;
  const upvotes = req.body.upvotes;

  try {
    let bubble = await Bubble.findByIdAndUpdate(req.params.id);
    bubble.upvotes = upvotes;
    bubble.message = message;
    bubble.save();
    res.json(bubble)
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
})
// @description:  update a bubble
// @route: PUT api/bubbles/:id
// @acces : Private
router.put('/:id', auth, async (req, res) => {
  const message = req.body.message;
  const upvotes = req.body.upvotes;
  try {
    let bubble = await Bubble.findByIdAndUpdate(req.params.id);
    //auth user
    if (bubble.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }
    bubble.upvotes = upvotes;
    bubble.message = message;
    bubble.save();
    res.json(bubble)
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});
// @description:  delete a bubble
// @route: DELETE api/bubbles/:id
// @acces : Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let bubble = await Bubble.findByIdAndRemove(req.params.id)
    // auth user 
    if (bubble.user.toString() !== req.user.id) {
      return res.status(400).json({ msg: 'Not authorized' })
    }
    bubble.save();
    res.json(`${bubble.id} deleted`)
  } catch (error) {
    console.error(error.message)
    res.status(500).json('Server Error')
  }
});
module.exports = router;
