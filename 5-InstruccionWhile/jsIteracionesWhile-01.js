// Angel Farina.

// BLACK JACK
function mostrar(){
	var carta;
	var acumulador;
	var maximo;

	maximo = 21;
	acumulador = 0;

	while(acumulador < maximo && confirm('Quiere continuar?')){
		carta = parseInt(prompt('ingrese un numero entre 1 y 12'));

		while(carta < 1 || carta > 12){
			carta = parseInt(prompt('No es el valor indicado, ingrese un numero entre 1 y 12'));
		}
		acumulador = acumulador+carta;
		console.log(acumulador);
	}
	console.log(`sumo ${acumulador}`);
}

// NORMAL
/*
function mostrar()
{
	var num;
	
	num = 1;

	while (num < 11)
	{
		alert(num);
		num++;
	}
}*/