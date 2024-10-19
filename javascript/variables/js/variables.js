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
