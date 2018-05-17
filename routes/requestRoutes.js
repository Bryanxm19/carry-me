const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');
const checkServiceOwnership = require('../middlewares/checkServiceOwnership');
const Service = mongoose.model('services');
const Request = mongoose.model('requests');

module.exports = app => {

  app.put('/api/requests/:id/accept', requireLogin, (req, res) => {
    Request.findByIdAndUpdate(req.params.id, { accepted: true }, { new: true })
      .then(async request => {
        const service = await Service.findById(request.service).populate({ 
          path: 'requests',
          populate: {
            path: 'requester',
            model: 'users'
          } 
        })

        if (service.type === "goals") {
          service.status = "In Progress"
          await service.save()
        }
        res.status(200).send(service)

      })
      .catch(err => {
        console.log(err)
        res.status(500).send('Unknown Server Error')
      })
  });

}