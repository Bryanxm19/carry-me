const mongoose = require('mongoose');
const { Schema } = mongoose;

const serviceSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  game: {
    type: String,
    required: true
  },
  platform: {
    type: String,
    required: true
  },
  imageURL: {
    type: String,
    default: ""
  },
  price: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    default: "Accepting Requests"
  },
  requests: [
    {
      type: Schema.Types.ObjectId,
      ref: 'requests' 
    }
  ],
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'users' 
  }
},
{
  timestamps: true
});

mongoose.model('services', serviceSchema);