//Exportar modulos
module.exports = function(app){
    
    app.get('/', function(req,res){ //caminho (no caso raiz)/callback
        res.render("home/index");
    });
};

