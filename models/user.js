const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String,
  email: String,
  username: String
},
{
  timestamps: true
});

mongoose.model('users', userSchema);