// server.js
// where your node app starts

require('dotenv').config();
var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200})); 
app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


app.get("/api/whoami", function (req, res) {
const ip = req.ip.substring(8);
 const lang =  req.headers["accept-language"];
  const browser = req.headers["user-agent"];

res.json({
  ipaddress: ip,
  language: lang,
  software: browser
});
});



var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
