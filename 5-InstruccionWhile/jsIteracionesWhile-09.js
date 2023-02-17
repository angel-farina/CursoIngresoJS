// Angel Farina.

function mostrar()
{
	var numero;
	var nummax;
	var nummin;
	var continuar;
	
	numero;
	nummax = Infinity;
	nummin = -Infinity;
	continuar = true;
	//Math.max();
	//Math.min();

	while(continuar){
		numero = numero + parseInt(prompt(''));
		continuar = confirm('Quiere ingresar mas numeros?');
	}

	txtIdMaximo.value=nummax;
	txtIdMinimmo.value=nummin;

	console.log(`el numero maximo ingresado fue ${Math.max(nummax)}`
	`el numero minimo ingresado fue ${Math.min(nummin)}`)
}