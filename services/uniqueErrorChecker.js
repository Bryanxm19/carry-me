module.exports = message => {
  const uniqueValues = [
    'username',
    'email'
  ]
  var error = {}

  for (var val in uniqueValues) {
    var value = uniqueValues[val]
    if (message.search(value) !== -1) {
      error[value] = value.charAt(0).toUpperCase() + value.slice(1) + ' is already taken';
    }
  }
  return error;
}