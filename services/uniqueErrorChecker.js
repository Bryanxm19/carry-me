module.exports = message => {
  var error = { 
    error: {
    }
  }
  if (message.search('username') !== -1) {
    error.error['username'] = 'Username must be unique';
  }
  if (message.search('email') !== -1) {
    error.error['email'] = 'Email must be unique';
  }
  return error;
}