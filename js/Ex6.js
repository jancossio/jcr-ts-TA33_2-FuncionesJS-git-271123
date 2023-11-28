//se solicita el nombre al usuario
let num  = prompt("Por favor, introduce un numero entero:");
num = parseInt(num);

//funcion que calcula el numero de cifras
function numeroCifras(numero) {
let result = 0;
    do {
        numero = numero / 10;
        result++;
        console.log(numero);
    }while(numero >= 1);
return result;
}

if(isNaN(num)){
    alert("El valor introducido no es valido!");
}else{
    num = numeroCifras(num);
    alert("La cantidad de cifras del numero introducido es "+num);
}