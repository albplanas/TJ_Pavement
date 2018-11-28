
'use strict';

const express     = require('express');


const app = express();

app.use(express.static(__dirname +'./../dist')); //serves the index.html




/************************************************ */

var Connection = require('tedious').Connection;
var Request = require('tedious').Request;


const config = {
    userName: 'sa',
    password: 'sql-786+jva',
    server: 'JVA-SQL',
    options:{
      database:'Assistance',
      rowCollectionOnRequestCompletion: true,
      encrypt: true
    }
  
   
  };

  app.get('/ProjectCategories', function (req, res) {

    
    var connection = new Connection(config);


    connection.on('connect', ()=> executeStatement());


    function executeStatement() {

      var sqlQuery_fullList = "SELECT * from tblPayrollPosition"

     var  request = new Request(sqlQuery_fullList, (err, rowCount,rows) =>{res.json({fullname: err?[err]:rows.map(elem=> [elem[1].value,elem[0].value])})});

      connection.execSql(request);
      
      
    }
});

app.get('/idLabor', function (req, res) {

    
  var connection = new Connection(config);


  connection.on('connect', ()=> executeStatement());


  function executeStatement() {

    var sqlQuery_fullList = "SELECT DISTINCT idLabor , labor from tblLabor" 

   var  request = new Request(sqlQuery_fullList, (err, rowCount,rows) =>{res.json({fullname: err?[err]:rows.map(elem=> [elem[0].value,elem[1].value])})});

    connection.execSql(request);
    
    
  }
});
  app.get('/idProjectReference', function (req, res) {

    
    var connection = new Connection(config);


    connection.on('connect', ()=> executeStatement());


    function executeStatement() {

      var sqlQuery_fullList = "SELECT DISTINCT projectcode , idProject from tblProject WHERE active =1"

     var  request = new Request(sqlQuery_fullList, (err, rowCount,rows) =>{res.json({fullname: err?[err]:rows.map(elem=> [elem[0].value,elem[1].value])})});

      connection.execSql(request);
      
      
    }
});

  app.get('/oldReports', function (req, res) {

    
    var connection = new Connection(config);


    connection.on('connect', ()=> executeStatement());


    function executeStatement() {
      var now = new Date().getTime();
      var Time = now-8*86400000;
      var last = new Date(Time);
      var Last=last.toISOString().slice(0,10);
      var Now = new Date(now);
      Now=Now.toISOString().slice(0,10)
      
       var week= "'2018-11-11' AND '2018-11-16'"
       var weeks= "'"+Last+"' AND '" +Now+"'"
 
        var sqlQuery_fullList = "SELECT DISTINCT date , IdEmployee , idJob , idLabor,  idProject  , hrs from tblDailyProcess WHERE idProject IS NOT NULL AND  date BETWEEN "+weeks;

     var  request = new Request(sqlQuery_fullList, (err, rowCount,rows) =>{
       
        res.json({fullname: err?[err]:rows.map(elem=> [elem[0].value.toISOString().slice(0,10),elem[1].value,elem[2].value,elem[3].value,elem[4].value,elem[5].value])})

       });
 

      
      
      connection.execSql(request);
      
      
    }
});


app.get('/wholeList', function (req, res) {

    
    var connection = new Connection(config);


    connection.on('connect', ()=> executeStatement());


    function executeStatement() {
       
        var sqlQuery_fullList = "SELECT DISTINCT FName , LName , IdEmployee  from tblEmployee WHERE active=1 AND TypeSalary<>0 AND idcompany=1";

     var  request = new Request(sqlQuery_fullList, (err, rowCount,rows) =>{
        
       
        res.json({fullname: err?[err]:rows.map(elem=> [elem[0].value+' '+elem[1].value,elem[2].value] )})

       });
 

      
      
      connection.execSql(request);
      
      
    }
});


/****************************************************
 *               Listening
 * ***************************************************/ 
        app.listen(process.env.PORT || 3000, () => {
          console.log("Listening on port " + 3000);
        });  







