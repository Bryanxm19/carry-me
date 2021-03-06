const mongoose = require('mongoose');
const { Schema } = mongoose;
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new Schema({
  googleID: String,
  email: {
    type: String,
    unique: true,
    required: true
  },
  username: {
    type: String,
    unique: true,
    maxlength: 15,
    required: true
  },
  stripeID: {
    type: String,
    default: ""
  },
  carries: [
    {
      type: Schema.Types.ObjectId,
      ref: 'services' 
    }
  ],
  goals: [
    {
      type: Schema.Types.ObjectId,
      ref: 'services' 
    }
  ]
},
{
  timestamps: true
});

userSchema.plugin(uniqueValidator);

mongoose.model('users', userSchema);