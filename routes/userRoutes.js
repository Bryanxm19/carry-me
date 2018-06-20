const mongoose = require('mongoose');
const axios = require('axios');
const keys = require('../config/keys')

const uniqueChecker = require('../services/uniqueErrorChecker');
const requireLogin = require('../middlewares/requireLogin');
const User = mongoose.model('users');

module.exports = app => {
  app.put('/api/settings', requireLogin, async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.user._id, req.body, { new: true, runValidators: true });

      if (!user) {
        return res.status(404).send('404: User Not Found');
      } else {
        return res.status(200).send(user);
      }
    } catch (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        return res.status(409).send(uniqueChecker(err.message));
      }
      return res.status(500).send('Unknown Server Error');
    }
  });

  app.get('/api/stripe/connect', requireLogin, (req, res) => {
    axios.post('https://connect.stripe.com/oauth/token', {
      grant_type: 'authorization_code',
      client_id: keys.stripeClientID,
      client_secret: keys.stripeSKey,
      code: req.query.code
    })
    .then(async response => {
      const user = await User.findById(req.user._id);
      user.stripeID = response.data.stripe_user_id
      await user.save()
      res.redirect('/dashboard')
    })
    .catch(err => {
      console.log(err)
      res.status(500).send('Unknown Server Error')
    })
  })
};