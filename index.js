const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({});
});

app.listen(5000);