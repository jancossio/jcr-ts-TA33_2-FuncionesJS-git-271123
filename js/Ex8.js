//declaracion de funciones
function mostrarArray() {	
	for(let i = 0; i<numeros.length;i++) {
		alert("El valor numerico de la posicion "+(i+1)+" del array es: "+numeros[i]);
	}
}
	
function llenarArray() {
    let tmp = 0;
    let i = 0;
	while(i<10) {
		tmp = prompt("Introduce un valor numerico para la posicion "+(i+1)+" :");
		tmp = parseFloat(tmp);
		console.log(tmp);
        if(isNaN(tmp)){
            alert("El valor introducido no se acepta como numero");
        }else{
            numeros[i]= tmp;
            i++;
        }
	}	
}

let numeros = [];
llenarArray();
console.log("Los valores del array son:"+numeros);