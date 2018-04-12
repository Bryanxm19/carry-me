const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');
const User = mongoose.model('users');

module.exports = app => {
  app.put('/api/settings', requireLogin, async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.user._id, req.body, {new: true});

      if (!user) {
        return res.status(404).send(new MyError('Not Found Error', ['User not found']));
      } else {
        res.status(200).send(user);
      }
    } catch (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        res.status(409).send(new MyError('Duplicate key', [err.message]));
      }
      res.status(500).send(new MyError('Unknown Server Error', ['Unknow server error when updating bookmark for user id ' + req.params.userId + ' and bookmark id '+ req.params.bookmarkId]));
    }
  });
};