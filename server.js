const express = require('express'),
  bodyParser = require('body-parser'),
  listenPort = 3000;

const router = require('./server/router');

let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({type: '*/*'}));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', router);
app.listen(listenPort, () => {
  console.log("Server has been started on:", listenPort);
});
