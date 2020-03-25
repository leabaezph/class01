console.log("-----------------------------")

var numerico
numerico= prompt ("Escriba el numero a multiplicar: ","");
console.log("Imprimiendo la tabla del: "+numerico);
var resultado
resultado=numerico*1;
console.log(+numerico+" x 1 = "+resultado);
resultado=numerico*2;
console.log(+numerico+" x 2 = "+resultado);
resultado=numerico*3;
console.log(+numerico+" x 3 = "+resultado);
resultado=numerico*4;
console.log(+numerico+" x 4 = "+resultado);
resultado=numerico*5;
console.log(+numerico+" x 5 = "+resultado);
resultado=numerico*6;
console.log(+numerico+" x 6 = "+resultado);
resultado=numerico*7;
console.log(+numerico+" x 7 = "+resultado);
resultado=numerico*8;
console.log(+numerico+" x 8 = "+resultado);
resultado=numerico*9;
console.log(+numerico+" x 9 = "+resultado);
resultado=numerico*10;
console.log(+numerico+" x 10 = "+resultado);

console.log("============================================")
console.log("\n");


///////////////////////////////////////////////////////////
//  Para la actividad b) voy a usar el while y el for   //
//  Para evitar tener tantas lineas de codigo
//////////////////////////////////////////////////////////

var pvalor;
var svalor;
var numero=1;
pvalor= prompt("Escriba el primer valor: ","");
svalor= prompt("Escriba el segundo valor: ","");
while (pvalor>svalor) {
  alert("El segundo valor no debe ser menor que el primero!!!");
  svalor= prompt("Escriba nuevamente el segundo valor: ","");
}
while (pvalor<=svalor) {
  console.log("-----------------------------")
  console.log("Tabla del: "+pvalor);
  console.log("-----------------------------")
  while (numero<=10) {
    var resultados=pvalor*numero;
    console.log(pvalor+" x "+numero+ " = "+resultados);

    numero++;

  }
  console.log("=======================================")
  console.log("\n");
  console.log("\n");
  pvalor++;
  numero=1;
}





// alert("Atencion");
//
// console.log("Atencion")
// var nro01;
// nro01=5;
// console.log(nro01)
// var nro02="hola ";
// console.log(nro01);
// nro01=5;
// var resultado;
// resultado=nro01+5;
// console.log(resultado);
// resultado=nro01-5;
// console.log(resultado);
// resultado=nro01*5;
// console.log(resultado);
// resultado=nro01/5;

// console.log(resultado);
// resultado=nro01+ " - "nro02;
// console.log(resultado);


// var numerico=5;
// var cadena="hola";
// var logico=true;


// if (numerico>3)
// {
//   console.log("es verdadero");
// }else {
//   console.log("es falso");
// }

// if (numerico>3 && cadena=="hola")
// {
//   console.log("es verdadero");
// }else {
//   console.log("es falso");
// }

// if (numerico>2 || logico==true)
// {
//   console.log("es verdadero");
// }else {
//   console.log("es falso");
// }

// if (logico)
// {
//   console.log("es verdadero");
// }else {
//   console.log("es falso");
// }

// for (var i=0; i<6; i++)
// {
// console.log(i)
// }

// var i=10;
// while (i<5) {
// console.log(i)
// i++;
// }
