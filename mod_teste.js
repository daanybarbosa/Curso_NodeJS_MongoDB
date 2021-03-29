/* ****** Exemplo 1 *************
var msg = "Este modulo contem apenas uma string";

//informar o que sera exportado pelo o modulo.
module.exports = msg; 
*/

/* ********* Exemplo 2 ************** */
module.exports = function(){
    var msg = "Este modulo contem apenas uma string";
    return msg;
}