const mongoose = require('mongoose');

const uniqueChecker = require('../services/uniqueErrorChecker');
const requireLogin = require('../middlewares/requireLogin');
const User = mongoose.model('users');

module.exports = app => {
  app.put('/api/settings', requireLogin, async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.user._id, req.body, {new: true});

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
};