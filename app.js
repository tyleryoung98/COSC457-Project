const express = require('express');
const app = express();
const baseRoutes = require('./routes/index');
const bodyParser = require('body-parser');
const sql = require('mysql');

//express configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + '/public'));

app.listen(3000, () => console.log('App listening'));
