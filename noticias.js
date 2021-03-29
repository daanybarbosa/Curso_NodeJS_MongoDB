/* 
******* Exemplo 1 ********* 
console.log('Criando um site de noticias com NodeJS');
*/

/* 
******* Exemplo 2 ********* 
//incorporar a biblioteca Http
// require - função JS que permite incorporar outros arquivos ao nosso arquivo
var http = require('http');
var server = http.createServer(function(req,res){ //criar servidor  -> requisicao/resposta
    
    res.end("<http><body> Portal de Noticias </body></html>");
});
server.listen(3000); //escutar na porta 3000
*/

/* *********** Exemplo 3 ********** */
var http = require('http');

/*Criar servidor */
var server = http.createServer(function(req,res){

    var categoria = req.url;

    if(categoria == '/tecnologia'){
        res.end("<html><body>Noticias de Tecnologia</body></html>")
    
    } else if(categoria == '/moda'){
        res.end("<html><body>Noticias de Moda</body></html>")
    
    } else if(categoria == '/beleza'){
        res.end("<html><body>Noticias de Beleza</body></html>")
    
    } else {
        res.end("<html><body>Portal de noticias</body></html>") 
    } 
    
}).listen(3000);
