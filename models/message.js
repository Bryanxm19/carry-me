const mongoose = require('mongoose');
const { Schema } = mongoose;

const messageSchema = new Schema({
  body: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users' 
  },
  request: {
    type: Schema.Types.ObjectId,
    ref: 'requests' 
  }
},
{
  timestamps: true
});

mongoose.model('messages', messageSchema);