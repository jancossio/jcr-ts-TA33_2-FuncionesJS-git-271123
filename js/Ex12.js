//declaracion de constantes
const MIN_VAL = 1;
const MAX_VAL = 300;

//se solicita el nombre al usuario
let long = prompt("Por favor, introduce el tamaño del array: ");
long = parseInt(long);

let digito = prompt("Introduce el ultimo dígito del final de cada número: ");
digito = parseInt(digito);

function comprobarDigitoArray(array, numero) {
    return array.filter((valor) => valor%10 === numero);
}
	
function llenarArray() {
    let vals = [];
	for(let i = 0; i<long; i++) {
		vals[i] = genNumAleatorio(MIN_VAL,MAX_VAL);
	}
	return vals;	
}
	
function genNumAleatorio(min, max) {
    return parseInt(Math.random()*(max-min+1)+min);
}

//funcion principal
if(isNaN(long)){
    alert("El valor introducido para la longitud es incorrecto!");
}else{
    let nums = llenarArray();
    let numsFiltrado = comprobarDigitoArray(nums, digito);
    console.log("Array con valores aleatorios: "+nums);
    console.log("Array filtrado por el último dígito: "+numsFiltrado);
}