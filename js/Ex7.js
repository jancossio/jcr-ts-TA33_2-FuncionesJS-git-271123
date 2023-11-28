//declaracion de constantes
const LIB = 0.86;
const DOL = 1.28611;
const YEN = 129.852;

//Se solicita al usuario que introduzca la figura que quiere calcular
let valorE = prompt("Introduce el valor en euros que quieras convertir:");
valorE = parseFloat(valorE);
    
let moneda = prompt("Introduce la moneda a la que quieras convertir tu cantidad (Libra/Dolar/Yen):");
moneda = moneda.toLowerCase();

//Declaracion de funciones
function mostrarCambio(precio, cambio, moneda) {
    alert("La cantidad de"+precio+"€ traducida, a "+moneda+" será: "+(precio*cambio).toFixed(2));
}

function calcularCambio(cantidad, moneda) {
    if(isNaN(cantidad) || cantidad<0){
        alert("El valor introducido no es correcto");
    }else{
        switch(moneda){
            case "libra":
                mostrarCambio(cantidad, LIB, moneda)
                break;
            case "dolar":
                mostrarCambio(cantidad, DOL, moneda)
                break;
            case "yen":
                mostrarCambio(cantidad, YEN, moneda)
                break;
            default:
                alert("La moneda introducida no se reconoce");
        }
    }
}
    
calcularCambio(valorE, moneda);