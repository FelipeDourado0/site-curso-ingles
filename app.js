const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const Post = require('./Models/Posts');
const path = require('path');

const mysql = require('mysql');
const connection = mysql.createConnection( {

  host: 'localhost',
  user:  'usuarioteste',
  password: '123456' ,
  database: 'formulario'
} ) ;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());



connection.connect(function(err) {

  if (err) {

      console.error('erro na conexao' + err.stack ) ;
      return;
  }

      console.log("conectado");

} );

/*==========INSERIR DADOS NO BANCO DE DADOS==========*/
//  connection.query( "insert into estudantes ( nome, sobrenome, email, cidade, senha, sexo, nivel) values ('sara' ,  'tylor' , 'sara@ty.com' , 'Brasilia' , '123' , 'f' , 'Beginner'  ) " ,

// function (err , result){

//   if ( !err )  {

//     console.log('usuario cadastrado');
//   } else {
//     console.log('erro');
//   }
// }); 



// connection.query( 'select * from estudantes' ,
// function (err, rows, fields)  {
// if ( !err ) {
//   console.log('resultado: ' , rows ) ;
// } else {

//   console.log('erro');
// }
  
// });

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function (req, res) {

    res.sendFile(__dirname + "/src/index.html");
});

app.get("/index.html", function (req, res) {

  res.sendFile(__dirname + "/src/index.html");
});

app.get("/Grammar.html", function (req, res) {

    res.sendFile(__dirname + "/src/grammar.html");
  });  

app.get("/English.html", function (req, res) {

    res.sendFile(__dirname + "/src/adj_pre.html");
  });  

app.get("/Article.html", function (req, res) {

    res.sendFile(__dirname + "/src/articles.html");
  });    

app.get("/Past.html", function (req, res) {

  res.sendFile(__dirname + "/src/past.html");
});    

  app.get("/login.html", function (req, res) {

  res.sendFile(__dirname + "/src/login.html");
}); 


app.get("/signUp.html", async (req, res) => {

  res.sendFile(__dirname + "/src/signUp.html");
  
});

app.get("/adj_pre.html", function (req, res) {

  res.sendFile(__dirname + "/src/adj_pre.html");
});

app.get("/articles.html", function (req, res) {

  res.sendFile(__dirname + "/src/articles.html");
}); 


app.post('/add', function(req, res){
  Post.create({
    nome: req.body.first_name,
    sobrenome: req.body.last_name,
    email: req.body.email_cadastro,
    cidade: req.body.city_cadastro,
    senha: req.body.password_cadastro,
    nivel: req.body.level,
    sexo: req.body.sexo
  }).then(function(){
    res.sendFile(__dirname + "/src/signUp.html");
  }).catch(function(erro){
    res.send('Houve um erro...' + erro)
  })
})

app.listen(8080, () => {
  console.log('servidor rodando na porta 8080')
});
