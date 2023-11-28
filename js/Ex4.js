//se solicita el numero al usuario
let num  = prompt("Por favor, introduce un numero entero:");
num = parseInt(num);

function factorial(numero) {
    let res = 1;

    for(let i = numero; i>1; i--) {
        res *= i;
    }
    return res;
}

if(isNaN(num)){
    alert("El valor introducido para el calculo no es correcto!")
}else{
    num = factorial(num);
    alert("El valor factorial del numero introducido es: "+num)
}