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
	var numIn;
	var continuar;
	var negSum;
	var posSum;
	var posCant;
	var negCant;
	var cerosCant;
	var parCant;
	var posProm;
	var negProm;
	var difPosNeg;

	posCant = 0;
	negCant = 0;
	cerosCant = 0; 
	parCant = 0;
	negSum = 0;
	posSum = 0;
	posProm = 0;
	negProm = 0;
	difPosNeg = 0
	continuar = true;

	while(continuar){
		numIn = parseInt(prompt('ingrese un numero'));

		while(isNaN(numIn)){
            numIn = parseInt(prompt('El valor ingresado no es un número. Ingrese un número válido:'));
        }
		
		if(numIn < 0){
			negCant++;
			negSum += numIn;
			console.log(`numIn: ${numIn}, posSum: ${posSum}, negSum: ${negSum}`);
		}else{
			if(numIn > 0){
				posCant++;
				posSum += numIn;
				console.log(`numIn: ${numIn}, posSum: ${posSum}, negSum: ${negSum}`);
			}else{
				cerosCant++;
				console.log(`numIn: ${numIn}, posSum: ${posSum}, negSum: ${negSum}`);
			}
		}

		if(numIn % 2 == 0){
			parCant++;
		}
		continuar = confirm('quiere continuar?');
	}

	posProm = posSum / posCant;
	negProm = negSum / negCant;
	difPosNeg = posSum + negSum;

	console.log(`
	1-Suma de los negativos: ${negSum}
	2-Suma de los positivos: ${posSum}
	3-Cantidad de positivos: ${posCant}
	4-Cantidad de negativos: ${negCant}
	5-Cantidad de ceros: ${cerosCant} 
	6-Cantidad de números pares: ${parCant}
	7-Promedio de positivos: ${posProm.toFixed(2)}
	8-Promedios de negativos: ${negProm.toFixed(2)}
	9-Diferencia entre positivos y negativos: ${difPosNeg}`);
}