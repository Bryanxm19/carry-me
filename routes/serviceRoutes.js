const mongoose = require('mongoose');
const igdb = require('igdb-api-node').default;
const keys = require('../config/keys');
const requireLogin = require('../middlewares/requireLogin');

const User = mongoose.model('users');
const Service = mongoose.model('services');

module.exports = app => {
  app.post('/api/lookup_games', requireLogin, (req, res) => {
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
        console.log(error)
        res.status(500).send('Unknown Server Error')
    });
  });

  app.post('/api/services', requireLogin, async (req, res) => {
    const params = req.body
    const user = await User.findById(req.user._id)
    params.creator = user
    var service = new Service(params);
    service.save(err => {
      if (err) {
        console.log(err)
        res.status(500).send('Unknown Server Error')
      } else {
        if (params['type'] === 'carries') {
          user.carries.push(service._id)
        } else {
          user.goals.push(service._id)
        }
        user.save()
          .then(user => {
            res.status(200).send(user)
          })
          .catch(err => {
            console.log(err)
            res.status(500).send('Unknown Server Error')
          })
      }
    })
  });

  app.get('/api/goals', requireLogin, async (req, res) => {
    const user = await User.findById(req.user._id).populate({
      path: 'goals',
      options: {
        limit: req.query.limit,
        sort: { createdAt: -1},
      }
    })
    res.send(user.goals)
  });
}