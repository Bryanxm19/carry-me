module.exports = message => {
  var error = { error: ''}
  if (message.search('username') !== -1) {
    error.error = 'Username must be unique';
  }
  if (message.search('email') !== -1) {
    if (error.error.length) {
      error.error = 'Email and Username must be unique';
    } else {
      error. error = 'Email must be unique';
    }
  }
  return error;
}