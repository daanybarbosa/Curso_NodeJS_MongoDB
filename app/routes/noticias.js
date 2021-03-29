//Exportar modulos
module.exports = function(app){

    //Conectar o Banco de Dados - Postgres
    const pg = require('pg');

    const client = new pg.Client({
        user: 'root',
        host: 'localhost',
        database: 'portal_noticias',
        password: '12345',
        port: 5432,
    });

    client.query(<sql></sql>)

    app.get('/noticias', function(req,res){
    res.render("noticias/noticias")
    });
};
