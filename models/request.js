const mongoose = require('mongoose');
const { Schema } = mongoose;

const requestSchema = new Schema({
  accepted: {
    type: Boolean,
    default: false
  },
  requester: {
    type: Schema.Types.ObjectId,
    ref: 'users' 
  },
  service: {
    type: Schema.Types.ObjectId,
    ref: 'services' 
  },
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: 'messages' 
    }
  ],
},
{
  timestamps: true
});

mongoose.model('requests', requestSchema);