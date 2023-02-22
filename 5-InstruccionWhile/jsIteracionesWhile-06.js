// Angel Farina.

/*Al presionar el botón pedir 5 números e 
informar la suma acumulada y el promedio.  */

function mostrar()
{
	var contador;
	var acumulador;

	contador=0;
	acumulador=0;
	
	while (contador<5){
		contador++;
		acumulador=acumulador+parseInt(prompt('Ingrese un numero'));
	}
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}