/* ****** Exemplo 1 ******
var express = require('express');
var app = express();
app.get('/', function(req, res){ //caminho (no caso raiz)/callback
    res.send("<html><body> Portal de Noticias </body></html>");
} ) 
app.get('/tecnologia', function(req, res){ //caminho/callback
    res.send("<html><body> Noticias de Tecnologia </body></html>");
} ) 
app.listen(3000, function(){ //porta/callback
    console.log("Servidor rodando com Express");
} ); 
*/

/* ****** Exemplo 2 ****** 
var express = require('express');
//var msg = require('./mod_teste')(); //modulo de teste - colocar a função na variavel
var msg = require("./mod_teste");
var app = express();

app.set('view engine', 'ejs'); //config do ejs - quem tomara conta do ejs/modulo

app.get('/', function(req,res){ //caminho (no caso raiz)/callback
    res.render("home/index");
});

app.get('/formulario_inclusao_noticia', function(req,res){
    res.render("admin/form_add_noticia")
});

app.get('/noticias', function(req,res){
res.render("noticias/noticias")
});

app.get('/tecnologia', function(req, res){ //caminho/callback
    res.render("secao/tecnologia");// render - parametro do ejs
}); 

//recebera as requisicoes na porta 3000
app.listen(3000, function(){ //porta/callback
//console.log("Servidor rolando com express")
//console.log(msg); //executando o modulo
console.log(msg()); //executando o modulo com função
});

*/

/* ******* Exemplo 3 ****** 
var app = require('./config/server');

app.get('/', function(req,res){ //caminho (no caso raiz)/callback
    res.render("home/index");
});

app.get('/formulario_inclusao_noticia', function(req,res){
    res.render("admin/form_add_noticia")
});

app.get('/noticias', function(req,res){
res.render("noticias/noticias")
});

app.get('/tecnologia', function(req, res){ //caminho/callback
    res.render("secao/tecnologia");// render - parametro do ejs
}); 

//recebera as requisicoes na porta 3000
app.listen(3000, function(){
console.log('Servidor ON'); 
});

*/

/* ***** Exemplo 4 ****** */
var app = require('./config/server');

//Exportar modulos - rotas
var rotaHome = require("./app/routes/home")(app);
//rotaHome(app);

var rotaNoticias = require("./app/routes/noticias")(app);
//rotaNoticias(app);

var rotaFormInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app);
//rotaFormInclusaoNoticia(app);

//recebera as requisicoes na porta 3000
app.listen(3000, function(){
console.log('Servidor ON'); 
});

