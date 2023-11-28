//se solicita el nombre al usuario
let num  = prompt("Por favor, introduce un numero entero:");
num = parseInt(num);		

function binario(numero){
    let result = [];
    let i = 0;
    while (numero > 0) {
        result[i] = (numero % 2);
        numero = Math.floor(numero / 2);
        i++;
    }

    result.reverse();
    return result.join('');
}

if(isNaN(num)){
    alert("El valor introducido no es valido!");
}else{
    alert("El valor binario del numero introducido es "+binario(num));
}