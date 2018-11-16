
'use strict';

const express     = require('express');
const bodyParser  = require('body-parser');


const app = express();

app.use(express.static(__dirname +'./../dist')); //serves the index.html



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
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
    // If you're on Windows Azure, you will need this:
   
  };

app.get('/wholeList', function (req, res) {

    
    var connection = new Connection(config);


    connection.on('connect', ()=> executeStatement());


    function executeStatement() {
       
        var sqlQuery_fullList = "SELECT DISTINCT FName , LName  from tblEmployee WHERE active=1 AND TypeSalary<>0 AND idcompany=1";

     var  request = new Request(sqlQuery_fullList, (err, rowCount,rows) =>{
        
       
        res.json({fullname: err?[err]:rows.map(elem=> elem[0].value+' '+elem[1].value )})

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







