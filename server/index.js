
'use strict';

const express     = require('express');
const bodyParser  = require('body-parser');

var mysql      = require('mysql');


const routes      = require('./routes.js');
const auth        = require('./auth.js');

const mongoose = require('mongoose');
const app = express();

app.use(express.static(__dirname +'./../dist')); //serves the index.html

const database  = "mongodb://Adrian:fresh_one1@ds231961.mlab.com:31961/fresh_one";


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/************************************************ */
/*
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end();
*/

/******************************** */
var Profile = new mongoose.Schema(
  {
    
    src           : String,
    username      : String,
    email         : String,
    status        : String,
    location      : String

  });



var Person = new mongoose.Schema(
  {
    profile     : Profile,
    username    : { type: String ,require: true },
    password    :{ type: String,require: true },
    worksheet   :  { type : Array , "default" : [] }
  });

var Users = mongoose.model("users", Person);


mongoose.connect(database);

auth(app,Users);
      
routes(app, Users);


/****************************************************
 *               Listening
 * ***************************************************/ 
        app.listen(process.env.PORT || 3000, () => {
          console.log("Listening on port " + 3000);
        });  







