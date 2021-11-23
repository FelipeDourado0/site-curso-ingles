const express = require('express'); 
const app = express();
app.listen(8080);

app.get("/", function(req, res){
    res.sendFile(__dirname + '/src/index.html');
});


var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'felipedourado',
  password : '123456',
  database : 'formulario'
});
 
connection.connect(function(err){
    if(err){
        console.error('erro na conexao: ' + err.stack);
        return;
    }
    console.log('conectado!');
});
 
connection.query('SELECT * FROM estudante', function (error, results, fields) {
  if (error){
    throw error;
  }else{
    console.log('Resultado: ', results);
  }
});