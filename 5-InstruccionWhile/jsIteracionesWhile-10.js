/*
Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
1-Suma de los negativos. 2-Suma de los positivos. 3-Cantidad de positivos. 
4-Cantidad de negativos. 5-Cantidad de ceros. 6-Cantidad de números pares. 
7-Promedio de positivos. 8-Promedios de negativos. 
9-Diferencia entre positivos y negativos, (positvos-negativos). 
*/

// Angel Farina.

function mostrar()
{
	//declarar contadores y variables 
	var numIn;
	var continuar;
	var negativos;
	var positivos;
	var positivosCant;
	var negativosCant;
	var cerosCant;
	var pares;
	var contador;

	continuar = true;

	while(continuar)
	{
		contador++;
		numIn = parseInt(prompt('ingrese un numero'));

		if(numIn)
		
		continuar = confirm('quiere continuar?');
	}

	document.write();
}