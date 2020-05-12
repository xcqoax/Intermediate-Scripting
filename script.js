/*
Ejercicio 1

Sum All Number In a Range (Sumar los numero en un rango)
Mediante la función sumAll se pasa con argumento un arreglo y se debe sumar los numero que se encuentra
entre los numeros del arreglo

*/

function sumAll(arr) {

    /* Primero se debe definir el mayor y el menor de los elementos que contiene el array
      mediante la función Math.max(), se asigna a una variable que la contendra, lo mismo con
      el minimo
    */
    let nMax=Math.max(arr[0],arr[1]),
        nMin=Math.min(arr[0],arr[1]),
        ntotal = 0; // es la variable que contendra la sumatoria
      while(nMin <= nMax){ // Mientras el valor minimo sea menor al valor mayor se ejecutara el codigo
        ntotal += nMin; // se asigna el valor de minimo a la variable total
         nMin++; // el valor minimo se incremente en 1 hasta que la condición sea cumplida
      }
    return ntotal; // se retorna el valor total al momento de que sale del ciclo.
    }
    
    sumAll([5, 10]);

    /*
Diff two Arrays ***********************************************************************************************************

Compara dos arreglos y devuelve una matriz con cualquier elemento que solo se encuentre en una de las dos matrices per no 
en ambas

*/


function diffArray(arr1, arr2) {
  var newArr = [];

// se debe verificar la existencia de todos los elementos de un array en el otro y vicerversa y por medio de la función no es posible
//debido a que utiliza los parametros en ambos "sentidos"

buscar(arr1, arr2); 
buscar(arr2, arr1);

function buscar(primero,segundo){
    for(let i = 0; i < primero.length; i++){ // con el ciclo se recorrera todos los elementos del primer array
// se checan si existe cada uno de los elementos del primer array en el segundo mediante la función indexOF, funcionando de la sig manera
// [array en donde buscar].indexOf(elemento a buscar) --- si el elemento no existe devolver un -1..
    if(segundo.indexOf(primero[i]) === -1){  // si la condición anterio se cumple
      newArr.push(primero[i]); // se añade al array nuevo.
    }
  }
}

 return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Seek and Destroy *********************************************************************************************************

function destroyer(arr) {
  
  let nArray = Array.prototype.slice.call(arguments);
 
  for(let i =0; i < arr.length; i++){
    for(let j = 0; j < nArray.length; j++){
      if(arr[i] === nArray[j]){
        delete arr[i];
      }
    }
  }
return arr.filter(Boolean)
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//***************************************************************************************************************************
/*
Hacer que una función que mire atravez de un array de objetos (primer argumento) y regrese un arrayt con todos los objetos
que concuerdan con el nombre y valor  del segundo argumento. el nombre y valor deben estar presente en la collección

*/


function whatIsInAName(collection, source) {
// con el metodo object.keys(obj) ... obtenemos un array conformado por la propiedades del objeto
let clave = Object.keys(source); 

/**
 * Básicametno lo que se hace es filtrar aquellos objetos que no cumplan con la condición dada: nombre y valor coincidan con el valor
 * dado. * la funcion filter tiene una función de callback. recorriendo el objeto por completo
 */
 return collection.filter(function (obj){
  for(let i = 0; i < clave.length; i++){ //recorremos en primera intancia el o los propiedades del objeto a buscar
    /**
     * mediante el if estamos comparando las condiciones indicadas, 
     * si(el obj no tiene la propiedad de la clave o si el valor de la clave del obj es distinto al valor de la clave del arg) 
     *  se regresa false
     */
    if(!obj.hasOwnProperty(clave[i]) || obj[clave[i]] !== source[clave[i]]){ 
      return false;
    }
  }
 return true // retioornara verdadero los obj que no cumple con la condición  dad por el if
})

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Spinal Tap

function spinalCase(str) {
  
  let myRegex = /[^A-Za-z0-9]/g; 

  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
 
  return str.replace(myRegex,'-').toLowerCase();
}

spinalCase('This Is Spinal Tap');

/////////////////////////////////////////////////////////////////////

//cambiarlo con if else esrtudiar los codigos

function translatePigLatin(str) {

  let myRegex = /^([aeiou])/
  
return str
      .replace(/^[aeiou]\w*/,"$&way")
      .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");

      
} 

translatePigLatin("camarillo");



////////////////////////////////////////////////////////////////////////
// Search ans Replace 

function myReplace(str, before, after) {

  //Con ayuda de Regex se busca el patro de la primera letra  mayuscula del argumento before
  //se comprueba si la primera letra de before es mayuscula
  if(/^[A-Z]/.test(before)){
  
   // tomamos el primer indice de after y lo volvemos mayuscula y lo concatenamos con el resto de la cadena 
   after = after[0].toUpperCase()+after.slice (1)
  return str.replace(before, after) // se realiza el remmplazo de argumento before por el de newAfter (ya con la primera letra en mayuscula)
  
  }  // en caso de que before no tenga mayuscula se ejecuta el cambio de la palabra
    return str.replace(before, after)
  
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped");
 
///////////////////////////////////////////////////////////////////////////////////////////
// Pares DNA


function pairElement(str) {
  str = str.split('');
  let newArray =[];
  
  for(let i = 0; i < str.length; i++){
      if(str[i] == "A"){
        newArray.push(["A","T"]);
      } else if(str[i] == "T"){
        newArray.push(["T","A"]);
      } else if(str[i] == "C"){
        newArray.push(["C","G"]);
      }  else if(str[i] == "G"){
        newArray.push(["G","C"]);
      }
  }
  return (newArray)
}

pairElement("ATT");

///////////////////////////////////////////////////////////////////////////////////////////

/**
 * Buscar la letra que falta en la secuencia de la cadena, obteniedno el codigo ASCII de la letra inicial
 * asi como de la letra final. el metodo String.fromCharCode(inicio) convierte el codigo ASCII en letra y se
 * busca el indice en la cadena, si indexOf devuelve -1 eso quiere decir que la letra en cuestión no existe y 
 * la regresa.* 
 * 
 * 
 * @param {string}
 * @return {string}
 */ 
function fearNotLetter(str) {
  let inicio = str.charCodeAt(0);
  let final = str.charCodeAt(str.length - 1)
  
    for(inicio; inicio <= final; i++){
      if(str.indexOf(String.fromCharCode(inicio)) < 0){
        return (String.fromCharCode(inicio))
      }
    }
  }
  
  fearNotLetter("abce");

  //////////////////////////////////////////////////////////////////////////////////////////

  /**
   * Unión clasificada (Sorted Union)
   * 
   * recibe un array conformado por arrays, se recibe un arg el cual mediante el uso de slice.call(arguments) podemos separar los
   * argumentos que lo conforman. Posteior procedemos a recorrer el array que contiene la sepación de los argumentos y ptambien 
   * recorrer los indices de cada array, al recorrer cada elementos de los array buscamos si se encuentran en el primer array agumentos
   * y en caso de que no esten los ingresara al newArray 
   * 
   * @param {array}
   * @return {array}
   */
  
  function uniteUnique(arr) {
    let newArray = arr;
    let array = Array.prototype.slice.call(arguments)
    
    for(let i = 1; i < array.length; i++){
      for(let j = 0; j < array[i].length; j++){
        if(arr.indexOf(array[i][j]) < 0){
          newArray.push(array[i][j]);
        }
      }
    }
    return (newArray)
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/**
 * Suma  de numero impares serie figonacci (Sum All Odd Fibonacci Numbers)
 * 
 * Se la suma de los numero sfigonacci que sean impares, sumara los impares que sean menores al num de entrada. 
 * El primer punto es obtener los numeros figonacci, mediante un ciclo For se suma un numero(anterior) junto con otro 
 * numero(actual) y se asignan a una variable, el numero anterior tomara el valor del numero actual y el numero actual tomara
 * el valor de la suma, se valida si el numero sumado es par o impar., si es impar se suma en otra varuiable que almacenara
 * solamente los impares
 * 
 * 
 * @param {number}
 * @returns {number}
 * 
 * 
 */


  function sumFibs(num) {
    let numeroActual=0,
        numeroAnterior=1,
        sumaTotal=0,
        numeroFigonacci=0;
  
    for(let i = 0; i < num ; i ++){
              sumaTotal = numeroAnterior + numeroActual;
              numeroAnterior = numeroActual;
              numeroActual = sumaTotal;
  
          if(sumaTotal % 2 > 0 && sumaTotal <= num){
               numeroFigonacci += sumaTotal;
  
             }
  
          }      
    return numeroFigonacci
  }
  
  sumFibs(4);

  //////////////////////////////////////////////////////////////////////////////////

/**
 * Sum All primes
 * 
 * Sumar los numero primos que sean menores o iguales al argumento.
 * 
 * 
 */
function sumPrimes(num) {
  let sumaPrimo = 0,
    j = 2; // se inicio desde 2 dado que el 1 digamos es un numero ya considerado como primo.

while( j <= num){
    if(primo(j)){
       sumaPrimo += j; 
    }
    j++;
  }
  return sumaPrimo
}
sumPrimes(10);

function primo(numero){
  let contadorDiv=0;
    for(let i = 1; i <= numero; i++){
        if(numero % i == 0){
          contadorDiv += 1;
        }
      }

  if(contadorDiv <= 2){
      return numero 
      } 
  }
/**
 * Smallest Common Multiple
 * 
 * Encontrar el MCM de un rango determinado por un array, tomando en consideración que solo nos entregan los extremos del array.
 * buscar el MCM por medio de la muiltiplicación de los numero mayores del arreglo, al multiplicarlos se recorre al arreglo para
 * si es divisible por el sig item, en caso de que no algun item no cumpla la condición el contadora de las vuelta se incrementa
 * asi hasta encontrar un numero que sea divisible entre todos los elementos del array. 
 * 
 */
function smallestCommons(arr) {
  let valMin = Math.min(arr[0],arr[1]),
      valMax = Math.max(arr[0],arr[1]),
      newArray = [],
      vuelta = 1,
      n,
      mcm=0;

 arrayCompleto(valMax,valMin)

function arrayCompleto(val2, val1){

  for(let i = val2; i >= val1; i--){
   newArray.push(i);
    }
  }

  do {
    mcm = newArray[0] * vuelta * newArray[1];
    for (n = 2; n < newArray.length; n++) {
      if (mcm % newArray[n] !== 0) {
        break;
      }
    }

    vuelta++;
  } while (n !== newArray.length);
  return mcm;
}

smallestCommons([1,5]);

/**
 * Drop iy
 * 
 * Dado un arreglo y una funció para parametros, se debe recorrer el arr hasta que el el valor retornado por la función (parametro)
 * sea verdadero, posterior a ello los elementos no cumplan la condición de la función deberanm ser eliminados de la función 
 * 
 */

function dropElements(arr, func) {

  let tamano = arr.length;
  for(let i=0; i < tamano; i++){
    if(func(arr[0])){
      break
    } else{
      arr.shift()
    }
  }
    return arr
  }
  
  dropElements([1,2,3,9,2], function(n) {return n > 2; });