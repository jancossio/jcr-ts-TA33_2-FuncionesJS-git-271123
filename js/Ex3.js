//se le solicita al usuario el numero
let num = prompt("Por favor, introduce un numero entero:");
num = parseInt(num);

//funcion comprueba si es primo
function comprobarPrimo(numero) {
    let found = false;
    let i = numero-1;
    let msg = '';
    while(!found && (i>1)) {
        if((numero%i)==0) {
            found = true;
        }
        i--;
    }
    
    if(!found) {
        msg = "El numero introducido es primo.";
    }else {
        msg = "El numero introducido no es primo.";
    }
    return msg;
}

if(isNaN(num)){
    alert("El valor introducido no sirve!");
}else{
    alert(comprobarPrimo(num));
}