/*Variables*/
//*use strict //Esto para que el lenguaje sea más sensible

//Variables tipo cadena
var pais = "<h1>Paraguay</h1>";
var continente = '<h1>'+'America'+'</h1>';
//Concatenar
var p_c= pais +'-'+continente;

console.log(p_c);
document.write(pais+"<hr>");
document.write(continente);

//Modo Estricto
//'use strict'
//Let permite definir variables limintando su alcance
//var permite definir variables y utilizarlas globalmente

let varlet = "Esto es una variable Let";
document.write="<br>"+varlet;

//6- Es una variable que no puede cambiar de valor
// y se define con la palabra const

const web="https://www.utic.edu.py";
console.log(web);
const constweb="https://www.uticvirtual.edu.py/login/index.php";
constweb="Otra página";
console.log(constweb);