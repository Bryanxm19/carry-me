const mongoose = require('mongoose');
const igdb = require('igdb-api-node').default;
const keys = require('../config/keys');

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

  app.post('/api/lookup_games', (req, res) => {
    const client = igdb(keys.igdbKey);
    client.games({
        filters: {
          'release_dates.platform-eq': 48,
          'release_dates.platform-eq': 49,
          'release_dates.platform-eq': 6
        },
        fields: '*', // Return all fields
        limit: 5, // Limit to 5 results
        order: 'popularity:desc',
        search: req.body.query
    }).then(response => {
      res.status(200).send(response.body)
    }).catch(error => {
        res.status(500).send(error)
    });
  });
};