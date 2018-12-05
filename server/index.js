
'use strict';

const express     = require('express');


const app = express();

app.use(express.static(__dirname +'./../dist')); //serves the index.html

const axios    = require('axios');


/************************************************ */

var Connection = require('tedious').Connection;
var Request = require('tedious').Request;





/****************************************************
 *               Listening
 * ***************************************************/ 
        app.listen(process.env.PORT || 3000, () => {
          console.log("Listening on port " + 3000);
        });  







