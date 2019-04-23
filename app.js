const express = require('express');
const app = express();
const baseRoutes = require('./routes/router');
const bodyParser = require('body-parser');
const sql = require('mysql');

//express configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));
app.use('/', baseRoutes);


app.listen(process.env.PORT || 3000, () => console.log('App listening'));
