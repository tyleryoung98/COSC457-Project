const express = require('express');
const app = express();
const baseRoutes = require('./routes/index');
const bodyParser = require('body-parser');
const sql = require('mysql');

//express configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + '/public'));

var con = sql.createConnection({
  host:"localhost",
  user:"username",
  password:"password"
});
//connect to mysql, then listen
con.connect(function(err) {
  if(err) throw err;
  console.log('Connected to MySQL');
  app.listen(3000, () => console.log('App listening'));
});
