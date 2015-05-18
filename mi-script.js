// EJERCICIO MATEMÁTICA

var numeroBase = Math.floor(Math.random() * 31) + 1;
var operando;

alert(numeroBase);

for (var i=1; i<=5; i++) {	
	switch (Math.floor(Math.random()*3)){
	  case 0: 
	  	operando = Math.floor(Math.random() * 31) + 1;
	  	console.log(numeroBase);
	  	numeroBase += operando;	  	
	   	alert("+" + operando); 
	   	break;     
	  case 1: 
	  	operando = Math.floor(Math.random() * 13) + 2;
	  	console.log(numeroBase);
	  	numeroBase -= operando;
	   	alert("-" + operando); 
	   	break;     
	  case 2: 
	    operando = Math.floor(Math.random() * 4) + 2;
	  	console.log(numeroBase);
	  	numeroBase *= operando;
	   	alert("*" + operando); 
	   	break; 
	}
}

console.log(numeroBase);
var operacionResuelta = prompt("¿Cuál es el resultado de la operación?");

if (operacionResuelta == numeroBase) {
	alert("Acertaste!!!");	
} else{
	alert("No acertaste!!!");
}