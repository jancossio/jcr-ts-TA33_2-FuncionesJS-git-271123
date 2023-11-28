//variables y constantes
const PI = 3.14;
let area = 0;

//Declaracion de funciones
function circulo() {
    let rad = prompt("Introduce el radio del circulo:");
    rad = parseFloat(rad);
    area = (Math.pow(rad, 2)*PI);
}

function triangulo() {
    let bas = prompt("Introduce la base del triangulo:");
    bas = parseFloat(bas);
    let alt = prompt("Introduce la altura del triangulo:");
    alt = parseFloat(alt);
    area = ((bas*alt)/2)
}

function cuadrado(){
    let lad = prompt("Introduce el lado del cuadrado:");
    lad = parseFloat(lad);
    area = (Math.pow(lad, 2));
}

function calcularArea(figura){
    switch(figura){
        case "circulo":
            circulo();
            break;
        case "triangulo":
            triangulo();
            break;
        case "cuadrado":
            cuadrado();
            break;
        default:
            alert("La figura introducida no se reconoce");
    }
    if(isNaN(area)){
        alert("Uno de los parametros introducidos era incorrecto");
    }else{
        alert("El area del "+figura+" es: "+area);
    }
}

//Solicitud de figura al usuario
let figura = prompt("Introduce la figura de la que quieras calcular su área (circulo/triangulo/cuadrado):");
figura = figura.toLowerCase();
calcularArea(figura);