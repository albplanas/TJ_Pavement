
'use strict';

const express     = require('express');
//const axios    = require('axios');
var cookieParser = require('cookie-parser');
var session = require('express-session');
const app = express();






/************************************************ */

//var Connection = require('tedious').Connection;
//var Request = require('tedious').Request;
var token=""
app.use(cookieParser());
app.use(session({secret: "Shh, its a secret!"}));
app.use(express.static(__dirname +'./../dist')); 
app.get('/token', function(req, res){
  
   if(req.session.page_views){
      req.session.page_views++;
      
      res.send(token);
   } else {
      token="token_"+Math.random()*10000+"end"
      req.session.page_views = 1;
      res.send(token);
   }
});



/****************************************************
 *               Listening
 * ***************************************************/ 
        app.listen(process.env.PORT || 3000, () => {
          console.log("Listening on port " + 3000);
        });  







