//se solicita la longitud del array al usuario y los limites
let long = prompt("Por favor, introduce el tamaño del array que desees crear:");
long = parseInt(long);
let minNum = prompt("Por favor, introduce el valor mínimo de aleatoriedad: ");
minNum = parseInt(minNum);
let maxNum = prompt("Por favor, introduce el valor máximo de aleatoriedad: ");
maxNum = parseInt(maxNum);

function fillArray(min, max, long) {	
	let i = 0;
	let tmp = 0;
	while(i<long) {
		tmp = genNumAleatorio(min, max);
		if(checkPrimo(tmp)) {
            console.log(tmp);
			nums[i] = tmp;
			i++;
		}
	}
}
	
function checkPrimo(numero) {
	let checked = true;
	let i = numero-1;	
    while(checked && (i>1)) {
        if((numero%i)==0) {
            checked = false;
        }
        i--;
    }
	return checked;
}
	
function genNumAleatorio(min, max) {
	return parseInt(Math.random()*(max-min+1)+min);
}

if(isNaN(long) || isNaN(maxNum) || isNaN(minNum) || (minNum>maxNum)){
    alert("Uno de los valores introducidos no es el apropiado!");
}else{
    nums = [];
    fillArray(minNum,maxNum,long);
    let maxPrimo  = Math.max(...nums);
    alert("El numero primo mas alto es: "+maxPrimo);
}