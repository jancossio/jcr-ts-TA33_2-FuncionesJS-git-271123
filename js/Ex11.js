//se solicita la longitud del array al usuario
const MIN_ALEA = 1;
const MAX_ALEA = 100;

let long = prompt("Por favor, introduce el tamaño de ambos arrays:");
	long = parseInt(long);

	function multiplyArrays(array1, array2) {	
		let result = [];
		for(let i = 0; i<long; i++) {
			result[i] = array1[i]*array2[i];
		}
		return result;
	}
	
	function fillArray() {	
		let nums = [];
        for(let i = 0; i<long; i++) {
			nums[i] = genNumAleatorio(MIN_ALEA,MAX_ALEA);
		}
		return nums;	
	}
	
	function genNumAleatorio(min, max) {
        return parseInt(Math.random()*(max-min+1)+min);
    }

    if(isNaN(long)){
        alert("El valor introducido para la longitud no es valido!");
    }else{
        let nums1 = fillArray();		
        let nums2 = nums1;       
        nums2 = fillArray();      
        let nums3 = multiplyArrays(nums1, nums2);    
        console.log("El array 1 es: "+nums1); 
        console.log("El array 2 es: "+nums2);
        console.log("El array 3 es: "+nums3);
    }