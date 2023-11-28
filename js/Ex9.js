//declaracion de constantes
const MIN = 0;
const MAX = 9;

//se solicita la longitud del array al usuario
let long = prompt("Por favor, introduce el tamaño del array que desees crear:");
long = parseInt(long);

function mostrarArray(array) {   
    let totalCant = 0;
    for(let i = 0; i<array.length;i++) {
        alert("En la posicion "+(i+1)+" del array, el valor es: "+nums[i]);
        totalCant += nums[i];
    }
    alert("La suma total de los valores que contiene el array es: "+totalCant);
}

function llenarArray() {  
    for(let i = 0; i<long;i++) {
        nums[i] = genNumAleatorio(MIN,MAX);
    }
}

function genNumAleatorio(minVal, maxVal) {
    return parseInt(Math.random()*(maxVal-minVal+1)+minVal);
}

if(isNaN(long)){
    alert("El valor introducido para la longitud del array no es valido!");
}else{
    nums = [];
    llenarArray();
    mostrarArray(nums);
}