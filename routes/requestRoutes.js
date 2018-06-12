const mongoose = require('mongoose');

const requireLogin = require('../middlewares/requireLogin');
const checkServiceOwnership = require('../middlewares/checkServiceOwnership');
const Service = mongoose.model('services');
const Request = mongoose.model('requests');
const Message = mongoose.model('messages');

module.exports = app => {

  app.put('/api/requests/:id/accept', [requireLogin, checkServiceOwnership], (req, res) => {
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
          const otherRequests = service.requests.filter(r => !request._id.equals(r._id))
          await Request.remove({ _id: { $in: otherRequests.map(r => r._id) }})
          service.requests = [request]
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

  app.delete('/api/requests/:id/decline', [requireLogin, checkServiceOwnership], (req, res) => {
    Request.findByIdAndRemove(req.params.id)
      .then(async request => {
        const service = await Service.findById(request.service).populate({ 
          path: 'requests',
          populate: {
            path: 'requester',
            model: 'users'
          } 
        })
        service.requests.remove(request._id)
        await service.save()
        res.status(200).send(service)

      })
      .catch(err => {
        console.log(err)
        res.status(500).send('Unknown Server Error')
      })
  });

  app.get('/api/requests/:id/messages', requireLogin, (req, res) => {
    Request
      .findById(req.params.id)
      .populate({ 
        path: 'messages',
        populate: {
          path: 'user',
          model: 'users'
        } 
      })
      .exec((err, request) => {
        if (err) {
          console.log(err)
          res.status(500).send('Unknown Server Error')
        } else {
          res.status(200).send({ messages: request.messages })
        }
      })
  })

  app.post('/api/requests/:id/message', requireLogin, async (req, res) => {
    const params = req.body
    const request = await Request.findById(req.params.id)
    params.request = request
    params.user = req.user

    let message = new Message(params)
    message.save(err => {
      if (err) {
        console.log(err)
        res.status(500).send('Unknown Server Error')
      } else {
        request.messages.push(message._id)
        request.save()
          .then(request => {
            res.status(200).send({ messages: request.messages })
          })
          .catch(err => {
            console.log(err)
            res.status(500).send('Unknown Server Error')
          })
      }
    })
  })

}