const mongoose = require('mongoose');
const Request = mongoose.model('requests');
const User = mongoose.model('users')

module.exports = async (req, res, next) => {
  const request = await Request.findById(req.params.id)
  const user = await User.findById(req.user._id)
  console.log(user.carries.includes(request.service.toString()))
  console.log(user.goals.includes(request.service.toString()))
  if (!user.carries.includes(request.service.toString()) && !user.goals.includes(request.service.toString())) {
    return res.status(401).send({ error: "You don't have permission to do that" })
  }

  next();
};