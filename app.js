const express = require('express');
const app = express();
const path = require('path');

var port=Number(process.env.PORT || 3000);

app.use(express.static(__dirname + '/static'));

app.listen(port, () => {
  console.log('Server runing in port 4001');
});