const mongoose = require('mongoose');
const Request = mongoose.model('requests');
const User = mongoose.model('users')

module.exports = async (req, res, next) => {
  const request = await Request.findById(req.params.id)
  const user = await User.findById(req.user._id)

  const ownCarry = user.carries.some(carry => {
      return request.service.equals(carry)
  })
  const ownGoal = user.goals.some(goal => {
      return request.service.equals(goal)
  })
  if (!(ownCarry || ownGoal)) {
    return res.status(401).send({ error: "You don't have permission to do that" })
  }

  next();
};