let cantidad = prompt("Introduce la cantidad de numeros aleatorios que desees generar:");
cantidad = parseInt(cantidad);
let minVal = prompt("Introduce el valor minimo que los numeros puedan alcanzar: ");
minVal = parseInt(minVal);
let maxVal = prompt("Introduce el valor maximo que los numeros puedan alcanzar: ");
maxVal = parseInt(maxVal);

function numeroAleatorio(minimo, maximo) {
    return parseInt((Math.random()*(maxVal-minVal+1))+minimo);
}

if(isNaN(cantidad) || isNaN(minVal) || isNaN(maxVal)){
	alert("El valor introducido no se reconoce");
}else{
	for(let i = 0; i<cantidad; i++) {
		console.log("El numero generado en la posicion "+(i+1)+" es: "+numeroAleatorio(minVal, maxVal));
	}
}